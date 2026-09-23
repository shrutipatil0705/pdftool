import React, { useState } from 'react';
import { 
  FileImage, 
  Image as ImageIcon, 
  FileOutput, 
  FilePlus, 
  Minimize2, 
  Scissors, 
  Layers, 
  Hash, 
  Eye, 
  Download,
  RotateCw,
  FileText,
  Stamp,
  Lock,
  Unlock,
  Move,
  Crop,
  SlidersHorizontal,
  FileSpreadsheet,
  Presentation,
  Printer,
  Trash2,
  Copy,
  PenTool,
  MessageSquare,
  Search,
  Type,
  Palette,
  Eraser,
  CheckSquare,
  FileCode,
  ArrowRight,
  Sparkles,
  Grid
} from 'lucide-react';

// EXACT 10 TOOLS FOR HOME PAGE
export const HOME_TOOLS = [
  {
    id: 'pdf-to-jpg',
    title: 'PDF → JPG',
    description: 'Convert PDF pages to JPG images in high resolution.',
    icon: FileImage,
    color: 'from-pink-500 to-rose-500',
    format: 'jpg'
  },
  {
    id: 'pdf-to-png',
    title: 'PDF → PNG',
    description: 'Convert PDF pages to lossless PNG images.',
    icon: ImageIcon,
    color: 'from-blue-500 to-cyan-500',
    format: 'png'
  },
  {
    id: 'jpg-to-pdf',
    title: 'JPG → PDF',
    description: 'Convert JPG images into a single PDF document.',
    icon: FilePlus,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'png-to-pdf',
    title: 'PNG → PDF',
    description: 'Convert PNG images into a clean PDF document.',
    icon: FilePlus,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'merge-pdf',
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one single PDF.',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'split-pdf',
    title: 'Split PDF',
    description: 'Split PDF into multiple separate files by page range.',
    icon: Scissors,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    id: 'compress-pdf',
    title: 'Compress PDF',
    description: 'Reduce PDF file size while optimizing quality.',
    icon: Minimize2,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'rotate-pdf',
    title: 'Rotate PDF',
    description: 'Rotate PDF pages by 90°, 180° or 270° degrees.',
    icon: RotateCw,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'delete-pdf-pages',
    title: 'Delete PDF Pages',
    description: 'Remove unwanted pages from your PDF document.',
    icon: Trash2,
    color: 'from-red-500 to-rose-600'
  },
  {
    id: 'extract-pdf-pages',
    title: 'Extract PDF Pages',
    description: 'Select and extract specific pages from a PDF.',
    icon: FileOutput,
    color: 'from-emerald-500 to-teal-500'
  }
];

