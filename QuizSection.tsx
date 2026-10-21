import React, { useState } from 'react';
import { generalQuizQuestions } from '../data/quizData';
import { QuizQuestion } from '../types';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['Semua', 'Wudhu', 'Salat', 'Puasa', 'Bersuci', "Al-Qur'an", 'Akhlak & Sejarah'];

  const questions = generalQuizQuestions.filter(
    (q) => selectedCategory === 'Semua' || q.category === selectedCategory
  );

  const currentQ: QuizQuestion | undefined = questions[currentIndex];

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted || !currentQ) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optIdx
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const scoreData = calculateScore();

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIndex(0);
  };

  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-1">
          <HelpCircle className="w-4 h-4 text-amber-500" />
          <span>Evaluasi & Pemahaman</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
          Kuis Pembelajaran Islam Interaktif
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl mx-auto">
          Uji pemahaman fiqih, tata cara ibadah, Al-Qur'an, dan sejarah Islam dengan penilaian otomatis dan pembahasan komprehensif.
        </p>
      </div>

      {/* Category Selection Filter */}
      {!isSubmitted && (
        <div className="flex items-center justify-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-8 overflow-x-auto scrollbar-none max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setSelectedAnswers({});
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ================= STATE 1: RUNNING QUIZ ================= */}
      {!isSubmitted && currentQ && (
        <div className="bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm p-6 sm:p-8 space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs pb-4 border-b border-stone-100 dark:border-stone-700">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 uppercase">
              Kategori: {currentQ.category}
            </span>
            <span className="font-mono text-stone-500 font-bold">
              Soal {currentIndex + 1} dari {questions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-relaxed">
              {currentIndex + 1}. {currentQ.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentQ.id] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-3.5 text-left text-xs sm:text-sm rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-600 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500'
                      : 'bg-white dark:bg-stone-900/40 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center font-bold ${
                      isSelected
                        ? 'bg-emerald-700 text-white'
                        : 'bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-100 dark:border-stone-700">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
              className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-700 rounded-xl disabled:opacity-40"
            >
              Sebelumnya
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors shadow-sm"
              >
                Kumpulkan & Lihat Hasil
              </button>
            )}
          </div>

        </div>
      )}

      {/* ================= STATE 2: SCORE & REVIEW ================= */}
      {isSubmitted && (
        <div className="space-y-8">
          
          {/* Result Score Card */}
          <div className="p-8 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-md text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 mx-auto flex items-center justify-center shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Hasil Evaluasi Kuis
              </span>
              <h2 className="text-3xl font-extrabold text-stone-900 dark:text-white mt-1">
                Skor Anda: {scoreData.percentage}%
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Menjawab benar <strong>{scoreData.correct}</strong> dari <strong>{scoreData.total}</strong> pertanyaan.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-md mx-auto">
              {scoreData.percentage >= 80
                ? 'Mumtaz! Pemahaman Anda terhadap materi keislaman sangat baik. Terus pertahankan dan amalkan dalam kehidupan sehari-hari.'
                : scoreData.percentage >= 60
                ? 'Jayyid! Anda telah memahami sebagian besar materi. Tinjau kembali pembahasan di bawah ini untuk memperdalam pemahaman.'
                : 'Jangan berkecil hati, belajar adalah proses ibadah yang bernilai pahala. Pelajari kembali materi panduan dan ulangi kuis ini!'}
            </p>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis Dari Awal</span>
            </button>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-stone-900 dark:text-white">
              Pembahasan & Rujukan Jawaban
            </h3>

            {questions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border ${
                    isCorrect
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                      : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                      {idx + 1}. {q.question}
                    </h4>
                    <span className="shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <p className="text-stone-600 dark:text-stone-300">
                      <strong>Jawaban Anda:</strong>{' '}
                      {userAns !== undefined ? q.options[userAns] : 'Belum dijawab'}
                    </p>
                    <p className="text-emerald-800 dark:text-emerald-400 font-semibold">
                      <strong>Kunci Jawaban Benar:</strong> {q.options[q.correctIndex]}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-200/60 dark:border-stone-700 text-xs space-y-1">
                    <p className="text-stone-700 dark:text-stone-300">
                      <strong>Pembahasan:</strong> {q.explanation}
                    </p>
                    <p className="text-[11px] text-stone-500 font-mono">
                      Rujukan: {q.reference}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
