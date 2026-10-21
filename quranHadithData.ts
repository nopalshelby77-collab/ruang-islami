import { QuranSurah, HadithItem } from '../types';

export const quranSurahs: QuranSurah[] = [
  {
    number: 1,
    nameIndo: 'Al-Fatihah',
    nameArabic: 'الفَاتِحَة',
    totalAyah: 7,
    revelationType: 'Makkiyah',
    meaning: 'Pembukaan',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        latin: 'Bismillaahir rahmaanir rahiim',
        translation: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.'
      },
      {
        numberInSurah: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        latin: "Alhamdu lillaahi rabbil 'aalamiin",
        translation: 'Segala puji bagi Allah, Tuhan semesta alam.'
      },
      {
        numberInSurah: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        latin: 'Ar-rahmaanir rahiim',
        translation: 'Maha Pengasih lagi Maha Penyayang.'
      },
      {
        numberInSurah: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        latin: 'Maaliki yawmid diin',
        translation: 'Pemilik hari pembalasan.'
      },
      {
        numberInSurah: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        latin: "Iyyaaka na'budu wa iyyaaka nasta'iin",
        translation: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.'
      },
      {
        numberInSurah: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        latin: 'Ihdinash shiraathal mustaqiim',
        translation: 'Tunjukilah kami jalan yang lurus,'
      },
      {
        numberInSurah: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        latin: "Shiraathal ladziina an'amta 'alaihim ghairil maghdhuubi 'alaihim waladh dhaalliin",
        translation: '(yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.'
      }
    ]
  },
  {
    number: 112,
    nameIndo: 'Al-Ikhlas',
    nameArabic: 'الإِخْلَاص',
    totalAyah: 4,
    revelationType: 'Makkiyah',
    meaning: 'Kemurnian Keesaan Allah',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        latin: 'Qul huwallaahu ahad',
        translation: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."'
      },
      {
        numberInSurah: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        latin: 'Allaahush shamad',
        translation: 'Allah tempat meminta segala sesuatu.'
      },
      {
        numberInSurah: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        latin: 'Lam yalid walam yuulad',
        translation: '(Allah) tidak beranak dan tidak pula diperanakkan,'
      },
      {
        numberInSurah: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        latin: 'Walam yakun lahu kufuwan ahad',
        translation: 'Dan tidak ada sesuatu pun yang setara dengan Dia.'
      }
    ]
  },
  {
    number: 113,
    nameIndo: 'Al-Falaq',
    nameArabic: 'الفَلَق',
    totalAyah: 5,
    revelationType: 'Makkiyah',
    meaning: 'Waktu Subuh',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        latin: "Qul a'uudzu birabbil falaq",
        translation: 'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),"'
      },
      {
        numberInSurah: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        latin: 'Min syarri maa khalaq',
        translation: 'dari kejahatan (makhluk yang) Dia ciptakan,'
      },
      {
        numberInSurah: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        latin: 'Wa min syarri ghaasiqin idzaa waqab',
        translation: 'dan dari kejahatan malam apabila telah gelap gulita,'
      },
      {
        numberInSurah: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        latin: 'Wa min syarrin naffaatsaati fil \'uqad',
        translation: 'dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),'
      },
      {
        numberInSurah: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        latin: 'Wa min syarri haasidin idzaa hasad',
        translation: 'dan dari kejahatan orang yang dengki apabila dia dengki.'
      }
    ]
  },
  {
    number: 114,
    nameIndo: 'An-Nas',
    nameArabic: 'النَّاس',
    totalAyah: 6,
    revelationType: 'Makkiyah',
    meaning: 'Manusia',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        latin: "Qul a'uudzu birabbin naas",
        translation: 'Katakanlah, "Aku berlindung kepada Tuhannya manusia,"'
      },
      {
        numberInSurah: 2,
        arabic: 'مَلِكِ النَّاسِ',
        latin: 'Malikin naas',
        translation: 'Raja manusia,'
      },
      {
        numberInSurah: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        latin: 'Ilaahin naas',
        translation: 'Sembahan manusia,'
      },
      {
        numberInSurah: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        latin: 'Min syarril waswaasil khannaas',
        translation: 'dari kejahatan (bisikan) setan yang bersembunyi,'
      },
      {
        numberInSurah: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        latin: 'Alladzii yuwaswisu fii shuduurin naas',
        translation: 'yang membisikkan (kejahatan) ke dalam dada manusia,'
      },
      {
        numberInSurah: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        latin: 'Minal jinnati wannaas',
        translation: 'dari (golongan) jin dan manusia.'
      }
    ]
  },
  {
    number: 108,
    nameIndo: 'Al-Kautsar',
    nameArabic: 'الكَوْثَر',
    totalAyah: 3,
    revelationType: 'Makkiyah',
    meaning: 'Nikmat yang Berlimpah',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        latin: "Innaa a'thainaakal kautsar",
        translation: 'Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.'
      },
      {
        numberInSurah: 2,
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        latin: 'Fashalli lirabbika wanhar',
        translation: 'Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.'
      },
      {
        numberInSurah: 3,
        arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
        latin: 'Inna syaani\'aka huwal abtar',
        translation: 'Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).'
      }
    ]
  },
  {
    number: 103,
    nameIndo: 'Al-\'Asr',
    nameArabic: 'العَصْر',
    totalAyah: 3,
    revelationType: 'Makkiyah',
    meaning: 'Demi Masa',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'وَالْعَصْرِ',
        latin: "Wal 'asr",
        translation: 'Demi masa.'
      },
      {
        numberInSurah: 2,
        arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        latin: 'Innal insaana lafii khusr',
        translation: 'Sungguh, manusia berada dalam kerugian,'
      },
      {
        numberInSurah: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        latin: 'Illal ladziina aamanuu wa \'amilush shaalihaati wa tawaashau bil haqqi wa tawaashau bish shabr',
        translation: 'kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran.'
      }
    ]
  },
  {
    number: 94,
    nameIndo: 'Al-Insyirah',
    nameArabic: 'الشَّرْح',
    totalAyah: 8,
    revelationType: 'Makkiyah',
    meaning: 'Kelapangan Dada',
    ayahs: [
      {
        numberInSurah: 1,
        arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        latin: 'Alam nasyrah laka shadrak',
        translation: 'Bukankah Kami telah melapangkan dadamu (Muhammad)?'
      },
      {
        numberInSurah: 2,
        arabic: 'وَوَضَعْنَا عَنكَ وِزْرَكَ',
        latin: 'Wa wadha\'naa \'anka wizrak',
        translation: 'dan Kami pun telah menurunkan bebanmu darimu,'
      },
      {
        numberInSurah: 3,
        arabic: 'الَّذِي أَنقَضَ ظَهْرَكَ',
        latin: 'Alladzii anqadha zhahrak',
        translation: 'yang memberatkan punggungmu,'
      },
      {
        numberInSurah: 4,
        arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
        latin: 'Wa rafa\'naa laka dzikrak',
        translation: 'dan Kami tinggikan bagimu sebutan (nama)mu.'
      },
      {
        numberInSurah: 5,
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        latin: "Fa inna ma'al 'usri yusraa",
        translation: 'Maka sesungguhnya bersama kesulitan ada kemudahan,'
      },
      {
        numberInSurah: 6,
        arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        latin: "Inna ma'al 'usri yusraa",
        translation: 'sesungguhnya bersama kesulitan ada kemudahan.'
      },
      {
        numberInSurah: 7,
        arabic: 'فَإِذَا فَرَغْتَ فَانصَبْ',
        latin: 'Fa idzaa faraghta fanshab',
        translation: 'Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain),'
      },
      {
        numberInSurah: 8,
        arabic: 'وَإِلَىٰ رَبِّكَ فَارْغَب',
        latin: 'Wa ilaa rabbika farghab',
        translation: 'dan hanya kepada Tuhanmulah engkau berharap.'
      }
    ]
  }
];

