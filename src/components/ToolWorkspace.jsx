import React, { useState, useRef, useEffect } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Download, 
  Eye, 
  RefreshCw, 
  X, 
  Zap, 
  Maximize2,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { 
  convertPdfToImages, 
  downloadImagesZip, 
  mergePdfFiles, 
  extractPdfPages, 
  convertImagesToPdf,
  rotatePdf,
  extractTextFromPdf,
  watermarkPdf,
  addPageNumbersPdf,
  getPdfDetails 
} from '../utils/pdfEngine';

export default function ToolWorkspace({ activeTool, theme }) {
  const isDark = theme === 'dark';
  const [file, setFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [outputFormat, setOutputFormat] = useState(activeTool.format || 'jpg');
  const [pageSelection, setPageSelection] = useState('all');
  const [customRange, setCustomRange] = useState('1-5');
  const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL');
  const [rotationAngle, setRotationAngle] = useState(90);
  const [extractedText, setExtractedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedImages, setConvertedImages] = useState([]);
  const [pdfMeta, setPdfMeta] = useState(null);
  const [previewModalImg, setPreviewModalImg] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (activeTool.format) {
      setOutputFormat(activeTool.format);
    }
    setErrorMsg('');
  }, [activeTool]);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (activeTool.id === 'jpg-to-pdf') {
      const filesArr = Array.from(e.target.files);
      setMultipleFiles(filesArr);
      setFile(filesArr[0]);
      return;
    }

    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.endsWith('.pdf')) {
      setErrorMsg('Please upload a valid PDF file.');
      return;
    }

    setErrorMsg('');
    setFile(selectedFile);
    setIsProcessing(true);
    setProgress(20);

    try {
      const meta = await getPdfDetails(selectedFile);
      setPdfMeta(meta);

      const { images } = await convertPdfToImages(selectedFile, {
        format: outputFormat,
        pageRange: 'all',
        onProgress: (p) => setProgress(p)
      });
      setConvertedImages(images);
    } catch (err) {
      console.error('Error loading PDF:', err);
      setErrorMsg('Failed to process PDF file.');
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: [e.dataTransfer.files[0]] } });
    }
  };

  const handleProcessAction = async () => {
    if (!file && multipleFiles.length === 0) {
      setErrorMsg('Please select a file first.');
      return;
    }

    setIsProcessing(true);
    setErrorMsg('');
    setProgress(10);

    try {
      if (activeTool.id === 'jpg-to-pdf') {
        await convertImagesToPdf(multipleFiles);
      } else if (activeTool.id === 'merge-pdf') {
        if (multipleFiles.length < 2) {
          setErrorMsg('Please select at least 2 PDF files to merge.');
          setIsProcessing(false);
          return;
        }
        await mergePdfFiles(multipleFiles);
      } else if (activeTool.id === 'extract-pages' || activeTool.id === 'split-pdf') {
        const range = pageSelection === 'custom' ? customRange : 'all';
        await extractPdfPages(file, range);
      } else if (activeTool.id === 'rotate-pdf') {
        await rotatePdf(file, rotationAngle);
      } else if (activeTool.id === 'pdf-to-text') {
        const text = await extractTextFromPdf(file);
        setExtractedText(text);
      } else if (activeTool.id === 'watermark-pdf') {
        await watermarkPdf(file, watermarkText);
      } else if (activeTool.id === 'page-numbers') {
        await addPageNumbersPdf(file);
      } else {
        const range = pageSelection === 'custom' ? customRange : (pageSelection === 'current' ? '1' : 'all');
        const { images } = await convertPdfToImages(file, {
          format: outputFormat,
          pageRange: range,
          onProgress: (p) => setProgress(p)
        });
        setConvertedImages(images);
      }
    } catch (err) {
      console.error('Error processing:', err);
      setErrorMsg('An error occurred during processing.');
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const handleDownloadZip = async () => {
    if (convertedImages.length === 0) return;
    await downloadImagesZip(convertedImages, `${file ? file.name.replace('.pdf', '') : 'converted'}_images.zip`);
  };

  return (
    <section id="workspace-section" className={`py-10 transition-colors duration-200 border-t ${
      isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tool Header */}
        <div className={`flex items-center gap-4 mb-8 p-4 rounded-2xl border shadow-sm ${
          isDark 
            ? 'bg-[#131b2e] border-slate-800' 
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-600 p-2.5 text-white flex items-center justify-center shadow-lg">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {activeTool.title}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-500 font-semibold border border-rose-500/30">
                Active Tool
              </span>
            </h2>
            <p className={`text-sm mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {activeTool.description}
            </p>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Control Panel */}
          <div className={`lg:col-span-6 border rounded-2xl p-6 shadow-xl space-y-6 ${
            isDark 
              ? 'bg-[#131b2e] border-slate-800' 
              : 'bg-white border-slate-200'
          }`}>
            
            {/* Step 1: Upload */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Upload PDF File</h3>
              </div>

              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 group relative ${
                  isDark 
                    ? 'border-indigo-500/40 hover:border-indigo-500 bg-slate-900/50 hover:bg-indigo-950/20' 
                    : 'border-indigo-300 hover:border-indigo-600 bg-indigo-50/40 hover:bg-indigo-50/80'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept={activeTool.id === 'jpg-to-pdf' ? "image/*" : ".pdf,application/pdf"}
                  multiple={activeTool.id === 'merge-pdf' || activeTool.id === 'jpg-to-pdf'}
                  className="hidden"
                />

                <div className="w-12 h-12 rounded-full bg-indigo-600/10 group-hover:bg-indigo-600/20 text-indigo-500 flex items-center justify-center mx-auto mb-3 transition-colors">
                  <UploadCloud className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>

                {file ? (
                  <div className="space-y-1">
                    <p className={`font-semibold text-sm flex items-center justify-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <FileCheck className="w-4 h-4 text-emerald-500" />
                      {file.name}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {(file.size / (1024 * 1024)).toFixed(2)} MB {pdfMeta ? `• ${pdfMeta.pageCount} Pages` : ''}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Drag & drop your {activeTool.id === 'jpg-to-pdf' ? 'Images' : 'PDF'} here
                    </p>
                    <button
                      type="button"
                      className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-colors"
                    >
                      Browse File
                    </button>
                    <p className={`text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Supports PDF files only (Max 200MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/40 rounded-xl text-red-500 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 2: Tool Specific Options */}
            <div className={`space-y-3 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Select Options</h3>
              </div>

              {activeTool.id === 'watermark-pdf' ? (
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Watermark Text
                  </label>
                  <input
                    type="text"
                    value={watermarkText}
                    onChange={(e) => setWatermarkText(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2 text-xs ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              ) : activeTool.id === 'rotate-pdf' ? (
                <div className="flex items-center gap-3">
                  {[90, 180, 270].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setRotationAngle(deg)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border ${
                        rotationAngle === deg 
                          ? 'bg-indigo-600 text-white border-indigo-500' 
                          : isDark ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      {deg}° Clockwise
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {['jpg', 'png', 'webp'].map((fmt) => (
                    <label 
                      key={fmt}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                        outputFormat === fmt 
                          ? 'bg-rose-500/10 border-rose-500' 
                          : isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="outputFormat"
                        value={fmt}
                        checked={outputFormat === fmt}
                        onChange={() => setOutputFormat(fmt)}
                        className="accent-rose-500"
                      />
                      <span className={`text-xs font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>{fmt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={handleProcessAction}
                disabled={isProcessing}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing ({progress}%)...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span>Process with {activeTool.title}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Preview Panel */}
          <div className={`lg:col-span-6 border rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[480px] ${
            isDark 
              ? 'bg-[#131b2e] border-slate-800' 
              : 'bg-white border-slate-200'
          }`}>
            
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className={`flex items-center gap-2 font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Eye className="w-4 h-4 text-indigo-500" />
                  <span>Preview & Output</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {convertedImages.length} Images
                </span>
              </div>

              <div className="mt-4">
                {extractedText ? (
                  <div className={`p-4 rounded-xl text-xs font-mono max-h-64 overflow-y-auto whitespace-pre-wrap border ${
                    isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}>
                    {extractedText}
                  </div>
                ) : convertedImages.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-1">
                    {convertedImages.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setPreviewModalImg(img)}
                        className={`group relative border rounded-xl p-2 cursor-pointer transition-all shadow-sm flex flex-col items-center ${
                          isDark ? 'bg-slate-900 border-slate-800 hover:border-indigo-500' : 'bg-slate-50 border-slate-200 hover:border-indigo-500'
                        }`}
                      >
                        <div className="relative w-full h-32 bg-slate-950/20 rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src={img.dataUrl}
                            alt={`Page ${img.pageNum}`}
                            className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Maximize2 className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <span className={`text-[11px] font-semibold mt-2 block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {img.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                    <FileText className="w-12 h-12 text-slate-400 opacity-60" />
                    <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      No output previews yet.
                    </p>
                    <p className="text-[11px] text-slate-400 max-w-xs">
                      Upload a PDF file and click process to execute your tool.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className={`pt-6 border-t space-y-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <button
                onClick={handleDownloadZip}
                disabled={convertedImages.length === 0}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download All Images (ZIP)</span>
              </button>

              <button
                onClick={() => {
                  if (file) {
                    const fileUrl = URL.createObjectURL(file);
                    window.open(fileUrl, '_blank');
                  }
                }}
                disabled={!file}
                className={`w-full py-2.5 px-4 rounded-xl border font-semibold text-xs transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
                  isDark ? 'bg-slate-900 border-slate-700 text-indigo-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-indigo-700 hover:bg-slate-200'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Preview PDF</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {previewModalImg && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`relative max-w-4xl w-full border rounded-2xl p-4 shadow-2xl flex flex-col items-center ${
            isDark ? 'bg-[#131b2e] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setPreviewModalImg(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-sm font-bold mb-3">{previewModalImg.name}</h4>
            <div className="max-h-[80vh] overflow-auto rounded-xl">
              <img src={previewModalImg.dataUrl} alt="Full view" className="max-w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
