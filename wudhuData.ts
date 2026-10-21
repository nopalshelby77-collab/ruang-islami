import { WudhuStep, QuizQuestion } from '../types';

export const wudhuDefinition = {
  title: 'Pengertian dan Tujuan Wudhu',
  pengertian:
    'Wudhu secara bahasa berasal dari kata al-Wadha\'ah (الوَضَاءَةُ) yang berarti kebersihan, keindahan, dan kecemerlangan. Secara istilah syariat fikih, wudhu adalah menyucikan anggota badan tertentu (wajah, kedua tangan, sebagian kepala, dan kedua kaki) dengan menggunakan air suci lagi menyucikan (air mutlak) sesuai tata cara yang ditentukan syariat guna menghilangkan hadats kecil.',
  dalilQuran: {
    surah: 'QS. Al-Ma\'idah ayat 6',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ',
    terjemahan:
      '"Wahai orang-orang yang beriman, apabila kamu hendak melaksanakan salat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan usaplah kepalamu dan (basuhlah) kedua kakimu sampai ke kedua mata kaki."'
  },
  tujuan: [
    'Syarat sah untuk mendirikan salat fardhu maupun sunah.',
    'Syarat sah untuk thawaf mengelilingi Ka\'bah.',
    'Syarat bolehnya menyentuh dan membawa mushaf Al-Qur\'an menurut jumhur ulama.',
    'Menjaga kesucian lahir dan batin serta menggugurkan dosa-dosa kecil bersamaan dengan tetesan air wudhu (HR. Muslim No. 244).'
  ],
  mazhabNote:
    'Rujukan panduan ini mengutamakan ketetapan Jumhur Ulama khususnya Mazhab Imam Asy-Syafi\'i yang umum diamalkan di Indonesia, dengan menyebutkan pembedaan tegas antara Rukun (wajib dilakukan, jika ditinggalkan wudhu tidak sah) dan Sunah (dianjurkan dan mendatangkan pahala).'
};

export const wudhuSyarat = [
  {
    title: 'Islam',
    desc: 'Wudhu adalah ibadah mahdhah, sehingga sahnya disyaratkan niat dari seorang muslim.'
  },
  {
    title: 'Tamyiz',
    desc: 'Mampu membedakan hal yang baik dan buruk (biasanya usia anak sekitar 7 tahun ke atas).'
  },
  {
    title: 'Menggunakan Air Mutlak (Suci lagi Menyucikan)',
    desc: 'Air murni alami yang belum berubah sifat (warna, bau, rasa) oleh benda najis atau percampuran zat lain yang mengubah statusnya.'
  },
  {
    title: 'Tidak Ada Penghalang Air Sampai ke Kulit (Mani\')',
    desc: 'Bebas dari cat kedap air, cat kuku non-permeabel, getah pekat, minyak tebal, atau lilin yang menghalangi air meresap menyentuh kulit.'
  },
  {
    title: 'Tidak Sedang Berhadats Besar',
    desc: 'Bagi yang berhadats besar (junub, haid, nifas), wajib mandi wajib terlebih dahulu sebelum wudhu berfaedah untuk ibadah salat.'
  },
  {
    title: 'Mengetahui Rukun dan Sunah',
    desc: 'Tidak meyakini salah satu rukun fardhu wudhu sebagai sunah belaka.'
  }
];

export const wudhuPersiapan = [
  'Pastikan berada di tempat wudhu yang bersih dan terbebas dari cipratan najis.',
  'Buka kran air dengan aliran yang hemat dan sedang (tidak membuka kran terlalu deras).',
  'Singkapkan lengan pakaian hingga di atas siku agar seluruh lengan terbasuh dengan sempurna.',
  'Lepaskan jam tangan, cincin yang sempit (putar agar air masuk ke bawah cincin), atau plester luka jika tidak dalam kondisi darurat dharurah.',
  'Fokuskan niat di dalam hati untuk beribadah mencari ridha Allah Ta\'ala.'
];

