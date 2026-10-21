import { QuizQuestion } from '../types';
import { kuisWudhu } from './wudhuData';

export const generalQuizQuestions: QuizQuestion[] = [
  ...kuisWudhu,
  {
    id: 's-1',
    category: 'Salat',
    question: 'Berapakah jumlah rukun salat yang disepakati dalam Mazhab Syafi\'i?',
    options: ['9 Rukun', '11 Rukun', '13 Rukun', '17 Rukun'],
    correctIndex: 2,
    explanation:
      'Mazhab Asy-Syafi\'i menetapkan 13 rukun salat (dimulai dari niat, takbiratul ihram, berdiri bagi yang mampu, membaca Al-Fatihah, ruku\', i\'tidal, dua sujud, duduk di antara dua sujud, tasyahhud akhir, duduk tasyahhud akhir, salawat, salam pertama, hingga tertib).',
    reference: 'Kitab Matan Ghayah wat Taqrib karya Qadhi Abu Syuja\''
  },
  {
    id: 's-2',
    category: 'Salat',
    question: 'Apakah hukum membaca doa iftitah di awal salat?',
    options: ['Rukun (Wajib)', 'Sunah Hai\'at', 'Sunah Ab\'adh', 'Makruh'],
    correctIndex: 1,
    explanation:
      'Membaca doa iftitah hukumnya sunah hai\'at; jika ditinggalkan baik sengaja maupun lupa tidak membatalkan salat dan tidak perlu sujud sahwi.',
    reference: 'Fathul Mu\'in bi Syarhi Qurratil \'Ain'
  },
  {
    id: 'p-1',
    category: 'Puasa',
    question: 'Kapan batas waktu berniat puasa fardhu Ramadan harus dilakukan?',
    options: [
      'Sebelum matahari terbit (sebelum masuk waktu Subuh)',
      'Boleh sebelum waktu Dzuhur',
      'Saat makan sahur selesai',
      'Saat waktu berbuka puasa'
    ],
    correctIndex: 0,
    explanation:
      'Untuk puasa wajib/fardhu, niat harus dilakukan pada malam hari (tabyitun niyyah) sebelum fajar shadiq (waktu subuh) terbit. Berbeda dengan puasa sunah yang diperbolehkan berniat hingga sebelum tergelincir matahari (Dzuhur) asalkan belum makan/minum.',
    reference: 'HR. Abu Dawud No. 2454 & At-Tirmidzi No. 730'
  },
  {
    id: 'p-2',
    category: 'Puasa',
    question: 'Berapakah kadar zakat fitrah yang wajib dikeluarkan oleh setiap jiwa muslim?',
    options: ['1 liter beras', '2,5 kg atau 3,5 liter beras', '5 kg beras', '10 kg beras'],
    correctIndex: 1,
    explanation:
      'Kadar zakat fitrah adalah 1 sha\' kurma atau gandum menurut hadits Nabi saw., yang dikonversikan oleh ulama Indonesia (MUI dan BAZNAS) setara dengan 2,5 kg atau 3,5 liter beras makanan pokok.',
    reference: 'HR. Bukhari No. 1503 & Fatwa BAZNAS'
  },
  {
    id: 'b-1',
    category: 'Bersuci',
    question: 'Bagaimanakah cara menyucikan najis mughalladhah (anjing/babi)?',
    options: [
      'Cukup dipercikkan air mutlak satu kali',
      'Dicuci dengan sabun wangi satu kali',
      'Dibasuh 7 kali dengan air mengalir, salah satunya dicampur debu/tanah suci',
      'Dibersihkan dengan kain basah'
    ],
    correctIndex: 2,
    explanation:
      'Najis mughalladhah wajib dicuci sebanyak 7 kali basuhan, salah satunya dicampur dengan tanah atau debu yang suci (HR. Muslim No. 279).',
    reference: 'Shahih Muslim No. 279 & Kitab Safinatun Najah'
  },
  {
    id: 'q-1',
    category: 'Al-Qur\'an',
    question: 'Apakah nama surah dalam Al-Qur\'an yang dijuluki sebagai "Ummul Kitab" (Induk Al-Qur\'an)?',
    options: ['Surah Al-Baqarah', 'Surah Yasin', 'Surah Al-Fatihah', 'Surah Al-Ikhlas'],
    correctIndex: 2,
    explanation:
      'Surah Al-Fatihah dinamakan Ummul Kitab atau Ummul Qur\'an karena memuat seluruh intisari pokok ajaran Al-Qur\'an (tauhid, ibadah, janji kebaikan, dan ancaman keburukan).',
    reference: 'HR. At-Tirmidzi No. 3124'
  },
  {
    id: 'h-1',
    category: 'Akhlak & Sejarah',
    question: 'Siapakah sahabat Nabi yang mengusulkan pengumpulan dan pembukuan mushaf Al-Qur\'an pertama kali?',
    options: ['Umar bin Khattab r.a.', 'Ali bin Abi Thalib r.a.', 'Utsman bin Affan r.a.', 'Abu Hurairah r.a.'],
    correctIndex: 0,
    explanation:
      'Umar bin Khattab r.a. mendesak Khalifah Abu Bakar r.a. untuk mengumpulkan lembaran-lembaran Al-Qur\'an setelah gugurnya puluhan penghafal Al-Qur\'an dalam Perang Yamamah.',
    reference: 'Shahih Al-Bukhari No. 4986, Kitab Fadhail Al-Qur\'an'
  },
  {
    id: 'h-2',
    category: 'Akhlak & Sejarah',
    question: 'Gelar apakah yang diberikan oleh kaum Quraisy kepada Nabi Muhammad saw. sebelum diangkat menjadi rasul karena kejujurannya?',
    options: ['As-Sayyid', 'Al-Amin', 'Al-Faruq', 'Khalilullah'],
    correctIndex: 1,
    explanation:
      'Masyarakat Makkah memberi gelar "Al-Amin" (Orang yang dapat dipercaya/amanah) kepada Nabi Muhammad saw. karena kejujuran dan budi pekertinya yang luhur sejak masa muda.',
    reference: 'Sirah Nabawiyah karya Ibnu Hisyam'
  }
];
