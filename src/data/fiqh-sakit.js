/* ============================================================
   IslaMediQ — Panduan Fikih Orang Sakit
   Berdasarkan dalil dari Al-Qur'an dan Hadits Shahih
   ============================================================ */

export const panduanTayamum = {
  title: 'Cara Tayamum',
  icon: '🤲',
  description: 'Tayamum adalah pengganti wudhu ketika tidak mampu menggunakan air karena sakit atau tidak ada air.',
  dalil: {
    arabic: 'فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ',
    transliteration: 'Fa lam tajidū mā\'an fatayammamū sha\'īdan thayyiban famsaḥū biwujūhikum wa aidīkum.',
    translation: '...lalu kamu tidak mendapatkan air, maka bertayamumlah kamu dengan debu yang baik (suci), usaplah wajahmu dan tanganmu.',
    source: 'QS. An-Nisa [4]: 43'
  },
  steps: [
    {
      number: 1,
      title: 'Niat Tayamum',
      detail: 'Niatkan di dalam hati untuk bertayamum menggantikan wudhu karena tidak mampu menggunakan air.'
    },
    {
      number: 2,
      title: 'Membaca Bismillah',
      detail: 'Ucapkan "Bismillah" sebelum memulai tayamum, sebagaimana sebelum wudhu.'
    },
    {
      number: 3,
      title: 'Menepukkan Tangan ke Debu/Tanah',
      detail: 'Tepukkan kedua telapak tangan ke permukaan tanah atau debu suci satu kali tepukan. Di rumah sakit, bisa menggunakan batu bersih atau dinding berdebu.'
    },
    {
      number: 4,
      title: 'Mengusap Wajah',
      detail: 'Usapkan kedua telapak tangan ke seluruh wajah secara merata, dari dahi hingga dagu dan dari telinga ke telinga.'
    },
    {
      number: 5,
      title: 'Mengusap Tangan',
      detail: 'Usapkan tangan kiri ke punggung tangan kanan hingga pergelangan, lalu tangan kanan ke punggung tangan kiri hingga pergelangan.'
    }
  ],
  catatan: 'Tayamum boleh dilakukan jika: (1) Tidak ada air, (2) Sakit yang akan bertambah parah jika terkena air, (3) Air sangat dingin dan tidak ada pemanas. Berdasarkan hadits Amr bin Ash yang bertayamum saat cuaca sangat dingin dan Nabi ﷺ membenarkannya (HR. Abu Dawud no. 334).'
};

export const panduanSholatSakit = {
  title: 'Sholat Saat Sakit',
  icon: '🕌',
  description: 'Sholat tetap wajib selama akal masih sadar. Caranya disesuaikan dengan kemampuan.',
  dalil: {
    arabic: 'صَلِّ قَائِمًا فَإِنْ لَمْ تَسْتَطِعْ فَقَاعِدًا فَإِنْ لَمْ تَسْتَطِعْ فَعَلَى جَنْبٍ',
    transliteration: 'Ṣalli qā\'iman, fa in lam tastaṭi\' fa qā\'idan, fa in lam tastaṭi\' fa \'alā janbin.',
    translation: 'Sholatlah dengan berdiri. Jika tidak mampu, maka dengan duduk. Jika tidak mampu, maka dengan berbaring miring.',
    source: 'HR. Bukhari no. 1117'
  },
  positions: [
    {
      priority: 1,
      title: 'Berdiri',
      icon: '🧍',
      detail: 'Jika masih mampu berdiri meski dengan bersandar pada tongkat atau dinding, maka wajib sholat berdiri. Boleh bersandar jika diperlukan.',
      rukuk: 'Rukuk dengan membungkukkan badan seperti biasa.',
      sujud: 'Sujud seperti biasa di atas lantai.'
    },
    {
      priority: 2,
      title: 'Duduk',
      icon: '🪑',
      detail: 'Jika tidak mampu berdiri, sholat dengan duduk di lantai bersila atau duduk di kursi. Duduk di kursi dibolehkan jika tidak mampu duduk di lantai.',
      rukuk: 'Rukuk dengan membungkukkan badan ke depan dari posisi duduk.',
      sujud: 'Sujud dengan membungkuk lebih rendah dari posisi rukuk. Jika bisa sujud di lantai, itu lebih utama.'
    },
    {
      priority: 3,
      title: 'Berbaring Miring (Ke Kanan)',
      icon: '🛏️',
      detail: 'Jika tidak mampu duduk, berbaring miring ke kanan menghadap kiblat. Posisi ini lebih utama dari telentang.',
      rukuk: 'Isyarat dengan kepala — sedikit mengangguk.',
      sujud: 'Isyarat dengan kepala — mengangguk lebih dalam dari rukuk.'
    },
    {
      priority: 4,
      title: 'Telentang',
      icon: '😴',
      detail: 'Jika tidak mampu miring, boleh sholat telentang dengan kaki menghadap kiblat dan kepala sedikit ditinggikan (bantal) agar menghadap kiblat.',
      rukuk: 'Isyarat dengan kepala atau kelopak mata jika tidak mampu menggerakkan kepala.',
      sujud: 'Isyarat dengan kepala/kelopak mata — sujud lebih rendah dari isyarat rukuk.'
    }
  ],
  catatan: 'Imam An-Nawawi berkata: "Para ulama sepakat bahwa orang yang tidak mampu sujud di atas tanah, cukup berisyarat dengan kepalanya dan tidak wajib mengangkat sesuatu ke dahinya." Sholat tidak boleh ditinggalkan selama akal masih berfungsi.'
};