export const ayatKursiSpecial = {
  surah: 'QS. Al-Baqarah ayat 255 (Ayat Kursi)',
  arabic:
    'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
  latin:
    "Allaahu laa ilaaha illaa huwal hayyul qayyuum. Laa ta'khudzuhuu sinatuw wa laa naum. Lahuu maa fis samaawaati wa maa fil ardh. Man dzal ladzii yasyfa'u 'indahuu illaa bi idznih. Ya'lamu maa baina aidiihim wa maa khalfahum wa laa yuhiithuuna bisyai'im min 'ilmihii illaa bimaa syaa'. Wasi'a kursiyyuhus samaawaati wal ardh, wa laa ya'uuduhuu hifzhuhumaa wa huwal 'aliyyul 'azhiim.",
  translation:
    'Allah, tidak ada Tuhan selain Dia. Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Siapakah yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya? Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.',
  keutamaan:
    'Merupakan ayat paling agung di dalam Al-Qur\'an. Barangsiapa membacanya setiap selesai salat fardhu, tidak ada yang menghalanginya masuk surga selain kematian (HR. An-Nasa\'i No. 9848, dishahihkan Ibnu Hibban).'
};

export const hadithItems: HadithItem[] = [
  {
    id: 'h-1',
    title: 'Sebaik-baik Manusia adalah yang Paling Baik Akhlaknya',
    category: 'Akhlak',
    arabic: 'إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلَاقًا',
    narrator: 'HR. At-Tirmidzi No. 2018 (Hasan Shahih)',
    translation:
      '"Sesungguhnya di antara orang yang paling aku cintai dan yang paling dekat tempat duduknya denganku pada hari kiamat adalah orang yang paling baik akhlaknya di antara kalian."',
    source: 'Sunan At-Tirmidzi, Kitab Al-Birr wash Shilah',
    explanation:
      'Hadits ini menegaskan bahwa kemuliaan derajat seorang muslim di akhirat sangat ditentukan oleh kemuliaan akhlaknya kepada sesama manusia.'
  },
  {
    id: 'h-2',
    title: 'Kejujuran Membawa kepada Kebaikan dan Surga',
    category: 'Akhlak',
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ، فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
    narrator: 'HR. Al-Bukhari No. 6094 & Muslim No. 2607',
    translation:
      '"Hendaklah kalian senantiasa berlaku jujur, karena sesungguhnya kejujuran itu membimbing kepada kebaikan, dan kebaikan membimbing ke surga."',
    source: 'Shahih Al-Bukhari & Shahih Muslim',
    explanation:
      'Kejujuran adalah pondasi utama karakter seorang muslim. Dusta membuka pintu kehancuran moral, sedangkan kejujuran melahirkan ketenangan jiwa.'
  },
  {
    id: 'h-3',
    title: 'Menuntut Ilmu adalah Kewajiban Setiap Muslim',
    category: 'Ilmu',
    arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِمٍ',
    narrator: 'HR. Ibnu Majah No. 224 (Shahih)',
    translation: '"Menuntut ilmu itu wajib bagi setiap muslim."',
    source: 'Sunan Ibnu Majah, Mukaddimah',
    explanation:
      'Kewajiban menuntut ilmu meliputi ilmu fardhu \'ain (tauhid, tata cara bersuci, salat, dan halal-haram sehari-hari) serta ilmu fardhu kifayah yang dibutuhkan umat.'
  },
  {
    id: 'h-4',
    title: 'Mencintai Saudara Sebagaimana Mencintai Diri Sendiri',
    category: 'Sosial',
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    narrator: 'HR. Al-Bukhari No. 13 & Muslim No. 45',
    translation:
      '"Tidak sempurna iman salah seorang di antara kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri."',
    source: 'Shahih Al-Bukhari, Kitab Al-Iman',
    explanation:
      'Tanda kesempurnaan iman adalah tidak adanya rasa dengki, hasad, atau egois, serta senang apabila saudaranya mendapatkan kebaikan dan hidayah.'
  },
  {
    id: 'h-5',
    title: 'Kebersihan adalah Sebagian dari Iman',
    category: 'Ibadah',
    arabic: 'الطُّهُورُ شَطْرُ الْإِيمَانِ',
    narrator: 'HR. Muslim No. 223',
    translation: '"Kesucian (kebersihan) itu adalah sebagian dari iman."',
    source: 'Shahih Muslim, Kitab Ath-Thaharah',
    explanation:
      'Thaharah fisik dan spiritual merupakan pilar penting dalam ibadah Islam, menghubungkan kebersihan jasmani dengan kemurnian tauhid.'
  },
  {
    id: 'h-6',
    title: 'Menjaga Lisan dan Tangan dari Menyakiti Orang Lain',
    category: 'Sosial',
    arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
    narrator: 'HR. Al-Bukhari No. 10 & Muslim No. 40',
    translation:
      '"Seorang muslim sejati adalah orang yang orang-orang muslim lainnya selamat dari gangguan lisan dan tangannya."',
    source: 'Shahih Al-Bukhari & Shahih Muslim',
    explanation:
      'Menjaga lisan dari ghibah, fitnah, dan ujaran kebencian, serta menjaga tangan dari kezaliman merupakan barometer utama kesalehan sosial.'
  }
];
