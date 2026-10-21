import React from 'react';
import { ActiveTab } from '../types';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import heroImage from '../assets/images/hero_ruang_islam_1791821529650.jpg';

interface HeroSectionProps {
  onStartLearning: () => void;
  onExploreCategories: () => void;
  onOpenChecklist: () => void;
  onOpenZakat: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onExploreCategories,
  onOpenChecklist,
  onOpenZakat,
  setActiveTab
}) => {
  return (
    <div className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split: Editorial Value Pitch & Architectural Image Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Proposition, and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tagline text kicker (no pill badge) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-400 uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Belajar Islam · Memperkuat Iman · Mengamalkan Kebaikan</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              Belajar Islam Jadi <span className="text-emerald-700 dark:text-emerald-400">Lebih Mudah</span>, Sahih, dan Menenangkan
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
              Platform edukasi Islam modern dan interaktif yang dirancang bagi pelajar, santri, dan masyarakat umum. Pelajari tata cara wudhu interaktif, tuntunan salat lengkap, tilawah Al-Qur'an berharakat rapi, doa harian, sirah nabi, hingga evaluasi ibadah pribadi tanpa iklan yang mengganggu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-xl shadow-md shadow-emerald-900/15 transition-all"
              >
                <span>Mulai Belajar Wudhu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCategories}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Jelajahi Semua Materi</span>
              </button>
            </div>

            {/* Trust points / Proof strip (quiet typography, no fake metrics) */}
            <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Rujukan Dalil Al-Qur'an & Sunnah</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Simulasi & Kuis Interaktif</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Bebas Iklan & Terbuka untuk Umum</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-900/10 border border-stone-200 dark:border-stone-800 group">
              <img
                src={heroImage}
                alt="Perpustakaan Akademik Islam Modern Ruang Islam"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Gradient Scrim at bottom with highlighted Ayat */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Kutipan Ayat Pilihan Hari Ini
                </p>
                <p className="text-sm font-arabic leading-relaxed text-stone-100 text-right mb-1">
                  وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
                </p>
                <p className="text-xs text-stone-200 line-clamp-2">
                  "Dan apabila hamba-hamba-Ku bertanya kepadamu tentang Aku, maka sesungguhnya Aku adalah dekat. Aku mengabulkan permohonan orang yang berdoa apabila ia berdoa kepada-Ku."
                </p>
                <span className="text-[11px] text-amber-200/90 font-medium mt-1">
                  QS. Al-Baqarah ayat 186
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Quick Feature Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Tips Ibadah Harian */}
          <div className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-800 shadow-sm transition-all hover:border-emerald-500/50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Tips Ibadah: Menyempurnakan Wudhu
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Basuhlah sela-sela jari tangan dan kaki serta pastikan air mutlak mengenai seluruh bagian tumit. Rasulullah saw. menganjurkan untuk hemat air walau berada di tepi sungai yang mengalir.
            </p>
            <button
              onClick={() => setActiveTab('wudhu')}
              className="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              Lihat panduan wudhu lengkap &rarr;
            </button>
          </div>

          {/* Card 2: Hadits Pembuka Hari Ini */}
          <div className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-800 shadow-sm transition-all hover:border-emerald-500/50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Hadits: Keutamaan Menuntut Ilmu
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed italic">
              "Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
            </p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-stone-400 text-[11px]">HR. Muslim No. 2699</span>
              <button
                onClick={() => setActiveTab('quran')}
                className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                Koleksi hadits shahih &rarr;
              </button>
            </div>
          </div>

          {/* Card 3: Evaluasi & Kalkulator Interaktif */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white shadow-sm border border-emerald-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                Fitur Mandiri
              </span>
              <span className="text-[11px] text-emerald-300">Tersimpan di Browser</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Catatan Ibadah & Zakat Pribadi
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed mb-3">
              Pantau istiqamah salat, tilawah, sedekah harianmu, atau hitung zakat penghasilan dan emas secara transparan.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenChecklist}
                className="px-3 py-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 rounded-lg text-white transition-colors"
              >
                Buka Checklist
              </button>
              <button
                onClick={onOpenZakat}
                className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-lg transition-colors"
              >
                Hitung Zakat
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
