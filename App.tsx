/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { WudhuSection } from './components/WudhuSection';
import { IbadahSection } from './components/IbadahSection';
import { QuranSection } from './components/QuranSection';
import { DoaSection } from './components/DoaSection';
import { AkhlakSejarahSection } from './components/AkhlakSejarahSection';
import { QuizSection } from './components/QuizSection';
import { AdminSection } from './components/AdminSection';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ChecklistIbadahModal } from './components/ChecklistIbadahModal';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';
import { SaranModal } from './components/SaranModal';
import { PanduanOnlineModal } from './components/PanduanOnlineModal';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('beranda');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ruang_islam_theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });

  // Modal States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isZakatOpen, setIsZakatOpen] = useState(false);
  const [isSaranOpen, setIsSaranOpen] = useState(false);
  const [isPanduanOpen, setIsPanduanOpen] = useState(false);
  const [shareConfig, setShareConfig] = useState<{ isOpen: boolean; title: string; text: string }>({
    isOpen: false,
    title: '',
    text: ''
  });

  // Sync Dark Mode Class with HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ruang_islam_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ruang_islam_theme', 'light');
    }
  }, [darkMode]);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenShare = (title: string, text: string) => {
    setShareConfig({
      isOpen: true,
      title,
      text
    });
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors">
      
      {/* Navigation Top Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenCalculator={() => setIsZakatOpen(true)}
        onOpenPanduan={() => setIsPanduanOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <>
            <HeroSection
              onStartLearning={() => setActiveTab('wudhu')}
              onExploreCategories={scrollToCategories}
              onOpenChecklist={() => setIsChecklistOpen(true)}
              onOpenZakat={() => setIsZakatOpen(true)}
              setActiveTab={setActiveTab}
            />
            <CategorySection setActiveTab={setActiveTab} />
          </>
        )}

        {activeTab === 'wudhu' && (
          <WudhuSection
            setActiveTab={setActiveTab}
            onShare={handleOpenShare}
          />
        )}

        {activeTab === 'salat' && (
          <IbadahSection
            initialSubTab="salat"
            setActiveTab={setActiveTab}
            onOpenZakatCalculator={() => setIsZakatOpen(true)}
          />
        )}

        {activeTab === 'puasa' && (
          <IbadahSection
            initialSubTab="puasa"
            setActiveTab={setActiveTab}
            onOpenZakatCalculator={() => setIsZakatOpen(true)}
          />
        )}

        {activeTab === 'bersuci' && (
          <IbadahSection
            initialSubTab="bersuci"
            setActiveTab={setActiveTab}
            onOpenZakatCalculator={() => setIsZakatOpen(true)}
          />
        )}

        {activeTab === 'zakat-haji' && (
          <IbadahSection
            initialSubTab="zakat-haji"
            setActiveTab={setActiveTab}
            onOpenZakatCalculator={() => setIsZakatOpen(true)}
          />
        )}

        {activeTab === 'quran' && (
          <QuranSection onShare={handleOpenShare} />
        )}

        {activeTab === 'doa' && (
          <DoaSection onShare={handleOpenShare} />
        )}

        {activeTab === 'akhlak' && (
          <AkhlakSejarahSection />
        )}

        {activeTab === 'kuis' && (
          <QuizSection />
        )}

        {activeTab === 'admin' && (
          <AdminSection />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenSaran={() => setIsSaranOpen(true)}
        onOpenPanduan={() => setIsPanduanOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenZakat={() => setIsZakatOpen(true)}
      />

      {/* Modals & Dialogs */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(tab) => setActiveTab(tab)}
      />

      <ChecklistIbadahModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

      <ZakatCalculatorModal
        isOpen={isZakatOpen}
        onClose={() => setIsZakatOpen(false)}
      />

      <SaranModal
        isOpen={isSaranOpen}
        onClose={() => setIsSaranOpen(false)}
      />

      <PanduanOnlineModal
        isOpen={isPanduanOpen}
        onClose={() => setIsPanduanOpen(false)}
      />

      <ShareModal
        isOpen={shareConfig.isOpen}
        onClose={() => setShareConfig({ ...shareConfig, isOpen: false })}
        title={shareConfig.title}
        text={shareConfig.text}
      />

    </div>
  );
}
