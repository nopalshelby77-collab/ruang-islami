import React, { useState } from 'react';
import { dailyDoaList } from '../data/doaData';
import { getBookmarkedDoa, saveBookmarkedDoa } from '../utils/storage';
import {
  Heart,
  Copy,
  Check,
  Search,
  Volume2,
  Sparkles,
  Share2,
  Bookmark
} from 'lucide-react';

interface DoaSectionProps {
  onShare: (title: string, text: string) => void;
}

export const DoaSection: React.FC<DoaSectionProps> = ({ onShare }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favoriteDoas, setFavoriteDoas] = useState<string[]>(getBookmarkedDoa());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const categories = ['Semua', 'Favorit', 'Harian', 'Salat', 'Rumah & Perjalanan', 'Keluarga', 'Belajar'];

  const toggleFavorite = (doaId: string) => {
    let updated: string[];
    if (favoriteDoas.includes(doaId)) {
      updated = favoriteDoas.filter((id) => id !== doaId);
    } else {
      updated = [...favoriteDoas, doaId];
    }
    setFavoriteDoas(updated);
    saveBookmarkedDoa(updated);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (speakingId === id) {
      setSpeakingId(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const filteredDoas = dailyDoaList.filter((doa) => {
    const matchCat =
      selectedCategory === 'Semua'
        ? true
        : selectedCategory === 'Favorit'
        ? favoriteDoas.includes(doa.id)
        : doa.category === selectedCategory;

    const matchSearch =
      doa.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doa.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doa.latin.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchSearch;
  });

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-1">
            <span>Adab & Doa Mustajab</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Kumpulan Doa Harian
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
            Lengkap dengan teks Arab, transliterasi latin, terjemahan Indonesia, sumber hadits/ayat, tombol salin, dan fitur simpan favorit.
          </p>
        </div>

        <div className="text-xs text-stone-500 flex items-center gap-2">
          <Bookmark className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>{favoriteDoas.length} Doa Disimpan</span>
        </div>
      </div>

      {/* Filter Category & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative sm:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari doa (misal: makan, tidur)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white"
          />
        </div>

      </div>

      {/* Doa Cards Grid */}
      {filteredDoas.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700">
          <p className="text-sm text-stone-500">
            Tidak ada doa yang cocok dengan pencarian atau filter yang dipilih.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDoas.map((doa) => {
            const isFav = favoriteDoas.includes(doa.id);
            const isSpeaking = speakingId === doa.id;
            return (
              <div
                key={doa.id}
                className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-all"
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      {doa.category}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleSpeak(doa.id, doa.arabic)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSpeaking
                            ? 'bg-emerald-700 text-white'
                            : 'text-stone-400 hover:text-emerald-700 hover:bg-stone-100 dark:hover:bg-stone-700'
                        }`}
                        title="Dengarkan Lafal Doa"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() =>
                          handleCopy(
                            doa.id,
                            `${doa.title}\n\n${doa.arabic}\n\n${doa.latin}\n\n"${doa.translation}"\n\nSumber: ${doa.source}`
                          )
                        }
                        className="p-1.5 text-stone-400 hover:text-emerald-700 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
                        title="Salin Teks Doa"
                      >
                        {copiedId === doa.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => toggleFavorite(doa.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-500 rounded-lg transition-colors"
                        title={isFav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isFav ? 'fill-rose-500 text-rose-500' : 'hover:text-rose-400'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-white mt-3 mb-2">
                    {doa.title}
                  </h3>

                  {/* Arabic Text */}
                  <p className="text-xl sm:text-2xl font-arabic text-right text-stone-900 dark:text-stone-50 py-3 leading-[2.2]">
                    {doa.arabic}
                  </p>

                  {/* Transliteration & Indonesian Translation */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-700">
                    <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300 italic">
                      {doa.latin}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      <strong>Artinya:</strong> "{doa.translation}"
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-700 text-xs space-y-1">
                  <p className="text-stone-500 dark:text-stone-400">
                    <strong>Adab & Konteks:</strong> {doa.context}
                  </p>
                  <p className="text-[11px] text-stone-400 dark:text-stone-500 font-mono">
                    Rujukan: {doa.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
