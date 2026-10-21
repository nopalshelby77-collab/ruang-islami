import React from 'react';
import { ActiveTab } from '../types';
import { ShieldCheck, BookOpen, Heart, HelpCircle, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSaran: () => void;
  onOpenPanduan: () => void;
  onOpenChecklist: () => void;
  onOpenZakat: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenSaran,
  onOpenPanduan,
  onOpenChecklist,
  onOpenZakat
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-amber-300 shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C12.34 20 12.67 19.98 13 19.94C10.15 19.11 8 16.27 8 12.89C8 9.5 10.15 6.66 13 5.83C12.67 5.79 12.34 5.77 12 4Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ruang Islam
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              <em>Belajar Islam, Memperkuat Iman, Mengamalkan Kebaikan.</em> Platform edukasi keagamaan Islam yang komprehensif, terpercaya, dan interaktif guna mempermudah pemahaman fikih ibadah, Al-Qur'an, doa harian, dan akhlak mulia.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p>Email Redaksi: <span className="text-stone-300 font-mono">kontak@ruangislam.com</span></p>
              <p>Rujukan Fikih: Mazhab Asy-Syafi'i & Jumhur Ulama Ahlussunnah wal Jama'ah</p>
            </div>
          </div>

          {/* Quick Nav 1: Materi Utama */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Materi Pembelajaran
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('wudhu')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Tata Cara Berwudhu
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('salat')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Panduan Salat 5 Waktu
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('puasa')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Ketentuan Puasa Ramadan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('bersuci')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Thaharah, Najis & Tayamum
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('zakat-haji')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Zakat Mal & Manasik Haji
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav 2: Al-Qur'an & Akhlak */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kalamullah & Karakter
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('quran')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Al-Qur'an & Terjemahan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('doa')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Kumpulan Doa Harian
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('akhlak')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Akhlak Mulia & Medsos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('akhlak')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Sirah Nabi & Para Sahabat
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('kuis')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline"
                >
                  Kuis Penilaian Otomatis
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav 3: Fitur & Dukungan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Fitur & Partisipasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline text-left"
                >
                  Checklist Evaluasi Ibadah
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenZakat}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline text-left"
                >
                  Kalkulator Zakat Interaktif
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSaran}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline text-left flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kirim Kritik & Saran</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPanduan}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline text-left flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Panduan Publikasi Online</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('admin')}
                  className="hover:text-emerald-400 transition-colors text-stone-400 hover:underline text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Panel Admin Pengelola</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Ruang Islam. Didedikasikan untuk pendidikan Islam yang mudah diakses dan bermanfaat bagi umat.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Bebas Iklan Komersial</span>
            <span aria-hidden="true">·</span>
            <span>Rujukan Al-Qur'an & Sunnah Shahih</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
