import React from 'react';
import { ActiveTab } from '../types';
import {
  Droplets,
  Clock,
  Moon,
  Coins,
  BookOpen,
  Heart,
  Users,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Flame
} from 'lucide-react';

interface CategorySectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ setActiveTab }) => {
  const categories = [
    {
      id: 'wudhu',
      title: 'Tata Cara Berwudhu',
      tag: 'Panduan Praktis',
      description: 'Langkah demi langkah bersuci dengan rukun, sunah, doa setelah wudhu, dan pembatal wudhu.',
      icon: Droplets,
      topicsCount: 9,
      actionTab: 'wudhu' as ActiveTab,
      color: 'emerald'
    },
    {
      id: 'salat',
      title: 'Salat Fardhu & Berjamaah',
      tag: 'Tiang Agama',
      description: 'Syarat sah, 13 rukun salat, bacaan dari takbir hingga salam dengan teks Arab dan artinya.',
      icon: Clock,
      topicsCount: 13,
      actionTab: 'salat' as ActiveTab,
      color: 'emerald'
    },
    {
      id: 'puasa',
      title: 'Puasa Ramadan & Sunah',
      tag: 'Bulan Suci',
      description: 'Hukum, niat puasa, hal-hal pembatal, sunah berpuasa, dan penjelasan zakat fitrah.',
      icon: Moon,
      topicsCount: 7,
      actionTab: 'puasa' as ActiveTab,
      color: 'amber'
    },
    {
      id: 'bersuci',
      title: 'Bersuci & Thaharah',
      tag: 'Kebersihan Diri',
      description: 'Pengertian istinja, 3 jenis najis & cara menyucikannya, mandi wajib, serta tayamum.',
      icon: Sparkles,
      topicsCount: 5,
      actionTab: 'bersuci' as ActiveTab,
      color: 'emerald'
    },
    {
      id: 'zakat-haji',
      title: 'Zakat & Manasik Haji',
      tag: 'Rukun Islam 4 & 5',
      description: 'Kalkulator zakat mal, nisab emas 85g, syarat wajib haji, dan urutan manasik haji & umrah.',
      icon: Coins,
      topicsCount: 8,
      actionTab: 'zakat-haji' as ActiveTab,
      color: 'amber'
    },
    {
      id: 'quran',
      title: "Al-Qur'an & Hadits Sahih",
      tag: 'Kalamullah',
      description: 'Teks Arab berharakat rapi, terjemahan Kemenag RI, audio tilawah, dan koleksi hadits.',
      icon: BookOpen,
      topicsCount: 12,
      actionTab: 'quran' as ActiveTab,
      color: 'emerald'
    },
    {
      id: 'doa',
      title: 'Kumpulan Doa Harian',
      tag: 'Senjata Mukmin',
      description: 'Doa makan, tidur, keluar rumah, orang tua, dengan teks Arab, latin, dan tombol salin.',
      icon: Heart,
      topicsCount: 13,
      actionTab: 'doa' as ActiveTab,
      color: 'emerald'
    },
    {
      id: 'akhlak',
      title: 'Akhlak & Sejarah Islam',
      tag: 'Karakter & Sirah',
      description: 'Adab berbakti, amanah, etika medsos, Sirah Nabawiyah, sahabat, dan 25 Nabi Rasul.',
      icon: Users,
      topicsCount: 16,
      actionTab: 'akhlak' as ActiveTab,
      color: 'amber'
    },
    {
      id: 'kuis',
      title: 'Kuis Islami Interaktif',
      tag: 'Uji Pemahaman',
      description: 'Pilihan ganda dengan kunci jawaban, pembahasan rujukan dalil, dan perolehan skor.',
      icon: HelpCircle,
      topicsCount: 12,
      actionTab: 'kuis' as ActiveTab,
      color: 'emerald'
    }
  ];

  return (
    <section id="categories-section" className="py-12 sm:py-16 bg-stone-100/60 dark:bg-stone-900/40 border-y border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <span>Kurikulum Pembelajaran</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Kategori Materi Ruang Islam
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
              Pilih bidang keilmuan yang ingin dipelajari secara bertahap dengan penjelasan yang mudah dipahami.
            </p>
          </div>

          <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
            <span>9 Kategori Utama</span>
            <span aria-hidden="true">·</span>
            <span>Berlandaskan Mazhab Syafi'i & Jumhur</span>
          </div>
        </div>

        {/* Categories Grid (Anti-slop, clean single-elevation cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab(cat.actionTab)}
                className="group relative p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700/80 shadow-sm hover:shadow-md hover:border-emerald-600/60 dark:hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Unboxed Metadata (Zero-Pill Compliance) */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                      <span>{cat.tag}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{cat.topicsCount} Bab</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mt-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-700/60 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span>Mulai Pelajari</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Popular & Recent Materials Row */}
        <div className="mt-14 pt-10 border-t border-stone-200 dark:border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Materi Terpopuler */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Materi Paling Sering Dipelajari
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'Langkah Demi Langkah Berwudhu (Rukun & Sunah)',
                    cat: 'Wudhu',
                    readTime: '4 menit baca',
                    tab: 'wudhu' as ActiveTab
                  },
                  {
                    title: 'Bacaan Salat 5 Waktu Lengkap dari Takbir hingga Salam',
                    cat: 'Salat',
                    readTime: '6 menit baca',
                    tab: 'salat' as ActiveTab
                  },
                  {
                    title: 'Ayat Kursi: Teks Arab, Latin, Terjemahan & Keutamaan',
                    cat: "Al-Qur'an",
                    readTime: '3 menit baca',
                    tab: 'quran' as ActiveTab
                  },
                  {
                    title: 'Doa Sebelum dan Sesudah Makan serta Adabnya',
                    cat: 'Doa Harian',
                    readTime: '2 menit baca',
                    tab: 'doa' as ActiveTab
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(item.tab)}
                    className="p-3.5 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-600 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-stone-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                        <span>{item.cat}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Materi Terkini & Tips Belajar */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Materi Terbaru & Panduan Praktis
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'Kisah Sahabat Nabi: Abu Bakar & Standarisasi Al-Qur\'an',
                    cat: 'Sejarah Islam',
                    readTime: '5 menit baca',
                    tab: 'akhlak' as ActiveTab
                  },
                  {
                    title: 'Panduan Tayamum di Kendaraan / Perjalanan Jauh',
                    cat: 'Bersuci',
                    readTime: '4 menit baca',
                    tab: 'bersuci' as ActiveTab
                  },
                  {
                    title: 'Adab Menggunakan Media Sosial Menurut Syariat Islam',
                    cat: 'Akhlak',
                    readTime: '4 menit baca',
                    tab: 'akhlak' as ActiveTab
                  },
                  {
                    title: 'Cara Menghitung Zakat Emas & Profesi Sesuai Nisab',
                    cat: 'Zakat',
                    readTime: '3 menit baca',
                    tab: 'zakat-haji' as ActiveTab
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(item.tab)}
                    className="p-3.5 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-600 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-stone-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                        <span>{item.cat}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
