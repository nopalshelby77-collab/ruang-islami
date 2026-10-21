import React, { useState, useEffect } from 'react';
import { defaultChecklistItems, checklistDisclaimer } from '../data/checklistData';
import { getChecklistForToday, saveChecklistForToday } from '../utils/storage';
import { X, CheckSquare, Calendar, Info, RotateCcw, Award } from 'lucide-react';

interface ChecklistIbadahModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChecklistIbadahModal: React.FC<ChecklistIbadahModalProps> = ({ isOpen, onClose }) => {
  const todayKey = new Date().toISOString().split('T')[0];
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCheckedIds(getChecklistForToday(todayKey));
    }
  }, [isOpen, todayKey]);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    let updated: string[];
    if (checkedIds.includes(id)) {
      updated = checkedIds.filter((item) => item !== id);
    } else {
      updated = [...checkedIds, id];
    }
    setCheckedIds(updated);
    saveChecklistForToday(todayKey, updated);
  };

  const handleReset = () => {
    setCheckedIds([]);
    saveChecklistForToday(todayKey, []);
  };

  const completionPercentage = Math.round(
    (checkedIds.length / defaultChecklistItems.length) * 100
  );

  const formattedDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                Checklist Evaluasi Ibadah Harian (Muhasabah)
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Progress Card */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase">
                Ketercapaian Amalan Hari Ini
              </span>
              <p className="text-2xl font-extrabold text-emerald-950 dark:text-emerald-100 font-mono mt-0.5">
                {checkedIds.length} / {defaultChecklistItems.length} Kegiatan ({completionPercentage}%)
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-white dark:hover:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center gap-1"
              title="Reset checklist hari ini"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Checklist Items */}
          <div className="space-y-2.5">
            {defaultChecklistItems.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isChecked
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-500 text-emerald-950 dark:text-emerald-200'
                      : 'bg-white dark:bg-stone-900/40 border-stone-200 dark:border-stone-700 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked
                        ? 'bg-emerald-700 border-emerald-700 text-white'
                        : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800'
                    }`}>
                      {isChecked && <span className="text-xs font-bold">✓</span>}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-stone-400 font-mono shrink-0">
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mandatory Theological Disclaimer */}
          <div className="p-4 bg-stone-50 dark:bg-stone-900/70 rounded-xl border border-stone-200 dark:border-stone-700 flex items-start gap-2.5 text-xs text-stone-500 dark:text-stone-400">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-700 dark:text-stone-300 block mb-0.5">
                {checklistDisclaimer.title}:
              </strong>
              <span>{checklistDisclaimer.content}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl"
          >
            Tutup Catatan
          </button>
        </div>

      </div>
    </div>
  );
};
