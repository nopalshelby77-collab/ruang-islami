import React, { useState, useEffect } from 'react';
import { QuranSurah, QuranAyah, HadithItem } from '../types';
import { quranSurahs, ayatKursiSpecial, hadithItems } from '../data/quranHadithData';
import { getArabicFontSize, saveArabicFontSize } from '../utils/storage';
import {
  BookOpen,
  Search,
  Bookmark,
  Volume2,
  Share2,
  Sliders,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  Heart
} from 'lucide-react';
import quranBanner from '../assets/images/quran_study_aesthetic_1791821560091.jpg';

interface QuranSectionProps {
  onShare: (title: string, text: string) => void;
}

export const QuranSection: React.FC<QuranSectionProps> = ({ onShare }) => {
  const [activeTab, setActiveTab] = useState<'surah' | 'kursi' | 'hadits'>('surah');
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState<number>(28);
  const [favoriteSurahs, setFavoriteSurahs] = useState<number[]>([1, 112]);
  const [speakingAyahKey, setSpeakingAyahKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [hadithCategory, setHadithCategory] = useState<'Semua' | 'Akhlak' | 'Ibadah' | 'Ilmu' | 'Sosial'>('Semua');

  useEffect(() => {
    setFontSize(getArabicFontSize());
  }, []);

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
    saveArabicFontSize(newSize);
  };

  const selectedSurah = quranSurahs.find((s) => s.number === selectedSurahNumber) || quranSurahs[0];

  const filteredSurahs = quranSurahs.filter(
    (s) =>
      s.nameIndo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.toString().includes(searchQuery)
  );

  const filteredHadiths = hadithItems.filter((h) => {
    const matchCat = hadithCategory === 'Semua' || h.category === hadithCategory;
    const matchSearch =
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.narrator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleFavoriteSurah = (surahNum: number) => {
    if (favoriteSurahs.includes(surahNum)) {
      setFavoriteSurahs(favoriteSurahs.filter((n) => n !== surahNum));
    } else {
      setFavoriteSurahs([...favoriteSurahs, surahNum]);
    }
  };

  const handleSpeak = (key: string, text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (speakingAyahKey === key) {
      setSpeakingAyahKey(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    utterance.onend = () => setSpeakingAyahKey(null);
    utterance.onerror = () => setSpeakingAyahKey(null);
    setSpeakingAyahKey(key);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-stone-200 dark:border-stone-800 shadow-md">
        <img
          src={quranBanner}
          alt="Al-Qur'an dan Hadits"
          className="w-full h-52 sm:h-64 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Kalamullah & As-Sunnah</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Al-Qur'an & Hadits Pilihan
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-2xl mt-1">
            Membaca firman Allah Swt. dengan tulisan Arab yang jelas, terjemahan resmi Kemenag RI, audio tilawah, dan petunjuk sunnah Rasulullah saw.
          </p>
        </div>
      </div>

      {/* Main Tab Controls & Settings Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-stone-200 dark:border-stone-800 gap-4">
        
        {/* Sub-tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl overflow-x-auto">
          {[
            { id: 'surah', label: "Daftar Surah Al-Qur'an" },
            { id: 'kursi', label: 'Ayat Kursi Istimewa' },
            { id: 'hadits', label: 'Hadits Shahih Pilihan' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Font Size Adjuster Control */}
        <div className="flex items-center gap-3 bg-white dark:bg-stone-800 px-3.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm self-start md:self-auto">
          <Sliders className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span className="text-xs text-stone-600 dark:text-stone-300 font-medium whitespace-nowrap">
            Ukuran Tulisan Arab:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleFontSizeChange(Math.max(22, fontSize - 2))}
              className="w-6 h-6 rounded bg-stone-100 dark:bg-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center justify-center hover:bg-stone-200"
              title="Perkecil Font"
            >
              A-
            </button>
            <span className="text-xs font-mono w-7 text-center text-stone-700 dark:text-stone-200">
              {fontSize}px
            </span>
            <button
              onClick={() => handleFontSizeChange(Math.min(42, fontSize + 2))}
              className="w-6 h-6 rounded bg-stone-100 dark:bg-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center justify-center hover:bg-stone-200"
              title="Perbesar Font"
            >
              A+
            </button>
          </div>
        </div>

      </div>

      {/* ================= TAB 1: SURAH VIEW ================= */}
      {activeTab === 'surah' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Surah Selector List */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Surah Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari surah (misal: Al-Fatihah, 112)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white"
              />
            </div>

            {/* Surah List Cards */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredSurahs.map((surah) => {
                const isSelected = selectedSurahNumber === surah.number;
                const isFav = favoriteSurahs.includes(surah.number);
                return (
                  <div
                    key={surah.number}
                    onClick={() => setSelectedSurahNumber(surah.number)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                        : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center ${
                        isSelected
                          ? 'bg-emerald-700 text-white'
                          : 'bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                      }`}>
                        {surah.number}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                          {surah.nameIndo}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400">
                          <span>{surah.meaning}</span>
                          <span aria-hidden="true">·</span>
                          <span>{surah.totalAyah} Ayat</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-arabic text-sm text-stone-700 dark:text-stone-300 font-bold">
                        {surah.nameArabic}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavoriteSurah(surah.number);
                        }}
                        className="p-1 text-stone-400 hover:text-rose-500 transition-colors"
                        title="Tandai Favorit"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Surah Content Viewer */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Surah Detail Header Card */}
            <div className="p-6 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-medium text-amber-300 tracking-wide uppercase">
                  Surah ke-{selectedSurah.number} · {selectedSurah.revelationType}
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-0.5">
                  Surah {selectedSurah.nameIndo} ({selectedSurah.nameArabic})
                </h2>
                <p className="text-xs text-stone-200 mt-1">
                  Artinya: "{selectedSurah.meaning}" · Terdiri dari {selectedSurah.totalAyah} Ayat
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() =>
                    onShare(
                      `Surah ${selectedSurah.nameIndo} - Ruang Islam`,
                      `Baca Surah ${selectedSurah.nameIndo} lengkap dengan teks Arab dan terjemahan di Ruang Islam.`
                    )
                  }
                  className="p-2 bg-emerald-700/80 hover:bg-emerald-700 rounded-lg text-emerald-100 transition-colors"
                  title="Bagikan Surah"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Ayahs Stream */}
            <div className="space-y-4">
              {selectedSurah.ayahs.map((ayah) => {
                const ayahKey = `ayah-${selectedSurah.number}-${ayah.numberInSurah}`;
                const isSpeaking = speakingAyahKey === ayahKey;
                return (
                  <div
                    key={ayah.numberInSurah}
                    className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4 transition-all hover:border-emerald-500/50"
                  >
                    {/* Top ayah bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold flex items-center justify-center">
                          {selectedSurah.number}:{ayah.numberInSurah}
                        </span>
                        <span className="text-xs text-stone-500 dark:text-stone-400">
                          Ayat ke-{ayah.numberInSurah}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleSpeak(ayahKey, ayah.arabic)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isSpeaking
                              ? 'bg-emerald-700 text-white'
                              : 'text-stone-400 hover:text-emerald-700 hover:bg-stone-100 dark:hover:bg-stone-700'
                          }`}
                          title="Dengarkan Murottal Ayat"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleCopy(
                              ayahKey,
                              `${ayah.arabic}\n\n${ayah.latin}\n\n"${ayah.translation}"\n(QS. ${selectedSurah.nameIndo}: ${ayah.numberInSurah})`
                            )
                          }
                          className="p-1.5 text-stone-400 hover:text-emerald-700 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
                          title="Salin Ayat"
                        >
                          {copiedKey === ayahKey ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Arabic Text with Dynamic Font Size */}
                    <p
                      className="font-arabic text-stone-900 dark:text-stone-50 text-right leading-[2.4]"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {ayah.arabic}
                      <span className="inline-block mx-2 text-emerald-700 dark:text-emerald-400 font-mono text-sm">
                        ۝{ayah.numberInSurah}
                      </span>
                    </p>

                    {/* Transliteration & Indonesian Translation */}
                    <div className="pt-3 border-t border-stone-100 dark:border-stone-700 space-y-1">
                      <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300 italic">
                        {ayah.latin}
                      </p>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        <strong>Artinya:</strong> {ayah.translation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      )}

      {/* ================= TAB 2: AYAT KURSI VIEW ================= */}
      {activeTab === 'kursi' && (
        <div className="space-y-6">
          <div className="p-8 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 text-white rounded-3xl border border-emerald-900 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-800/80">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Ayat Paling Agung dalam Al-Qur'an
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {ayatKursiSpecial.surah}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSpeak('ayat-kursi', ayatKursiSpecial.arabic)}
                  className="px-3 py-2 bg-emerald-800/80 hover:bg-emerald-800 rounded-xl text-xs font-semibold text-emerald-200 transition-colors flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Dengarkan Bacaan</span>
                </button>
                <button
                  onClick={() =>
                    handleCopy(
                      'ayat-kursi',
                      `${ayatKursiSpecial.surah}\n\n${ayatKursiSpecial.arabic}\n\n${ayatKursiSpecial.latin}\n\n"${ayatKursiSpecial.translation}"`
                    )
                  }
                  className="px-3 py-2 bg-emerald-800/80 hover:bg-emerald-800 rounded-xl text-xs font-semibold text-emerald-200 transition-colors flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Salin Teks</span>
                </button>
              </div>
            </div>

            {/* Arabic */}
            <div className="py-4 text-right">
              <p
                className="font-arabic text-stone-50 leading-[2.6]"
                style={{ fontSize: `${Math.max(26, fontSize)}px` }}
              >
                {ayatKursiSpecial.arabic}
              </p>
            </div>

            {/* Transliterasi & Arti */}
            <div className="pt-4 border-t border-emerald-800/80 space-y-3">
              <p className="text-xs sm:text-sm text-amber-200 font-medium italic leading-relaxed">
                "{ayatKursiSpecial.latin}"
              </p>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                <strong>Terjemahan Resmi Kemenag:</strong> {ayatKursiSpecial.translation}
              </p>
              <div className="p-4 bg-emerald-900/50 rounded-xl border border-emerald-800 text-xs text-emerald-200 leading-relaxed">
                <strong>Keutamaan Ayat Kursi:</strong> {ayatKursiSpecial.keutamaan}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: HADITS VIEW ================= */}
      {activeTab === 'hadits' && (
        <div className="space-y-6">
          
          {/* Filter Categories for Hadith */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl overflow-x-auto">
              {(['Semua', 'Akhlak', 'Ibadah', 'Ilmu', 'Sosial'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setHadithCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    hadithCategory === cat
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs text-stone-500">
              Menampilkan {filteredHadiths.length} Hadits Shahih
            </div>
          </div>

          {/* Hadith Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredHadiths.map((h) => (
              <div
                key={h.id}
                className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      {h.category} · {h.narrator}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          h.id,
                          `${h.title}\n\n${h.arabic}\n\n"${h.translation}"\n\n(${h.narrator})`
                        )
                      }
                      className="p-1.5 text-stone-400 hover:text-emerald-700 rounded-md transition-colors"
                      title="Salin Hadits"
                    >
                      {copiedKey === h.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 dark:text-white mt-3 mb-2">
                    {h.title}
                  </h3>

                  <p className="text-xl font-arabic text-right text-stone-900 dark:text-stone-100 py-2 leading-relaxed">
                    {h.arabic}
                  </p>

                  <p className="text-xs text-stone-700 dark:text-stone-300 italic leading-relaxed mt-2">
                    {h.translation}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-700 space-y-1">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    <strong>Penjelasan:</strong> {h.explanation}
                  </p>
                  <p className="text-[11px] text-stone-400">
                    Sumber: {h.source}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