export const wudhuSteps: WudhuStep[] = [
  {
    stepNumber: 1,
    title: 'Membaca Basmalah & Mencuci Kedua Telapak Tangan',
    type: 'Sunah',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    latin: 'Bismillaahir rahmaanir rahiim',
    translation: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.',
    explanation:
      'Disunahkan mengawali dengan bismillah, lalu membasuh kedua telapak tangan hingga pergelangan sebanyak 3 kali sambil menyela-nyela jari jemari.',
    details: [
      'Hukumnya sunah mu\'akkadah menurut mazhab Syafi\'i.',
      'Membersihkan kotoran di tangan sebelum mengambil air untuk muka dan mulut.',
      'Dikerjakan 3 kali secara merata.'
    ],
    reference: 'HR. Abu Dawud No. 101, Tirmidzi No. 25'
  },
  {
    stepNumber: 2,
    title: 'Berkumur-kumur (Al-Madhmadhah)',
    type: 'Sunah',
    explanation:
      'Memasukkan air ke dalam mulut menggunakan telapak tangan kanan, lalu memutar-mutar air di dalam rongga mulut untuk membersihkan sisa makanan, kemudian mengeluarkannya. Dilakukan 3 kali.',
    details: [
      'Membersihkan rongga mulut dan gigi dari sisa makanan.',
      'Bagi yang tidak berpuasa, disunahkan bersungguh-sungguh (mubalaghah) saat berkumur.',
      'Jika berpuasa, tidak boleh berlebihan agar air tidak tertelan ke tenggorokan.'
    ],
    reference: 'HR. Bukhari No. 159, Muslim No. 226'
  },
  {
    stepNumber: 3,
    title: 'Menghirup Air ke Hidung & Mengeluarkannya (Al-Istinsyaq & Al-Istintsar)',
    type: 'Sunah',
    explanation:
      'Menghirup air dengan lubang hidung secara perlahan menggunakan tangan kanan, lalu menghembuskan/mengeluarkannya dengan bantuan tangan kiri sebanyak 3 kali.',
    details: [
      'Menyucikan rongga hidung dari debu dan kotoran.',
      'Sangat dianjurkan menggabungkan antara berkumur dan istinsyaq dari satu cidukan telapak tangan.',
      'Bagi yang berpuasa, hindari menghirup terlalu dalam.'
    ],
    reference: 'HR. Bukhari No. 161, Muslim No. 237'
  },
  {
    stepNumber: 4,
    title: 'Niat dan Membasuh Seluruh Wajah',
    type: 'Rukun',
    arabic: 'نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitul wudhuu'a liraf'il hadatsil ashghari fardhal lillaahi ta'aalaa",
    translation:
      'Aku berniat berwudhu untuk menghilangkan hadats kecil, fardhu karena Allah Ta\'ala.',
    explanation:
      'Niat wajib dihadirkan di dalam hati tepat saat air pertama kali menyentuh bagian wajah. Batasan wajah secara vertikal adalah dari tempat tumbuhnya rambut kepala normal hingga dagu bagian bawah, dan secara horizontal dari pangkal daun telinga kanan hingga daun telinga kiri.',
    details: [
      'Niat adalah Rukun Wudhu ke-1. Melafalkannya dengan lisan adalah sunah menurut ulama Syafi\'iyah untuk membantu konsentrasi hati.',
      'Membasuh wajah adalah Rukun Wudhu ke-2.',
      'Wajib membasuh seluruh permukaan wajah tanpa ada bagian yang terlewat, termasuk alis dan bulu mata.',
      'Membasuh sebanyak 3 kali adalah sunah.'
    ],
    reference: 'QS. Al-Ma\'idah: 6 & HR. Bukhari No. 1'
  },
  {
    stepNumber: 5,
    title: 'Membasuh Kedua Tangan Hingga ke Siku',
    type: 'Rukun',
    explanation:
      'Membasuh tangan mulai dari ujung jari-jemari tangan hingga melewati kedua siku. Dimulai dari tangan kanan 3 kali, kemudian tangan kiri 3 kali, sambil menyela-nyela jari.',
    details: [
      'Rukun Wudhu ke-3.',
      'Kedua siku wajib ikut terbasuh secara sempurna.',
      'Disunahkan melebihkan basuhan di atas siku (ghurrah wa tahjil) sebagai perhiasan cahaya di hari kiamat.',
      'Dahulukan tangan kanan sebelum tangan kiri (sunah).'
    ],
    reference: 'QS. Al-Ma\'idah: 6 & HR. Muslim No. 246'
  },
  {
    stepNumber: 6,
    title: 'Mengusap Sebagian Kepala',
    type: 'Rukun',
    explanation:
      'Mengusap sebagian kulit kepala atau rambut kepala yang masih berada dalam batasan kepala dengan tangan yang basah. Menurut mazhab Syafi\'i, cukup mengusap sebagian kecil kepala/rambut, sedangkan mengusap seluruh kepala adalah sunah utama.',
    details: [
      'Rukun Wudhu ke-4.',
      'Cukup membasahi telapak tangan lalu mengusapkannya ke rambut/kulit kepala.',
      'Sunah: mengusap dari depan kepala ditarik ke tengkuk belakang lalu dikembalikan ke depan.'
    ],
    reference: 'QS. Al-Ma\'idah: 6 & Shahih Bukhari No. 185'
  },
  {
    stepNumber: 7,
    title: 'Mengusap Kedua Daun Telinga',
    type: 'Sunah',
    explanation:
      'Memasukkan kedua jari telunjuk ke dalam lubang telinga dan memutar daun telinga bagian dalam, sementara kedua ibu jari mengusap daun telinga bagian luar. Dikerjakan sebanyak 3 kali dengan air baru.',
    details: [
      'Hukumnya sunah mu\'akkadah.',
      'Dikerjakan bersamaan untuk telinga kanan dan telinga kiri.'
    ],
    reference: 'HR. Abu Dawud No. 123, An-Nasa\'i No. 102'
  },
  {
    stepNumber: 8,
    title: 'Membasuh Kedua Kaki Hingga Kedua Mata Kaki',
    type: 'Rukun',
    explanation:
      'Membasuh kaki mulai dari ujung jari kaki hingga melewati kedua mata kaki (ka\'bain). Dimulai dari kaki kanan 3 kali kemudian kaki kiri 3 kali, sambil menyela jari-jemari kaki menggunakan jari kelingking tangan kiri.',
    details: [
      'Rukun Wudhu ke-5.',
      'Kedua mata kaki (tonjolan tulang di kanan kiri pergelangan kaki) wajib terbasuh sempurna.',
      'Perhatikan bagian tumit dan lekukan telapak kaki agar tidak ada yang kering.',
      'Dianjurkan melebihkan basuhan ke arah betis.'
    ],
    reference: 'QS. Al-Ma\'idah: 6 & HR. Bukhari No. 165'
  },
  {
    stepNumber: 9,
    title: 'Tertib (Sesuai Urutan)',
    type: 'Rukun',
    explanation:
      'Melaksanakan rukun-rukun wudhu secara berurutan sebagaimana disebutkan dalam Al-Qur\'an: niat bersamaan membasuh wajah, membasuh kedua tangan, mengusap kepala, lalu membasuh kedua kaki.',
    details: [
      'Rukun Wudhu ke-6.',
      'Jika seseorang membasuh kaki sebelum wajah secara sengaja, maka basuhan kakinya tidak sah dan harus diulang dari urutan yang benar.'
    ],
    reference: 'Madzhab Asy-Syafi\'i berdasar susunan ayat QS. Al-Ma\'idah: 6'
  }
];

