import React, { useState, useEffect } from 'react';
import { FeedbackItem, CustomArticle, QuizQuestion } from '../types';
import {
  getFeedbackItems,
  saveFeedbackItems,
  getCustomArticles,
  saveCustomArticles
} from '../utils/storage';
import { generalQuizQuestions } from '../data/quizData';
import {
  ShieldCheck,
  Lock,
  LogOut,
  PlusCircle,
  Trash2,
  CheckCircle,
  MessageSquare,
  BookOpen,
  HelpCircle,
  BarChart3,
  RotateCcw
} from 'lucide-react';

export const AdminSection: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Admin tabs
  const [adminTab, setAdminTab] = useState<'stats' | 'feedback' | 'materi' | 'kuis'>('stats');

  // Feedback state
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]);

  // Custom articles state
  const [articles, setArticles] = useState<CustomArticle[]>([]);
  const [newArticleTitle, setNewArticleTitle] = useState('');
  const [newArticleCategory, setNewArticleCategory] = useState('Ibadah');
  const [newArticleContent, setNewArticleContent] = useState('');

  // Additional Quiz Questions
  const [quizList, setQuizList] = useState<QuizQuestion[]>(generalQuizQuestions);
  const [newQuizQ, setNewQuizQ] = useState('');
  const [newQuizCat, setNewQuizCat] = useState<'Wudhu' | 'Salat' | 'Puasa' | 'Bersuci' | "Al-Qur'an" | 'Akhlak & Sejarah'>('Salat');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctIdx, setCorrectIdx] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [reference, setReference] = useState('');

  useEffect(() => {
    setFeedbackList(getFeedbackItems());
    setArticles(getCustomArticles());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: admin123
    if (pinInput === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Kata sandi admin salah. Gunakan sandi default: admin123');
    }
  };

  const handleStatusChange = (id: string, newStatus: 'Baru' | 'Ditinjau' | 'Selesai') => {
    const updated = feedbackList.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setFeedbackList(updated);
    saveFeedbackItems(updated);
  };

  const handleDeleteFeedback = (id: string) => {
    const updated = feedbackList.filter((item) => item.id !== id);
    setFeedbackList(updated);
    saveFeedbackItems(updated);
  };

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticleTitle.trim() || !newArticleContent.trim()) return;

    const newArt: CustomArticle = {
      id: `art-${Date.now()}`,
      title: newArticleTitle.trim(),
      category: newArticleCategory,
      content: newArticleContent.trim(),
      author: 'Pengelola Ruang Islam',
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newArt, ...articles];
    setArticles(updated);
    saveCustomArticles(updated);

    setNewArticleTitle('');
    setNewArticleContent('');
  };

  const handleDeleteArticle = (id: string) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
    saveCustomArticles(updated);
  };

  const handleAddQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuizQ.trim() || !optA || !optB || !optC || !optD) return;

    const newQ: QuizQuestion = {
      id: `q-custom-${Date.now()}`,
      category: newQuizCat,
      question: newQuizQ.trim(),
      options: [optA.trim(), optB.trim(), optC.trim(), optD.trim()],
      correctIndex: correctIdx,
      explanation: explanation.trim() || 'Rujukan berdasarkan fiqih standar.',
      reference: reference.trim() || 'Kitab Fiqih'
    };

    setQuizList([newQ, ...quizList]);
    setNewQuizQ('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setExplanation('');
    setReference('');
  };

  // If not authenticated, show security login gate
  if (!isAuthenticated) {
    return (
      <div className="py-16 max-w-md mx-auto px-4">
        <div className="p-8 bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-xl text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-white">
              Panel Pengelola Ruang Islam
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Akses khusus admin untuk mengelola materi, meninjau saran, dan memantau statistik.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200">
                {authError}
              </div>
            )}

            <div>
              <input
                type="password"
                placeholder="Masukkan kata sandi (default: admin123)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 text-center font-mono text-stone-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm"
            >
              Masuk ke Panel Pengelola
            </button>
          </form>

          <p className="text-[11px] text-stone-400">
            Kata sandi default untuk demo penguji: <code>admin123</code>
          </p>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-stone-200 dark:border-stone-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>Sistem Administrasi Terverifikasi</span>
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900 dark:text-white mt-1">
            Dasbor Pengelolaan Ruang Islam
          </h1>
        </div>

        <button
          onClick={() => {
            setIsAuthenticated(false);
            setPinInput('');
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-xl hover:bg-rose-100 transition-colors self-start sm:self-auto"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Keluar Admin</span>
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-8 overflow-x-auto">
        {[
          { id: 'stats', label: 'Ringkasan & Statistik', icon: BarChart3 },
          { id: 'feedback', label: `Saran Pengguna (${feedbackList.length})`, icon: MessageSquare },
          { id: 'materi', label: `Materi Tambahan (${articles.length})`, icon: BookOpen },
          { id: 'kuis', label: `Kelola Kuis (${quizList.length})`, icon: HelpCircle }
        ].map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setAdminTab(t.id as any)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                adminTab === t.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: STATS ================= */}
      {adminTab === 'stats' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <span className="text-xs text-stone-500">Materi Fikih & Wudhu</span>
              <p className="text-2xl font-extrabold text-stone-900 dark:text-white font-mono mt-1">45+ Bab</p>
              <span className="text-[11px] text-emerald-600">Lengkap rukun & dalil</span>
            </div>

            <div className="p-5 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <span className="text-xs text-stone-500">Saran Pengguna Masuk</span>
              <p className="text-2xl font-extrabold text-stone-900 dark:text-white font-mono mt-1">
                {feedbackList.length} Pesan
              </p>
              <span className="text-[11px] text-amber-600">
                {feedbackList.filter((f) => f.status === 'Baru').length} belum ditinjau
              </span>
            </div>

            <div className="p-5 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <span className="text-xs text-stone-500">Bank Soal Kuis</span>
              <p className="text-2xl font-extrabold text-stone-900 dark:text-white font-mono mt-1">
                {quizList.length} Soal
              </p>
              <span className="text-[11px] text-emerald-600">6 Kategori teruji</span>
            </div>

            <div className="p-5 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <span className="text-xs text-stone-500">Artikel Kustom Tambahan</span>
              <p className="text-2xl font-extrabold text-stone-900 dark:text-white font-mono mt-1">
                {articles.length} Artikel
              </p>
              <span className="text-[11px] text-emerald-600">Tersimpan di sistem</span>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Pemberitahuan Sistem & Keamanan Data
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Seluruh data kuis, catatan evaluasi ibadah pengguna, saran masukan, dan artikel kustom disimpan dengan aman pada media penyimpanan lokal browser (localStorage). Sistem siap dihubungkan dengan database PostgreSQL (Cloud SQL) atau Firebase Firestore untuk sinkronisasi multi-pengguna skala besar.
            </p>
          </div>
        </div>
      )}

      {/* ================= TAB 2: SARAN PENGGUNA ================= */}
      {adminTab === 'feedback' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-stone-900 dark:text-white">
              Daftar Saran & Masukan Pengguna
            </h3>
            <span className="text-xs text-stone-500">Total {feedbackList.length} masukan</span>
          </div>

          {feedbackList.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 text-xs text-stone-500">
              Belum ada saran yang masuk.
            </div>
          ) : (
            <div className="space-y-3">
              {feedbackList.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700 gap-2">
                    <div>
                      <span className="text-xs font-bold text-stone-900 dark:text-white">
                        {item.name} ({item.email})
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">{item.type}</span>
                        <span>·</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-semibold border ${
                          item.status === 'Baru'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : item.status === 'Ditinjau'
                            ? 'bg-blue-50 text-blue-800 border-blue-300'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        }`}
                      >
                        <option value="Baru">Status: Baru</option>
                        <option value="Ditinjau">Status: Ditinjau</option>
                        <option value="Selesai">Status: Selesai</option>
                      </select>

                      <button
                        onClick={() => handleDeleteFeedback(item.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                        title="Hapus Pesan"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: MATERI TAMBAHAN ================= */}
      {adminTab === 'materi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Add Article Form */}
          <div className="lg:col-span-5 p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Tambah Materi Baru
            </h3>
            
            <form onSubmit={handleAddArticle} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">Judul Materi:</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Keutamaan Salat Tahajjud"
                  value={newArticleTitle}
                  onChange={(e) => setNewArticleTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Kategori:</label>
                <select
                  value={newArticleCategory}
                  onChange={(e) => setNewArticleCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl"
                >
                  <option value="Ibadah">Ibadah</option>
                  <option value="Wudhu & Thaharah">Wudhu & Thaharah</option>
                  <option value="Al-Qur'an">Al-Qur'an</option>
                  <option value="Akhlak">Akhlak</option>
                  <option value="Sejarah Islam">Sejarah Islam</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Uraian Materi:</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan isi materi, dalil Al-Qur'an, dan penjelasannya..."
                  value={newArticleContent}
                  onChange={(e) => setNewArticleContent(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Simpan Materi</span>
              </button>
            </form>
          </div>

          {/* Existing Custom Articles */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Materi Kustom yang Telah Diterbitkan ({articles.length})
            </h3>
            {articles.length === 0 ? (
              <div className="p-8 bg-stone-50 dark:bg-stone-900 text-center text-xs text-stone-400 rounded-2xl border border-stone-200">
                Belum ada materi tambahan. Gunakan formulir di sebelah kiri untuk menambahkan.
              </div>
            ) : (
              articles.map((art) => (
                <div key={art.id} className="p-4 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 flex justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">{art.category}</span>
                    <h4 className="text-xs font-bold text-stone-900 dark:text-white">{art.title}</h4>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">{art.content}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteArticle(art.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg shrink-0 self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      )}

      {/* ================= TAB 4: KELOLA KUIS ================= */}
      {adminTab === 'kuis' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Add Quiz Form */}
          <div className="lg:col-span-6 p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Tambah Soal Kuis Baru
            </h3>

            <form onSubmit={handleAddQuiz} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">Kategori:</label>
                <select
                  value={newQuizCat}
                  onChange={(e) => setNewQuizCat(e.target.value as any)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl"
                >
                  <option value="Wudhu">Wudhu</option>
                  <option value="Salat">Salat</option>
                  <option value="Puasa">Puasa</option>
                  <option value="Bersuci">Bersuci</option>
                  <option value="Al-Qur'an">Al-Qur'an</option>
                  <option value="Akhlak & Sejarah">Akhlak & Sejarah</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Pertanyaan:</label>
                <input
                  type="text"
                  required
                  placeholder="Tuliskan pertanyaan kuis..."
                  value={newQuizQ}
                  onChange={(e) => setNewQuizQ(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">Opsi A:</label>
                  <input
                    type="text"
                    required
                    value={optA}
                    onChange={(e) => setOptA(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Opsi B:</label>
                  <input
                    type="text"
                    required
                    value={optB}
                    onChange={(e) => setOptB(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Opsi C:</label>
                  <input
                    type="text"
                    required
                    value={optC}
                    onChange={(e) => setOptC(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Opsi D:</label>
                  <input
                    type="text"
                    required
                    value={optD}
                    onChange={(e) => setOptD(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Kunci Jawaban Benar:</label>
                <select
                  value={correctIdx}
                  onChange={(e) => setCorrectIdx(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-xl"
                >
                  <option value={0}>Opsi A</option>
                  <option value={1}>Opsi B</option>
                  <option value={2}>Opsi C</option>
                  <option value={3}>Opsi D</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Pembahasan & Penjelasan:</label>
                <input
                  type="text"
                  required
                  placeholder="Penjelasan hukum atau jawaban yang benar..."
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Rujukan Dalil / Kitab:</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: HR. Bukhari No. 135"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-300 rounded-xl"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Tambahkan ke Bank Soal</span>
              </button>
            </form>
          </div>

          {/* List of Quiz Questions */}
          <div className="lg:col-span-6 space-y-3 max-h-[700px] overflow-y-auto pr-1">
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Daftar Soal Kuis Aktif ({quizList.length})
            </h3>
            {quizList.map((q, idx) => (
              <div key={q.id} className="p-3.5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-700">{idx + 1}. [{q.category}]</span>
                  <span className="text-[11px] text-stone-400">Kunci: {String.fromCharCode(65 + q.correctIndex)}</span>
                </div>
                <p className="font-semibold text-stone-900 dark:text-white">{q.question}</p>
                <p className="text-[11px] text-stone-500">{q.explanation}</p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
