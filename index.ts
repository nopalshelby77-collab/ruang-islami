export type ActiveTab =
  | 'beranda'
  | 'wudhu'
  | 'salat'
  | 'puasa'
  | 'bersuci'
  | 'zakat-haji'
  | 'quran'
  | 'doa'
  | 'akhlak'
  | 'kuis'
  | 'checklist'
  | 'kalkulator'
  | 'tentang'
  | 'panduan'
  | 'admin';

export interface CategoryCard {
  id: string;
  tab: ActiveTab;
  title: string;
  description: string;
  iconName: string;
  topicsCount: number;
  highlightText: string;
  badge?: string;
}

export interface WudhuStep {
  stepNumber: number;
  title: string;
  type: 'Rukun' | 'Sunah' | 'Adab';
  arabic?: string;
  latin?: string;
  translation?: string;
  explanation: string;
  details: string[];
  reference: string;
}

export interface QuranAyah {
  numberInSurah: number;
  arabic: string;
  latin: string;
  translation: string;
}

export interface QuranSurah {
  number: number;
  nameIndo: string;
  nameArabic: string;
  totalAyah: number;
  revelationType: 'Makkiyah' | 'Madaniyah';
  meaning: string;
  audioUrl?: string;
  ayahs: QuranAyah[];
}

export interface HadithItem {
  id: string;
  title: string;
  category: 'Akhlak' | 'Ibadah' | 'Ilmu' | 'Sosial';
  arabic: string;
  narrator: string;
  translation: string;
  source: string;
  explanation: string;
}

export interface DailyDoa {
  id: string;
  title: string;
  category: 'Harian' | 'Salat' | 'Rumah & Perjalanan' | 'Keluarga' | 'Belajar';
  arabic: string;
  latin: string;
  translation: string;
  source: string;
  context: string;
}

export interface QuizQuestion {
  id: string;
  category: 'Wudhu' | 'Salat' | 'Puasa' | 'Bersuci' | 'Al-Qur\'an' | 'Akhlak & Sejarah';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reference: string;
}

export interface DailyChecklistItem {
  id: string;
  title: string;
  category: 'Salat Fardhu' | 'Salat Sunah' | 'Al-Qur\'an' | 'Dzikir & Doa' | 'Kebaikan';
  description: string;
}

export interface FeedbackItem {
  id: string;
  name: string;
  email: string;
  type: 'Saran' | 'Pertanyaan' | 'Koreksi Materi' | 'Usulan Topik';
  message: string;
  date: string;
  status: 'Baru' | 'Ditinjau' | 'Selesai';
}

export interface CustomArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  date: string;
}
