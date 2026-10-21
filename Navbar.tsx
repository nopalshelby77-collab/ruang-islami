import React from 'react';
import { ActiveTab } from '../types';
import { Moon, Sun, Search, CheckSquare, Calculator, ShieldCheck, BookOpen, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  onOpenChecklist: () => void;
  onOpenCalculator: () => void;
  onOpenPanduan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenChecklist,
  onOpenCalculator,
  onOpenPanduan
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand — 4-5 Nav Links — Primary Action */}
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Single text element wordmark with elegant Islamic emblem */}
          <button
            onClick={() => setActiveTab('beranda')}
            className="flex items-center gap-2.5 text-left group shrink-0 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-amber-300 shadow-sm shadow-emerald-900/10 transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z" fill="currentColor" opacity="0.3" />
                <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C12.34 20 12.67 19.98 13 19.94C10.15 19.11 8 16.27 8 12.89C8 9.5 10.15 6.66 13 5.83C12.67 5.79 12.34 5.77 12 4Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 whitespace-nowrap">
                Ruang Islam
              </span>
              <span className="text-[10px] font-medium text-emerald-700/80 dark:text-emerald-400 tracking-wider uppercase">
                Pendidikan Islam Modern
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation links (single line, clean typography with subtle hover) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { id: 'beranda', label: 'Beranda' },
              { id: 'wudhu', label: 'Tata Cara Wudhu' },
              { id: 'salat', label: 'Ibadah' },
              { id: 'quran', label: "Al-Qur'an & Hadits" },
              { id: 'doa', label: 'Doa Harian' },
              { id: 'akhlak', label: 'Akhlak & Sejarah' },
              { id: 'kuis', label: 'Kuis Islami' }
            ].map((item) => {
              const isActive =
                activeTab === item.id ||
                (item.id === 'salat' && ['salat', 'puasa', 'bersuci', 'zakat-haji'].includes(activeTab));
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as ActiveTab)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 font-semibold'
                      : 'text-stone-600 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-stone-100/60 dark:hover:bg-stone-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Functional utility actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors focus:outline-none"
              title="Cari Materi (Ctrl+K)"
              aria-label="Cari Materi"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Checklist Ibadah Button */}
            <button
              onClick={onOpenChecklist}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 rounded-lg transition-colors"
              title="Evaluasi Ibadah Harian"
            >
              <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Checklist</span>
            </button>

            {/* Zakat Calculator */}
            <button
              onClick={onOpenCalculator}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-amber-50 hover:text-amber-800 dark:hover:bg-amber-950/60 dark:hover:text-amber-300 rounded-lg transition-colors"
              title="Kalkulator Zakat"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Zakat</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-stone-600 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors focus:outline-none"
              title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              aria-label="Ubah tema"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Admin Portal Button */}
            <button
              onClick={() => setActiveTab('admin')}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                activeTab === 'admin'
                  ? 'bg-emerald-700 text-white'
                  : 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
              title="Panel Admin Pengelola"
              aria-label="Panel Pengelola"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => setActiveTab('wudhu')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-lg shadow-sm shadow-emerald-900/10 transition-all whitespace-nowrap"
            >
              <span>Mulai Belajar</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar for compact screens */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-2 border-t border-stone-100 dark:border-stone-800 scrollbar-none">
          {[
            { id: 'beranda', label: 'Beranda' },
            { id: 'wudhu', label: 'Wudhu' },
            { id: 'salat', label: 'Ibadah' },
            { id: 'quran', label: "Al-Qur'an" },
            { id: 'doa', label: 'Doa' },
            { id: 'akhlak', label: 'Akhlak' },
            { id: 'kuis', label: 'Kuis' }
          ].map((item) => {
            const isActive =
              activeTab === item.id ||
              (item.id === 'salat' && ['salat', 'puasa', 'bersuci', 'zakat-haji'].includes(activeTab));
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as ActiveTab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-emerald-700 text-white font-semibold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={onOpenChecklist}
            className="px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 bg-stone-100 dark:bg-stone-800 text-emerald-700 dark:text-emerald-400"
          >
            Checklist
          </button>
          <button
            onClick={onOpenCalculator}
            className="px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 bg-stone-100 dark:bg-stone-800 text-amber-700 dark:text-amber-400"
          >
            Kalkulator Zakat
          </button>
        </div>
      </div>
    </header>
  );
};
