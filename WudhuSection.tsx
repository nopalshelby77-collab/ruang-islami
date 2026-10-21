import React, { useState } from 'react';
import { ActiveTab } from '../types';
import {
  wudhuDefinition,
  wudhuSyarat,
  wudhuPersiapan,
  wudhuSteps,
  doaSetelahWudhu,
  pembatalWudhu,
  kesalahanUmumWudhu,
  kuisWudhu
} from '../data/wudhuData';
import {
  Droplets,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Volume2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Share2,
  Check,
  RotateCcw
} from 'lucide-react';
import wudhuBanner from '../assets/images/wudhu_guidance_banner_1791821546627.jpg';

interface WudhuSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  onShare: (title: string, text: string) => void;
}

export const WudhuSection: React.FC<WudhuSectionProps> = ({ setActiveTab, onShare }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);
  const [quizAnswers, setQuizAnswers] = useState<{ [qId: string]: number }>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedDoa, setCopiedDoa] = useState(false);

  const currentStep = wudhuSteps[currentStepIndex];

  const handleStepToggleComplete = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const handleSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyDoa = () => {
    const text = `${doaSetelahWudhu.title}\n\n${doaSetelahWudhu.arabic}\n\n${doaSetelahWudhu.latin}\n\nTerjemahan:\n"${doaSetelahWudhu.translation}"\n\nSumber: Ruang Islam`;
    navigator.clipboard.writeText(text);
    setCopiedDoa(true);
    setTimeout(() => setCopiedDoa(false), 2000);
  };

  // Quiz calculations
  const calculateQuizScore = () => {
    let correct = 0;
    kuisWudhu.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / kuisWudhu.length) * 100);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Breadcrumb & Share Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
          <button onClick={() => setActiveTab('beranda')} className="hover:text-emerald-700">Beranda</button>
          <span>/</span>
          <button onClick={() => setActiveTab('salat')} className="hover:text-emerald-700">Ibadah</button>
          <span>/</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-medium">Tata Cara Wudhu</span>
        </div>

        <button
          onClick={() => onShare('Tata Cara Berwudhu Lengkap', 'Pelajari panduan wudhu step-by-step bersumber Mazhab Syafi\'i di Ruang Islam.')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-emerald-700 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Bagikan Materi</span>
        </button>
      </div>

      {/* Hero Banner for Wudhu Module */}
      <div className="relative rounded-2xl overflow-hidden mb-10 border border-stone-200 dark:border-stone-800 shadow-md">
        <img
          src={wudhuBanner}
          alt="Tata Cara Berwudhu"
          className="w-full h-56 sm:h-72 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            <Droplets className="w-4 h-4" />
            <span>Fikih Thaharah · Bersuci Sebelum Salat</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Panduan Lengkap Tata Cara Berwudhu
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-2xl mt-1">
            Membedakan secara tegas antara Rukun (fardhu wajib) dan Sunah wudhu berlandaskan Mazhab Syafi'i dan dalil Al-Qur'an serta Sunnah shahih.
          </p>
        </div>
      </div>

      {/* Section 1: Pengertian & Dalil Wudhu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-3">
              {wudhuDefinition.title}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
              {wudhuDefinition.pengertian}
            </p>

            <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60 mb-4">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 block mb-1">
                {wudhuDefinition.dalilQuran.surah}
              </span>
              <p className="text-base sm:text-lg font-arabic text-stone-800 dark:text-stone-100 text-right mb-2">
                {wudhuDefinition.dalilQuran.arabic}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-300 italic">
                {wudhuDefinition.dalilQuran.terjemahan}
              </p>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Tujuan & Keutamaan Berwudhu:
            </h3>
            <ul className="space-y-1.5">
              {wudhuDefinition.tujuan.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Syarat & Persiapan */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm">
            <h2 className="text-base font-bold text-stone-900 dark:text-white mb-3">
              Syarat Sah Berwudhu
            </h2>
            <div className="space-y-3">
              {wudhuSyarat.map((syarat, idx) => (
                <div key={idx} className="text-xs pb-2 border-b border-stone-100 dark:border-stone-700/50 last:border-0 last:pb-0">
                  <span className="font-semibold text-stone-900 dark:text-white block">
                    {idx + 1}. {syarat.title}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 mt-0.5 block leading-relaxed">
                    {syarat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200/60 dark:border-amber-800/40">
            <h3 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-2">
              Hal yang Perlu Disiapkan Sebelum Berwudhu:
            </h3>
            <ul className="space-y-1.5 text-xs text-amber-800 dark:text-amber-200">
              {wudhuPersiapan.map((p, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-semibold">{idx + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Interactive Step-by-Step Wudhu Simulator */}
      <div className="mb-14 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-stone-200 dark:border-stone-700 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
              <span>Simulasi Langkah Demi Langkah</span>
              <span aria-hidden="true">·</span>
              <span>Langkah {currentStepIndex + 1} dari {wudhuSteps.length}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white mt-1">
              Urutan Pelaksanaan Gerakan Wudhu
            </h2>
          </div>

          {/* Step Pill Indicators */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {wudhuSteps.map((step, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isDone = completedSteps.includes(step.stepNumber);
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                    isCurrent
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-500/30'
                      : isDone
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                  }`}
                  title={step.title}
                >
                  {step.stepNumber}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Active Step Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                currentStep.type === 'Rukun'
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              }`}>
                {currentStep.type === 'Rukun' ? '★ Rukun Fardhu (Wajib)' : '✧ Sunah Mu\'akkadah'}
              </span>

              <span className="text-xs text-stone-500 dark:text-stone-400">
                Rujukan: {currentStep.reference}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white">
              {currentStep.title}
            </h3>

            {/* Arabic Box if exists */}
            {currentStep.arabic && (
              <div className="p-4 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Bacaan {currentStep.title}
                  </span>
                  <button
                    onClick={() => handleSpeech(currentStep.arabic || '')}
                    className="p-1.5 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-stone-800 rounded-md transition-colors"
                    title="Dengarkan Pelafalan"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xl sm:text-2xl font-arabic text-right text-stone-900 dark:text-stone-50 py-1">
                  {currentStep.arabic}
                </p>
                {currentStep.latin && (
                  <p className="text-xs font-medium text-emerald-900 dark:text-emerald-300 italic">
                    {currentStep.latin}
                  </p>
                )}
                {currentStep.translation && (
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    "{currentStep.translation}"
                  </p>
                )}
              </div>
            )}

            <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
              {currentStep.explanation}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-2">
                Penjelasan & Ketentuan:
              </span>
              <ul className="space-y-1.5">
                {currentStep.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Checkmark & Navigation Card */}
          <div className="lg:col-span-4 bg-stone-50 dark:bg-stone-900/80 p-6 rounded-xl border border-stone-200 dark:border-stone-700 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
                  Status Pemahaman
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  {completedSteps.length} / {wudhuSteps.length} Selesai
                </span>
              </div>

              <button
                onClick={() => handleStepToggleComplete(currentStep.stepNumber)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  completedSteps.includes(currentStep.stepNumber)
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-300 dark:border-stone-600 hover:border-emerald-500'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>
                  {completedSteps.includes(currentStep.stepNumber)
                    ? 'Sudah Dipelajari & Dipahami'
                    : 'Tandai Selesai Langkah Ini'}
                </span>
              </button>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-stone-200 dark:border-stone-700">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                className="flex-1 py-2 px-3 text-xs font-medium text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed border border-stone-200 dark:border-stone-700 rounded-lg flex items-center justify-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>

              <button
                disabled={currentStepIndex === wudhuSteps.length - 1}
                onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-1 shadow-sm"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3: Doa Setelah Berwudhu (Lengkap dengan Arab, Latin, Terjemahan, Audio) */}
      <div className="mb-12 p-6 sm:p-8 bg-gradient-to-br from-emerald-950 to-stone-900 rounded-2xl text-white shadow-md border border-emerald-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-emerald-800/80 gap-3">
          <div>
            <span className="text-xs font-semibold text-amber-300 tracking-wider uppercase">
              Sunah Mu'akkadah & Keutamaan Besar
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {doaSetelahWudhu.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSpeech(doaSetelahWudhu.arabic)}
              className="p-2 bg-emerald-800/60 hover:bg-emerald-800 rounded-lg text-emerald-200 transition-colors"
              title="Dengarkan Lafal Doa"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyDoa}
              className="px-3 py-1.5 bg-emerald-800/60 hover:bg-emerald-800 rounded-lg text-xs font-semibold text-emerald-200 transition-colors flex items-center gap-1.5"
            >
              {copiedDoa ? <Check className="w-3.5 h-3.5 text-amber-300" /> : null}
              <span>{copiedDoa ? 'Disalin!' : 'Salin Teks Doa'}</span>
            </button>
          </div>
        </div>

        {/* Arabic Doa Text */}
        <div className="py-4 text-right">
          <p className="text-2xl sm:text-3xl font-arabic text-stone-50 leading-relaxed">
            {doaSetelahWudhu.arabic}
          </p>
        </div>

        {/* Transliteration & Indonesian Translation */}
        <div className="mt-4 pt-4 border-t border-emerald-800/60 space-y-2">
          <p className="text-xs sm:text-sm text-amber-200 italic font-medium leading-relaxed">
            "{doaSetelahWudhu.latin}"
          </p>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            <strong>Artinya:</strong> {doaSetelahWudhu.translation}
          </p>
          <div className="pt-2 text-xs text-emerald-300/90 leading-relaxed bg-emerald-900/40 p-3 rounded-lg border border-emerald-800">
            <strong>Keutamaan:</strong> {doaSetelahWudhu.keutamaan}
          </div>
        </div>
      </div>

      {/* Section 4: Pembatal Wudhu & Kesalahan Umum */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Pembatal Wudhu */}
        <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-stone-900 dark:text-white">
              Hal-Hal yang Membatalkan Wudhu
            </h3>
          </div>
          <div className="space-y-4">
            {pembatalWudhu.map((item, idx) => (
              <div key={idx} className="pb-3 border-b border-stone-100 dark:border-stone-700 last:border-0 last:pb-0">
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                  {idx + 1}. {item.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-1 block font-medium">
                  Rujukan: {item.dalil}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kesalahan Umum Saat Wudhu */}
        <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-rose-600" />
            <h3 className="text-base font-bold text-stone-900 dark:text-white">
              Kesalahan Umum Ketika Berwudhu
            </h3>
          </div>
          <div className="space-y-4">
            {kesalahanUmumWudhu.map((item, idx) => (
              <div key={idx} className="p-3 bg-stone-50 dark:bg-stone-900/50 rounded-lg border border-stone-200/70 dark:border-stone-700">
                <h4 className="text-xs font-bold text-rose-700 dark:text-rose-400">
                  ⚠️ {item.kesalahan}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  <strong>Tuntunan yang benar:</strong> {item.solusi}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section 5: Kuis Singkat Pemahaman Wudhu */}
      <div className="mb-14 p-6 sm:p-8 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-stone-200 dark:border-stone-700 gap-3">
          <div>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
              Uji Pemahaman Materi Wudhu
            </span>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white">
              Kuis Kilat Pemahaman Wudhu
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {showQuizExplanations && (
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-full">
                Skor Anda: {calculateQuizScore()}%
              </span>
            )}
            <button
              onClick={() => {
                setQuizAnswers({});
                setShowQuizExplanations(false);
              }}
              className="p-1.5 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700"
              title="Reset Kuis"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {kuisWudhu.map((q, qIdx) => {
            const selectedOpt = quizAnswers[q.id];
            return (
              <div key={q.id} className="p-4 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-700">
                <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white mb-3">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = optIdx === q.correctIndex;
                    let btnClass = 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-500';

                    if (showQuizExplanations) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-800 dark:text-rose-200';
                      }
                    } else if (isSelected) {
                      btnClass = 'bg-emerald-700 text-white font-semibold border-emerald-700';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={showQuizExplanations}
                        onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                        className={`p-2.5 text-left text-xs rounded-lg border transition-all ${btnClass}`}
                      >
                        <span className="font-mono mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showQuizExplanations && (
                  <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-700 text-xs">
                    <p className="font-semibold text-emerald-800 dark:text-emerald-400">
                      Pembahasan: {q.explanation}
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                      Rujukan: {q.reference}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          {!showQuizExplanations ? (
            <button
              disabled={Object.keys(quizAnswers).length === 0}
              onClick={() => setShowQuizExplanations(true)}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              Periksa Jawaban Kuis
            </button>
          ) : (
            <button
              onClick={() => {
                setQuizAnswers({});
                setShowQuizExplanations(false);
              }}
              className="px-5 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold rounded-xl"
            >
              Ulangi Kuis
            </button>
          )}
        </div>
      </div>

      {/* Navigation Buttons: Materi Sebelumnya & Materi Berikutnya */}
      <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setActiveTab('beranda')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl hover:bg-stone-50"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Materi Sebelumnya: Halaman Beranda</span>
        </button>

        <button
          onClick={() => setActiveTab('salat')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm"
        >
          <span>Materi Berikutnya: Panduan Salat 5 Waktu</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
