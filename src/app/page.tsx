"use client";
import { useRef, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { TopBar, Dock } from '@/components/DesktopUI';
import Window from '@/components/Window';
import { FinderContent, VSCodeContent, TerminalContent, SafariContent, MailContent } from '@/components/Apps';
import { APPS } from '@/data/config';

export default function Home() {
  const constraintsRef = useRef(null);
  const { openApps, isDarkMode, toggleTheme, activeApp } = useStore();

  // Handle Dark Mode Class on Body
  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <main 
      ref={constraintsRef} 
      className={`h-screen w-screen overflow-hidden relative transition-colors duration-500 bg-cover bg-center ${isDarkMode ? "bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=3270&auto=format&fit=crop')]" : "bg-[url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=3270&auto=format&fit=crop')]"} `}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 pointer-events-none" />

      <TopBar />

      {/* Render Open Windows */}
      {openApps.includes('finder') && (
        <Window id="finder" title={APPS.finder.title} constraintsRef={constraintsRef}>
          <FinderContent />
        </Window>
      )}
      {openApps.includes('vscode') && (
        <Window id="vscode" title={APPS.vscode.title} constraintsRef={constraintsRef}>
          <VSCodeContent />
        </Window>
      )}
      {openApps.includes('terminal') && (
        <Window id="terminal" title={APPS.terminal.title} constraintsRef={constraintsRef}>
          <TerminalContent />
        </Window>
      )}
      {openApps.includes('safari') && (
        <Window id="safari" title={APPS.safari.title} constraintsRef={constraintsRef}>
          <SafariContent />
        </Window>
      )}
      {openApps.includes('mail') && (
        <Window id="mail" title={APPS.mail.title} constraintsRef={constraintsRef}>
          <MailContent />
        </Window>
      )}
      
      {/* Settings Logic (Just toggles theme for now) */}
      {openApps.includes('settings') && (
        <Window id="settings" title="Settings" constraintsRef={constraintsRef}>
           <div className="p-8 flex flex-col items-center">
              <h2 className="text-lg font-bold mb-4">Appearance</h2>
              <button 
                onClick={toggleTheme} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
              </button>
           </div>
        </Window>
      )}

      <Dock />
    </main>
  );
}