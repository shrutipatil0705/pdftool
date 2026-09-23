/**
 * PDF Tools - 100% Client-Side Pure HTML / CSS / JavaScript Application
 */

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// EXACT 10 HOME TOOLS
const HOME_TOOLS = [
  { id: 'pdf-to-jpg', title: 'PDF → JPG', description: 'Convert PDF pages to JPG images in high resolution.', icon: 'file-image', color: 'from-pink-500 to-rose-500', format: 'jpg' },
  { id: 'pdf-to-png', title: 'PDF → PNG', description: 'Convert PDF pages to lossless PNG images.', icon: 'image', color: 'from-blue-500 to-cyan-500', format: 'png' },
  { id: 'jpg-to-pdf', title: 'JPG → PDF', description: 'Convert JPG images into a single PDF document.', icon: 'file-plus', color: 'from-orange-500 to-amber-500' },
  { id: 'png-to-pdf', title: 'PNG → PDF', description: 'Convert PNG images into a clean PDF document.', icon: 'file-plus', color: 'from-amber-500 to-yellow-500' },
  { id: 'merge-pdf', title: 'Merge PDF', description: 'Combine multiple PDF files into one single PDF.', icon: 'layers', color: 'from-indigo-500 to-purple-500' },
  { id: 'split-pdf', title: 'Split PDF', description: 'Split PDF into multiple separate files by page range.', icon: 'scissors', color: 'from-teal-500 to-emerald-500' },
  { id: 'compress-pdf', title: 'Compress PDF', description: 'Reduce PDF file size while optimizing quality.', icon: 'minimize-2', color: 'from-purple-500 to-indigo-500' },
  { id: 'rotate-pdf', title: 'Rotate PDF', description: 'Rotate PDF pages by 90°, 180° or 270° degrees.', icon: 'rotate-cw', color: 'from-cyan-500 to-blue-600' },
  { id: 'delete-pdf-pages', title: 'Delete PDF Pages', description: 'Remove unwanted pages from your PDF document.', icon: 'trash-2', color: 'from-red-500 to-rose-600' },
  { id: 'extract-pdf-pages', title: 'Extract PDF Pages', description: 'Select and extract specific pages from a PDF.', icon: 'file-output', color: 'from-emerald-500 to-teal-500' }
];

