export const salatData = {
  pengertian:
    'Secara bahasa, salat berarti doa (الدُّعَاء). Secara istilah fikih syariat, salat adalah serangkaian perkataan dan perbuatan khusus yang diawali dengan takbiratul ihram dan diakhiri dengan salam, disertai syarat dan rukun tertentu.',
  dalil: {
    text: 'QS. Al-Ankabut: 45',
    arabic: 'وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',
    terjemahan: '"Dan dirikanlah salat; sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar."'
  },
  syaratWajib: [
    { name: 'Islam', desc: 'Salat hanya diwajibkan bagi seorang muslim.' },
    { name: 'Baligh', desc: 'Telah mencapai usia dewasa secara biologis (mimpi basah bagi laki-laki, haid bagi perempuan, atau genap 15 tahun Hijriyah).' },
    { name: 'Berakal Sehat', desc: 'Tidak gila, tidak koma, atau hilang akal.' },
    { name: 'Sampai Dakwah Islam', desc: 'Telah mendengar seruan syariat Islam.' },
    { name: 'Suci dari Haid dan Nifas', desc: 'Khusus bagi perempuan.' }
  ],
  syaratSah: [
    { name: 'Suci dari Hadats Kecil dan Besar', desc: 'Telah berwudhu atau mandi wajib.' },
    { name: 'Suci Badan, Pakaian, dan Tempat dari Najis', desc: 'Bebas dari kotoran najis mutawassithah/mughalladhah.' },
    { name: 'Menutup Aurat', desc: 'Laki-laki minimal dari pusar hingga lutut; perempuan seluruh badan kecuali wajah dan kedua telapak tangan.' },
    { name: 'Masuk Waktu Salat', desc: 'Telah tiba waktu yang ditentukan untuk masing-masing salat fardhu.' },
    { name: 'Menghadap ke Arah Kiblat', desc: 'Menghadap Ka\'bah di Masjidil Haram Makkah.' }
  ],
  rukunSalat: [
    { no: 1, name: 'Niat', desc: 'Meniatkan di dalam hati berbarengan saat Takbiratul Ihram.' },
    { no: 2, name: 'Berdiri bagi yang Mampu (Qiyam)', desc: 'Bila tidak mampu berdiri boleh duduk, bila tidak mampu boleh berbaring.' },
    { no: 3, name: 'Takbiratul Ihram', desc: 'Mengucapkan lafaz "Allahu Akbar".' },
    { no: 4, name: 'Membaca Surah Al-Fatihah', desc: 'Membaca setiap ayat dengan tartil, termasuk ayat basmalah.' },
    { no: 5, name: 'Ruku\' dengan Tuma\'ninah', desc: 'Membungkuk hingga punggung lurus dan kedua telapak tangan memegang lutut, diam sejenak (tuma\'ninah).' },
    { no: 6, name: 'I\'tidal dengan Tuma\'ninah', desc: 'Bangkit dari ruku\' dan berdiri tegak kembali sejenak.' },
    { no: 7, name: 'Sujud Dua Kali dengan Tuma\'ninah', desc: 'Meletakkan 7 anggota sujud ke lantai (dahi, kedua telapak tangan, kedua lutut, dan ujung jari kedua kaki).' },
    { no: 8, name: 'Duduk di Antara Dua Sujud dengan Tuma\'ninah', desc: 'Duduk iftirasy dengan tenang.' },
    { no: 9, name: 'Duduk untuk Tasyahhud Akhir', desc: 'Duduk tawarruk pada rakaat terakhir sebelum salam.' },
    { no: 10, name: 'Membaca Tasyahhud Akhir', desc: 'Membaca bacaan At-Tahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah...' },
    { no: 11, name: 'Membaca Salawat kepada Nabi Muhammad saw.', desc: 'Minimal membaca: Allaahumma shalli \'alaa Muhammad.' },
    { no: 12, name: 'Salam Pertama', desc: 'Menoleh ke kanan sambil mengucapkan: Assalaamu \'alaikum warahmatullaah.' },
    { no: 13, name: 'Tertib', desc: 'Melakukan seluruh rukun sesuai dengan urutan yang telah ditentukan.' }
  ],
  bacaanSalat: [
    {
      gerakan: 'Takbiratul Ihram',
      arabic: 'اللَّهُ أَكْبَرُ',
      latin: 'Allaahu Akbar',
      arti: 'Allah Maha Besar.'
    },
    {
      gerakan: 'Doa Iftitah (Sunah)',
      arabic: 'اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً، إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لَا شَرِيكَ لَهُ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ',
      latin: 'Allaahu akbaru kabiiraa, walhamdu lillaahi katsiiraa, wa subhaanallaahi bukrataw wa-ashiilaa. Innii wajjahtu wajhiya lilladzii fatharas samaawaati wal ardha haniifam muslimaw wamaa ana minal musyrikiin. Inna shalaatii wanusukii wamahyaya wamamaatii lillaahi rabbil \'aalamiin. Laa syariika lahu wa bidzaalika umirtu wa ana minal muslimiin.',
      arti: 'Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah sebanyak-banyaknya, dan Maha Suci Allah pada waktu pagi dan petang. Sesungguhnya aku hadapkan wajahku kepada Dzat yang menciptakan langit dan bumi dengan lurus dan berserah diri, dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanyalah untuk Allah Tuhan semesta alam. Tiada sekutu bagi-Nya dan dengan demikianlah aku diperintahkan dan aku termasuk orang-orang yang berserah diri.'
    },
    {
      gerakan: 'Ruku\'',
      arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ',
      latin: "Subhaana rabbiyal 'azhiimi wa bihamdih (3x)",
      arti: 'Maha Suci Tuhanku Yang Maha Agung dan dengan memuji-Nya.'
    },
    {
      gerakan: 'I\'tidal (Bangkit dari Ruku\')',
      arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ، رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
      latin: "Sami'allaahu liman hamidah. Rabbanaa lakal hamdu mil'us samaawaati wa mil'ul ardhi wa mil'u maa syi'ta min syai'in ba'du.",
      arti: 'Allah mendengar orang yang memuji-Nya. Wahai Tuhan kami, bagi-Mu lah segala puji sepenuh langit dan sepenuh bumi dan sepenuh apa yang Engkau kehendaki sesudahnya.'
    },
    {
      gerakan: 'Sujud',
      arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ وَبِحَمْدِهِ',
      latin: "Subhaana rabbiyal a'laa wa bihamdih (3x)",
      arti: 'Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji-Nya.'
    },
    {
      gerakan: 'Duduk di Antara Dua Sujud',
      arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
      latin: "Rabbighfir lii, warhamnii, wajburnii, warfa'nii, warzuqnii, wahdinii, wa'aafinii, wa'fu 'annii.",
      arti: 'Wahai Tuhanku, ampunilah aku, sayangilah aku, cukupkanlah kekuranganku, tinggikanlah derajatku, karuniakanlah rezeki kepadaku, berilah aku petunjuk, sehatkanlah aku, dan maafkanlah kesalahanku.'
    },
    {
      gerakan: 'Tasyahhud Akhir & Salawat',
      arabic: 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، وَبَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
      latin: "Attahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah. Assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu an laa ilaaha illallaah, wa asyhadu anna Muhammadar rasuulullaah. Allaahumma shalli 'alaa Muhammad wa 'alaa aali Muhammad, kamaa shallaita 'alaa Ibraahiim wa 'alaa aali Ibraahiim, wa baarik 'alaa Muhammad wa 'alaa aali Muhammad, kamaa baarakta 'alaa Ibraahiim wa 'alaa aali Ibraahiim, fil 'aalamiina innaka hamiidum majiid.",
      arti: 'Segala kehormatan, keberkahan, kebahagiaan dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat Allah dan berkah-Nya tercurah kepadamu wahai Nabi. Semoga keselamatan tercurah pula kepada kami dan kepada hamba-hamba Allah yang saleh. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah. Ya Allah, limpahkanlah rahmat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana Engkau telah melimpahkan rahmat kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Dan berkatilah Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana Engkau telah memberkati Nabi Ibrahim dan keluarga Nabi Ibrahim. Di seluruh alam semesta, sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.'
    },
    {
      gerakan: 'Salam',
      arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      latin: "Assalaamu 'alaikum wa rahmatullaah",
      arti: 'Semoga keselamatan dan rahmat Allah tercurah kepada kalian.'
    }
  ],
  salatBerjamaah: {
    keutamaan: 'Salat berjamaah lebih utama 27 derajat daripada salat sendirian (HR. Bukhari No. 645 & Muslim No. 650).',
    ketentuan: [
      'Makmum wajib berniat mengikuti imam.',
      'Makmum tidak boleh mendahului gerakan imam (makmum bergerak setelah imam selesai takbir atau berpindah rukun).',
      'Saf harus diluruskan dan dirapatkan (bahu bertemu bahu, mata kaki sejajar).',
      'Tata cara masbuq: makmum yang terlambat langsung takbiratul ihram lalu mengikuti posisi imam, menghitung rakaat bila mendapati ruku\' bersama imam dengan sempurna.'
    ]
  },
  pembatalSalat: [
    'Berbicara dengan sengaja yang bukan bacaan salat (walau dua huruf yang berfaedah atau tidak berfaedah).',
    'Bergerak berturut-turut sebanyak 3 kali gerakan besar (seperti melangkah atau mengayunkan tangan).',
    'Berhadats (buang angin, buang air) sebelum salam pertama.',
    'Terkena najis yang tidak dimaafkan pada tubuh atau pakaian tanpa langsung dibuang.',
    'Terbukanya aurat dengan sengaja, atau tidak langsung ditutup ketika terbuka tanpa sengaja.',
    'Makan atau minum secara sengaja.',
    'Membelakangi kiblat dengan sengaja.',
    'Tertawa terbahak-bahak hingga mengeluarkan suara.',
    'Mendahului imam sebanyak 2 rukun fi\'li tanpa udzur bagi makmum.'
  ]
};

