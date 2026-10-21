import React, { useState } from 'react';
import { X, Globe, Terminal, Github, Server, Lock, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';

interface PanduanOnlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PanduanOnlineModal: React.FC<PanduanOnlineModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'lokal' | 'github' | 'hosting' | 'domain' | 'arsitektur'>('lokal');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                Panduan Menjalankan & Memublikasikan Ruang Islam
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Panduan komprehensif mulai dari menjalankan di komputer lokal hingga online dengan domain ruangislam.com.
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

        {/* Sub Tabs */}
        <div className="px-6 pt-4 border-b border-stone-100 dark:border-stone-700/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {[
            { id: 'lokal', label: '1. Menjalankan Lokal', icon: Terminal },
            { id: 'github', label: '2. Unggah ke GitHub', icon: Github },
            { id: 'hosting', label: '3. Publikasi Vercel/Netlify', icon: Server },
            { id: 'domain', label: '4. Pasang Domain & HTTPS', icon: Globe },
            { id: 'arsitektur', label: '5. Fitur Client vs Backend', icon: Lock }
          ].map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-t-xl border-b-2 transition-all whitespace-nowrap ${
                  activeTab === t.id
                    ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          
          {/* TAB 1: RUNNING LOCALLY */}
          {activeTab === 'lokal' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Langkah Menjalankan Website di Komputer Sendiri
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Pastikan komputer Anda telah terinstal <strong>Node.js (versi 18 ke atas)</strong> dan <strong>npm</strong>.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] relative group">
                  <div className="text-stone-400 mb-1"># 1. Install semua dependensi:</div>
                  <code>npm install</code>
                  <button
                    onClick={() => copySnippet('npm-i', 'npm install')}
                    className="absolute right-3 top-3 p-1 text-stone-400 hover:text-white"
                  >
                    {copiedCode === 'npm-i' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] relative group">
                  <div className="text-stone-400 mb-1"># 2. Jalankan development server lokal:</div>
                  <code>npm run dev</code>
                  <button
                    onClick={() => copySnippet('npm-dev', 'npm run dev')}
                    className="absolute right-3 top-3 p-1 text-stone-400 hover:text-white"
                  >
                    {copiedCode === 'npm-dev' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] relative group">
                  <div className="text-stone-400 mb-1"># 3. Build untuk produksi:</div>
                  <code>npm run build</code>
                  <button
                    onClick={() => copySnippet('npm-build', 'npm run build')}
                    className="absolute right-3 top-3 p-1 text-stone-400 hover:text-white"
                  >
                    {copiedCode === 'npm-build' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Setelah menjalankan <code>npm run dev</code>, buka browser di alamat <code>http://localhost:5173</code> atau port yang ditampilkan di terminal.
              </p>
            </div>
          )}

          {/* TAB 2: GITHUB */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Panduan Mengunggah Kode Sumber ke GitHub
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Buat repositori baru di <strong>github.com</strong> (misal bernama <code>ruang-islam</code>), lalu jalankan perintah berikut di folder proyek:
              </p>

              <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] space-y-1.5 relative group">
                <p className="text-stone-400">git init</p>
                <p className="text-stone-400">git add .</p>
                <p className="text-stone-400">git commit -m "Rilis awal platform edukasi Ruang Islam"</p>
                <p className="text-stone-400">git branch -M main</p>
                <p className="text-emerald-400">git remote add origin https://github.com/USERNAME_ANDA/ruang-islam.git</p>
                <p className="text-emerald-400">git push -u origin main</p>
                <button
                  onClick={() =>
                    copySnippet(
                      'git-all',
                      'git init\ngit add .\ngit commit -m "Rilis awal platform edukasi Ruang Islam"\ngit branch -M main\ngit remote add origin https://github.com/USERNAME_ANDA/ruang-islam.git\ngit push -u origin main'
                    )
                  }
                  className="absolute right-3 top-3 p-1 text-stone-400 hover:text-white"
                >
                  {copiedCode === 'git-all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: HOSTING VERCEL / NETLIFY */}
          {activeTab === 'hosting' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Publikasi Online Gratis via Vercel / Netlify
              </h3>
              
              <div className="space-y-3">
                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700">
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">
                    Cara Publikasi via Vercel (Disarankan):
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-stone-600 dark:text-stone-300">
                    <li>Buka <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-600 underline">vercel.com</a> dan masuk menggunakan akun GitHub Anda.</li>
                    <li>Klik tombol <strong>"Add New Project"</strong> lalu pilih repositori <code>ruang-islam</code>.</li>
                    <li>Vercel akan secara otomatis mendeteksi framework Vite. Biarkan Build Command <code>npm run build</code> dan Output Directory <code>dist</code>.</li>
                    <li>Klik <strong>Deploy</strong>. Dalam waktu ~45 detik, website Ruang Islam akan aktif secara online di subdomain seperti <code>ruang-islam.vercel.app</code>.</li>
                  </ol>
                </div>

                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700">
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">
                    Cara Publikasi via Netlify:
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Sama mudahnya: masuk ke netlify.com &rarr; "Add new site from Git" &rarr; pilih repo &rarr; deploy site.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DOMAIN RUANGISLAM.COM & SSL */}
          {activeTab === 'domain' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Menghubungkan Custom Domain (misal: ruangislam.com) & HTTPS
              </h3>

              <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-200">
                <strong>Catatan Akurasi:</strong> Domain <code>ruangislam.com</code> harus didaftarkan terlebih dahulu melalui penyedia registrar domain (seperti Niagahoster, Domainesia, Rumahweb, Namecheap, atau Google Domains/Squarespace).
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 dark:text-white">Pengaturan DNS Record di Registrar:</h4>
                <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] space-y-1">
                  <p>Type: A | Host: @ | Value: 76.76.21.21 (jika memakai Vercel)</p>
                  <p>Type: CNAME | Host: www | Value: cname.vercel-dns.com</p>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-stone-900 dark:text-white">Pengaturan Sertifikat SSL (HTTPS):</h4>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  Layanan Vercel dan Netlify secara otomatis menerbitkan dan memperpanjang sertifikat <strong>SSL Let's Encrypt secara gratis</strong>. Begitu propagasi DNS selesai (biasanya 15 menit hingga beberapa jam), ikon gembok aman (HTTPS) akan aktif secara otomatis.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: ARCHITECTURE CLIENT VS BACKEND */}
          {activeTab === 'arsitektur' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Arsitektur Aplikasi: Status Fitur & Integrasi Backend
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-2">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Fitur 100% Berfungsi Saat Ini:</span>
                  </h4>
                  <ul className="space-y-1 text-emerald-800 dark:text-emerald-200">
                    <li>✓ Simulasi wudhu rukun & sunah interaktif</li>
                    <li>✓ Panduan salat 5 waktu & bacaan lengkap</li>
                    <li>✓ Al-Qur'an reader & hadits shahih</li>
                    <li>✓ Audio pelafalan Arab (Web Speech API)</li>
                    <li>✓ Kalkulator zakat multi-aset transparan</li>
                    <li>✓ Checklist ibadah & riwayat lokal (localStorage)</li>
                    <li>✓ Kuis interaktif nilai otomatis & pembahasan</li>
                    <li>✓ Panel admin lokal & peninjauan saran</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                  <h4 className="font-bold text-stone-900 dark:text-white">
                    Fitur Siap Diintegrasikan ke Backend:
                  </h4>
                  <ul className="space-y-1 text-stone-600 dark:text-stone-300">
                    <li>• Sinkronisasi akun & progress belajar antar-HP (Firebase / Cloud SQL)</li>
                    <li>• Pengiriman notifikasi email otomatis saat ada saran masuk (Nodemailer / Resend)</li>
                    <li>• Kolaborasi live konsultasi tanya jawab ustadz</li>
                    <li>• Penyimpanan sertifikat kelulusan kuis di cloud</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl"
          >
            Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
};