export const doaSetelahWudhu = {
  title: 'Doa Setelah Berwudhu',
  arabic:
    'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ، وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ',
  latin:
    'Asyhadu an laa ilaaha illallaahu wahdahu laa syariika lahu, wa asyhadu anna Muhammadan \'abduhu wa rasuuluh. Allaahummaj\'alnii minat tawwaabiina, waj\'alnii minal mutathahhiriina, waj\'alnii min \'ibaadikas shaalihiin.',
  translation:
    'Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan-Nya. Ya Allah, jadikanlah aku termasuk golongan orang-orang yang bertaubat, jadikanlah aku termasuk golongan orang-orang yang senantiasa menyucikan diri, dan jadikanlah aku termasuk hamba-hamba-Mu yang saleh.',
  keutamaan:
    'Barangsiapa yang berwudhu lalu menyempurnakannya dan membaca doa ini, maka akan dibukakan baginya delapan pintu surga dan ia boleh masuk dari pintu mana saja yang ia kehendaki (HR. Muslim No. 234 & At-Tirmidzi No. 55).',
  adabMembaca:
    'Membaca doa ini sambil menghadap kiblat dan mengangkat kedua tangan ke arah langit (tidak di dalam kamar mandi yang terdapat kloset).'
};

export const pembatalWudhu = [
  {
    title: 'Keluarnya Sesuatu dari Dua Jalan (Qubul & Dubur)',
    desc: 'Baik berupa angin (kentut), air kencing, kotoran (BAB), madzi, wadi, atau darah.',
    dalil: 'QS. An-Nisa: 43 & HR. Bukhari No. 135'
  },
  {
    title: 'Hilang Akal atau Kesadaran',
    desc: 'Disebabkan tidur lelap (kecuali tidur duduk dengan posisi pantat mantap menempel di lantai tanpa bersandar goyah), pingsan, mabuk, atau gila.',
    dalil: 'HR. Abu Dawud No. 203'
  },
  {
    title: 'Bersentuhan Kulit Laki-laki dan Perempuan Ajnabiyah (Bukan Mahram)',
    desc: 'Menurut Mazhab Syafi\'i, bersentuhan kulit langsung tanpa penghalang (lapisan kain) antara laki-laki dan perempuan dewasa yang bukan mahram membatalkan wudhu kedua belah pihak.',
    dalil: 'Tafsir ayat QS. Al-Ma\'idah: 6 ("aw laamastumun-nisaa")'
  },
  {
    title: 'Menyentuh Kemaluan Manusia dengan Telapak Tangan',
    desc: 'Menyentuh qubul atau dubur manusia (baik milik sendiri maupun orang lain, dewasa atau anak-anak) menggunakan bagian dalam telapak tangan atau jari tanpa penghalang.',
    dalil: 'HR. Abu Dawud No. 181, At-Tirmidzi No. 82 (Shahih)'
  }
];