export const adabOrangSakit = {
  title: 'Adab Orang Sakit',
  icon: '💚',
  description: 'Islam mengajarkan adab dan hikmah di balik sakit yang menimpa seorang mukmin.',
  points: [
    {
      title: 'Bersabar dan Mengharap Pahala',
      detail: 'Sakit menggugurkan dosa. Rasulullah ﷺ bersabda: "Tidaklah seorang Muslim tertimpa suatu penyakit dan sejenisnya, melainkan Allah akan menggugurkan bersamanya dosa-dosanya, seperti pohon yang menggugurkan daun-daunnya."',
      source: 'HR. Bukhari no. 5660, Muslim no. 2571'
    },
    {
      title: 'Memperbanyak Doa dan Dzikir',
      detail: 'Orang sakit hendaknya memperbanyak doa dan dzikir kepada Allah. Doa orang sakit termasuk doa yang dikabulkan. Perbanyak istighfar, tasbih, tahmid, dan membaca Al-Qur\'an sesuai kemampuan.',
      source: 'QS. Al-Baqarah [2]: 186'
    },
    {
      title: 'Tidak Mengeluh Berlebihan',
      detail: 'Boleh mengadukan sakit kepada dokter dan orang terdekat untuk mencari pengobatan, namun tidak berlebihan dalam mengeluh. Sampaikanlah keluhan kepada Allah semata.',
      source: 'QS. Yusuf [12]: 86'
    },
    {
      title: 'Tetap Berprasangka Baik (Husnu Zhann)',
      detail: 'Berprasangka baik kepada Allah bahwa sakit ini adalah ujian untuk meninggikan derajat, bukan hukuman. Allah berfirman: "Ana \'inda zhanni \'abdii bii" (Aku sesuai prasangka hamba-Ku kepada-Ku).',
      source: 'HR. Bukhari no. 7405, Muslim no. 2675'
    },
    {
      title: 'Berobat dan Berikhtiar',
      detail: 'Islam memerintahkan berobat. Rasulullah ﷺ bersabda: "Berobatlah kalian, karena sesungguhnya Allah tidak menurunkan penyakit kecuali menurunkan juga obatnya, kecuali satu penyakit yaitu pikun (tua)."',
      source: 'HR. Abu Dawud no. 3855, dinilai shahih oleh Al-Albani'
    },
    {
      title: 'Menjenguk dan Mendoakan',
      detail: 'Bagi yang sehat, menjenguk orang sakit sangat dianjurkan. Rasulullah ﷺ bersabda: "Jika kamu menjenguk orang sakit, usaplah tanganmu pada wajah atau tangannya, dan tanyakan keadaannya."',
      source: 'HR. Tirmidzi no. 2065'
    }
  ]
};

