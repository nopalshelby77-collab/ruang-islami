import React, { useState } from 'react';
import { X, Coins, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profesi' | 'emas' | 'perdagangan'>('profesi');
  const [goldPrice, setGoldPrice] = useState<number>(1450000); // Rp per gram emas
  
  // State Profesi
  const [gajiBulanan, setGajiBulanan] = useState<number>(12000000);
  const [pendapatanLain, setPendapatanLain] = useState<number>(0);
  const [pengeluaranPokok, setPengeluaranPokok] = useState<number>(0);

  // State Emas
  const [beratEmasGram, setBeratEmasGram] = useState<number>(90);

  // State Perdagangan / Tabungan
  const [modalDagang, setModalDagang] = useState<number>(150000000);
  const [piutangLancar, setPiutangLancar] = useState<number>(10000000);
  const [hutangJatuhTempo, setHutangJatuhTempo] = useState<number>(20000000);

  if (!isOpen) return null;

  const nisabTahunan = 85 * goldPrice; // 85 gram emas
  const nisabBulanan = nisabTahunan / 12;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Calculations
  let isWajib = false;
  let totalHartaHitung = 0;
  let jumlahZakat = 0;

  if (activeTab === 'profesi') {
    const totalBersihBulanan = gajiBulanan + pendapatanLain - pengeluaranPokok;
    totalHartaHitung = totalBersihBulanan;
    isWajib = totalBersihBulanan >= nisabBulanan;
    jumlahZakat = isWajib ? totalBersihBulanan * 0.025 : 0;
  } else if (activeTab === 'emas') {
    totalHartaHitung = beratEmasGram * goldPrice;
    isWajib = beratEmasGram >= 85;
    jumlahZakat = isWajib ? beratEmasGram * 0.025 * goldPrice : 0;
  } else if (activeTab === 'perdagangan') {
    const totalAsetBersih = modalDagang + piutangLancar - hutangJatuhTempo;
    totalHartaHitung = totalAsetBersih;
    isWajib = totalAsetBersih >= nisabTahunan;
    jumlahZakat = isWajib ? totalAsetBersih * 0.025 : 0;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                Kalkulator Zakat Mal & Profesi
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Perhitungan transparan berlandaskan nisab syariat 85 gram emas (2,5%).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Harga Emas Setting */}
          <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-stone-800 dark:text-stone-200 block">
                Asumsi Harga Emas Terkini:
              </span>
              <span className="text-stone-500">
                Nisab Emas 85g = {formatRupiah(nisabTahunan)} / thn ({formatRupiah(nisabBulanan)} / bln)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-stone-500">Rp</span>
              <input
                type="number"
                value={goldPrice}
                onChange={(e) => setGoldPrice(Number(e.target.value) || 0)}
                className="w-32 px-2.5 py-1 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-lg text-right font-mono text-stone-900 dark:text-white"
              />
              <span className="text-stone-500">/ gram</span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-700 rounded-xl">
            {[
              { id: 'profesi', label: 'Zakat Penghasilan' },
              { id: 'emas', label: 'Zakat Emas' },
              { id: 'perdagangan', label: 'Zakat Tabungan / Usaha' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === t.id
                    ? 'bg-white dark:bg-stone-800 text-amber-700 dark:text-amber-400 shadow-sm'
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Form Content: Profesi */}
          {activeTab === 'profesi' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Gaji / Pendapatan Pokok Per Bulan:
                </label>
                <input
                  type="number"
                  value={gajiBulanan}
                  onChange={(e) => setGajiBulanan(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Pendapatan Lainnya / Bonus (Opsional):
                </label>
                <input
                  type="number"
                  value={pendapatanLain}
                  onChange={(e) => setPendapatanLain(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Pengeluaran Kebutuhan Pokok Bulanan (Opsional):
                </label>
                <input
                  type="number"
                  value={pengeluaranPokok}
                  onChange={(e) => setPengeluaranPokok(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Form Content: Emas */}
          {activeTab === 'emas' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Total Berat Emas Simpanan (yang telah dimiliki $\ge$ 1 tahun / Haul):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={beratEmasGram}
                    onChange={(e) => setBeratEmasGram(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                  />
                  <span className="text-xs text-stone-500 font-bold shrink-0">Gram</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  * Emas perhiasan yang dipakai wajar sehari-hari tidak dikenakan zakat menurut jumhur ulama.
                </p>
              </div>
            </div>
          )}

          {/* Form Content: Perdagangan */}
          {activeTab === 'perdagangan' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Modal Dagang Berputar / Nilai Barang Dagangan / Saldo Tabungan:
                </label>
                <input
                  type="number"
                  value={modalDagang}
                  onChange={(e) => setModalDagang(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Piutang Lancar (Uang yang diharapkan tertagih):
                </label>
                <input
                  type="number"
                  value={piutangLancar}
                  onChange={(e) => setPiutangLancar(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Hutang Usaha Jatuh Tempo (Pengurang):
                </label>
                <input
                  type="number"
                  value={hutangJatuhTempo}
                  onChange={(e) => setHutangJatuhTempo(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl font-mono text-stone-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Result Calculation Banner */}
          <div className={`p-5 rounded-2xl border ${
            isWajib
              ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
              : 'bg-stone-50 dark:bg-stone-900/60 border-stone-200 dark:border-stone-700'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {isWajib ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
                    Harta Telah Mencapai Nisab (Wajib Zakat 2,5%)
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                    Belum Mencapai Nisab (Dianjurkan Sedekah / Infaq Sukarela)
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2 border-t border-stone-200/60 dark:border-stone-700/60 gap-2">
              <div>
                <span className="text-xs text-stone-500 block">
                  Estimasi Zakat yang Wajib Dikeluarkan:
                </span>
                <span className="text-2xl font-extrabold text-stone-900 dark:text-white font-mono">
                  {formatRupiah(jumlahZakat)}
                </span>
              </div>

              <span className="text-xs text-stone-500">
                Kadar: 2,5% dari harta bersih
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl"
          >
            Tutup Kalkulator
          </button>
        </div>

      </div>
    </div>
  );
};