export const puasaData = {
  pengertian:
    'Secara bahasa, puasa (ash-Shiyam) berarti menahan diri (al-Imsak). Secara istilah fikih syariat, puasa adalah menahan diri dari segala hal yang membatalkannya mulai dari terbitnya fajar shadiq (waktu Subuh) hingga terbenamnya matahari (waktu Maghrib), disertai niat ikhlas karena Allah Ta\'ala.',
  hukum: 'Fardhu \'ain bagi setiap muslim yang mukallaf (baligh dan berakal sehat) serta mampu pada bulan suci Ramadan.',
  dalil: {
    surah: 'QS. Al-Baqarah: 183',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
    terjemahan: '"Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa."'
  },
  niatRamadan: {
    arabic: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma ghadin 'an adaa'i fardhi syahri Ramadhaana haadzihis sanati lillaahi ta'aalaa",
    terjemahan: 'Aku berniat puasa esok hari untuk menunaikan fardhu di bulan Ramadan tahun ini karena Allah Ta\'ala.',
    penjelasan: 'Niat puasa wajib dilakukan pada malam hari (tabyitun niyyah) sebelum terbit fajar shadiq.'
  },
  pembatalPuasa: [
    'Masuknya sesuatu ke dalam rongga tubuh terbuka (mulut, hidung, telinga, lubang depan/belakang) secara sengaja.',
    'Makan dan minum secara sadar (bila lupa, puasanya tetap sah dan itu rezeki dari Allah).',
    'Muntah yang disengaja.',
    'Berhubungan suami istri di siang hari (wajib kafarat besar memerdekakan budak, puasa 2 bulan berturut-turut, atau memberi makan 60 orang miskin).',
    'Keluarnya mani secara sengaja karena bersentuhan atau onani.',
    'Mengalami haid atau nifas bagi wanita walaupun sesaat sebelum waktu maghrib.',
    'Hilang akal (gila) atau pingsan sepanjang hari.',
    'Murtad (keluar dari agama Islam).'
  ],
  sunahPuasa: [
    'Mengakhirkan makan sahur mendekati waktu imsak/fajar.',
    'Menyegerakan berbuka (ta\'jil) ketika matahari terbenam.',
    'Berbuka dengan kurma basah (ruthab), kurma kering (tamr), atau air putih.',
    'Membaca doa berbuka puasa: "Dzahabadh zhama\'u wabtallatil \'uruuqu wa tsabatal ajru insyaa Allah" (HR. Abu Dawud No. 2357).',
    'Memperbanyak sedekah dan memberi makan orang yang berpuasa (ifthar).',
    'Memperbanyak tilawah Al-Qur\'an dan iktikaf di masjid, khususnya pada 10 malam terakhir.',
    'Menjaga lisan dari perkataan dusta, celaan, dan ghibah.'
  ],
  zakatFitrahDasar: {
    pengertian: 'Zakat wajib yang dikeluarkan oleh setiap jiwa muslim di akhir bulan Ramadan sebelum salat Idul Fitri.',
    tujuan: 'Menyucikan orang yang berpuasa dari perkataan sia-sia dan membantu fakir miskin bergembira di hari raya.',
    kadar: '1 sha\' makanan pokok (beras di Indonesia sekitar 2,5 kg atau 3,5 liter per jiwa).'
  }
};

