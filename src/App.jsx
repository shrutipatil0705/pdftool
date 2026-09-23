import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsGrid, { HOME_TOOLS } from './components/ToolsGrid';
import ToolWorkspace from './components/ToolWorkspace';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeView, setActiveView] = useState('home'); // 'home' | 'all-tools' | 'about' | 'contact'
  const [activeTool, setActiveTool] = useState(HOME_TOOLS[0]); // Default: PDF -> JPG

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectTool = (tool) => {
    setActiveTool(tool);
    setTimeout(() => {
      document.getElementById('workspace-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between selection:bg-rose-500 selection:text-white transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div>
        <Header 
          activeView={activeView}
          setActiveView={setActiveView}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main>
          {activeView === 'home' && (
            <>
              <Hero theme={theme} />
              <ToolsGrid 
                activeToolId={activeTool.id}
                onSelectTool={handleSelectTool}
                theme={theme}
                isAllToolsPage={false}
                onViewAllTools={() => {
                  setActiveView('all-tools');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <ToolWorkspace 
                activeTool={activeTool}
                theme={theme}
              />
            </>
          )}

          {activeView === 'all-tools' && (
            <>
              <ToolsGrid 
                activeToolId={activeTool.id}
                onSelectTool={handleSelectTool}
                theme={theme}
                isAllToolsPage={true}
              />
              <ToolWorkspace 
                activeTool={activeTool}
                theme={theme}
              />
            </>
          )}

          {activeView === 'about' && (
            <AboutSection theme={theme} />
          )}

          {activeView === 'contact' && (
            <ContactSection theme={theme} />
          )}
        </main>
      </div>

      <Footer 
        setActiveView={setActiveView}
        theme={theme}
      />
    </div>
  );
}
