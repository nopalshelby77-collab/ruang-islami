import React, { useState } from 'react';
import {
  akhlakTopics,
  sirahNabawiyah,
  khulafaurRasyidin,
  nabiRasulSummary
} from '../data/akhlakSejarahData';
import {
  Users,
  Compass,
  Heart,
  BookOpen,
  Award,
  Scroll,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import sejarahBanner from '../assets/images/sejarah_nabawi_banner_1791821572969.jpg';

export const AkhlakSejarahSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'akhlak' | 'sirah' | 'khulafa' | 'nabi'>('akhlak');
  const [searchNabi, setSearchNabi] = useState('');

  const filteredNabi = nabiRasulSummary.filter(
    (n) =>
      n.nama.toLowerCase().includes(searchNabi.toLowerCase()) ||
      n.mukjizat.toLowerCase().includes(searchNabi.toLowerCase())
  );

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-stone-200 dark:border-stone-800 shadow-md">
        <img
          src={sejarahBanner}
          alt="Akhlak dan Sejarah Islam"
          className="w-full h-52 sm:h-64 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
            <Compass className="w-4 h-4" />
            <span>Karakter Mulia & Jejak Peradaban</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Akhlak Islam & Sejarah Kebudayaan Islam
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-2xl mt-1">
            Membangun kepribadian luhur melalui teladan akhlak Al-Qur'an, Sirah Nabawiyah, keteladanan Khulafaur Rasyidin, dan kisah para Nabi.
          </p>
        </div>
      </div>

      {/* Sub Tabs Bar */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-8 overflow-x-auto scrollbar-none max-w-3xl">
        {[
          { id: 'akhlak', label: '1. Akhlak & Adab Islami' },
          { id: 'sirah', label: '2. Sirah Nabi Muhammad saw.' },
          { id: 'khulafa', label: '3. Khulafaur Rasyidin' },
          { id: 'nabi', label: '4. 25 Nabi & Rasul' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              subTab === tab.id
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= SUBTAB 1: AKHLAK ================= */}
      {subTab === 'akhlak' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {akhlakTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      {topic.kategori}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-white mt-3 mb-2">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                    {topic.ringkasan}
                  </p>

                  {/* Dalil Card */}
                  <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/60 dark:border-emerald-800/60 space-y-1.5">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block">
                      Landasan Dalil: {topic.dalil.surah}
                    </span>
                    <p className="text-base font-arabic text-stone-900 dark:text-stone-100 text-right py-1">
                      {topic.dalil.arabic}
                    </p>
                    <p className="text-xs italic text-stone-600 dark:text-stone-300">
                      {topic.dalil.arti}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-700">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-2">
                    Poin Pengamalan Sehari-hari:
                  </span>
                  <ul className="space-y-1.5">
                    {topic.poinPenting.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= SUBTAB 2: SIRAH NABI ================= */}
      {subTab === 'sirah' && (
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm mb-6">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
              Kronologi Sirah Nabawiyah: Perjalanan Hidup Rasulullah saw.
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Mempelajari Sirah Nabawiyah membantu kita memahami konteks turunnya Al-Qur'an, strategi dakwah, kelembutan akhlak, serta keteguhan iman para sahabat dalam menghadapi ujian.
            </p>
          </div>

          <div className="space-y-4">
            {sirahNabawiyah.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
                  <span>Fase {idx + 1} · {item.era}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= SUBTAB 3: KHULAFAUR RASYIDIN ================= */}
      {subTab === 'khulafa' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {khulafaurRasyidin.map((k, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    Khalifah ke-{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white mt-1">
                    {k.nama}
                  </h3>
                  <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200/50 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-300 mt-2">
                    Gelar: {k.gelar}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-700">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                    Jasa Besar & Keteladanan:
                  </span>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {k.jasa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= SUBTAB 4: 25 NABI & RASUL ================= */}
      {subTab === 'nabi' && (
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                Daftar 25 Nabi dan Rasul yang Wajib Diketahui
              </h3>
              <p className="text-xs text-stone-500">
                Lengkap dengan ringkasan keteladanan dan mukjizat atas izin Allah.
              </p>
            </div>

            <input
              type="text"
              placeholder="Cari nama nabi..."
              value={searchNabi}
              onChange={(e) => setSearchNabi(e.target.value)}
              className="px-3.5 py-1.5 text-xs bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white sm:w-60"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredNabi.map((n) => (
              <div
                key={n.no}
                className="p-4 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm flex items-start gap-3"
              >
                <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {n.no}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                    Nabi {n.nama}
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                    {n.mukjizat}
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
