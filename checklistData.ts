import { DailyChecklistItem } from '../types';

export const defaultChecklistItems: DailyChecklistItem[] = [
  {
    id: 'c-subuh',
    title: 'Salat Subuh Berjamaah / Tepat Waktu',
    category: 'Salat Fardhu',
    description: 'Dua rakaat fardhu Subuh di awal waktu beserta dua rakaat qabliyah Subuh.'
  },
  {
    id: 'c-dzuhur',
    title: 'Salat Dzuhur',
    category: 'Salat Fardhu',
    description: 'Empat rakaat fardhu Dzuhur dengan tuma\'ninah.'
  },
  {
    id: 'c-ashar',
    title: 'Salat Ashar',
    category: 'Salat Fardhu',
    description: 'Empat rakaat fardhu Ashar tepat pada waktunya.'
  },
  {
    id: 'c-maghrib',
    title: 'Salat Maghrib',
    category: 'Salat Fardhu',
    description: 'Tiga rakaat fardhu Maghrib, dilanjutkan dzikir petang.'
  },
  {
    id: 'c-isya',
    title: 'Salat Isya',
    category: 'Salat Fardhu',
    description: 'Empat rakaat fardhu Isya dan sunah ba\'diyah.'
  },
  {
    id: 'c-dhuha',
    title: 'Salat Sunah Dhuha',
    category: 'Salat Sunah',
    description: 'Minimal 2 rakaat di pagi hari sebagai sedekah persendian tubuh.'
  },
  {
    id: 'c-tahajjud',
    title: 'Salat Malam / Witir',
    category: 'Salat Sunah',
    description: 'Menghidupkan sepertiga malam dengan munajat dan doa.'
  },
  {
    id: 'c-tilawah',
    title: 'Tilawah Al-Qur\'an (One Day One Juz / Makro\')',
    category: 'Al-Qur\'an',
    description: 'Membaca mushaf minimal beberapa lembar beserta terjemahannya.'
  },
  {
    id: 'c-dzikir',
    title: 'Dzikir Pagi & Petang / Al-Ma\'tsurat',
    category: 'Dzikir & Doa',
    description: 'Mengingat Allah di waktu pagi dan petang sebagai benteng hati.'
  },
  {
    id: 'c-sedekah',
    title: 'Sedekah Harian / Berbuat Kebaikan',
    category: 'Kebaikan',
    description: 'Menginfakkan sebagian harta, membantu sesama, atau tersenyum tulus.'
  },
  {
    id: 'c-ilmu',
    title: 'Mempelajari 1 Materi / Hadits Hari Ini',
    category: 'Kebaikan',
    description: 'Menambah wawasan keislaman melalui artikel atau materi Ruang Islam.'
  }
];

export const checklistDisclaimer = {
  title: 'Catatan Penting Tentang Evaluasi Ibadah',
  content:
    'Fitur Checklist Ibadah ini semata-mata merupakan sarana muhasabah (evaluasi diri pribadi) pengguna agar lebih disiplin dan istiqamah dalam beramal. Checklist ini TIDAK mengklaim atau membuktikan keabsahan atau diterimanya suatu ibadah di sisi Allah Ta\'ala. Penerimaan ibadah merupakan hak mutlak Allah Swt. Data disimpan secara lokal di peramban Anda.'
};