export const bersuciData = {
  thaharah: {
    pengertian:
      'Thaharah artinya bersuci dari hadats (kecil dan besar) dan najis, baik pada badan, pakaian, maupun tempat, sebagai syarat mutlak sahnya ibadah salat.',
    alatBersuci: 'Air mutlak (air murni dari alam seperti air sumur, hujan, sungai, laut, mata air, salju, dan embun), atau tanah/debu suci (untuk tayamum), atau batu istinja.'
  },
  najis: [
    {
      kategori: 'Najis Mukhaffafah (Najis Ringan)',
      contoh: 'Air kencing bayi laki-laki berusia di bawah 2 tahun yang belum makan/minum apapun selain air susu ibu (ASI).',
      caraMenyucikan:
        'Cukup dipercikkan air mutlak secara merata pada tempat yang terkena najis hingga basah, tanpa wajib dialirkan deras.'
    },
    {
      kategori: 'Najis Mutawassithah (Najis Sedang)',
      contoh: 'Kotoran manusia/hewan, air kencing biasa, bangkai hewan (selain bangkai ikan & belalang), nanah, darah haid/luka, dan khamr.',
      caraMenyucikan:
        'Dibersihkan wujud zatnya terlebih dahulu (\'Ainiyyah), lalu dibasuh dengan air yang mengalir hingga hilang rasa, bau, dan warnanya (Hukmiyyah).'
    },
    {
      kategori: 'Najis Mughalladhah (Najis Berat)',
      contoh: 'Najis anjing dan babi serta peranakan dari keduanya (jilatan, air liur, keringat, kotoran).',
      caraMenyucikan:
        'Dicuci sebanyak 7 kali basuhan dengan air mutlak, dan salah satu di antara tujuh basuhan tersebut dicampur dengan debu/tanah suci.'
    }
  ],
  mandiWajib: {
    sebab: [
      'Keluarnya air mani (baik karena mimpi basah maupun sengaja).',
      'Jima\' (hubungan suami istri walaupun tidak keluar mani).',
      'Selesainya masa haid bagi wanita.',
      'Selesainya masa nifas (darah setelah melahirkan).',
      'Wiladah (melahirkan).',
      'Meninggal dunia (selain orang yang mati syahid di medan perang).'
    ],
    rukunMandi: [
      'Niat mandi wajib di dalam hati saat air pertama kali mengenai tubuh.',
      'Meratakan air ke seluruh permukaan kulit dan rambut/bulu tubuh dari ujung rambut kepala hingga ujung kaki.'
    ],
    niatMandiJunub: {
      arabic: 'نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلَّهِ تَعَالَى',
      latin: "Nawaitul ghusla liraf'il hadatsil akbari fardhal lillaahi ta'aalaa",
      terjemahan: 'Aku berniat mandi untuk menghilangkan hadats besar, fardhu karena Allah Ta\'ala.'
    },
    tataCaraSunah: [
      'Membasuh kedua telapak tangan 3 kali.',
      'Membersihkan kemaluan dan kotoran dengan tangan kiri.',
      'Mencuci tangan kiri dengan sabun atau tanah hingga bersih.',
      'Berwudhu sempurna seperti wudhu untuk salat.',
      'Menyela-nyela pangkal rambut kepala dengan jari-jemari basah hingga membasahi kulit kepala.',
      'Menuangkan air ke atas kepala 3 kali.',
      'Meratakan air ke seluruh badan, mendahulukan lambung kanan lalu kiri, sambil menggosok bagian lipatan tubuh.'
    ]
  },
  tayamum: {
    sebabBoleh: [
      'Tidak ada air setelah berusaha mencarinya secara wajar.',
      'Ada air namun dalam kondisi sakit yang membahayakan bila terkena air menurut dokter ahli.',
      'Kebutuhan air sangat mendesak untuk minum menyelamatkan jiwa makhluk hidup.'
    ],
    rukun: [
      'Niat tayamum (untuk membolehkan salat/istibahah, bukan menghilangkan hadats).',
      'Mengusap wajah dengan debu suci.',
      'Mengusap kedua tangan sampai siku dengan debu suci.',
      'Tertib di antara keduanya.'
    ],
    niat: {
      arabic: 'نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلَّهِ تَعَالَى',
      latin: "Nawaitut tayammuma li-istibaahatish shalaati fardhal lillaahi ta'aalaa",
      terjemahan: 'Aku berniat bertayamum untuk membolehkan pelaksanaan salat fardhu karena Allah Ta\'ala.'
    },
    tataCara: [
      'Menepukkan kedua telapak tangan ke permukaan tanah atau dinding yang berdebu suci satu kali.',
      'Meniup debu di tangan agar tidak terlalu tebal.',
      'Mengusapkan kedua tangan ke seluruh wajah secara merata.',
      'Menepukkan kedua telapak tangan ke debu kedua kalinya di tempat yang berbeda.',
      'Mengusap tangan kanan mulai punggung tangan hingga siku, lalu tangan kiri dengan cara yang sama.'
    ]
  }
};

