import { FeedbackItem, CustomArticle } from '../types';

const STORAGE_KEYS = {
  BOOKMARKED_DOA: 'ruang_islam_bookmarked_doa',
  BOOKMARKED_TOPICS: 'ruang_islam_bookmarked_topics',
  COMPLETED_TOPICS: 'ruang_islam_completed_topics',
  CHECKLIST_DATA: 'ruang_islam_checklist_data',
  QUIZ_HISTORY: 'ruang_islam_quiz_history',
  FEEDBACK_ITEMS: 'ruang_islam_feedback_items',
  CUSTOM_ARTICLES: 'ruang_islam_custom_articles',
  ARABIC_FONT_SIZE: 'ruang_islam_arabic_font_size',
  THEME_MODE: 'ruang_islam_theme'
};

const initialFeedbacks: FeedbackItem[] = [
  {
    id: 'fb-1',
    name: 'Ahmad Fauzi',
    email: 'fauzi.ahmad@example.com',
    type: 'Usulan Topik',
    message: 'Alhamdulillah websitenya sangat membantu. Usul kalau bisa ditambahkan materi tata cara salat gerhana dan salat jenazah secara lengkap.',
    date: '2026-10-10',
    status: 'Baru'
  },
  {
    id: 'fb-2',
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@example.com',
    type: 'Saran',
    message: 'Tampilan wudhu interaktif sangat mudah dipahami adik saya yang baru belajar salat. Font Arabnya juga sangat jelas dan berharakat rapi.',
    date: '2026-10-11',
    status: 'Ditinjau'
  }
];

export const getBookmarkedDoa = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_DOA);
    return data ? JSON.parse(data) : ['doa-1', 'doa-10', 'doa-12'];
  } catch {
    return ['doa-1', 'doa-10', 'doa-12'];
  }
};

export const saveBookmarkedDoa = (items: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_DOA, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getBookmarkedTopics = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_TOPICS);
    return data ? JSON.parse(data) : ['wudhu', 'salat'];
  } catch {
    return ['wudhu', 'salat'];
  }
};

export const saveBookmarkedTopics = (items: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_TOPICS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getCompletedTopics = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    return data ? JSON.parse(data) : ['wudhu-step-1', 'wudhu-step-2'];
  } catch {
    return [];
  }
};

export const saveCompletedTopics = (items: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getChecklistForToday = (dateKey: string): string[] => {
  try {
    const all = localStorage.getItem(STORAGE_KEYS.CHECKLIST_DATA);
    const parsed = all ? JSON.parse(all) : {};
    return parsed[dateKey] || ['c-subuh', 'c-tilawah'];
  } catch {
    return ['c-subuh', 'c-tilawah'];
  }
};

export const saveChecklistForToday = (dateKey: string, checkedIds: string[]) => {
  try {
    const all = localStorage.getItem(STORAGE_KEYS.CHECKLIST_DATA);
    const parsed = all ? JSON.parse(all) : {};
    parsed[dateKey] = checkedIds;
    localStorage.setItem(STORAGE_KEYS.CHECKLIST_DATA, JSON.stringify(parsed));
  } catch (e) {
    console.error(e);
  }
};

export const getFeedbackItems = (): FeedbackItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK_ITEMS);
    return data ? JSON.parse(data) : initialFeedbacks;
  } catch {
    return initialFeedbacks;
  }
};

export const saveFeedbackItems = (items: FeedbackItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.FEEDBACK_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getCustomArticles = (): CustomArticle[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_ARTICLES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCustomArticles = (articles: CustomArticle[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_ARTICLES, JSON.stringify(articles));
  } catch (e) {
    console.error(e);
  }
};

export const getArabicFontSize = (): number => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ARABIC_FONT_SIZE);
    return data ? parseInt(data, 10) : 28;
  } catch {
    return 28;
  }
};

export const saveArabicFontSize = (size: number) => {
  try {
    localStorage.setItem(STORAGE_KEYS.ARABIC_FONT_SIZE, size.toString());
  } catch (e) {
    console.error(e);
  }
};
