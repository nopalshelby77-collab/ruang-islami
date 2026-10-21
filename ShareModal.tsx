import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, text }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ruangislam.com';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${title}\n${text}\n\nBaca di: ${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsapp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${text}\n\n${currentUrl}`)}`;
    window.open(waUrl, '_blank');
  };

  const shareToTwitter = () => {
    const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${text}`)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-sm overflow-hidden flex flex-col p-6 space-y-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-stone-900 dark:text-white">
              Bagikan Materi Ruang Islam
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 text-xs">
          <p className="font-bold text-stone-900 dark:text-white mb-0.5">{title}</p>
          <p className="text-stone-500 line-clamp-2">{text}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={shareToWhatsapp}
            className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>WhatsApp</span>
          </button>
          <button
            onClick={shareToTwitter}
            className="py-2.5 px-3 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Twitter / X</span>
          </button>
        </div>

        <button
          onClick={handleCopyLink}
          className="w-full py-2.5 px-4 bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Tautan Berhasil Disalin!' : 'Salin Tautan Materi'}</span>
        </button>

      </div>
    </div>
  );
};