export const doaSakit = [
  {
    id: 'doa-sakit-1',
    title: 'Doa Ketika Merasakan Sakit',
    arabic: 'بِسْمِ اللَّهِ ثَلاَثًا وَقُلْ سَبْعَ مَرَّاتٍ أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ',
    transliteration: 'Bismillāh (3x), A\'ūżu billāhi wa qudratihi min syarri mā ajidu wa uḥāżiru (7x).',
    translation: 'Dengan menyebut nama Allah (3x). Aku berlindung kepada Allah dan kekuasaan-Nya dari keburukan yang aku rasakan dan aku khawatirkan (7x).',
    source: 'HR. Muslim no. 2202',
    instruction: 'Letakkan tangan pada bagian yang sakit, baca Bismillah 3x, lalu baca doa ini 7x.'
  },
  {
    id: 'doa-sakit-2',
    title: 'Doa Memohon Kesembuhan',
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِهِ وَأَنْتَ الشَّافِي لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ شِفَاءً لاَ يُغَادِرُ سَقَمًا',
    transliteration: 'Allāhumma rabban-nās, ażhibil-ba\'s, isyfihi wa antas-syāfī, lā syifā\'a illā syifā\'uka, syifā\'an lā yughādiru saqamā.',
    translation: 'Ya Allah, Tuhan segala manusia, hilangkanlah penyakitnya, sembuhkanlah ia. Engkaulah yang menyembuhkan, tidak ada kesembuhan kecuali kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.',
    source: 'HR. Bukhari no. 5675, Muslim no. 2191',
    instruction: 'Rasulullah ﷺ mengusap orang sakit dengan tangan kanan beliau sambil membaca doa ini.'
  },
  {
    id: 'doa-sakit-3',
    title: 'Doa Menjenguk Orang Sakit',
    arabic: 'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ',
    transliteration: 'As\'alullāhal-\'aẓīm, rabbal-\'arsyil-\'aẓīm, an yasyfiyak.',
    translation: 'Aku memohon kepada Allah Yang Maha Agung, Tuhan \'Arasy yang agung, agar menyembuhkanmu.',
    source: 'HR. Abu Dawud no. 3106, dinilai shahih oleh Al-Albani',
    instruction: 'Dibaca 7x ketika menjenguk orang sakit. Nabi ﷺ bersabda: "Siapa menjenguk orang sakit yang belum tiba ajalnya, lalu membaca doa ini 7x, niscaya dia akan disembuhkan."'
  },
  {
    id: 'doa-sakit-4',
    title: 'Doa Perlindungan dari Penyakit',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ',
    transliteration: 'Allāhumma innī a\'ūżu bika minal-baraṣi wal-junūni wal-jużāmi wa min sayyi\'il-asqām.',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari penyakit kusta, gila, lepra, dan dari penyakit-penyakit yang buruk.',
    source: 'HR. Abu Dawud no. 1554, dinilai shahih oleh Al-Albani',
    instruction: 'Dibaca setiap pagi dan petang sebagai doa perlindungan dari penyakit.'
  },
  {
    id: 'doa-sakit-5',
    title: 'Doa Ketika Menahan Rasa Sakit',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
    transliteration: 'Lā ilāha illallāhul-\'aẓīmul-ḥalīm. Lā ilāha illallāhu rabbul-\'arsyil-\'aẓīm. Lā ilāha illallāhu rabbus-samāwāti wa rabbul-arḍi wa rabbul-\'arsyil-karīm.',
    translation: 'Tiada Tuhan yang berhak disembah selain Allah Yang Maha Agung, Maha Penyantun. Tiada Tuhan yang berhak disembah selain Allah, Tuhan Arasy yang agung. Tiada Tuhan yang berhak disembah selain Allah, Tuhan langit, Tuhan bumi, dan Tuhan Arasy yang mulia.',
    source: 'HR. Bukhari no. 6346, Muslim no. 2730',
    instruction: 'Doa ini dikenal sebagai doa kurb (kesusahan). Dibaca saat mengalami rasa sakit yang berat.'
  }
];
