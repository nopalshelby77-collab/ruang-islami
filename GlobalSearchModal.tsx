import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { dailyDoaList } from '../data/doaData';
import { quranSurahs, hadithItems } from '../data/quranHadithData';
import { wudhuSteps } from '../data/wudhuData';
import { akhlakTopics } from '../data/akhlakSejarahData';
import { Search, X, ArrowRight, BookOpen, Droplets, Heart, HelpCircle } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: ActiveTab) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search Results
  const results: { title: string; category: string; tab: ActiveTab; snippet: string }[] = [];

  if (trimmed.length > 1) {
    // 1. Wudhu
    wudhuSteps.forEach((w) => {
      if (w.title.toLowerCase().includes(trimmed) || w.explanation.toLowerCase().includes(trimmed)) {
        results.push({
          title: `Wudhu: ${w.title}`,
          category: 'Tata Cara Wudhu',
          tab: 'wudhu',
          snippet: w.explanation.slice(0, 80) + '...'
        });
      }
    });

    // 2. Doa
    dailyDoaList.forEach((d) => {
      if (d.title.toLowerCase().includes(trimmed) || d.translation.toLowerCase().includes(trimmed)) {
        results.push({
          title: d.title,
          category: 'Doa Harian',
          tab: 'doa',
          snippet: `"${d.translation.slice(0, 80)}..."`
        });
      }
    });

    // 3. Quran Surahs
    quranSurahs.forEach((s) => {
      if (s.nameIndo.toLowerCase().includes(trimmed) || s.meaning.toLowerCase().includes(trimmed)) {
        results.push({
          title: `Surah ${s.nameIndo} (${s.nameArabic})`,
          category: "Al-Qur'an",
          tab: 'quran',
          snippet: `Artinya: ${s.meaning} · ${s.totalAyah} Ayat`
        });
      }
    });

    // 4. Hadits
    hadithItems.forEach((h) => {
      if (h.title.toLowerCase().includes(trimmed) || h.translation.toLowerCase().includes(trimmed)) {
        results.push({
          title: h.title,
          category: 'Hadits Shahih',
          tab: 'quran',
          snippet: `${h.narrator}: "${h.translation.slice(0, 80)}..."`
        });
      }
    });

    // 5. Akhlak
    akhlakTopics.forEach((a) => {
      if (a.title.toLowerCase().includes(trimmed) || a.ringkasan.toLowerCase().includes(trimmed)) {
        results.push({
          title: a.title,
          category: 'Akhlak & Adab',
          tab: 'akhlak',
          snippet: a.ringkasan
        });
      }
    });
  }

  const handleSelect = (tab: ActiveTab) => {
    onNavigate(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-xl overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-700 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cari topik (misal: wudhu, makan, salat, ikhlas, hadits)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm bg-transparent border-0 focus:outline-none text-stone-900 dark:text-white"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Stream */}
        <div className="p-4 overflow-y-auto space-y-2">
          {trimmed.length <= 1 ? (
            <div className="text-center py-8 text-xs text-stone-400">
              Ketik minimal 2 karakter untuk mulai mencari di seluruh materi Ruang Islam.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-stone-400">
              Tidak ditemukan hasil untuk "{query}". Coba kata kunci lain seperti "wudhu", "doa", atau "salat".
            </div>
          ) : (
            results.map((res, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(res.tab)}
                className="p-3 bg-stone-50 dark:bg-stone-900/50 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/40 rounded-xl border border-stone-200/70 dark:border-stone-700 cursor-pointer transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mb-0.5">
                    <span>{res.category}</span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                    {res.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">
                    {res.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
