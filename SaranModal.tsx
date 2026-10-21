import React, { useState } from 'react';
import { getFeedbackItems, saveFeedbackItems } from '../utils/storage';
import { FeedbackItem } from '../types';
import { X, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface SaranModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaranModal: React.FC<SaranModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState<'Saran' | 'Pertanyaan' | 'Koreksi Materi' | 'Usulan Topik'>('Saran');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Harap isi semua kolom formulir dengan benar.');
      return;
    }

    const newItem: FeedbackItem = {
      id: `fb-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      type,
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
      status: 'Baru'
    };

    const currentList = getFeedbackItems();
    saveFeedbackItems([newItem, ...currentList]);

    setSubmitted(true);
    setErrorMessage('');
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                Kotak Saran & Pertanyaan
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Kirim masukan, usulan materi, atau koreksi dalil untuk perbaikan Ruang Islam.
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

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                Jazakumullah Khairan!
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 max-w-xs mx-auto">
                Masukan Anda telah berhasil terkirim dan akan ditinjau oleh tim pengelola Ruang Islam.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Nama Lengkap:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Abdullah Ahmad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Alamat Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Jenis Pesan:
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-stone-900 dark:text-white"
                >
                  <option value="Saran">Saran & Kritik Membangun</option>
                  <option value="Usulan Topik">Usulan Materi Baru</option>
                  <option value="Pertanyaan">Pertanyaan Fikih / Ibadah</option>
                  <option value="Koreksi Materi">Koreksi Teks Arab / Terjemahan</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Isi Pesan / Masukan:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan masukan, pertanyaan, atau usulan materi Anda secara jelas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-white"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirimkan Masukan</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
