import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Configure pdfjs worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '3.11.174'}/pdf.worker.min.js`;

/**
 * Parses user input page ranges like "1-5, 8, 11-13" or "all"
 */
export function parsePageRange(rangeStr, totalPages) {
  if (!rangeStr || rangeStr.trim().toLowerCase() === 'all') {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set();
  const parts = rangeStr.split(',');

  for (let part of parts) {
    part = part.trim();
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(n => parseInt(n.trim(), 10));
      if (!isNaN(start) && !isNaN(end)) {
        const min = Math.max(1, Math.min(start, end));
        const max = Math.min(totalPages, Math.max(start, end));
        for (let i = min; i <= max; i++) {
          pages.add(i);
        }
      }
    } else {
      const pageNum = parseInt(part, 10);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        pages.add(pageNum);
      }
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

/**
 * Converts PDF pages into JPG, PNG or WEBP Data URLs
 */
export async function convertPdfToImages(file, options = {}) {
  const { format = 'jpg', pageRange = 'all', scale = 1.5, onProgress } = options;
  const arrayBuffer = await file.arrayBuffer();
  
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const totalPages = pdf.numPages;

  const targetPages = parsePageRange(pageRange, totalPages);
  const results = [];

  for (let i = 0; i < targetPages.length; i++) {
    const pageNum = targetPages[i];
    if (onProgress) {
      onProgress(Math.round(((i + 1) / targetPages.length) * 100));
    }

    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    let mimeType = 'image/jpeg';
    let ext = 'jpg';
    if (format.toLowerCase() === 'png') {
      mimeType = 'image/png';
      ext = 'png';
    } else if (format.toLowerCase() === 'webp') {
      mimeType = 'image/webp';
      ext = 'webp';
    }

    const dataUrl = canvas.toDataURL(mimeType, 0.92);

    results.push({
      pageNum,
      name: `${pageNum}.${ext}`,
      dataUrl,
      width: viewport.width,
      height: viewport.height
    });
  }

  return { totalPages, images: results };
}

/**
 * Bundles extracted image data URLs into a ZIP archive and triggers browser download
 */
export async function downloadImagesZip(images, zipFileName = 'pdf_converted_images.zip') {
  const zip = new JSZip();

  images.forEach(img => {
    const base64Data = img.dataUrl.split(',')[1];
    zip.file(img.name, base64Data, { base64: true });
  });

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, zipFileName);
}

/**
 * Merges multiple PDF files into one PDF document download
 */
export async function mergePdfFiles(files) {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach(page => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, 'merged_document.pdf');
}

/**
 * Extracts specified pages into a new PDF document download
 */
export async function extractPdfPages(file, pageRangeStr) {
  const arrayBuffer = await file.arrayBuffer();
  const srcPdf = await PDFDocument.load(arrayBuffer);
  const totalPages = srcPdf.getPageCount();

  const pageNumbers = parsePageRange(pageRangeStr, totalPages);
  const newPdf = await PDFDocument.create();

  const pageIndices = pageNumbers.map(n => n - 1);
  const copiedPages = await newPdf.copyPages(srcPdf, pageIndices);
  copiedPages.forEach(page => newPdf.addPage(page));

  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, `extracted_pages_${file.name}`);
}

/**
 * Converts a single image file to a PDF Blob
 */
async function imageToPdfBlob(file) {
  const pdfDoc = await PDFDocument.create();
  const arrayBuffer = await file.arrayBuffer();
  let image;
  if (file.type.includes('png')) {
    image = await pdfDoc.embedPng(arrayBuffer);
  } else {
    image = await pdfDoc.embedJpg(arrayBuffer);
  }
  const page = pdfDoc.addPage([image.width, image.height]);
  page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

/**
 * Converts JPG/PNG/WEBP images into PDF(s).
 * - Single image  → direct PDF download
 * - Multiple images (bulk) → ZIP containing one PDF per image
 */
export async function convertImagesToPdf(imageFiles) {
  if (imageFiles.length === 1) {
    // Single image → direct PDF download
    const blob = await imageToPdfBlob(imageFiles[0]);
    const baseName = imageFiles[0].name.replace(/\.[^.]+$/, '');
    saveAs(blob, `${baseName}.pdf`);
  } else {
    // Bulk → one PDF per image, all bundled in a ZIP
    const zip = new JSZip();
    for (const file of imageFiles) {
      const blob = await imageToPdfBlob(file);
      const baseName = file.name.replace(/\.[^.]+$/, '');
      const arrayBuf = await blob.arrayBuffer();
      zip.file(`${baseName}.pdf`, arrayBuf);
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'images_converted.zip');
  }
}

/**
 * Rotates all or selected PDF pages by degrees (90, 180, 270)
 */
export async function rotatePdf(file, rotationDegrees = 90) {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();

  pages.forEach(page => {
    const currentRotation = page.getRotation().angle;
    page.setRotation(degrees((currentRotation + rotationDegrees) % 360));
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, `rotated_${file.name}`);
}

/**
 * Extracts raw text content from PDF pages
 */
export async function extractTextFromPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += `--- Page ${i} ---\n` + strings.join(' ') + '\n\n';
  }

  const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, `${file.name.replace('.pdf', '')}_extracted_text.txt`);
  return fullText;
}

/**
 * Adds text watermark to PDF pages
 */
export async function watermarkPdf(file, watermarkText = 'CONFIDENTIAL') {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const pages = pdfDoc.getPages();

  pages.forEach(page => {
    const { width, height } = page.getSize();
    page.drawText(watermarkText, {
      x: width / 4,
      y: height / 2,
      size: 48,
      font,
      color: rgb(0.75, 0.75, 0.75),
      opacity: 0.4,
      rotate: degrees(45),
    });
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, `watermarked_${file.name}`);
}

/**
 * Adds page numbering to bottom footer of PDF pages
 */
export async function addPageNumbersPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const total = pages.length;

  pages.forEach((page, index) => {
    const { width } = page.getSize();
    const text = `Page ${index + 1} of ${total}`;
    page.drawText(text, {
      x: width / 2 - 30,
      y: 20,
      size: 10,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, `numbered_${file.name}`);
}

/**
 * Reads PDF metadata and total page count
 */
export async function getPdfDetails(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  return {
    name: file.name,
    sizeBytes: file.size,
    pageCount: pdfDoc.getPageCount(),
    title: pdfDoc.getTitle() || file.name,
    author: pdfDoc.getAuthor() || 'Unknown',
    creator: pdfDoc.getCreator() || 'PDF Tools',
  };
}