// EXACT 40 ALL TOOLS
const ALL_TOOLS = [
  ...HOME_TOOLS,
  { id: 'page-counter', title: 'PDF Page Counter', description: 'Count total pages and view detailed page metadata.', icon: 'hash', color: 'from-rose-500 to-pink-500' },
  { id: 'pdf-preview', title: 'PDF Preview', description: 'View and read PDF files directly in browser.', icon: 'eye', color: 'from-sky-500 to-blue-500' },
  { id: 'pdf-to-text', title: 'PDF → Text', description: 'Extract raw text content from PDF pages.', icon: 'file-text', color: 'from-violet-500 to-purple-600' },
  { id: 'pdf-to-word', title: 'PDF → Word', description: 'Convert PDF document to editable Word docx.', icon: 'file-text', color: 'from-blue-600 to-indigo-600' },
  { id: 'word-to-pdf', title: 'Word → PDF', description: 'Convert Microsoft Word documents to PDF.', icon: 'file-plus', color: 'from-indigo-600 to-blue-700' },
  { id: 'watermark-pdf', title: 'PDF Watermark', description: 'Add text or image watermark to PDF pages.', icon: 'stamp', color: 'from-rose-500 to-pink-600' },
  { id: 'page-numbers', title: 'Add Page Numbers', description: 'Add header or footer page numbers to PDF.', icon: 'hash', color: 'from-indigo-500 to-cyan-500' },
  { id: 'protect-pdf', title: 'Protect PDF', description: 'Add password encryption & security to PDF.', icon: 'lock', color: 'from-amber-500 to-yellow-600' },
  { id: 'unlock-pdf', title: 'Unlock PDF', description: 'Remove password protection & security from PDF.', icon: 'unlock', color: 'from-emerald-600 to-green-500' },
  { id: 'pdf-metadata', title: 'PDF Metadata Viewer', description: 'View and edit document title, author, and info.', icon: 'sliders', color: 'from-purple-600 to-rose-600' },
  { id: 'crop-pdf', title: 'Crop PDF', description: 'Crop margins and adjust page dimensions.', icon: 'crop', color: 'from-teal-600 to-cyan-600' },
  { id: 'print-pdf', title: 'Print PDF', description: 'Print PDF files directly with custom print settings.', icon: 'printer', color: 'from-slate-600 to-slate-800' },
  { id: 'organize-pdf-pages', title: 'Organize PDF Pages', description: 'Rearrange, swap, or delete PDF pages visually.', icon: 'move', color: 'from-blue-600 to-indigo-600' },
  { id: 'reorder-pdf-pages', title: 'Reorder PDF Pages', description: 'Change page order of any PDF document.', icon: 'move', color: 'from-cyan-600 to-blue-600' },
  { id: 'duplicate-pdf-pages', title: 'Duplicate PDF Pages', description: 'Clone and duplicate selected pages in PDF.', icon: 'copy', color: 'from-violet-600 to-purple-600' },
  { id: 'add-image-to-pdf', title: 'Add Image to PDF', description: 'Insert images directly into existing PDF pages.', icon: 'image', color: 'from-pink-600 to-rose-600' },
  { id: 'edit-pdf', title: 'Edit PDF', description: 'Add text, drawings, and shapes to PDF files.', icon: 'pen-tool', color: 'from-indigo-500 to-purple-500' },
  { id: 'sign-pdf', title: 'Sign PDF', description: 'Draw or upload digital signature to sign PDF.', icon: 'pen-tool', color: 'from-rose-500 to-red-600' },
  { id: 'add-comments-to-pdf', title: 'Add Comments to PDF', description: 'Annotate and add text comments to PDF pages.', icon: 'message-square', color: 'from-amber-500 to-orange-500' },
  { id: 'search-text-in-pdf', title: 'Search Text in PDF', description: 'Search keywords and highlight matches in PDF.', icon: 'search', color: 'from-blue-500 to-cyan-500' },
  { id: 'change-pdf-formatting', title: 'Change PDF Font/Formatting', description: 'Adjust font styles, sizes, and layout in PDF.', icon: 'type', color: 'from-teal-500 to-emerald-600' },
  { id: 'add-background-to-pdf', title: 'Add Background to PDF', description: 'Add custom background colors or images to PDF.', icon: 'palette', color: 'from-purple-500 to-pink-500' },
  { id: 'remove-pdf-background', title: 'Remove PDF Background', description: 'Remove background colors and graphics from PDF.', icon: 'eraser', color: 'from-red-500 to-pink-600' },
  { id: 'pdf-form-filler', title: 'PDF Form Filler', description: 'Fill out interactive PDF forms and save data.', icon: 'check-square', color: 'from-emerald-500 to-teal-600' },
  { id: 'create-pdf-from-text', title: 'Create PDF from Text', description: 'Generate clean PDF documents from plain text.', icon: 'file-code', color: 'from-sky-500 to-indigo-500' },
  { id: 'images-to-pdf', title: 'Images to PDF', description: 'Batch convert multiple image formats to PDF.', icon: 'file-plus', color: 'from-amber-500 to-orange-600' },
  { id: 'excel-to-pdf', title: 'Excel to PDF', description: 'Convert Excel spreadsheets (xls, xlsx) to PDF.', icon: 'file-spreadsheet', color: 'from-emerald-600 to-green-700' },
  { id: 'pdf-to-excel', title: 'PDF to Excel', description: 'Extract PDF tables directly into Excel sheets.', icon: 'file-spreadsheet', color: 'from-teal-600 to-emerald-700' },
  { id: 'powerpoint-to-pdf', title: 'PowerPoint to PDF', description: 'Convert PPT/PPTX presentations to PDF document.', icon: 'presentation', color: 'from-orange-600 to-red-600' },
  { id: 'pdf-to-powerpoint', title: 'PDF to PowerPoint', description: 'Convert PDF document slides into editable PPTX.', icon: 'presentation', color: 'from-rose-600 to-red-700' }
];

// Global Application State
const state = {
  theme: 'dark',
  activeView: 'home', // 'home' | 'all-tools' | 'about' | 'contact'
  activeTool: HOME_TOOLS[0],
  selectedFile: null,
  multipleFiles: [],
  outputFormat: 'jpg',
  pageSelection: 'all',
  customRange: '1-5',
  convertedImages: [],
  isProcessing: false,
  searchQuery: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  renderApp();
}