export const zakatHajiData = {
  zakat: {
    pengertian:
      'Zakat adalah sejumlah harta tertentu yang wajib dikeluarkan oleh seorang muslim yang telah memenuhi kriteria tertentu untuk diberikan kepada golongan yang berhak menerimanya (8 Asnaf).',
    asnaf: [
      'Fakir (tidak punya harta dan penghasilan)',
      'Miskin (punya penghasilan tapi tidak cukup kebutuhan pokok)',
      'Amil (pengelola dan penyalur zakat)',
      'Muallaf (orang yang baru masuk Islam)',
      'Riqab (memerdekakan budak / membebaskan sandera)',
      'Gharimin (orang yang terlilit utang demi kebaikan)',
      'Fii Sabilillah (pejuang penegak agama Allah)',
      'Ibnu Sabil (musafir kehabisan bekal dalam perjalanan ketaatan)'
    ],
    jenisZakatMal: [
      {
        nama: 'Zakat Emas & Perak',
        nisab: '85 gram emas murni',
        kadar: '2.5%',
        haul: '1 tahun Hijriyah',
        contoh: 'Jika memiliki 100 gram emas selama 1 tahun, zakatnya = 100 g x 2.5% = 2.5 gram emas (atau senilai uangnya).'
      },
      {
        nama: 'Zakat Penghasilan / Profesi',
        nisab: 'Setara 85 gram emas per tahun (atau dibagi 12 bulan = ~7.08 g emas/bulan)',
        kadar: '2.5%',
        haul: 'Dikeluarkan saat menerima gaji/penghasilan bersih',
        contoh: 'Jika gaji bersih Rp 10.000.000/bulan dan nisab tercapai, zakat = 2.5% x Rp 10.000.000 = Rp 250.000.'
      },
      {
        nama: 'Zakat Perdagangan / Perniagaan',
        nisab: 'Setara 85 gram emas',
        kadar: '2.5%',
        haul: '1 tahun buku',
        contoh: '(Modal berputar + Keuntungan + Piutang lancar - Hutang jatuh tempo) x 2.5%.'
      }
    ]
  },
  hajiUmrah: {
    pengertianHaji:
      'Haji adalah rukun Islam ke-5, yaitu berkunjung ke Baitullah (Ka\'bah) di Makkah Al-Mukarramah pada bulan Dzulhijjah untuk melaksanakan amalan-amalan manasik tertentu demi mengharap ridha Allah.',
    syaratWajib: [
      'Islam',
      'Baligh',
      'Berakal sehat',
      'Merdeka',
      'Mampu (Istitha\'ah) baik secara fisik, finansial perbekalan diri & keluarga yang ditinggalkan, serta aman di perjalanan.'
    ],
    rukunHaji: [
      { no: 1, name: 'Ihram', desc: 'Berniat memulai haji di miqat dengan mengenakan pakaian ihram.' },
      { no: 2, name: 'Wukuf di Arafah', desc: 'Berdiam diri di padang Arafah pada tanggal 9 Dzulhijjah (puncak inti haji).' },
      { no: 3, name: 'Thawaf Ifadhah', desc: 'Mengelilingi Ka\'bah sebanyak 7 putaran berlawanan arah jarum jam.' },
      { no: 4, name: 'Sa\'i', desc: 'Berjalan dan berlari-lari kecil 7 kali bolak-balik antara bukit Shafa dan Marwah.' },
      { no: 5, name: 'Tahallul', desc: 'Mencukur atau memotong sebagian rambut kepala sebagai tanda selesainya larangan ihram.' },
      { no: 6, name: 'Tertib', desc: 'Melaksanakan rukun sesuai urutannya.' }
    ],
    urutanPelaksanaan: [
      '8 Dzulhijjah (Hari Tarwiyah): Berihram dan mabit (menginap) di Mina.',
      '9 Dzulhijjah (Hari Arafah): Berangkat ke Arafah untuk wukuf hingga terbenam matahari, lalu menuju Muzdalifah untuk mabit dan mencari kerikil.',
      '10 Dzulhijjah (Hari Nahar/Idul Adha): Melempar Jumrah Aqabah, menyembelih dam/hewan qurban, tahallul awal, dan Thawaf Ifadhah serta Sa\'i di Masjidil Haram.',
      '11-13 Dzulhijjah (Hari Tasyriq): Mabit di Mina dan melempar tiga jumrah (Ula, Wustha, Aqabah) setiap hari.',
      'Thawaf Wada\': Tawaf perpisahan sebelum meninggalkan kota suci Makkah.'
    ]
  }
};
