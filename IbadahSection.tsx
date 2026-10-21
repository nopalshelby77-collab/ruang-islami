import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { salatData, puasaData, bersuciData, zakatHajiData } from '../data/ibadahData';
import {
  Clock,
  Moon,
  Sparkles,
  Coins,
  CheckCircle2,
  AlertOctagon,
  Users,
  Compass,
  Volume2,
  Copy,
  Check,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface IbadahSectionProps {
  initialSubTab?: 'salat' | 'puasa' | 'bersuci' | 'zakat-haji';
  setActiveTab: (tab: ActiveTab) => void;
  onOpenZakatCalculator: () => void;
}

export const IbadahSection: React.FC<IbadahSectionProps> = ({
  initialSubTab = 'salat',
  setActiveTab,
  onOpenZakatCalculator
}) => {
  const [currentSubTab, setCurrentSubTab] = useState<'salat' | 'puasa' | 'bersuci' | 'zakat-haji'>(initialSubTab);
  const [salatFilter, setSalatFilter] = useState<'rukun' | 'bacaan' | 'berjamaah' | 'pembatal' | 'pemula'>('rukun');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-1">
          <span>Kurikulum Fikih Ibadah</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
          Materi Pembelajaran Ibadah
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
          Panduan komprehensif rukun Islam: Salat lima waktu, Puasa Ramadan, Thaharah (Bersuci), Zakat, dan Manasik Haji.
        </p>
      </div>

      {/* Segmented Sub-Tab Bar (Functional Button Controls with Clean Styling) */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl max-w-2xl mb-8 overflow-x-auto scrollbar-none">
        {[
          { id: 'salat', label: 'A. Salat 5 Waktu', icon: Clock },
          { id: 'puasa', label: 'B. Puasa Ramadan', icon: Moon },
          { id: 'bersuci', label: 'C. Bersuci & Mandi', icon: Sparkles },
          { id: 'zakat-haji', label: 'D. Zakat & Haji', icon: Coins }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = currentSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: SALAT ================= */}
      {currentSubTab === 'salat' && (
        <div className="space-y-8">
          
          {/* Overview Salat Card */}
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
              Pengertian & Urgensi Salat
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
              {salatData.pengertian}
            </p>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                {salatData.dalil.text}
              </span>
              <p className="text-xl font-arabic text-stone-900 dark:text-stone-100 text-right mb-1">
                {salatData.dalil.arabic}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-300 italic">
                {salatData.dalil.terjemahan}
              </p>
            </div>
          </div>

          {/* Syarat Wajib & Syarat Sah Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
                Syarat Wajib Salat
              </h3>
              <p className="text-xs text-stone-500 mb-3">
                Kondisi yang membuat seseorang terbebani kewajiban menunaikan salat:
              </p>
              <ul className="space-y-2">
                {salatData.syaratWajib.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="text-stone-900 dark:text-white">{idx + 1}. {item.name}: </strong>
                    <span className="text-stone-600 dark:text-stone-300">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
                Syarat Sah Salat
              </h3>
              <p className="text-xs text-stone-500 mb-3">
                Kondisi yang wajib dipenuhi sebelum dan saat salat agar bernilai sah:
              </p>
              <ul className="space-y-2">
                {salatData.syaratSah.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="text-emerald-700 dark:text-emerald-400">✓ {item.name}: </strong>
                    <span className="text-stone-600 dark:text-stone-300">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sub-Filter for Salat: Rukun / Bacaan / Berjamaah / Pembatal / Pemula */}
          <div className="flex items-center gap-2 p-1 bg-stone-200/60 dark:bg-stone-800 rounded-xl overflow-x-auto scrollbar-none">
            {[
              { id: 'rukun', label: '13 Rukun Salat' },
              { id: 'bacaan', label: 'Bacaan Salat Lengkap' },
              { id: 'berjamaah', label: 'Salat Berjamaah' },
              { id: 'pembatal', label: 'Hal yang Membatalkan' },
              { id: 'pemula', label: 'Panduan Salat Pemula' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSalatFilter(f.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  salatFilter === f.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* View: 13 Rukun Salat */}
          {salatFilter === 'rukun' && (
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                13 Rukun Salat Mazhab Syafi'i
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                Rukun adalah bagian hakiki salat yang jika ditinggalkan salah satunya, salat batal dan tidak dapat diganti dengan sujud sahwi saja.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {salatData.rukunSalat.map((r) => (
                  <div key={r.no} className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700/60 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {r.no}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                        {r.name}
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View: Bacaan Salat Lengkap */}
          {salatFilter === 'bacaan' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Lafadz & Terjemahan Bacaan Salat
                </h3>
                <span className="text-xs text-stone-500">Teks Arab Berharakat Jelas</span>
              </div>

              {salatData.bacaanSalat.map((b, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-stone-700">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      {idx + 1}. Gerakan: {b.gerakan}
                    </span>
                    <button
                      onClick={() => copyText(`salat-${idx}`, `${b.gerakan}\n\n${b.arabic}\n\n${b.latin}\n\nArtinya: ${b.arti}`)}
                      className="p-1.5 text-stone-400 hover:text-emerald-700 rounded-md transition-colors"
                      title="Salin Bacaan"
                    >
                      {copiedId === `salat-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-xl sm:text-2xl font-arabic text-stone-900 dark:text-stone-50 text-right leading-relaxed">
                    {b.arabic}
                  </p>

                  <div className="pt-2 border-t border-stone-100 dark:border-stone-700 space-y-1">
                    <p className="text-xs font-medium text-emerald-900 dark:text-emerald-300 italic">
                      {b.latin}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300">
                      <strong>Artinya:</strong> {b.arti}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View: Salat Berjamaah */}
          {salatFilter === 'berjamaah' && (
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Tata Cara & Adab Salat Berjamaah
                </h3>
              </div>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                {salatData.salatBerjamaah.keutamaan}
              </p>
              <div className="space-y-3 pt-2">
                {salatData.salatBerjamaah.ketentuan.map((k, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{k}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View: Pembatal Salat */}
          {salatFilter === 'pembatal' && (
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-600" />
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Hal-Hal yang Membatalkan Salat
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {salatData.pembatalSalat.map((p, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-200/80 dark:border-stone-700/80 text-xs text-stone-700 dark:text-stone-300">
                    <span className="font-bold text-rose-600 mr-1.5">{idx + 1}.</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View: Panduan Pemula */}
          {salatFilter === 'pemula' && (
            <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-4">
              <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-300">
                Panduan Praktis Bagi yang Baru Mulai Belajar Salat
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Bagi pemula, jangan merasa terbebani untuk langsung menghafal seluruh bacaan dalam satu malam. Mulailah dengan:
              </p>
              <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                <p><strong>1. Kuasai Urutan Gerakan:</strong> Berdiri, Takbiratul Ihram, Ruku', I'tidal, Dua Sujud, Duduk antara dua sujud, Tasyahhud, Salam.</p>
                <p><strong>2. Hafalkan Surah Al-Fatihah:</strong> Al-Fatihah adalah rukun fardhu wajib di setiap rakaat.</p>
                <p><strong>3. Jika Belum Hafal Doa Iftitah & Tasyahhud Panjang:</strong> Boleh membaca dzikir tasbih (Subhaanallaah), tahmid (Alhamdulillaah), dan tahlil (Laa ilaaha illallaah) sambil terus bertahap menghafalkan bacaan yang sempurna.</p>
                <p><strong>4. Utamakan Tuma'ninah:</strong> Berhenti sejenak sekadar ukuran membaca tasbih di setiap perpindahan rukun agar salat khusyu'.</p>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ================= TAB 2: PUASA ================= */}
      {currentSubTab === 'puasa' && (
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white">
              Pengertian & Hukum Puasa
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {puasaData.pengertian} Hukumnya adalah <strong>{puasaData.hukum}</strong>.
            </p>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-400 block mb-1">
                {puasaData.dalil.surah}
              </span>
              <p className="text-xl font-arabic text-stone-900 dark:text-stone-100 text-right mb-1">
                {puasaData.dalil.arabic}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-300 italic">
                {puasaData.dalil.terjemahan}
              </p>
            </div>
          </div>

          {/* Niat Puasa Box */}
          <div className="p-6 bg-gradient-to-br from-emerald-900 to-stone-900 text-white rounded-2xl border border-emerald-800 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Lafaz Niat Puasa Ramadan
            </span>
            <p className="text-2xl font-arabic text-right py-2 text-stone-50">
              {puasaData.niatRamadan.arabic}
            </p>
            <p className="text-xs text-amber-200 italic">
              "{puasaData.niatRamadan.latin}"
            </p>
            <p className="text-xs text-stone-300">
              <strong>Artinya:</strong> {puasaData.niatRamadan.terjemahan}
            </p>
            <p className="text-[11px] text-emerald-300/80 pt-2 border-t border-emerald-800">
              * {puasaData.niatRamadan.penjelasan}
            </p>
          </div>

          {/* Pembatal Puasa & Sunah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
                Hal-Hal yang Membatalkan Puasa
              </h3>
              <ul className="space-y-2">
                {puasaData.pembatalPuasa.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
                Sunah-Sunah Saat Berpuasa
              </h3>
              <ul className="space-y-2">
                {puasaData.sunahPuasa.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zakat Fitrah Dasar Card */}
          <div className="p-5 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
            <h4 className="font-bold text-amber-900 dark:text-amber-300">
              Penjelasan Dasar Zakat Fitrah
            </h4>
            <p className="text-stone-700 dark:text-stone-300">
              {puasaData.zakatFitrahDasar.pengertian} <strong>Kadar wajib:</strong> {puasaData.zakatFitrahDasar.kadar}.
            </p>
          </div>
        </div>
      )}

      {/* ================= TAB 3: BERSUCI (THAHARAH) ================= */}
      {currentSubTab === 'bersuci' && (
        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white">
              Pengertian Thaharah & Istinja
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {bersuciData.thaharah.pengertian}
            </p>
            <p className="text-xs text-emerald-800 dark:text-emerald-400 font-medium">
              Alat bersuci sah: {bersuciData.thaharah.alatBersuci}
            </p>
          </div>

          {/* 3 Jenis Najis */}
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-4">
              Tiga Jenis Najis dan Cara Menyucikannya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bersuciData.najis.map((n, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-2">
                  <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                    {n.kategori}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    <strong>Contoh:</strong> {n.contoh}
                  </p>
                  <div className="pt-2 border-t border-stone-100 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200">
                    <strong>Cara Menyucikan:</strong> {n.caraMenyucikan}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mandi Wajib & Tayamum Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Mandi Wajib */}
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                Tata Cara Mandi Wajib (Ghusl)
              </h3>
              
              {/* Niat Mandi */}
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Niat Mandi Junub:</span>
                <p className="text-lg font-arabic text-right py-1">
                  {bersuciData.mandiWajib.niatMandiJunub.arabic}
                </p>
                <p className="text-xs italic text-stone-600 dark:text-stone-300">
                  {bersuciData.mandiWajib.niatMandiJunub.latin}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-700 dark:text-stone-200 block mb-1">
                  Sebab-Sebab Wajib Mandi:
                </span>
                <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                  {bersuciData.mandiWajib.sebab.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-emerald-600">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-700 dark:text-stone-200 block mb-1">
                  Urutan Sunah Mandi:
                </span>
                <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                  {bersuciData.mandiWajib.tataCaraSunah.map((tc, idx) => (
                    <li key={idx}>
                      {idx + 1}. {tc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tayamum */}
            <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                Tata Cara Tayamum (Pengganti Air)
              </h3>

              {/* Niat Tayamum */}
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Niat Tayamum:</span>
                <p className="text-lg font-arabic text-right py-1">
                  {bersuciData.tayamum.niat.arabic}
                </p>
                <p className="text-xs italic text-stone-600 dark:text-stone-300">
                  {bersuciData.tayamum.niat.latin}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-700 dark:text-stone-200 block mb-1">
                  Sebab Diperbolehkannya Tayamum:
                </span>
                <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                  {bersuciData.tayamum.sebabBoleh.map((sb, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-amber-600">•</span>
                      <span>{sb}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-700 dark:text-stone-200 block mb-1">
                  Praktik Langkah Tayamum:
                </span>
                <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                  {bersuciData.tayamum.tataCara.map((tc, idx) => (
                    <li key={idx}>
                      {idx + 1}. {tc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= TAB 4: ZAKAT & HAJI ================= */}
      {currentSubTab === 'zakat-haji' && (
        <div className="space-y-8">
          
          {/* Zakat Card */}
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                  Pengertian & Ketentuan Zakat
                </h2>
                <p className="text-xs text-stone-500">
                  Kewajiban mensucikan harta bagi yang telah mencapai nisab dan haul.
                </p>
              </div>
              <button
                onClick={onOpenZakatCalculator}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 shrink-0"
              >
                <Coins className="w-4 h-4" />
                <span>Buka Kalkulator Zakat</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {zakatHajiData.zakat.jenisZakatMal.map((z, idx) => (
                <div key={idx} className="p-4 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1.5 text-xs">
                  <h4 className="font-bold text-stone-900 dark:text-white">
                    {z.nama}
                  </h4>
                  <p className="text-emerald-700 dark:text-emerald-400 font-semibold">
                    Nisab: {z.nisab} · Kadar: {z.kadar}
                  </p>
                  <p className="text-stone-600 dark:text-stone-400">
                    <strong>Ketentuan:</strong> {z.haul}
                  </p>
                  <p className="text-stone-500 dark:text-stone-400 italic pt-1 border-t border-stone-200 dark:border-stone-700">
                    {z.contoh}
                  </p>
                </div>
              ))}
            </div>

            {/* 8 Asnaf */}
            <div className="pt-2">
              <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-2">
                8 Golongan Penerima Zakat (8 Asnaf - QS. At-Taubah: 60):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {zakatHajiData.zakat.asnaf.map((asnaf, idx) => (
                  <div key={idx} className="p-2 bg-stone-100 dark:bg-stone-700/50 rounded-lg text-xs text-stone-700 dark:text-stone-200 text-center">
                    {asnaf}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Haji & Umrah Card */}
          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                Ibadah Haji & Umrah
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
                {zakatHajiData.hajiUmrah.pengertianHaji}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Rukun Haji */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
                  6 Rukun Haji (Tidak Sah Haji Tanpanya):
                </h3>
                <div className="space-y-2">
                  {zakatHajiData.hajiUmrah.rukunHaji.map((r) => (
                    <div key={r.no} className="p-2.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {r.no}
                      </span>
                      <div className="text-xs">
                        <strong className="text-stone-900 dark:text-white">{r.name}: </strong>
                        <span className="text-stone-600 dark:text-stone-300">{r.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urutan Manasik */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-3">
                  Urutan Kronologis Pelaksanaan Haji:
                </h3>
                <div className="space-y-2">
                  {zakatHajiData.hajiUmrah.urutanPelaksanaan.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300">
                      <strong className="text-stone-900 dark:text-white">Langkah {idx + 1}: </strong>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* Bottom CTA to Quiz */}
      <div className="mt-12 p-6 bg-stone-100 dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-900 dark:text-white">
            Ingin Menguji Pemahaman Materi Ibadah?
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Ikuti kuis interaktif dengan pembahasan rujukan dalil shahih.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('kuis')}
          className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0"
        >
          <span>Mulai Kuis Ibadah</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
