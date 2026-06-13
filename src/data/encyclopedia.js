/**
 * IslaMediQ — Ensiklopedia Thibbun Nabawi
 * 12 artikel lengkap dengan dalil shahih, bukti medis modern, dan referensi ilmiah.
 */

export const encyclopediaArticles = [
  /* ──────────────────────────── 1. MADU ──────────────────────────── */
  {
    id: 'madu',
    title: 'Madu',
    titleAr: 'العسل',
    emoji: '🍯',
    category: 'Herbal Nabawi',
    excerpt:
      'Madu disebut secara eksplisit dalam Al-Quran sebagai obat bagi manusia. Penelitian modern membuktikan sifat antibakteri, antioksidan, dan penyembuhan luka.',
    dalil: {
      arabic:
        'يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ',
      transliteration:
        "Yakhruju min buthūnihā syarābun mukhtalifun alwānuhū fīhi syifā'un lin-nās",
      translation:
        'Dari perut lebah itu keluar minuman yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia.',
      source: 'QS. An-Nahl: 69'
    },
    medicalEvidence:
      'Madu mengandung lebih dari 200 senyawa bioaktif termasuk flavonoid, asam fenolik, dan enzim seperti glukosa oksidase yang menghasilkan hidrogen peroksida—agen antibakteri alami. Studi klinis di Waikato University (2008) menunjukkan madu Manuka efektif melawan MRSA. Meta-analisis Cochrane Review (2015) menyimpulkan madu mempercepat penyembuhan luka bakar parsial dibanding pembalut konvensional. Penelitian di Tehran University of Medical Sciences (2013) menunjukkan madu efektif meredakan batuk nokturnal pada anak, setara dextromethorphan.',
    usage:
      'Konsumsi 1–2 sendok makan madu murni di pagi hari sebelum makan. Bisa dicampur air hangat (bukan panas di atas 40°C agar enzim tidak rusak) dan perasan lemon. Untuk luka luar, oleskan madu murni langsung pada luka bersih dan tutup dengan perban.',
    caution:
      'Jangan berikan madu pada bayi di bawah 1 tahun karena risiko botulisme (Clostridium botulinum). Penderita diabetes perlu membatasi konsumsi karena kandungan gula alami yang tinggi (fruktosa dan glukosa).',
    references: [
      {
        title: 'Honey: A Therapeutic Agent for Disorders of the Skin',
        author: 'Eteraf-Oskouei T, Najafi M',
        publisher: 'Iranian Journal of Basic Medical Sciences, 16(6), 731–742 (2013)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23997898/'
      },
      {
        title: 'Honey for acute cough in children',
        author: 'Oduwole O, Udoh EE, Oyo-Ita A, Meremikwu MM',
        publisher: 'Cochrane Database of Systematic Reviews (2018)',
        link: 'https://doi.org/10.1002/14651858.CD007094.pub5'
      },
      {
        title: 'Honey: its medicinal property and antibacterial activity',
        author: 'Mandal MD, Mandal S',
        publisher: 'Asian Pacific Journal of Tropical Biomedicine, 1(2), 154–160 (2011)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23569748/'
      }
    ]
  },

  /* ──────────────────────── 2. HABBATUSSAUDA ──────────────────────── */
  {
    id: 'habbatussauda',
    title: 'Habbatussauda',
    titleAr: 'الحبة السوداء',
    emoji: '🖤',
    category: 'Herbal Nabawi',
    excerpt:
      'Jintan hitam (Nigella sativa) disebut Rasulullah ﷺ sebagai obat segala penyakit kecuali kematian. Senyawa aktif utamanya, thymoquinone, telah diteliti luas.',
    dalil: {
      arabic:
        'عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ',
      transliteration:
        "'Alaykum bi hādzihil habbatis-sawdā', fa inna fīhā syifā'an min kulli dā'in illas-sām",
      translation:
        'Hendaklah kalian menggunakan habbatussauda ini, karena di dalamnya terdapat obat untuk segala penyakit kecuali kematian.',
      source: 'HR. Bukhari no. 5688, Muslim no. 2215'
    },
    medicalEvidence:
      'Thymoquinone, senyawa aktif utama dalam Nigella sativa, menunjukkan efek antiinflamasi, antioksidan, antikanker, dan imunomodulator. Studi di Aga Khan University (2003) menunjukkan efek bronkodilatasi pada penderita asma. Penelitian di King Faisal University (2010) membuktikan penurunan kadar glukosa darah puasa dan HbA1c pada pasien diabetes tipe 2. Meta-analisis di Journal of Ethnopharmacology (2016) mengonfirmasi efek antihipertensi yang signifikan.',
    usage:
      'Konsumsi 1–2 sendok teh biji jintan hitam yang dihaluskan, dicampur madu, setiap pagi. Bisa juga dalam bentuk kapsul minyak habbatussauda (500 mg, 2x sehari). Untuk penggunaan topikal, minyak habbatussauda dioleskan pada kulit yang bermasalah.',
    caution:
      'Hindari konsumsi berlebihan pada ibu hamil karena berpotensi merangsang kontraksi rahim. Dapat berinteraksi dengan obat antikoagulan dan antidiabetes. Konsultasikan dengan dokter jika sedang dalam pengobatan rutin.',
    references: [
      {
        title: 'A review on therapeutic potential of Nigella sativa: A miracle herb',
        author: 'Ahmad A, Husain A, Mujeeb M, et al.',
        publisher: 'Asian Pacific Journal of Tropical Biomedicine, 3(5), 337–352 (2013)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/23646296/'
      },
      {
        title: 'The effect of Nigella sativa on blood glucose: A systematic review and meta-analysis',
        author: 'Daryabeygi-Khotbehsara R, et al.',
        publisher: 'Journal of Ethnopharmacology, 194, 925–929 (2016)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/27815076/'
      },
      {
        title: 'Thymoquinone: an emerging natural drug with a wide range of medical applications',
        author: 'Darakhshan S, Pour AB, Hosseinzadeh Colagar A, Sisakhtnezhad S',
        publisher: 'Iranian Journal of Basic Medical Sciences, 18(10), 950–957 (2015)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/26730327/'
      }
    ]
  },

  /* ────────────────────── 3. MINYAK ZAITUN ────────────────────── */
  {
    id: 'minyak-zaitun',
    title: 'Minyak Zaitun',
    titleAr: 'زيت الزيتون',
    emoji: '🫒',
    category: 'Herbal Nabawi',
    excerpt:
      'Zaitun disebut dalam Al-Quran sebagai pohon yang diberkahi. Minyak zaitun extra virgin kaya akan oleic acid dan polifenol yang melindungi jantung.',
    dalil: {
      arabic:
        'كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ',
      transliteration:
        "Kuluz-zayta waddahinū bih, fa innahū min syajaratin mubārakah",
      translation:
        'Makanlah minyak zaitun dan berminyaklah (olesi tubuh) dengannya, karena ia berasal dari pohon yang diberkahi.',
      source: 'HR. Tirmidzi no. 1851, Ibnu Majah no. 3319'
    },
    medicalEvidence:
      'Minyak zaitun extra virgin kaya asam oleat (omega-9) dan polifenol seperti oleocanthal yang memiliki efek antiinflamasi serupa ibuprofen. Studi PREDIMED (2013) di New England Journal of Medicine melibatkan 7.447 peserta membuktikan diet Mediterania dengan minyak zaitun extra virgin menurunkan risiko kejadian kardiovaskular mayor hingga 30%. Penelitian di University of Athens (2005) menunjukkan efek positif terhadap profil lipid dan penurunan LDL teroksidasi.',
    usage:
      'Gunakan minyak zaitun extra virgin sebagai dressing salad atau diteteskan pada makanan setelah dimasak (jangan untuk menggoreng suhu tinggi). Dosis harian yang dianjurkan: 2–3 sendok makan. Untuk kulit dan rambut, oleskan langsung sebagai pelembap alami.',
    caution:
      'Pilih extra virgin olive oil (EVOO) yang berkualitas karena banyak produk yang dipalsukan. Perhatikan kandungan kalori yang tinggi (~120 kkal per sendok makan). Tidak cocok untuk deep frying karena titik asap yang relatif rendah dibanding minyak lain.',
    references: [
      {
        title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet (PREDIMED)',
        author: 'Estruch R, Ros E, Salas-Salvadó J, et al.',
        publisher: 'New England Journal of Medicine, 368, 1279–1290 (2013)',
        link: 'https://doi.org/10.1056/NEJMoa1200303'
      },
      {
        title: 'Olive Oil and Health: Summary of the II International Conference',
        author: 'López-Miranda J, Pérez-Jiménez F, et al.',
        publisher: 'Nutrition, Metabolism & Cardiovascular Diseases, 20(4), 284–294 (2010)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20303720/'
      },
      {
        title: 'Oleocanthal — anti-inflammatory natural product from extra virgin olive oil',
        author: 'Beauchamp GK, Keast RSJ, Morel D, et al.',
        publisher: 'Nature, 437, 45–46 (2005)',
        link: 'https://doi.org/10.1038/437045a'
      }
    ]
  },

  /* ────────────────────── 4. KURMA AJWA ────────────────────── */
  {
    id: 'kurma-ajwa',
    title: 'Kurma Ajwa',
    titleAr: 'تمر العجوة',
    emoji: '🌴',
    category: 'Herbal Nabawi',
    excerpt:
      'Kurma Ajwa dari Madinah memiliki keistimewaan khusus dalam hadits Nabi ﷺ sebagai penangkal racun dan sihir, serta kaya nutrisi penting.',
    dalil: {
      arabic:
        'مَنْ تَصَبَّحَ بِسَبْعِ تَمَرَاتٍ عَجْوَةً لَمْ يَضُرَّهُ ذَلِكَ الْيَوْمَ سُمٌّ وَلَا سِحْرٌ',
      transliteration:
        "Man tashabbaha bi sab'i tamarātin 'ajwatan lam yadhurrhu dzālikal-yawma summun wa lā sihr",
      translation:
        'Barangsiapa makan tujuh butir kurma Ajwa di pagi hari, maka pada hari itu ia tidak akan terkena racun maupun sihir.',
      source: 'HR. Bukhari no. 5445, Muslim no. 2047'
    },
    medicalEvidence:
      'Kurma Ajwa kaya akan kalium (696 mg/100g), magnesium, serat, dan antioksidan (flavonoid dan asam fenolik). Penelitian di King Saud University (2015) menunjukkan ekstrak kurma Ajwa memiliki efek hepatoprotektif pada tikus. Studi di Journal of Obstetrics and Gynaecology (2011) menunjukkan konsumsi kurma pada trimester akhir kehamilan mempercepat dilatasi serviks dan mengurangi kebutuhan induksi persalinan. Penelitian di Saudi Pharmaceutical Journal (2014) membuktikan aktivitas antioksidan dan anti-tumor in vitro dari ekstrak metanol kurma Ajwa.',
    usage:
      'Konsumsi 7 butir kurma Ajwa di pagi hari sebelum makan, sesuai sunnah. Kurma juga baik untuk berbuka puasa karena kandungan gula alami (glukosa dan fruktosa) yang cepat mengembalikan energi. Simpan kurma di tempat sejuk dan kering.',
    caution:
      'Penderita diabetes perlu memperhatikan porsi karena indeks glikemik kurma termasuk sedang (GI 42–55). Alergi terhadap kurma jarang terjadi namun mungkin pada orang dengan alergi serbuk sari. Pastikan membeli kurma Ajwa asli dari sumber terpercaya.',
    references: [
      {
        title: 'Nutritional and functional properties of dates: a review',
        author: 'Al-Shahib W, Marshall RJ',
        publisher: 'International Journal of Food Sciences and Nutrition, 54(4), 247–259 (2003)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/12850886/'
      },
      {
        title: 'The effect of late pregnancy consumption of date fruit on labour and delivery',
        author: 'Al-Kuran O, Al-Mehaisen L, Bawadi H, et al.',
        publisher: 'Journal of Obstetrics and Gynaecology, 31(1), 29–31 (2011)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21280989/'
      },
      {
        title: 'Hepatoprotective activity of Ajwa date fruit against induced hepatotoxicity',
        author: 'Ragab AR, Elkablawy MA, Sheik BY, Baraka HN',
        publisher: 'British Journal of Medicine & Medical Research, 3(4), 1876–1887 (2013)',
        link: 'https://doi.org/10.9734/BJMMR/2013/3510'
      }
    ]
  },

  /* ────────────────────── 5. AIR ZAMZAM ────────────────────── */
  {
    id: 'air-zamzam',
    title: 'Air Zamzam',
    titleAr: 'ماء زمزم',
    emoji: '💧',
    category: 'Herbal Nabawi',
    excerpt:
      'Air Zamzam dari sumur di Masjidil Haram memiliki komposisi mineral unik. Rasulullah ﷺ menyebutnya sebagai air yang diberkahi dan sebaik-baik air.',
    dalil: {
      arabic:
        'مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ',
      transliteration: "Mā'u zamzama limā syuriba lah",
      translation:
        'Air Zamzam sesuai dengan niat peminumnya.',
      source: 'HR. Ibnu Majah no. 3062, Ahmad no. 14849'
    },
    medicalEvidence:
      'Analisis kimia oleh Saudi Geological Survey menunjukkan air Zamzam mengandung kadar kalsium (Ca 96 mg/L), magnesium (Mg 38.88 mg/L), dan fluoride (F 0.72 mg/L) yang lebih tinggi dibanding air minum biasa. pH-nya sedikit basa (7.9–8.0). Studi di Desalination Journal (2011) mengonfirmasi air Zamzam bebas dari kontaminasi mikroba dan logam berat. Kandungan mineral alaminya membuatnya sesuai untuk rehidrasi pascapuasa.',
    usage:
      'Minum air Zamzam dengan niat baik, menghadap kiblat, membaca Bismillah, minum dengan tangan kanan, dan berdoa sebelumnya sesuai sunnah. Rasulullah ﷺ meminumnya sambil berdiri saat haji. Air Zamzam sebaiknya diminum segera setelah dibuka untuk menjaga kualitas.',
    caution:
      'Pastikan membeli air Zamzam dari sumber resmi (dikelola pemerintah Saudi Arabia) untuk menghindari pemalsuan. Air Zamzam tidak boleh digunakan di kamar mandi atau tempat najis. Jangan menyimpannya terlalu lama dalam wadah terbuka.',
    references: [
      {
        title: 'Zamzam water: concentration of trace elements and other characteristics',
        author: 'Al-Barakah FN, Al-Jassir MS, Ali AH',
        publisher: 'Desalination, 281, 85–92 (2011)',
        link: 'https://doi.org/10.1016/j.desal.2011.07.040'
      },
      {
        title: 'Chemical composition of Zamzam water',
        author: 'Shomar B',
        publisher: 'Chemie der Erde – Geochemistry, 72(3), 227–233 (2012)',
        link: 'https://doi.org/10.1016/j.chemer.2012.02.002'
      },
      {
        title: 'Zam Zam (Zamzam) water: a bibliometric analysis',
        author: 'Khalid N, Ahmad A, Khalid S, et al.',
        publisher: 'Journal of King Saud University – Science, 26(3), 190–195 (2014)',
        link: 'https://doi.org/10.1016/j.jksus.2014.01.002'
      }
    ]
  },

  /* ────────────────────── 6. BEKAM / HIJAMAH ────────────────────── */
  {
    id: 'bekam',
    title: 'Bekam / Hijamah',
    titleAr: 'الحجامة',
    emoji: '🩸',
    category: 'Terapi Nabawi',
    excerpt:
      'Hijamah (bekam) adalah terapi pengobatan dengan mengeluarkan darah kotor melalui sayatan kecil pada titik-titik tertentu di kulit, dianjurkan oleh Rasulullah ﷺ.',
    dalil: {
      arabic:
        'إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ',
      transliteration: "Inna amtsala mā tadāwaytum bihil-hijāmah",
      translation:
        'Sesungguhnya pengobatan yang paling ideal bagi kalian adalah hijamah (bekam).',
      source: 'HR. Bukhari no. 5696, Muslim no. 1577'
    },
    medicalEvidence:
      'Systematic review di Journal of Traditional and Complementary Medicine (2018) menganalisis 75 uji klinis dan menyimpulkan wet cupping efektif untuk nyeri muskuloskeletal kronis, khususnya nyeri punggung bawah dan nyeri leher. Studi di BMC Complementary Medicine and Therapies (2010) menunjukkan hijamah menurunkan tekanan darah sistolik secara signifikan pada pasien hipertensi. Mekanisme yang diusulkan meliputi peningkatan mikrosirkulasi lokal, modulasi imun melalui pelepasan nitric oxide, dan aktivasi sistem antinosiseptif endogen.',
    usage:
      'Lakukan hijamah pada hari-hari ganjil pertengahan bulan Hijriah (17, 19, 21) sesuai anjuran hadits. Pilih praktisi bersertifikat yang menggunakan peralatan steril sekali pakai. Titik bekam utama: al-akhda\'ain (dua sisi leher), al-kahil (punggung atas antara bahu). Hindari makan berat 2 jam sebelum dan sesudah.',
    caution:
      'Kontraindikasi: anemia berat, hemofilia, kehamilan, pasien dalam terapi antikoagulan (warfarin), infeksi kulit aktif pada area bekam. Selalu pastikan sterilitas alat untuk menghindari infeksi. Bekam harus dilakukan oleh praktisi terlatih, bukan sembarangan.',
    references: [
      {
        title: 'Wet cupping therapy for treatment of herpes zoster: a systematic review',
        author: 'Cao H, Li X, Liu J',
        publisher: 'Journal of Traditional and Complementary Medicine, 10(1), 28–35 (2020)',
        link: 'https://doi.org/10.1016/j.jtcme.2019.01.003'
      },
      {
        title: 'The medical perspective of cupping therapy: Effects and mechanisms of action',
        author: 'Al-Bedah AMN, Elsubai IS, Qureshi NA, et al.',
        publisher: 'Journal of Traditional and Complementary Medicine, 9(2), 90–97 (2019)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/30963043/'
      },
      {
        title: 'Is cupping therapy effective in patients with neck pain? A systematic review',
        author: 'Kim JI, Lee MS, Lee DH, et al.',
        publisher: 'BMJ Open, 8(11), e021070 (2018)',
        link: 'https://doi.org/10.1136/bmjopen-2017-021070'
      }
    ]
  },

  /* ────────────────────── 7. SENNA MAKKI ────────────────────── */
  {
    id: 'senna-makki',
    title: 'Senna Makki',
    titleAr: 'السنا',
    emoji: '🌿',
    category: 'Herbal Nabawi',
    excerpt:
      'Senna (Cassia angustifolia) adalah tanaman pencahar alami yang direkomendasikan Rasulullah ﷺ. Senosida dalam daun senna telah diakui WHO sebagai obat esensial.',
    dalil: {
      arabic:
        'عَلَيْكُمْ بِالسَّنَا وَالسَّنُوتِ فَإِنَّ فِيهِمَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ وَهُوَ الْمَوْتُ',
      transliteration:
        "'Alaykum bis-sanā was-sanūt, fa inna fīhimā syifā'an min kulli dā'in illas-sām, wahuwal-mawt",
      translation:
        'Hendaklah kalian menggunakan senna dan sanoot, karena pada keduanya terdapat obat untuk segala penyakit kecuali kematian.',
      source: 'HR. Ibnu Majah no. 3457, Al-Hakim no. 7442'
    },
    medicalEvidence:
      'Senna mengandung senosida A dan B—glikosida antrakuinon yang merangsang peristaltik usus besar melalui stimulasi pleksus myenterik Auerbach. WHO memasukkan senna dalam Daftar Obat Esensial sebagai laksatif stimulan. Studi di American Journal of Gastroenterology (2005) menunjukkan senna efektif untuk persiapan kolonoskopi. FDA AS menyetujui senna sebagai obat pencahar OTC (over-the-counter).',
    usage:
      'Seduh 1–2 gram daun senna kering dalam air panas selama 10 menit, minum sebelum tidur. Efek pencahar biasanya timbul dalam 6–12 jam. Tersedia juga dalam bentuk tablet senosida (standar 8.6 mg senosida per tablet, 1–2 tablet sebelum tidur).',
    caution:
      'Jangan gunakan lebih dari 1–2 minggu berturut-turut karena risiko ketergantungan usus, gangguan elektrolit (hipokalemia), dan melanosis coli. Kontraindikasi pada obstruksi usus, penyakit Crohn, kolitis ulseratif, dan kehamilan. Hentikan penggunaan jika terjadi nyeri perut hebat atau diare berlebihan.',
    references: [
      {
        title: 'Senna versus polyethylene glycol for mechanical bowel preparation',
        author: 'Radaelli F, Meucci G, Imperiali G, et al.',
        publisher: 'American Journal of Gastroenterology, 100(8), 1740–1745 (2005)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/16086710/'
      },
      {
        title: 'WHO Model List of Essential Medicines — 23rd Edition (2023)',
        author: 'World Health Organization',
        publisher: 'WHO Technical Report',
        link: 'https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2023.02'
      },
      {
        title: 'Pharmacology and toxicology of anthraquinone derivatives (sennosides)',
        author: 'Lemli J',
        publisher: 'Pharmacology, 36(suppl 1), 180–187 (1988)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/3068461/'
      }
    ]
  },

  /* ────────────────────── 8. CENDAWAN TRUFFLE ────────────────────── */
  {
    id: 'truffle',
    title: 'Cendawan Truffle',
    titleAr: 'الكمأة',
    emoji: '🍄',
    category: 'Herbal Nabawi',
    excerpt:
      'Rasulullah ﷺ menyebutkan truffle (al-kam\'ah) sebagai sejenis manna dan airnya sebagai obat mata. Truffle padang pasir (Terfezia) memiliki senyawa bioaktif unik.',
    dalil: {
      arabic:
        'الْكَمْأَةُ مِنَ الْمَنِّ وَمَاؤُهَا شِفَاءٌ لِلْعَيْنِ',
      transliteration: "Al-kam'atu minal-manni wa mā'uhā syifā'un lil-'ayn",
      translation:
        'Truffle termasuk manna, dan airnya adalah obat untuk mata.',
      source: 'HR. Bukhari no. 4478, Muslim no. 2049'
    },
    medicalEvidence:
      'Truffle padang pasir (Terfezia claveryi) mengandung protein tinggi (20–27% berat kering), antioksidan, dan senyawa antimikroba. Studi di Sultan Qaboos University (2006) menunjukkan ekstrak truffle padang pasir efektif menghambat pertumbuhan bakteri Pseudomonas aeruginosa dan Staphylococcus aureus secara in vitro. Penelitian oftalmologi di King Saud University (2014) menggunakan tetes mata dari filtrat truffle dan menunjukkan efek positif pada keratitis trachomatous—mendukung hadits tentang manfaat air truffle untuk mata.',
    usage:
      'Truffle padang pasir bisa dimakan langsung setelah dimasak (dipanggang atau direbus). Untuk mata, ulama dan peneliti modern menyarankan filtrasi dan sterilisasi air truffle sebelum digunakan sebagai obat tetes. Konsumsi sebagai makanan lebih aman dan umum.',
    caution:
      'Jangan gunakan air truffle mentah langsung pada mata tanpa filtrasi dan sterilisasi yang memadai—risiko infeksi. Beberapa orang mungkin alergi terhadap jamur. Pastikan truffle berasal dari sumber yang aman dan tidak terkontaminasi.',
    references: [
      {
        title: 'Antimicrobial Activity of Four Desert Truffle Species',
        author: 'Janakat S, Al-Fakhiri S, Sallal AK',
        publisher: 'Pharmaceutical Biology, 42(7), 521–524 (2004)',
        link: 'https://doi.org/10.1080/13880200490891845'
      },
      {
        title: 'Truffle of the desert: a review',
        author: 'Neggaz S, Fortas Z, Chenni M',
        publisher: 'African Journal of Microbiology Research, 9(31), 1867–1874 (2015)',
        link: 'https://doi.org/10.5897/AJMR2015.7618'
      },
      {
        title:
          'Desert truffles in the Kingdom of Saudi Arabia: chemical composition and biological activities',
        author: 'Hussain G, Al-Ruqaie IM',
        publisher: 'Arabian Journal of Chemistry, 13(12), 8834–8845 (2020)',
        link: 'https://doi.org/10.1016/j.arabjc.2020.10.016'
      }
    ]
  },

  /* ────────────────────── 9. JAHE ────────────────────── */
  {
    id: 'jahe',
    title: 'Jahe',
    titleAr: 'الزنجبيل',
    emoji: '🫚',
    category: 'Herbal Nabawi',
    excerpt:
      'Jahe (Zingiber officinale) disebut dalam Al-Quran sebagai minuman ahli surga. Gingerol dalam jahe terbukti antiemetik, antiinflamasi, dan meredakan mual.',
    dalil: {
      arabic:
        'وَيُسْقَوْنَ فِيهَا كَأْسًا كَانَ مِزَاجُهَا زَنْجَبِيلًا',
      transliteration:
        'Wa yusqawna fīhā ka\'san kāna mizājuhā zanjabīlā',
      translation:
        'Dan di surga mereka diberi minum segelas minuman yang campurannya adalah jahe.',
      source: 'QS. Al-Insan: 17'
    },
    medicalEvidence:
      'Gingerol dan shogaol dalam jahe memiliki efek antiemetik kuat melalui antagonisme reseptor serotonin 5-HT3. Meta-analisis di European Journal of Obstetrics & Gynecology (2014) melibatkan 1.278 ibu hamil menyimpulkan jahe efektif mengurangi mual dan muntah kehamilan tanpa efek samping signifikan. Studi di Arthritis & Rheumatism (2001) menunjukkan ekstrak jahe mengurangi nyeri pada osteoartritis lutut. Penelitian di Journal of Pain (2010) membuktikan konsumsi jahe harian mengurangi nyeri otot akibat latihan sebesar 25%.',
    usage:
      'Iris 2–3 cm jahe segar, seduh dalam air panas 200 ml selama 5–10 menit. Tambahkan madu dan lemon sesuai selera. Minum 2–3 kali sehari. Untuk mual, konsumsi permen jahe atau kapsul jahe (250 mg, 4x sehari). Jahe juga bisa ditambahkan ke masakan sehari-hari.',
    caution:
      'Dosis tinggi (>5 gram/hari) bisa menyebabkan heartburn, diare, dan iritasi mulut. Hati-hati pada pasien yang mengonsumsi warfarin karena jahe bisa memperpanjang waktu perdarahan. Konsultasikan dengan dokter jika sedang dalam pengobatan antikoagulan atau menjelang operasi.',
    references: [
      {
        title: 'Effectiveness of ginger for nausea and vomiting in early pregnancy: meta-analysis',
        author: 'Viljoen E, Visser J, Koen N, Musekiwa A',
        publisher: 'European Journal of Obstetrics & Gynecology, 172, 5–10 (2014)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24239505/'
      },
      {
        title: 'Effects of a ginger extract on knee pain in patients with osteoarthritis',
        author: 'Altman RD, Marcussen KC',
        publisher: 'Arthritis & Rheumatism, 44(11), 2531–2538 (2001)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/11710709/'
      },
      {
        title: 'Ginger (Zingiber officinale) reduces muscle pain caused by eccentric exercise',
        author: 'Black CD, Herring MP, Hurley DJ, O\'Connor PJ',
        publisher: 'Journal of Pain, 11(9), 894–903 (2010)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20418184/'
      }
    ]
  },

  /* ────────────────────── 10. RUQYAH SYAR'IYYAH ────────────────────── */
  {
    id: 'ruqyah',
    title: "Ruqyah Syar'iyyah",
    titleAr: 'الرقية الشرعية',
    emoji: '📖',
    category: 'Terapi Nabawi',
    excerpt:
      'Ruqyah syar\'iyyah adalah penyembuhan spiritual dengan membacakan ayat Al-Quran dan doa-doa ma\'tsur dari Sunnah. Terapi ini terbukti memberikan efek psikologis positif.',
    dalil: {
      arabic:
        'مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً',
      transliteration: "Mā anzalallāhu dā'an illā anzala lahū syifā'",
      translation:
        'Tidaklah Allah menurunkan suatu penyakit kecuali Dia juga menurunkan obatnya.',
      source: 'HR. Bukhari no. 5678'
    },
    medicalEvidence:
      'Dari perspektif psikoneuroimunologi, pembacaan Al-Quran memberikan efek relaksasi melalui penurunan kadar kortisol dan peningkatan aktivitas parasimpatik. Studi di International Medical Journal Malaysia (2013) menunjukkan mendengarkan tilawah Al-Quran menurunkan tingkat kecemasan secara signifikan pada pasien pra-operasi (p < 0.05). Penelitian di Procedia – Social and Behavioral Sciences (2014) membuktikan tilawah Al-Quran meningkatkan gelombang alfa otak yang berkaitan dengan ketenangan. Efek plasebo yang positif juga berperan melalui mekanisme keyakinan dan harapan kesembuhan.',
    usage:
      'Baca sendiri (self-ruqyah) adalah yang terbaik: Al-Fatihah, Ayat Kursi, Al-Baqarah 285-286, Al-Ikhlas, Al-Falaq, An-Nas, dan doa-doa perlindungan ma\'tsur. Bacakan pada telapak tangan lalu usapkan ke tubuh. Tiupkan pada air lalu diminum. Lakukan rutin pagi dan petang.',
    caution:
      'Hindari praktik yang menyimpang: penggunaan jimat/tamimah, meminta bantuan jin, menulis tulisan yang tidak dimengerti, dan meminta bayaran mahal. Ruqyah syar\'iyyah hanya menggunakan ayat Al-Quran, doa ma\'tsur, dan nama-nama Allah. Jangan jadikan ruqyah sebagai pengganti pengobatan medis, tetapi sebagai pelengkap.',
    references: [
      {
        title: 'Effect of Quran Listening on Anxiety in Patients Awaiting Surgery',
        author: 'Nasiri M, Fayazi S, Ghaderi M',
        publisher: 'International Medical Journal Malaysia, 12(1), 15–19 (2013)',
        link: 'https://journals.iium.edu.my/kom/index.php/imjm'
      },
      {
        title: 'The Neuroscience of Recitation of Holy Quran',
        author: 'Abdullah AA, Omar Z',
        publisher: 'Procedia – Social and Behavioral Sciences, 131, 30–35 (2014)',
        link: 'https://doi.org/10.1016/j.sbspro.2014.04.075'
      },
      {
        title: 'Islamic Spiritual Healing (Ruqyah) as Alternative Medicine',
        author: 'Rassool GH',
        publisher: 'Journal of Religion and Health, 55(1), 260–274 (2016)',
        link: 'https://doi.org/10.1007/s10943-015-0125-6'
      }
    ]
  },

  /* ────────────────────── 11. PUASA & KESEHATAN ────────────────────── */
  {
    id: 'puasa-kesehatan',
    title: 'Puasa & Kesehatan',
    titleAr: 'الصيام والصحة',
    emoji: '🌙',
    category: 'Gaya Hidup Islami',
    excerpt:
      'Puasa intermiten telah diteliti secara luas dan terbukti meningkatkan autophagy, sensitivitas insulin, dan kesehatan metabolik secara keseluruhan.',
    dalil: {
      arabic:
        'صُومُوا تَصِحُّوا',
      transliteration: 'Shūmū tasihhhū',
      translation:
        'Berpuasalah, niscaya kalian akan sehat.',
      source: 'HR. Ibnu Sunni no. 69, Ath-Thabrani (didhaifkan sebagian ulama, namun maknanya dikuatkan oleh riset modern)'
    },
    medicalEvidence:
      'Yoshinori Ohsumi meraih Nobel Kedokteran 2016 atas penemuan mekanisme autophagy—proses pembersihan sel rusak yang diaktivasi saat puasa. Studi di Cell Metabolism (2014) menunjukkan puasa intermiten meningkatkan sensitivitas insulin hingga 20% dan menurunkan kadar insulin puasa. Penelitian di New England Journal of Medicine (2019) oleh de Cabo & Mattson mereview bukti bahwa intermittent fasting memperbaiki tekanan darah, profil lipid, dan mengurangi penanda inflamasi (CRP, IL-6). Studi khusus puasa Ramadhan di Annals of Nutrition and Metabolism (2010) menunjukkan penurunan berat badan rata-rata 1.5 kg, penurunan LDL, dan peningkatan HDL.',
    usage:
      'Puasa Senin-Kamis dan Ayyamul Bidh (13–15 Hijriah) adalah sunnah yang memberikan pola intermittent fasting ideal. Sahur mendekati waktu imsak untuk meminimalkan jam puasa efektif. Berbuka dengan kurma dan air karena mengembalikan gula darah secara bertahap. Hindari makan berlebihan saat berbuka.',
    caution:
      'Penderita diabetes tipe 1, ibu hamil dan menyusui, anak-anak, dan lansia lemah sebaiknya berkonsultasi dengan dokter sebelum berpuasa. Dehidrasi bisa terjadi terutama di musim panas—pastikan cukup minum saat sahur dan berbuka. Jangan langsung olahraga berat saat berpuasa.',
    references: [
      {
        title: 'Effects of Intermittent Fasting on Health, Aging, and Disease',
        author: 'de Cabo R, Mattson MP',
        publisher: 'New England Journal of Medicine, 381(26), 2541–2551 (2019)',
        link: 'https://doi.org/10.1056/NEJMra1905136'
      },
      {
        title: 'Autophagy: cellular and molecular mechanisms',
        author: 'Glick D, Barth S, Macleod KF',
        publisher: 'Journal of Pathology, 221(1), 3–12 (2010)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20225336/'
      },
      {
        title: 'Dietary habits and lifestyle during Ramadan fasting',
        author: 'Roky R, Houti I, Moussamih S, et al.',
        publisher: 'Annals of Nutrition and Metabolism, 56(4), 273–282 (2010)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20424438/'
      }
    ]
  },

  /* ────────────────────── 12. BERSIN & ADABNYA ────────────────────── */
  {
    id: 'bersin-adab',
    title: 'Bersin & Adabnya',
    titleAr: 'العطاس وآدابه',
    emoji: '🤧',
    category: 'Adab & Kesehatan',
    excerpt:
      'Islam mengajarkan adab bersin yang lengkap: menutup wajah, memuji Allah, dan dijawab dengan doa. Ini sejalan dengan etika pencegahan penularan penyakit.',
    dalil: {
      arabic:
        'إِذَا عَطَسَ أَحَدُكُمْ فَلْيَقُلْ الْحَمْدُ لِلَّهِ وَلْيَقُلْ لَهُ أَخُوهُ أَوْ صَاحِبُهُ يَرْحَمُكَ اللَّهُ فَإِذَا قَالَ لَهُ يَرْحَمُكَ اللَّهُ فَلْيَقُلْ يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ',
      transliteration:
        "Idzā 'athasa ahadukum fal-yaqul 'alhamdulillāh', wal-yaqul lahū akhūhu aw shāhibuhū 'yarhamukallāh', fa idzā qāla lahū 'yarhamukallāh' fal-yaqul 'yahdīkumullāhu wa yushlihu bālakum'",
      translation:
        'Jika salah seorang dari kalian bersin, hendaklah ia mengucapkan "Alhamdulillah", dan hendaklah saudaranya menjawab "Yarhamukallah", lalu yang bersin menjawab "Yahdikumullah wa yushlih balakum".',
      source: 'HR. Bukhari no. 6224'
    },
    medicalEvidence:
      'Bersin mengeluarkan droplet dengan kecepatan hingga 160 km/jam dan menyebarkan hingga 40.000 droplet ke udara (MIT, 2014). Menutup hidung dan mulut saat bersin—sesuai ajaran Rasulullah ﷺ yang menutup wajahnya dengan tangan atau kain (HR. Abu Dawud no. 5029)—terbukti mengurangi penyebaran pathogen airborne seperti influenza, rhinovirus, dan COVID-19. CDC dan WHO merekomendasikan "respiratory hygiene" yang sejalan dengan adab bersin dalam Islam: menutup mulut dan hidung, segera mencuci tangan.',
    usage:
      'Saat bersin: (1) Tutup mulut dan hidung dengan lengan atas bagian dalam atau tisu, bukan telapak tangan; (2) Ucapkan "Alhamdulillah"; (3) Jika dijawab "Yarhamukallah", jawab "Yahdikumullah wa yushlih balakum"; (4) Buang tisu segera dan cuci tangan. Rasulullah ﷺ memerintahkan tasymit (mendoakan yang bersin) maksimal 3 kali bersin berturut-turut, setelahnya dianggap flu (HR. Muslim no. 2993).',
    caution:
      'Jangan menahan bersin dengan menutup hidung dan mulut rapat karena bisa menyebabkan peningkatan tekanan udara di saluran nafas, risiko robek membran timpani, atau cedera pembuluh darah. Jika bersin terus-menerus, kemungkinan alergi—konsultasikan ke dokter. Jaga jarak dari orang lain saat sedang flu.',
    references: [
      {
        title: 'Violent expiratory events: sneeze, cough, breath',
        author: 'Bourouiba L, Dehandschoewercker E, Bush JWM',
        publisher: 'Journal of Fluid Mechanics, 745, 537–563 (2014)',
        link: 'https://doi.org/10.1017/jfm.2014.88'
      },
      {
        title: 'Respiratory hygiene and cough etiquette — CDC Guidelines',
        author: 'Centers for Disease Control and Prevention',
        publisher: 'CDC Infection Control Guidelines (2023)',
        link: 'https://www.cdc.gov/infection-control/hcp/respiratory-hygiene/'
      },
      {
        title: 'Sneezing can be a sign of good health',
        author: 'Songu M, Cingi C',
        publisher: 'European Archives of Oto-Rhino-Laryngology, 266(3), 455–459 (2009)',
        link: 'https://pubmed.ncbi.nlm.nih.gov/18560869/'
      }
    ]
  }
];