export const kesalahanUmumWudhu = [
  {
    kesalahan: 'Boros Menggunakan Air Secara Berlebihan (Israf)',
    solusi:
      'Rasulullah saw. berwudhu hanya dengan satu mud air (sekitar 600-750 ml). Matikan atau kecilkan kran air saat mengusap atau menyabuni.'
  },
  {
    kesalahan: 'Tumit dan Siku Tidak Terbasuh Sempurna',
    solusi:
      'Rasulullah saw. bersabda: "Celakalah bagi tumit-tumit yang tidak terkena air wudhu dari siksa api neraka" (HR. Muslim). Pastikan meratakan air ke seluruh lipatan kulit.'
  },
  {
    kesalahan: 'Tidak Mengatur Niat Saat Pertama Membasuh Wajah',
    solusi:
      'Niat wajib berbarengan di dalam hati pada saat air pertama kali menyentuh wajah, bukan sekadar ucapan lisan sebelum berwudhu.'
  },
  {
    kesalahan: 'Mengusap Rambut Palsu / Cat Kuku Kedap Air',
    solusi:
      'Hapus cat kuku kedap air sebelum berwudhu agar air mutlak langsung menyentuh kuku dan pori-pori kulit.'
  },
  {
    kesalahan: 'Berbicara atau Bersenda Gurau Saat Berwudhu',
    solusi:
      'Wudhu adalah ritual ibadah dzikir dan persiapan menghadap Allah. Jagalah adab dan ketenangan selama bersuci.'
  }
];

export const kuisWudhu: QuizQuestion[] = [
  {
    id: 'w-1',
    category: 'Wudhu',
    question: 'Berapakah jumlah Rukun Wudhu menurut Mazhab Syafi\'i?',
    options: ['4 Rukun', '6 Rukun', '8 Rukun', '10 Rukun'],
    correctIndex: 1,
    explanation:
      'Menurut Mazhab Syafi\'i, rukun wudhu ada 6: Niat, membasuh wajah, membasuh kedua tangan hingga siku, mengusap sebagian kepala, membasuh kedua kaki hingga mata kaki, dan tertib.',
    reference: 'Kitab Safinatun Najah & Matan Al-Ghayah wat Taqrib'
  },
  {
    id: 'w-2',
    category: 'Wudhu',
    question: 'Kapankah waktu niat wudhu wajib dihadirkan di dalam hati?',
    options: [
      'Ketika mencuci telapak tangan pertama kali',
      'Ketika berkumur-kumur',
      'Ketika air pertama kali membasuh bagian wajah',
      'Setelah selesai berwudhu'
    ],
    correctIndex: 2,
    explanation:
      'Dalam Mazhab Syafi\'i, niat wajib dihadirkan bersamaan dengan rukun pertama amaliyah wudhu, yaitu saat air pertama kali membasuh wajah.',
    reference: 'Fathul Qarib Al-Mujib'
  },
  {
    id: 'w-3',
    category: 'Wudhu',
    question: 'Berikut ini manakah yang merupakan SUNAH wudhu (bukan rukun)?',
    options: [
      'Membasuh kedua tangan hingga siku',
      'Mengusap kedua daun telinga',
      'Membasuh seluruh wajah',
      'Tertib'
    ],
    correctIndex: 1,
    explanation:
      'Mengusap kedua daun telinga adalah sunah mu\'akkadah, sedangkan membasuh tangan hingga siku, membasuh wajah, dan tertib adalah rukun wajib.',
    reference: 'HR. Abu Dawud No. 123 & QS. Al-Ma\'idah: 6'
  },
  {
    id: 'w-4',
    category: 'Wudhu',
    question: 'Apa ancaman yang disebutkan Nabi Muhammad saw. bagi orang yang tumitnya tidak terbasuh saat wudhu?',
    options: [
      'Wudhunya harus diulang 3 kali',
      '"Celakalah bagi tumit-tumit (yang tidak terkena air) dari siksa neraka"',
      'Dikenakan denda kafarat',
      'Tidak diterima puasanya'
    ],
    correctIndex: 1,
    explanation:
      'Rasulullah saw. bersabda: "Wailun lil a\'qabi minan-naar" (Celakalah bagi tumit-tumit dari siksa api neraka) karena sebagian sahabat terburu-buru wudhu hingga tumitnya belum basah.',
    reference: 'HR. Bukhari No. 165, Muslim No. 241'
  }
];
