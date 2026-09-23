# PDF Tools - All-in-One Client-Side PDF Utility Suite

A modern, lightning-fast, and 100% private web-based PDF utility platform. All operations are executed locally within your browser using WebAssembly and JavaScript — your files never leave your device.

![PDF Tools Preview](public/vite.svg)

---

## 🚀 Features

- 📑 **Merge PDF**: Combine multiple PDF documents into a single organized file in custom order.
- ✂️ **Split PDF**: Extract specific pages, ranges, or split a document into separate files.
- 🗜️ **Compress PDF**: Optimize and reduce PDF file size while retaining quality.
- 🖼️ **PDF to JPG / PNG**: Convert PDF pages into high-resolution images or packaged ZIP files.
- 📄 **JPG / PNG to PDF**: Convert and combine images into custom-configured PDF documents.
- 🔄 **Rotate PDF**: Rotate individual pages or all pages 90°, 180°, or 270°.
- 🔒 **Protect / Unlock PDF**: Encrypt documents with passwords or remove known security restrictions.
- 🗑️ **Delete / Reorder Pages**: Visual page manager to rearrange, rotate, or delete pages with drag-and-drop ease.
- 💧 **Watermark PDF**: Add custom text or image watermarks with precise opacity and placement controls.
- 🌗 **Dark / Light Mode**: Beautiful modern UI with high-contrast dark and clean light themes.

---

## 🔒 100% Client-Side & Private

- **Zero Server Uploads**: Processing happens strictly in your browser memory using `pdf-lib` and `pdfjs-dist`.
- **Maximum Privacy**: Confidential documents, contracts, and financial statements are never transmitted over the network.
- **Offline Capable**: Works even without an active internet connection once loaded.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Manipulation**: [pdf-lib](https://pdf-lib.js.org/) & [pdfjs-dist](https://mozilla.github.io/pdf.js/)
- **Archive & File Export**: [JSZip](https://stuk.github.io/jszip/) & [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shrutipatil0705/pdftool.git
   cd pdftool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License

MIT License. Open source and free to use.