// EXACT 40 TOOLS FOR ALL TOOLS PAGE
export const ALL_TOOLS = [
  // 1-10 (Same as Home)
  ...HOME_TOOLS,
  
  // 11-40
  {
    id: 'page-counter',
    title: 'PDF Page Counter',
    description: 'Count total pages and view detailed page metadata.',
    icon: Hash,
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'pdf-preview',
    title: 'PDF Preview',
    description: 'View and read PDF files directly in browser.',
    icon: Eye,
    color: 'from-sky-500 to-blue-500'
  },
  {
    id: 'pdf-to-text',
    title: 'PDF → Text',
    description: 'Extract raw text content from PDF pages.',
    icon: FileText,
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'pdf-to-word',
    title: 'PDF → Word',
    description: 'Convert PDF document to editable Word docx.',
    icon: FileText,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'word-to-pdf',
    title: 'Word → PDF',
    description: 'Convert Microsoft Word documents to PDF.',
    icon: FilePlus,
    color: 'from-indigo-600 to-blue-700'
  },
  {
    id: 'watermark-pdf',
    title: 'PDF Watermark',
    description: 'Add text or image watermark to PDF pages.',
    icon: Stamp,
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 'page-numbers',
    title: 'Add Page Numbers',
    description: 'Add header or footer page numbers to PDF.',
    icon: Hash,
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    id: 'protect-pdf',
    title: 'Protect PDF',
    description: 'Add password encryption & security to PDF.',
    icon: Lock,
    color: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'unlock-pdf',
    title: 'Unlock PDF',
    description: 'Remove password protection & security from PDF.',
    icon: Unlock,
    color: 'from-emerald-600 to-green-500'
  },
  {
    id: 'pdf-metadata',
    title: 'PDF Metadata Viewer',
    description: 'View and edit document title, author, and info.',
    icon: SlidersHorizontal,
    color: 'from-purple-600 to-rose-600'
  },
  {
    id: 'crop-pdf',
    title: 'Crop PDF',
    description: 'Crop margins and adjust page dimensions.',
    icon: Crop,
    color: 'from-teal-600 to-cyan-600'
  },
  {
    id: 'print-pdf',
    title: 'Print PDF',
    description: 'Print PDF files directly with custom print settings.',
    icon: Printer,
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'organize-pdf-pages',
    title: 'Organize PDF Pages',
    description: 'Rearrange, swap, or delete PDF pages visually.',
    icon: Move,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'reorder-pdf-pages',
    title: 'Reorder PDF Pages',
    description: 'Change page order of any PDF document.',
    icon: Move,
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'duplicate-pdf-pages',
    title: 'Duplicate PDF Pages',
    description: 'Clone and duplicate selected pages in PDF.',
    icon: Copy,
    color: 'from-violet-600 to-purple-600'
  },
  {
    id: 'add-image-to-pdf',
    title: 'Add Image to PDF',
    description: 'Insert images directly into existing PDF pages.',
    icon: ImageIcon,
    color: 'from-pink-600 to-rose-600'
  },
  {
    id: 'edit-pdf',
    title: 'Edit PDF',
    description: 'Add text, drawings, and shapes to PDF files.',
    icon: PenTool,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'sign-pdf',
    title: 'Sign PDF',
    description: 'Draw or upload digital signature to sign PDF.',
    icon: PenTool,
    color: 'from-rose-500 to-red-600'
  },
  {
    id: 'add-comments-to-pdf',
    title: 'Add Comments to PDF',
    description: 'Annotate and add text comments to PDF pages.',
    icon: MessageSquare,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'search-text-in-pdf',
    title: 'Search Text in PDF',
    description: 'Search keywords and highlight matches in PDF.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'change-pdf-formatting',
    title: 'Change PDF Font/Formatting',
    description: 'Adjust font styles, sizes, and layout in PDF.',
    icon: Type,
    color: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'add-background-to-pdf',
    title: 'Add Background to PDF',
    description: 'Add custom background colors or images to PDF.',
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'remove-pdf-background',
    title: 'Remove PDF Background',
    description: 'Remove background colors and graphics from PDF.',
    icon: Eraser,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'pdf-form-filler',
    title: 'PDF Form Filler',
    description: 'Fill out interactive PDF forms and save data.',
    icon: CheckSquare,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'create-pdf-from-text',
    title: 'Create PDF from Text',
    description: 'Generate clean PDF documents from plain text.',
    icon: FileCode,
    color: 'from-sky-500 to-indigo-500'
  },
  {
    id: 'images-to-pdf',
    title: 'Images to PDF',
    description: 'Batch convert multiple image formats to PDF.',
    icon: FilePlus,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'excel-to-pdf',
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets (xls, xlsx) to PDF.',
    icon: FileSpreadsheet,
    color: 'from-emerald-600 to-green-700'
  },
  {
    id: 'pdf-to-excel',
    title: 'PDF to Excel',
    description: 'Extract PDF tables directly into Excel sheets.',
    icon: FileSpreadsheet,
    color: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'powerpoint-to-pdf',
    title: 'PowerPoint to PDF',
    description: 'Convert PPT/PPTX presentations to PDF document.',
    icon: Presentation,
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'pdf-to-powerpoint',
    title: 'PDF to PowerPoint',
    description: 'Convert PDF document slides into editable PPTX.',
    icon: Presentation,
    color: 'from-rose-600 to-red-700'
  }
];

export default function ToolsGrid({ 
  activeToolId, 
  onSelectTool, 
  theme, 
  isAllToolsPage = false,
  onViewAllTools 
}) {
  const isDark = theme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');

  // Choose list based on page mode
  const currentToolsList = isAllToolsPage ? ALL_TOOLS : HOME_TOOLS;

  const filteredTools = currentToolsList.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="tools-grid-section" className={`py-12 transition-colors duration-200 ${
      isDark ? 'bg-[#0b0f19]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAllToolsPage ? 'All 40 PDF Tools' : '10 Popular PDF Tools'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {isAllToolsPage ? 'Explore All 40 PDF Tools' : 'Our PDF Tools'}
          </h2>
          
          <p className={`text-sm font-medium max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {isAllToolsPage 
              ? 'Browse our complete library of 40 free online PDF conversion, editing, and management tools.' 
              : 'Choose a tool and get your work done in seconds.'}
          </p>

          {/* Search bar for All Tools page */}
          {isAllToolsPage && (
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative">
                <Search className={`absolute left-3.5 top-3 w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search among 40 PDF tools..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    isDark 
                      ? 'bg-[#131b2e] border-slate-800 text-white placeholder-slate-500' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            const isSelected = activeToolId === tool.id;

            return (
              <div
                key={tool.id}
                onClick={() => onSelectTool(tool)}
                className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  isDark 
                    ? isSelected 
                      ? 'bg-[#17223b] border-indigo-500 ring-2 ring-indigo-500/40' 
                      : 'bg-[#131b2e] hover:bg-[#19243d] border-slate-800 hover:border-slate-700 shadow-lg'
                    : isSelected 
                      ? 'bg-indigo-50/90 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm hover:shadow-md'
                } hover:-translate-y-1`}
              >
                <div>
                  {/* Icon Card */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tool.color} p-2.5 text-white mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-bold text-base transition-colors ${
                    isDark ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
                  }`}>
                    {tool.title}
                  </h3>
                  <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {tool.description}
                  </p>
                </div>

                {/* "Use Tool" Button on Card */}
                <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between">
                  <span className={`text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                    isDark ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    Use Tool
                  </span>
                  <div className="w-6 h-6 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "View All Tools" button at bottom of Home page section */}
        {!isAllToolsPage && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllTools}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 cursor-pointer"
            >
              <Grid className="w-4 h-4" />
              <span>View All 40 Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