function setActiveView(view) {
  state.activeView = view;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectTool(tool) {
  state.activeTool = tool;
  if (tool.format) state.outputFormat = tool.format;
  renderApp();
  setTimeout(() => {
    document.getElementById('workspace-section')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// Master Render Function
function renderApp() {
  const root = document.getElementById('app-root');
  const isDark = state.theme === 'dark';

  root.className = `min-h-screen flex flex-col justify-between transition-colors duration-200 ${
    isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'
  }`;

  root.innerHTML = `
    <div>
      ${getHeaderHTML()}
      <main id="main-content">
        ${getMainContentHTML()}
      </main>
    </div>
    ${getFooterHTML()}
  `;

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }

  attachEventListeners();
}

function getHeaderHTML() {
  const isDark = state.theme === 'dark';
  return `
    <header class="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark ? 'bg-[#0f172a]/95 border-slate-800 shadow-lg' : 'bg-white/95 border-slate-200 shadow-sm'
    }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <!-- Logo -->
        <div onclick="setActiveView('home')" class="flex items-center gap-3 cursor-pointer group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-500 via-rose-500 to-pink-500 p-0.5 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-200">
            <div class="w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-[#0f172a]' : 'bg-white'}">
              <i data-lucide="file-text" class="w-5 h-5 text-rose-500"></i>
            </div>
          </div>
          <div>
            <span class="font-extrabold text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">PDF Tools</span>
            <span class="text-[10px] uppercase font-medium tracking-wider block -mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}">Simple · Fast · Free</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 p-1.5 rounded-full border ${isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-100 border-slate-200'}">
          <button onclick="setActiveView('home')" class="px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            state.activeView === 'home' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }">Home</button>

          <button onclick="setActiveView('all-tools')" class="px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            state.activeView === 'all-tools' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }">All Tools</button>

          <button onclick="setActiveView('about')" class="px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            state.activeView === 'about' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }">About</button>

          <button onclick="setActiveView('contact')" class="px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            state.activeView === 'contact' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }">Contact</button>
        </nav>

        <!-- Right Controls: Badge + Icon-Only Theme Toggle -->
        <div class="flex items-center gap-3">
          <div class="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 text-purple-400 text-xs font-semibold shadow-inner">
            <i data-lucide="zap" class="w-3.5 h-3.5 text-yellow-400 animate-pulse"></i>
            <span>⚡ 100% Free Online Tools</span>
          </div>

          <!-- Icon-Only Theme Toggle -->
          <button onclick="toggleTheme()" aria-label="Toggle theme" class="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer ${
            isDark ? 'bg-slate-800 border-slate-700 text-amber-400 hover:border-amber-400/50' : 'bg-slate-100 border-slate-300 text-indigo-600 hover:border-indigo-400'
          }">
            <i data-lucide="${isDark ? 'sun' : 'moon'}" class="w-5 h-5 transition-transform group-hover:scale-110"></i>
          </button>
        </div>

      </div>
    </header>
  `;
}

function getMainContentHTML() {
  if (state.activeView === 'about') return getAboutHTML();
  if (state.activeView === 'contact') return getContactHTML();
  if (state.activeView === 'all-tools') return getToolsGridHTML(true) + getWorkspaceHTML();
  
  // Home View
  return getHeroHTML() + getToolsGridHTML(false) + getWorkspaceHTML();
}

function getHeroHTML() {
  const isDark = state.theme === 'dark';
  return `
    <section class="relative overflow-hidden py-12 md:py-16 transition-colors duration-200 border-b ${
      isDark ? 'bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b0f19] border-slate-800/80 text-white' : 'bg-gradient-to-b from-indigo-50/80 via-purple-50/50 to-white border-slate-200 text-slate-900'
    }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              All Your PDF Needs <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-purple-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">in One Place</span>
            </h1>
            <p class="text-lg sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}">
              Convert, edit, merge, split, compress and more. Fast, easy and completely free!
            </p>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${isDark ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-700'}">
                <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i> No Installation
              </div>
              <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${isDark ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-700'}">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-500"></i> Safe & Secure
              </div>
              <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${isDark ? 'bg-slate-800/80 border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-700'}">
                <i data-lucide="monitor" class="w-4 h-4 text-indigo-500"></i> Works on Any Device
              </div>
            </div>
          </div>
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md p-6 rounded-3xl border backdrop-blur-sm shadow-2xl ${isDark ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/20' : 'bg-gradient-to-br from-indigo-100/60 to-purple-100/60 border-indigo-200'}">
              <div class="relative h-64 flex items-center justify-center">
                <div class="relative z-20 w-32 h-40 bg-gradient-to-b from-red-500 to-rose-600 rounded-2xl p-4 shadow-2xl border border-red-400/40 flex flex-col justify-between items-center transform -rotate-3">
                  <div class="w-8 h-2 bg-white/40 rounded-full"></div>
                  <span class="text-2xl font-black text-white tracking-widest">PDF</span>
                  <i data-lucide="file-text" class="w-8 h-8 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function getToolsGridHTML(isAllTools) {
  const isDark = state.theme === 'dark';
  const tools = isAllTools ? ALL_TOOLS : HOME_TOOLS;

  const filtered = tools.filter(t => 
    t.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  return `
    <section id="tools-grid-section" class="py-12 transition-colors duration-200 ${isDark ? 'bg-[#0b0f19]' : 'bg-slate-50'}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center space-y-3 mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-extrabold uppercase tracking-wider">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>${isAllTools ? 'All 40 PDF Tools' : '10 Popular PDF Tools'}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}">
            ${isAllTools ? 'Explore All 40 PDF Tools' : 'Our PDF Tools'}
          </h2>
          <p class="text-sm font-medium max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}">
            ${isAllTools ? 'Browse our complete library of 40 free online PDF conversion, editing, and management tools.' : 'Choose a tool and get your work done in seconds.'}
          </p>

          ${isAllTools ? `
            <div class="pt-4 max-w-md mx-auto">
              <input type="text" id="search-input" value="${state.searchQuery}" placeholder="Search among 40 PDF tools..." class="w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-[#131b2e] border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'}" />
            </div>
          ` : ''}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          ${filtered.map(tool => {
            const isSelected = state.activeTool.id === tool.id;
            return `
              <div onclick="handleToolSelect('${tool.id}')" class="group relative rounded-2xl p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                isDark 
                  ? isSelected ? 'bg-[#17223b] border-indigo-500 ring-2 ring-indigo-500/40' : 'bg-[#131b2e] hover:bg-[#19243d] border-slate-800'
                  : isSelected ? 'bg-indigo-50/90 border-indigo-500 ring-2 ring-indigo-500/20' : 'bg-white hover:bg-slate-50 border-slate-200'
              } hover:-translate-y-1 shadow-sm">
                <div>
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${tool.color} p-2.5 text-white mb-4 shadow-md flex items-center justify-center">
                    <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
                  </div>
                  <h3 class="font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}">${tool.title}</h3>
                  <p class="text-xs mt-1.5 leading-relaxed line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}">${tool.description}</p>
                </div>
                <div class="mt-5 pt-3 border-t ${isDark ? 'border-slate-800/40' : 'border-slate-200'} flex items-center justify-between">
                  <span class="text-[11px] font-semibold text-indigo-500">Use Tool</span>
                  <div class="w-6 h-6 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${!isAllTools ? `
          <div class="mt-12 text-center">
            <button onclick="setActiveView('all-tools')" class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all">
              <i data-lucide="grid" class="w-4 h-4"></i>
              <span>View All 40 Tools</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        ` : ''}

      </div>
    </section>
  `;
}

function getWorkspaceHTML() {
  const isDark = state.theme === 'dark';
  const tool = state.activeTool;

  return `
    <section id="workspace-section" class="py-10 transition-colors duration-200 border-t ${isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex items-center gap-4 mb-8 p-4 rounded-2xl border shadow-sm ${isDark ? 'bg-[#131b2e] border-slate-800' : 'bg-slate-50 border-slate-200'}">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-600 p-2.5 text-white flex items-center justify-center shadow-lg">
            <i data-lucide="file-text" class="w-7 h-7"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}">
              ${tool.title}
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-500 font-semibold border border-rose-500/30">Active Tool</span>
            </h2>
            <p class="text-sm mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}">${tool.description}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-6 border rounded-2xl p-6 shadow-xl space-y-6 ${isDark ? 'bg-[#131b2e] border-slate-800' : 'bg-white border-slate-200'}">
            
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 class="font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}">Upload File</h3>
              </div>

              <div id="drop-zone" class="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${isDark ? 'border-indigo-500/40 bg-slate-900/50 hover:bg-indigo-950/20' : 'border-indigo-300 bg-indigo-50/40'}">
                <input type="file" id="file-input" class="hidden" accept=".pdf,image/*" />
                <div class="w-12 h-12 rounded-full bg-indigo-600/10 text-indigo-500 flex items-center justify-center mx-auto mb-3">
                  <i data-lucide="upload-cloud" class="w-6 h-6"></i>
                </div>
                ${state.selectedFile ? `
                  <p class="font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}">📄 ${state.selectedFile.name}</p>
                  <p class="text-xs text-slate-400 mt-1">${(state.selectedFile.size / (1024*1024)).toFixed(2)} MB</p>
                ` : `
                  <p class="text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}">Drag & drop your PDF/Images here</p>
                  <button type="button" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold">Browse File</button>
                `}
              </div>
            </div>

            <div class="pt-2">
              <button onclick="executeAction()" ${state.isProcessing ? 'disabled' : ''} class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                <i data-lucide="zap" class="w-4 h-4 text-yellow-300"></i>
                <span>${state.isProcessing ? 'Processing...' : 'Process File'}</span>
              </button>
            </div>

          </div>

          <div class="lg:col-span-6 border rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[400px] ${isDark ? 'bg-[#131b2e] border-slate-800' : 'bg-white border-slate-200'}">
            <div>
              <div class="flex items-center justify-between pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}">
                <div class="flex items-center gap-2 font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}">
                  <i data-lucide="eye" class="w-4 h-4 text-indigo-500"></i>
                  <span>Preview & Output</span>
                </div>
                <span class="text-xs px-3 py-1 rounded-full font-medium border ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-600'}">
                  ${state.convertedImages.length} Images
                </span>
              </div>

              <div class="mt-4">
                ${state.convertedImages.length > 0 ? `
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
                    ${state.convertedImages.map(img => `
                      <div class="border rounded-xl p-2 bg-slate-900/50 flex flex-col items-center">
                        <img src="${img.dataUrl}" class="max-h-28 object-contain rounded" />
                        <span class="text-[10px] text-slate-400 mt-1">${img.name}</span>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="h-48 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                    <i data-lucide="file-text" class="w-12 h-12 opacity-50"></i>
                    <p class="text-xs">No output previews yet. Upload a PDF file to begin.</p>
                  </div>
                `}
              </div>
            </div>

            <div class="pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} space-y-3">
              <button onclick="downloadZIP()" ${state.convertedImages.length === 0 ? 'disabled' : ''} class="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 cursor-pointer">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Download All Images (ZIP)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

function getAboutHTML() {
  const isDark = state.theme === 'dark';
  return `
    <div class="py-12 ${isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="rounded-3xl p-8 border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}">
          <span class="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase">About Us</span>
          <h1 class="text-3xl font-extrabold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}">Simple Tools for Your PDF Needs</h1>
          <p class="text-sm mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}">
            PDF Tools is a free online platform that helps you convert, edit, merge, split, compress and manage PDF files easily — all in one place.
          </p>
        </div>
      </div>
    </div>
  `;
}

function getContactHTML() {
  const isDark = state.theme === 'dark';
  return `
    <div class="py-12 ${isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="rounded-3xl p-8 border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}">
          <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase">Contact Us</span>
          <h1 class="text-3xl font-extrabold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}">We're Here to Help</h1>
          <p class="text-sm mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}">
            Office: 123 Tech Park, Green Street, Pune - 411001, Maharashtra, India <br/>
            Email: support@pdftools.com | Call: +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  `;
}

function getFooterHTML() {
  const isDark = state.theme === 'dark';
  return `
    <footer class="border-t py-8 transition-colors duration-200 ${isDark ? 'bg-[#0b0f19] border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs space-y-2">
        <p>© ${new Date().getFullYear()} PDF Tools. All rights reserved.</p>
        <p>100% Client-Side Privacy & Performance.</p>
      </div>
    </footer>
  `;
}

function attachEventListeners() {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const searchInput = document.getElementById('search-input');

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files[0]) {
        state.selectedFile = e.target.files[0];
        renderApp();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
    });
  }
}

function handleToolSelect(toolId) {
  const tool = ALL_TOOLS.find(t => t.id === toolId);
  if (tool) {
    selectTool(tool);
  }
}

async function executeAction() {
  if (!state.selectedFile) return alert('Please upload a PDF file first.');
  
  state.isProcessing = true;
  renderApp();

  try {
    const arrayBuffer = await state.selectedFile.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    const results = [];
    for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;
      results.push({ pageNum: i, name: `${i}.jpg`, dataUrl: canvas.toDataURL('image/jpeg', 0.9) });
    }
    state.convertedImages = results;
  } catch (e) {
    console.error(e);
    alert('Error processing file.');
  } finally {
    state.isProcessing = false;
    renderApp();
  }
}

async function downloadZIP() {
  if (state.convertedImages.length === 0) return;
  const zip = new JSZip();
  state.convertedImages.forEach(img => {
    zip.file(img.name, img.dataUrl.split(',')[1], { base64: true });
  });
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'pdf_images.zip');
}
