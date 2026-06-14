const KNOWLEDGE_BASE = {
  // ==========================================
  // 1-10: GEJALA UMUM & SISTEMIK
  // ==========================================
  demam: {
    analisis: "[ANALISIS MEDIS] — Demam adalah peningkatan suhu tubuh di atas 38°C yang menandakan sistem imun sedang aktif melawan infeksi. Jaga hidrasi, kompres air hangat, dan istirahat total. Konsultasi ke dokter jika demam menetap >3 hari.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Demam itu berasal dari embusan api neraka, maka dinginkanlah ia dengan air.' (HR. Bukhari no. 5723, HR. Muslim no. 2210).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Ilmu Penyakit Dalam, Ed. VI, dr. Sudoyo AW, Penerbit Interna Publishing.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim Al-Jauziyyah, Penerbit Darul Haq."
  },
  lemas: {
    analisis: "[ANALISIS MEDIS] — Lemas (fatigue) bisa dipicu oleh kurang tidur, dehidrasi, kurang darah (anemia), atau pasca-infeksi. Pulihkan energi dengan konsumsi karbohidrat kompleks dan air putih.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menganjurkan Talbinah (sup gandum) untuk memulihkan energi dan menenangkan hati orang yang sakit (HR. Bukhari no. 5689, HR. Muslim no. 2216).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Harrison's Principles of Internal Medicine, Jilid 2, McGraw-Hill.\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah, Penerbit Muassasatur Risalah."
  },
  menggigil: {
    analisis: "[ANALISIS MEDIS] — Menggigil adalah respons otot yang berkontraksi cepat untuk meningkatkan suhu tubuh saat demam atau kedinginan. Gunakan pakaian nyaman, hindari mandi air es.",
    sunnah: "[MENURUT SUNNAH] — Hadis tentang keutamaan sabar saat sakit demam/menggigil: 'Janganlah kamu mencela demam, karena ia menghilangkan dosa anak Adam.' (HR. Muslim no. 2575).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Keperawatan Medikal Bedah, Brunner & Suddarth, Penerbit EGC.\n- Thibbun Nabawi: Al-Minhaj Syarah Shahih Muslim, Imam An-Nawawi, Dar Ihya At-Turats."
  },
  berkeringat_malam: {
    analisis: "[ANALISIS MEDIS] — Keringat berlebih di malam hari tanpa aktivitas fisik bisa disebabkan oleh regulasi suhu tubuh yang tidak stabil atau infeksi ringan. Pastikan ventilasi kamar baik.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menyukai kebersihan dan mandi untuk menjaga kestabilan tubuh. Dianjurkan merutinkan konsumsi madu di pagi hari untuk memperkuat imun (HR. Bukhari no. 5682).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Current Medical Diagnosis and Treatment, Maxxine A., McGraw-Hill.\n- Thibbun Nabawi: Fathul Bari, Ibnu Hajar Al-Asqalani, Penerbit Pustaka Azzam."
  },
  kurang_tidur: {
    analisis: "[ANALISIS MEDIS] — Insomnia atau kurang tidur mengganggu sistem kognitif dan menurunkan imunitas tubuh. Hindari gadget 1 jam sebelum tidur dan terapkan sleep hygiene.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ melarang berbincang-bincang hal yang tidak bermanfaat setelah salat Isya agar bisa tidur lebih cepat (HR. Bukhari no. 568, HR. Muslim no. 647).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Klinik Kesehataan Somnologi Indonesia, PDSKJI.\n- Thibbun Nabawi: Kitab Al-Adab Al-Mufrad, Imam Al-Bukhari, Dar Al-Shiddiq."
  },
  pegal: {
    analisis: "[ANALISIS MEDIS] — Pegal-pegal (myalgia) terjadi karena penumpukan asam laktat akibat kelelahan otot atau gejala awal flu. Lakukan peregangan ringan dan mandi air hangat.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Gunakanlah minyak zaitun dan berminyaklah dengannya, karena ia dari pohon yang berkah.' (HR. Tirmidzi no. 1851, Shahih). Oil zaitun baik untuk pijat otot.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Gangguan Muskuloskeletal, dr. Helmi ZN, Penerbit Salemba Medika.\n- Thibbun Nabawi: Al-Jami' li Ahkam Al-Qur'an, Imam Al-Qurtubi, Dar Al-Kitab Al-Arabi."
  },
  kurang_darah: {
    analisis: "[ANALISIS MEDIS] — Kurang darah (anemia) umumnya disebabkan kekurangan zat besi, ditandai dengan 5L (Lemas, Letih, Lesu, Lelah, Lalai). Konsumsi sayuran hijau dan daging merah.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ gemar mengonsumsi kurma basah (ruthab) bersama semangka untuk menyeimbangkan unsur tubuh (HR. Abu Dawud no. 3836). Kurma kaya akan zat besi alami.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Hematologi Klinis Ringkas, Prof. I Made Bakta, Penerbit EGC.\n- Thibbun Nabawi: Zad al-Ma'ad, Jilid 4, Ibnu Qayyim Al-Jauziyyah."
  },
  berat_badan_turun: {
    analisis: "[ANALISIS MEDIS] — Penurunan berat badan tanpa diet secara drastis memerlukan evaluasi metabolisme tubuh atau malabsorpsi nutrisi. Perbaiki pola makan padat nutrisi.",
    sunnah: "[MENURUT SUNNAH] — Aisyah RA menceritakan terapi menggemukkan badan yang sehat dengan rutin mengonsumsi mentimun dicampur kurma basah (HR. Ibnu Majah no. 3325, Shahih).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Nutrisi Pediatrik dan Dewasa, IDAI & PGI.\n- Thibbun Nabawi: Sunan Ibnu Majah, Maktabah Al-Ma'arif."
  },
  obesitas: {
    analisis: "[ANALISIS MEDIS] — Berat badan berlebih (obesitas) meningkatkan risiko penyakit degeneratif. Kurangi konsumsi gula rafinasi, porsi karbohidrat, dan lakukan olahraga teratur.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Tidak ada wadah yang dipenuhi anak Adam yang lebih buruk daripada perutnya. Cukuplah beberapa suapan...' (HR. Tirmidzi no. 2380, Shahih).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Panduan Tatalaksana Obesitas, Perkeni (Perkumpulan Endokrinologi Indonesia).\n- Thibbun Nabawi: Kitab Al-Zuhd, Imam Ahmad bin Hanbal, Dar Al-Kutub Al-Ilmiyah."
  },
  alergi: {
    analisis: "[ANALISIS MEDIS] — Reaksi alergi ringan ditandai dengan gatal atau bersin akibat paparan alergen (debu, dingin, makanan). Cari tahu pencetusnya dan hindari kontak langsung.",
    sunnah: "[MENURUT SUNNAH] — Dianjurkan mengonsumsi Habbatussauda (jintan hitam) secara rutin untuk meregulasi sistem imun tubuh terhadap reaksi radang dan alergi (HR. Bukhari no. 5688).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Alergi Imunologi Klinik Indonesia, Ikatan Dokter Indonesia.\n- Thibbun Nabawi: Fathul Bari, Syarah Shahih Al-Bukhari, Jilid 10."
  },

  // ==========================================
  // 11-25: SISTEM PERNAPASAN & THT
  // ==========================================
  batuk: {
    analisis: "[ANALISIS MEDIS] — Batuk merupakan refleks alami tubuh untuk membersihkan saluran pernapasan dari mukus/iritan. Batuk ringan pasca-flu bisa diredakan dengan minum air hangat.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Hendaklah kalian menggunakan dua obat: madu dan Al-Qur'an.' (HR. Ibnu Majah no. 3452). Madu terbukti mengencerkan dahak.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal 'Honey for Acute Cough in Children', Cochrane Database.\n- Thibbun Nabawi: Ringkasan Shahih Al-Bukhari, Al-Zubaidi."
  },
  flu: {
    analisis: "[ANALISIS MEDIS] — Flu disebabkan oleh virus influenza yang menyerang saluran napas. Bersifat self-limiting (sembuh sendiri) dengan istirahat, hidrasi, dan konsumsi vitamin C.",
    sunnah: "[MENURUT SUNNAH] — Untuk mengatasi hidung tersumbat karena flu, gunakan tetesan air jintan hitam (Habbatussauda) yang dihangatkan di hidung sesuai petunjuk pengobatan fakar tabi'in (HR. Bukhari no. 5687).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Penyakit Menular, dr. Thomas, Penerbit Erlangga Medika.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim Al-Jauziyyah."
  },
  pilek: {
    analisis: "[ANALISIS MEDIS] — Pilek (rhinitis) ditandai dengan keluar ingus bening atau tersumbat. Hirup uap air hangat untuk membantu melegakan rongga hidung dan mengencerkan lendir.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Sempurnakanlah wudu, dan bersungguh-sungguhlah saat memasukkan air ke hidung (istinsyaq) kecuali saat berpuasa.' (HR. An-Nasa'i no. 87). Ini membersihkan hidung dari kuman.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar THT-KL, Fakultas Kedokteran Universitas Indonesia.\n- Thibbun Nabawi: Sunan An-Nasa'i, Al-Maktabah Al-Islamiyyah."
  },
  sakit_tenggorokan: {
    analisis: "[ANALISIS MEDIS] — Radang tenggorokan ringan (faringitis) umumnya akibat virus. Lakukan kumur air garam hangat 3 kali sehari untuk membunuh kuman lokal dan meredakan bengkak.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menganjurkan penggunaan kayu gaharu India (Qusthul Hindi) untuk mengobati radang tenggorokan atau amandel (HR. Bukhari no. 5692).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Kedokteran Indonesia (JKI), Vol. 12, Efektivitas Kumur Saline.\n- Thibbun Nabawi: Syarah Shahih Al-Bukhari, Ibnu Bathal, Dar Al-Rusyd."
  },
  suara_serak: {
    analisis: "[ANALISIS MEDIS] — Suara serak (laringitis) diakibatkan oleh pita suara yang tegang atau meradang. Istirahatkan suara Anda (vocal rest) dan hindari minum air es serta gorengan.",
    sunnah: "[MENURUT SUNNAH] — Mengonsumsi minuman hangat yang dicampur madu murni secara perlahan sangat baik untuk melubrikasi mukosa tenggorokan yang lecet (HR. Ibnu Majah no. 3452).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Penyakit THT Selayang Pandang, Penerbit EGC.\n- Thibbun Nabawi: Al-Thib Al-Nabawi, Al-Dzahabi, Dar Al-Kutub Al-Ilmiyah."
  },
  bersin: {
    analisis: "[ANALISIS MEDIS] — Bersin adalah mekanisme pengeluaran partikel asing secara ekspulsif dari rongga hidung. Jika terjadi terus-menerus, kemungkinan Anda mengalami rhinitis alergi.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Jika salah seorang di antara kalian bersin, hendaknya ia mengucapkan: Alhamdulillah...' (HR. Bukhari no. 6224). Bersin mengeluarkan beban patogen dari sinus.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Fisiologi Manusia, Lauralee Sherwood, Penerbit EGC.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab Al-Adab."
  },
  hidung_tersumbat: {
    analisis: "[ANALISIS MEDIS] — Hidung tersumbat disebabkan oleh pembengkakan jaringan mukosa sinus, bukan hanya karena lendir. Tinggikan posisi bantal kepala saat Anda tidur malam.",
    sunnah: "[MENURUT SUNNAH] — Melakukan istinsyaq (menghirup air ke hidung) dan istintsar (mengeluarkannya) saat wudu sangat efektif mengecilkan bengkak mukosa (HR. Bukhari no. 162).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Otolaryngology Clinical Manual, Oxford University Press.\n- Thibbun Nabawi: Al-Lubab fi Syarh Al-Sunnah, Imam Al-Baghawi."
  },
  hidung_kering: {
    analisis: "[ANALISIS MEDIS] — Rongga hidung kering terjadi akibat dehidrasi atau ruangan ber-AC terlalu lama. Oleskan sedikit petroleum jelly di tepi cuping hidung luar jika perih.",
    sunnah: "[MENURUT SUNNAH] — Dianjurkan menghirup uap air bersih hangat secara teratur. Air adalah elemen pembersih utama dalam thaharah yang menjaga kelembapan mukosa (QS. Al-Maidah: 6).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Kelainan Hidung dan Sinus, dr. Soetjipto dkk, FKUI.\n- Thibbun Nabawi: Tafsir Al-Qur'an Al-Azhari, Buya Hamka."
  },
  sinusitis: {
    analisis: "[ANALISIS MEDIS] — Sinusitis ringan ditandai rasa nyeri di area dahi atau pipi, terutama saat menunduk. Kompres hangat area wajah untuk melancarkan drainase rongga sinus.",
    sunnah: "[MENURUT SUNNAH] — Pengobatan masalah hidung/sinus bagian atas dengan metode tetes hidung (Sa'uth) menggunakan bahan alami berkhasiat tinggi (HR. Bukhari no. 5693).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku THT, dr. Adams, Penerbit EGC.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim Al-Jauziyyah."
  },
  mimisan: {
    analisis: "[ANALISIS MEDIS] — Mimisan (epistaksis) ringan terjadi akibat pecahnya pembuluh darah kapiler hidung bagian depan. Duduk tegak, condongkan tubuh ke depan, lalu jepit cuping hidung selama 10 menit.",
    sunnah: "[MENURUT SUNNAH] — Dalam riwayat tabi'in, jika terjadi perdarahan, disarankan menggunakan kompres dingin atau bubuk pelepah kurma yang dibakar sebagai agen hemostatis (penahan darah) alami.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Panduan Praktis Klinis Dokter di FKT-P, PB IDI.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari, Kitab Al-Mardha."
  },
  sesak_ringan: {
    analisis: "[ANALISIS MEDIS] — Sesak napas ringan setelah beraktivitas atau karena udara dingin bisa diatasi dengan teknik pursed-lip breathing. Segera ke IGD jika sesak bertambah berat.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda mengenai khasiat Qusthul Hindi: 'Di dalamnya terdapat penyembuh bagi tujuh macam penyakit, di antaranya radang paru/dada.' (HR. Bukhari no. 5692).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Pulmonologi Klinis, dr. Hood Alsagaff, Airlangga University Press.\n- Thibbun Nabawi: Zad al-Ma'ad fi Hadyi Khair al-'Ibad, Ibnu Qayyim."
  },
  ngorok: {
    analisis: "[ANALISIS MEDIS] — Mendengkur (ngorok) terjadi karena penyempitan saluran napas saat tidur. Cobalah mengubah posisi tidur miring dan hindari tidur telentang.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ mencontohkan dan memerintahkan umatnya untuk posisi tidur miring ke sisi kanan menghadap kiblat (HR. Bukhari no. 247, HR. Muslim no. 2710). Posisi ini menjaga jalan napas tetap terbuka.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Indonesian Journal of Sleep Medicine, Ikatan Dokter Indonesia.\n- Thibbun Nabawi: Kitab Al-Adkar, Imam An-Nawawi, Penerbit Darul Minhaj."
  },
  telinga_berdengung: {
    analisis: "[ANALISIS MEDIS] — Telinga berdengung (tinnitus) ringan bisa disebabkan paparan suara bising atau kotoran telinga yang menyumbat. Jangan mengorek telinga dengan cutton bud.",
    sunnah: "[MENURUT SUNNAH] — Melakukan bekam di titik sekitar kepala atau belakang telinga (Al-Akhda'ain) secara medis terbukti memperbaiki mikrosirkulasi darah ke saraf pendengaran (HR. Tirmidzi no. 2051).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Teks Buku THT Oxford, Oxford University Press.\n- Thibbun Nabawi: Zad al-Ma'ad, Jilid 4, Pola Detoksifikasi Bekam."
  },
  telinga_gatal: {
    analisis: "[ANALISIS MEDIS] — Telinga gatal biasanya dipicu oleh kondisi liang telinga terlalu kering atau infeksi jamur ringan. Teteskan 1-2 tetes baby oil luar jika gatal akibat kulit kering.",
    sunnah: "[MENURUT SUNNAH] — Menjaga kebersihan rongga kepala termasuk telinga saat membasuh kepala waktu wudu adalah langkah preventif penumpukan debris patogen (HR. Abu Dawud no. 135).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Ilmu Penyakit Telinga, dr. Iskandar, Penerbit FKUI.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab At-Thaharah."
  },
  sakit_telinga: {
    analisis: "[ANALISIS MEDIS] — Otitis eksterna atau radang liang telinga luar memicu nyeri saat daun telinga disentuh. Jaga telinga agar tetap kering saat mandi, jangan kemasukan air.",
    sunnah: "[MENURUT SUNNAH] — Minyak zaitun murni hangat dapat dioleskan tipis di sekitar daun telinga luar untuk meredakan nyeri radang karena sifat antiinflamasinya (HR. Tirmidzi no. 1851).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar THT Nusantara, FK Unair.\n- Thibbun Nabawi: Al-Thib Al-Nabawi, Abu Nu'aim Al-Asbahani."
  },

  // ==========================================
  // 26-45: NEUROLOGI & KEPALA
  // ==========================================
  pusing: {
    analisis: "[ANALISIS MEDIS] — Pusing (tension headache) sering diakibatkan otot leher tegang, stres, atau kurang istirahat. Istirahatkan mata Anda dan hindari layar gadget.",
    sunnah: "[MENURUT SUNNAH] — Jika Rasulullah ﷺ mengalami sakit kepala, beliau mewarnai kepalanya dengan daun inai (pacar kuku) dan bersabda: 'Ini bermanfaat untuk sakit kepala atas izin Allah.' (HR. Ibnu Majah no. 3502, Hasan).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Konsensus Nasional Tatalaksana Nyeri Kepala, PERDOSSI.\n- Thibbun Nabawi: Sunan Ibnu Majah, Kitab Al-Thib."
  },
  migrain: {
    analisis: "[ANALISIS MEDIS] — Migrain adalah nyeri kepala berdenyut, biasanya di satu sisi, dipicu oleh ketidakseimbangan neurovaskular. Beristirahatlah di kamar gelap tanpa suara.",
    sunnah: "[MENURUT SUNNAH] — 'Nabi ﷺ pernah berbekam di kepalanya ketika beliau ihram karena sakit kepala sebelah (migrain) yang beliau rasakan.' (HR. Bukhari no. 5691).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Neuro-Anatomi Klinik, Fakultas Kedokteran UI.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari, Jilid 10."
  },
  vertigo: {
    analisis: "[ANALISIS MEDIS] — Vertigo ditandai sensasi sekeliling terasa berputar, sering dipicu masalah telinga dalam (BPPV). Hindari gerakan kepala mendadak secara cepat.",
    sunnah: "[MENURUT SUNNAH] — Melakukan bekam di titik *Al-Kahin* (punuk leher) efektif menyeimbangkan aliran darah vaskular ke sistem vestibuler otak (HR. Abu Dawud no. 3860).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Pedoman Praktis Vertigo, dr. Sura, Penerbit Universitas Airlangga.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab Al-Thib."
  },
  leher_kaku: {
    analisis: "[ANALISIS MEDIS] — Leher kaku disebabkan oleh spasme otot akibat salah posisi tidur atau kelelahan menatap komputer. Lakukan kompres hangat di area leher belakang.",
    sunnah: "[MENURUT SUNNAH] — Dianjurkan melakukan pijat ringan menggunakan minyak zaitun murni yang berkhasiat melemaskan ketegangan fasia otot (HR. Tirmidzi no. 1851).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Terapi Fisik Muskuloskeletal, dr. Ali, Penerbit Salemba Medika.\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah."
  },
  kesemutan: {
    analisis: "[ANALISIS MEDIS] — Kesemutan (parestesia) sementara terjadi akibat penekanan jalur saraf saraf lokal karena duduk terlalu lama. Ubah posisi tubuh Anda untuk melancarkan sirkulasi.",
    sunnah: "[MENURUT SUNNAH] — Untuk memperlancar sirkulasi darah kapiler makro maupun mikro tubuh, metode bekam (hijamah) adalah teknik detoksifikasi fisik terbaik (HR. Bukhari no. 5680).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Neurologi Klinis, dr. Priguna Sidharta, Dian Rakyat.\n- Thibbun Nabawi: Al-Qanun fi al-Tibb, Ibnu Sina, Cetakan Dar Al-Kutub."
  },
  kram_otot: {
    analisis: "[ANALISIS MEDIS] — Kram otot terjadi karena kontraksi keras mendadak akibat dehidrasi atau defisiensi elektrolit (kalium/magnesium). Lakukan peregangan otot secara perlahan.",
    sunnah: "[MENURUT SUNNAH] — Mengonsumsi buah kurma sangat dianjurkan karena kurma kaya akan mineral kalium alami yang menjaga fungsi kontraksi otot normal (HR. Muslim no. 2048).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Sport Nutrition Guide, Human Kinetics.\n- Thibbun Nabawi: Shahih Muslim, Kitab Al-Asyribah."
  },
  mata_lelah: {
    analisis: "[ANALISIS MEDIS] — Mata lelah (asthenopia) akibat terlalu lama menatap layar bisa dikurangi dengan rumus 20-20-20 (setiap 20 menit, lihat objek sejauh 20 kaki selama 20 detik).",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menganjurkan penggunaan celak mata asli (itsmid) sebelum tidur karena dapat memperjelas pandangan dan menyehatkan mata (HR. Tirmidzi no. 1757, Shahih).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Panduan Kesehatan Mata Komunitas, Penerbit Kedokteran EGC.\n- Thibbun Nabawi: Sunan At-Tirmidzi, Kitab Al-Libas."
  },
  mata_merah: {
    analisis: "[ANALISIS MEDIS] — Mata merah tanpa nyeri hebat biasanya adalah konjungtivitis ringan karena iritasi debu. Bersihkan mata dengan air bersih atau tetes air mata buatan.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ melarang orang yang sedang sakit mata untuk makan kurma kering secara berlebihan sementara waktu untuk menghindari efek inflamasi vaskular sistemik (HR. Tirmidzi no. 2038).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Ilmu Penyakit Mata, Prof. dr. Sidarta Ilyas, FKUI.\n- Thibbun Nabawi: Zad al-Ma'ad fi Hadyi Khair al-'Ibad, Jilid 4."
  },
  mata_kering: {
    analisis: "[ANALISIS MEDIS] — Mata kering disebabkan produksi air mata menurun karena ruangan ber-AC. Cobalah berkedip lebih sering secara sengaja untuk membasahi kornea.",
    sunnah: "[MENURUT SUNNAH] — Berwudu secara teratur dengan membasuh wajah dengan air mengalir bersih ikut membantu hidrasi eksternal alami pada kelopak mata (QS. Al-Maidah: 6).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Dry Eye Syndrome Management, Springer.\n- Thibbun Nabawi: Al-Thib Al-Nabawi, Abu Nu'aim."
  },
  sakit_gigi: {
    analisis: "[ANALISIS MEDIS] — Sakit gigi biasanya dipicu inflamasi pulpa karena kavitasi (gigi berlubang). Berkumurlah dengan air garam hangat untuk meredakan nyeri sementara sebelum ke dokter gigi.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Bersiwak itu membersihkan mulut dan mendatangkan rida Allah.' (HR. Bukhari no. 1933). Minyak atsiri siwak bersifat antiseptik alami.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Konservasi Gigi, Kedokteran Gigi EGC.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab As-Shiyam."
  },
  gusi_berdarah: {
    analisis: "[ANALISIS MEDIS] — Gusi berdarah (gingivitis) menandakan adanya penumpukan plak bakteri di perbatasan gusi. Sikat gigi dengan bulu sikat halus secara perlahan.",
    sunnah: "[MENURUT SUNNAH] — Gerakan bersiwak secara lembut ikut memijat gusi dan mengurangi kolonisasi bakteri merugikan di rongga mulut (HR. Muslim no. 252).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Periodonsia Klinis, drg. Carranza, Saunders.\n- Thibbun Nabawi: Shahih Muslim, Kitab At-Thaharah."
  },
  sariawan: {
    analisis: "[ANALISIS MEDIS] — Sariawan (stomatitis aphtosa) timbul karena trauma lidah tergigit atau kurang vitamin C. Hindari makanan pedas dan oleskan madu murni pada luka sariawan.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan madu murni ke area sariawan sangat mempercepat penyembuhan epitel jaringan mulut karena sifat madu sebagai anti-mikroba alami (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Oral Medicine Indonesia, Vol. 5, Terapi Topikal Madu.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim."
  },
  bau_mulut: {
    analisis: "[ANALISIS MEDIS] — Bau mulut (halitosis) disebabkan sisa makanan yang membusuk oleh bakteri atau kondisi mulut kering. Minum cukup air putih dan bersihkan lidah.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ sangat menjaga kebersihan mulut dengan bersiwak setiap kali hendak mendirikan salat (HR. Bukhari no. 887, HR. Muslim no. 252).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Halitosis Management Practice, Wiley-Blackwell.\n- Thibbun Nabawi: Fathul Bari, Ibnu Hajar Al-Asqalani."
  },
  mulut_kering: {
    analisis: "[ANALISIS MEDIS] — Mulut kering (xerostomia) dipicu penurunan sekresi air liur karena dehidrasi atau efek obat tertentu. Kunyah permen karet bebas gula untuk memicu air liur.",
    sunnah: "[MENURUT SUNNAH] — Berkumur secara mendalam saat berwudu (madhmadhah) membantu merangsang kelenjar saliva dan menjaga kelembapan mulut (HR. Abu Dawud no. 142).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Fisiologi Kedokteran Guyton and Hall, Penerbit EGC.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab At-Thaharah."
  },
  gigi_sensitif: {
    analisis: "[ANALISIS MEDIS] — Gigi ngilu saat minum dingin terjadi akibat email gigi mengikis (erosi). Gunakan pasta gigi khusus untuk gigi sensitif dan hindari minuman asam.",
    sunnah: "[MENURUT SUNNAH] — Rutin membersihkan sela gigi menggunakan serat siwak atau benang gigi alami merupakan sunnah untuk menjaga keutuhan email gigi (HR. Bukhari no. 887).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Text Book of Operative Dentistry, Boyd.\n- Thibbun Nabawi: Kitab Al-Siwak, Imam Al-Suyuthi, Dar Al-Fikr."
  },

  // ==========================================
  // 46-65: SISTEM PENCERNAAN & PERUT
  // ==========================================
  sakit_perut: {
    analisis: "[ANALISIS MEDIS] — Sakit perut atau kram perut ringan paling sering akibat salah makan atau dyspepsia. Konsumsi air hangat untuk melemaskan otot usus yang tegang.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ memerintahkan seseorang untuk meminumkan madu kepada saudaranya yang menderita sakit perut berulang kali hingga sembuh (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Gastroenterologi Klinis, dr. Lesmana, Penerbit UI Press.\n- Thibbun Nabawi: Ringkasan Shahih Bukhari, Al-Zubaidi."
  },
  mual: {
    analisis: "[ANALISIS MEDIS] — Mual terjadi akibat iritasi lambung atau ketidakseimbangan sirkulasi. Istirahat dengan posisi kepala lebih tinggi, hindari makanan berlemak.",
    sunnah: "[MENURUT SUNNAH] — Sup gandum (Talbinah) sangat berkhasiat melunakkan mukosa lambung yang meradang dan menghilangkan rasa mual (HR. Bukhari no. 5689).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Patofisiologi Sistem Pencernaan, Price & Wilson, EGC.\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah."
  },
  muntah: {
    analisis: "[ANALISIS MEDIS] — Muntah dapat memicu dehidrasi dengan cepat. Gantilah cairan tubuh yang hilang dengan meminum air oralit atau air putih sedikit demi sedikit tapi sering.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Barangsiapa yang muntah tanpa sengaja maka tidak wajib mengqadha puasanya.' (HR. Tirmidzi no. 720). Muntah adalah proses pengosongan racun alami.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Pedoman Terapi Cairan Klinik, dr. Tumpal, Medika.\n- Thibbun Nabawi: Sunan At-Tirmidzi, Kitab As-Shiyam."
  },
  kembung: {
    analisis: "[ANALISIS MEDIS] — Perut kembung terjadi karena akumulasi gas di saluran cerna akibat makan terlalu cepat atau aerofagia. Hindari konsumsi kubis, sawi, dan minuman bersoda.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ mengajarkan untuk tidak bernapas di dalam wadah minuman agar tidak memasukkan gas atau bakteri berlebih ke pencernaan (HR. Bukhari no. 153).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Gastroenterologi, dr. Green, Little Brown.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab Al-Asyribah."
  },
  maag: {
    analisis: "[ANALISIS MEDIS] — Maag (gastritis) ditandai perih di ulu hati akibat asam lambung tinggi. Makanlah dengan porsi kecil tetapi sering, hindari stres berlebih.",
    sunnah: "[MENURUT SUNNAH] — Air rendaman kurma (Air Nabeez) yang difermentasi semalam bersifat alkali alami yang sangat baik menetralkan asam lambung berlebih (HR. Muslim no. 2004).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Tatalaksana Gastritis Infeksi, PAPDI.\n- Thibbun Nabawi: Shahih Muslim, Kitab Al-Asyribah."
  },
  diare: {
    analisis: "[ANALISIS MEDIS] — Diare ditandai BAB cair >3 kali sehari. Prioritas utama adalah mencegah dehidrasi. Minum larutan oralit setiap selesai buang air besar.",
    sunnah: "[MENURUT SUNNAH] — 'Datang seseorang kepada Nabi ﷺ lalu berkata: Saudaraku sakit perut (diare). Nabi bersabda: Minumkanlah ia madu.' (HR. Bukhari no. 5684, HR. Muslim no. 2217).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Penyakit Menular Diare, WHO Manual Guidelines.\n- Thibbun Nabawi: Al-Minhaj Syarah Shahih Muslim, An-Nawawi."
  },
  sembelit: {
    analisis: "[ANALISIS MEDIS] — Sembelit (konstipasi) terjadi karena feses keras akibat kurang serat dan air. Tingkatkan konsumsi pepaya, sayuran, dan biasakan jalan kaki pagi.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menganjurkan konsumsi buah kurma kering (tamr) yang berserat tinggi karena dapat memicu peristaltik usus secara sehat (HR. Bukhari no. 5445).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Konsensus Konstipasi Indonesia, PGI.\n- Thibbun Nabawi: Kitab Al-Ath'imah, Shahih Al-Bukhari."
  },
  nyeri_ulu_hati: {
    analisis: "[ANALISIS MEDIS] — Nyeri ulu hati (heartburn) merupakan indikasi refluks asam lambung ke esofagus (GERD). Hindari berbaring dalam waktu 2 jam setelah makan.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ melarang posisi tidur tengkurap karena itu adalah posisi yang dimurkai Allah dan secara medis menekan lambung (HR. Abu Dawud no. 5040).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Clinical GERD Guidelines, American College of Gastroenterology.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab Al-Adab."
  },
  perut_keroncongan: {
    analisis: "[ANALISIS MEDIS] — Perut berbunyi (borborygmi) yang keras menandakan pergerakan gas dan makanan aktif di usus. Jika tidak disertai nyeri, kondisi ini normal.",
    sunnah: "[MENURUT SUNNAH] — Mengatur jam makan sesuai sunnah dengan berhenti makan sebelum terlalu kenyang menjaga keseimbangan mikrobioma usus tetap stabil (HR. Tirmidzi no. 2380).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Review of Medical Physiology, Ganong, McGraw-Hill.\n- Thibbun Nabawi: Kitab Al-Zuhd, Jilid 2, Penerbit Darul Haq."
  },
  masuk_angin: {
    analisis: "[ANALISIS MEDIS] — Masuk angin adalah istilah awam untuk kumpulan gejala pegal, kembung, dan pusing akibat kelelahan. Gunakan pakaian hangat dan istirahat.",
    sunnah: "[MENURUT SUNNAH] — Minum madu murni hangat yang dicampur jintan hitam sangat baik sebagai agen imunostimulan untuk mengusir rasa lelah tubuh (HR. Bukhari no. 5688).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Pintar Kesehatan Umum, dr. Handrawan N., Gramedia.\n- Thibbun Nabawi: Kitab Al-Asbab wal-'Alamat, Ibnu Sina."
  },
  perih_lambung: {
    analisis: "[ANALISIS MEDIS] — Rasa perih tajam di lambung kosong menandakan asam hidroklorida mengiritasi dinding lambung. Jangan melewatkan sarapan pagi Anda.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Makan saurlah kalian, karena pada makan saur itu terdapat berkah.' (HR. Bukhari no. 1923). Ini mencegah lambung kosong terlalu lama di pagi hari.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Gastroenterology Board Review, Elsevier.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab As-Shiyam."
  },
  wasir_ringan: {
    analisis: "[ANALISIS MEDIS] — Wasir (hemoroid) ringan ditandai nyeri atau gatal di anus. Hindari mengejan terlalu keras saat BAB dan perbanyak minum cairan.",
    sunnah: "[MENURUT SUNNAH] — Pengobatan gangguan aliran darah balik panggul bawah seperti wasir dapat dibantu detoksifikasinya dengan terapi bekam berkala di titik sekitar panggul bawah (HR. Abu Dawud no. 3860).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Ilmu Bedah, de Jong & Sjamsuhidajat, EGC.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari."
  },
  susah_menelan: {
    analisis: "[ANALISIS MEDIS] — Susah menelan (disfagia) ringan karena radang amandel bisa dikurangi dengan makan makanan bertekstur lunak seperti bubur halus.",
    sunnah: "[MENURUT SUNNAH] — Gunakan Qusthul Hindi (kayu gaharu India) yang dihaluskan bersama air hangat untuk berkumur secara mendalam guna mengecilkan bengkak amandel (HR. Bukhari no. 5692).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Clinical Otolaryngology Journal, Jilid 14.\n- Thibbun Nabawi: Syarah Shahih Al-Bukhari, Ibnu Bathal."
  },
  cegukan: {
    analisis: "[ANALISIS MEDIS] — Cegukan (singultus) disebabkan kontraksi diafragma yang tidak disengaja. Tahan napas selama 10 detik atau minum air putih perlahan untuk merangsang saraf vagus.",
    sunnah: "[MENURUT SUNNAH] — Minum air putih secara tenang dengan duduk dan mengambil napas tiga kali di luar wadah air membantu menormalkan kembali ritme napas diafragma (HR. Muslim no. 2028).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Textbook of Medical Physiology, Guyton.\n- Thibbun Nabawi: Shahih Muslim, Kitab Al-Asyribah."
  },
  keracunan_makanan_ringan: {
    analisis: "[ANALISIS MEDIS] — Keracunan makanan ringan ditandai mual dan diare ringan setelah makan makanan tertentu. Perbanyak minum air kelapa atau oralit untuk membuang toksin.",
    sunnah: "[MENURUT SUNNAH] — Kurma Ajwa memiliki khasiat netralisasi racun yang sangat tinggi: 'Barangsiapa mengonsumsi tujuh butir kurma Ajwa di pagi hari, tidak akan membahayakannya racun...' (HR. Bukhari no. 5445).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Toksikologi Klinik Indonesia, Universitas Indonesia.\n- Thibbun Nabawi: Kitab Al-Ath'imah, Shahih Al-Bukhari."
  },

  // ==========================================
  // 66-85: DERMATOLOGI & KULIT
  // ==========================================
  luka: {
    analisis: "[ANALISIS MEDIS] — Luka lecet luar harus segera dibilas dengan air mengalir bersih. Oleskan antiseptik dan hindari membiarkan luka lembap agar cepat mengering.",
    sunnah: "[MENURUT SUNNAH] — Madu murni dapat dioleskan langsung pada luka luar karena memiliki zat hidrogen peroksida alami sebagai desinfektan kuman (HR. Bukhari no. 5680).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal 'Honey: A Biologic Wound Dressing', Molan PC.\n- Thibbun Nabawi: Kitab Al-Muwatta, Imam Malik."
  },
  gatal: {
    analisis: "[ANALISIS MEDIS] — Kulit gatal (pruritus) akibat gigitan serangga atau biang keringat jangan digaruk berlebihan. Berikan losion kalamin untuk meredakan gatal.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ memberikan rukhshah (keringanan) kepada Zubair dan Abdul Rahman untuk memakai pakaian sutra karena penyakit gatal kulit yang parah (HR. Bukhari no. 2919). Kain sutra dingin mengurangi gesekan kulit.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Ilmu Penyakit Kulit dan Kelamin, Prof. dr. Adhi Djuanda, FKUI.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab Al-Jihad."
  },
  bisul: {
    analisis: "[ANALISIS MEDIS] — Bisul (furunkel) adalah infeksi bakteri *Staphylococcus* pada folikel rambut. Lakukan kompres hangat agar nanah cepat melunak dan pecah alami, jangan dipencet paksa.",
    sunnah: "[MENURUT SUNNAH] — Istri Nabi ﷺ menceritakan bahwa Rasulullah ﷺ menyuruhnya mengoleskan bubuk tangkur/akar tumbuhan obat (Wadzirah) pada bisul kecil di jarinya sambil berdoa memohon kesembuhan (HR. Al-Hakim, Shahih).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Fitzpatrick's Dermatology in General Medicine, McGraw-Hill.\n- Thibbun Nabawi: Al-Mustadrak 'ala al-Shahihain, Imam Al-Hakim."
  },
  jerawat: {
    analisis: "[ANALISIS MEDIS] — Jerawat (acne vulgaris) terjadi akibat sumbatan pori oleh sebum dan bakteri. Bersihkan wajah 2 kali sehari dengan sabun pH netral, hindari memecahkan jerawat.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan minyak zaitun tipis atau inai (henna) pada radang kulit ringan terbukti secara empiris mengurangi multiplikasi kuman kulit (HR. Tirmidzi no. 1851).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Dermatologi Indonesia, Perdoski.\n- Thibbun Nabawi: Kitab Al-Thib Al-Nabawi, Al-Dzahabi."
  },
  kulit_kering: {
    analisis: "[ANALISIS MEDIS] — Kulit kering (xerosis) dipicu kelembapan udara rendah. Oleskan pelembap/moisturizer segera setelah mandi saat kulit masih setengah basah.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Minyakilah tubuh kalian dengan zaitun...' (HR. Tirmidzi no. 1851). Minyak zaitun adalah pelembap oklusif alami terbaik.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Manual of Dermatologic Therapeutics, Arndt.\n- Thibbun Nabawi: Zad al-Ma'ad fi Hadyi Khair al-'Ibad."
  },
  panu: {
    analisis: "[ANALISIS MEDIS] — Panu (pityriasis versicolor) adalah infeksi jamur permukaan kulit. Jaga tubuh agar tidak lembap, segera ganti pakaian jika berkeringat.",
    sunnah: "[MENURUT SUNNAH] — Menjaga higienitas dengan mandi wajib dan membasuh sela-sela kulit saat wudu adalah bagian dari kebersihan yang diperintahkan agama (HR. Muslim no. 223).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Penyakit Jamur Kulit, dr. Budimulja, FKUI.\n- Thibbun Nabawi: Shahih Muslim, Kitab At-Thaharah."
  },
  kutu_air: {
    analisis: "[ANALISIS MEDIS] — Kutu air (tinea pedis) sering terjadi di sela jari kaki akibat kaki basah. Pastikan sela jari kaki dikeringkan dengan handuk setelah berwudu.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Sela-selailah jari-jari kaki kalian (saat membasuh kaki waktu wudu)' (HR. Abu Dawud no. 142). Ini mencegah air menggenang di sela jari.",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Dermatology Handbook, Oxford University Press.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab At-Thaharah."
  },
  ketombe: {
    analisis: "[ANALISIS MEDIS] — Ketombe disebabkan pertumbuhan jamur *Malassezia* berlebih di kulit kepala. Keramaslah secara teratur menggunakan sampo anti-ketombe zinc pyrithione.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ sangat memperhatikan kerapian rambut kepala dan sering meminyakinya serta menyisirnya agar tetap bersih dan sehat (HR. Abu Dawud no. 4163).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Kosmetologi Dermatologi, Universitas Airlangga.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab Al-Tarajjul."
  },
  rambut_rontok: {
    analisis: "[ANALISIS MEDIS] — Kerontokan rambut ringan bisa dipicu stres atau kekurangan nutrisi protein. Hindari mengikat rambut terlalu kencang dan batasi penggunaan hair dryer.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan minyak zaitun ke kulit kepala secara merata membantu menutrisi akar rambut dan mencegah kerusakan kutikula rambut (HR. Ibnu Majah no. 3320).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Hair Disorders Diagnosis and Treatment, Springer.\n- Thibbun Nabawi: Sunan Ibnu Majah, Kitab Al-Ath'imah."
  },
  luka_bakar_ringan: {
    analisis: "[ANALISIS MEDIS] — Luka bakar tingkat satu (kemerahan tanpa lepuhan) harus segera dialiri air keran biasa selama 20 menit. Jangan mengoleskan pasta gigi atau mentega.",
    sunnah: "[MENURUT SUNNAH] — Dalam sirah Nabawi, jika kulit terkena panas, madu murni digunakan sebagai lapisan pelindung steril yang mendinginkan jaringan (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Panduan Manajemen Luka Bakar, Perapi (Perhimpunan Ahli Bedah Plastik Indonesia).\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah."
  },
  biang_keringat: {
    analisis: "[ANALISIS MEDIS] — Biang keringat (miliaria) terjadi karena pori-pori kelenjar keringat tersumbat. Gunakan pakaian berbahan katun longgar yang menyerap keringat.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menyukai pakaian berwarna putih dari bahan katun karena sifatnya yang bersih, sejuk, dan memantulkan panas (HR. Abu Dawud no. 4061).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Pediatric Dermatology Clinical Manual, Wiley.\n- Thibbun Nabawi: Sunan Abu Dawud, Kitab Al-Libas."
  },
  lebam: {
    analisis: "[ANALISIS MEDIS] — Lebam atau memar akibat benturan ringan diredakan dengan kompres es balok yang dibalut kain selama 15 menit pada 24 jam pertama guna mengecilkan pembuluh darah.",
    sunnah: "[MENURUT SUNNAH] — Terapi kompres dingin luar luar biasa dianjurkan untuk menurunkan pembengkakan jaringan lokal secara instan (HR. Bukhari no. 5723).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Emergency Medicine Manual, Tintinalli, McGraw-Hill.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari."
  },
  kapalan: {
    analisis: "[ANALISIS MEDIS] — Kapalan (callus) adalah penebalan kulit akibat gesekan berulang. Rendam kaki di air hangat lalu gosok perlahan dengan batu apung untuk mengikisnya.",
    sunnah: "[MENURUT SUNNAH] — Memakai alas kaki atau sandal yang empuk dan pas ukuran kakinya disarankan untuk mencegah luka trauma kapalan pada telapak kaki (HR. Muslim no. 2097).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Podiatry Clinic Guidelines, Saunders.\n- Thibbun Nabawi: Shahih Muslim, Kitab Al-Libas."
  },
  tumit_pecah: {
    analisis: "[ANALISIS MEDIS] — Tumit kaki pecah-pecah disebabkan kulit kehilangan elastisitasnya. Oleskan salep petroleum jelly tebal di tumit sebelum tidur malam dan gunakan kaus kaki.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan minyak zaitun murni secara rutin ke tumit kaki berkhasiat melembutkan stratum korneum kulit kaki yang mengeras (HR. Tirmidzi no. 1851).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Dermatology in General Medicine, Fitzpatrick.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim."
  },
  mata_ikan: {
    analisis: "[ANALISIS MEDIS] — Mata ikan (clavus) adalah penebalan kulit dengan pusat inti keras yang nyeri. Gunakan plester asam salisilat khusus untuk melunakkan inti kulit tersebut.",
    sunnah: "[MENURUT SUNNAH] — Menjaga agar telapak kaki tetap bersih kering dari infeksi sekunder bakteri luar adalah bagian penting dari kebersihan ekstremitas tubuh (HR. Muslim no. 223).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Dermatologi Bedah, dr. Siregar, EGC.\n- Thibbun Nabawi: Shahih Muslim, Kitab At-Thaharah."
  },

  // ==========================================
  // 86-100: KATA KUNCI SINONIM & VARIASI AWAM
  // ==========================================
  panas: {
    analisis: "[ANALISIS MEDIS] — Badan terasa panas (demam) menandakan sistem pertahanan tubuh sedang merespons agen asing. Cek suhu badan secara akurat dengan termometer aksila.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Maka dinginkanlah suhu demam yang panas itu menggunakan air.' (HR. Bukhari no. 5723).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Ilmu Penyakit Dalam, Ed. VI, dr. Sudoyo AW.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim Al-Jauziyyah."
  },
  meriang: {
    analisis: "[ANALISIS MEDIS] — Meriang biasanya kombinasi lelah, agak demam, dan tidak enak badan. Konsumsi makanan bergizi berkuah hangat seperti sup ayam dan istirahat total.",
    sunnah: "[MENURUT SUNNAH] — Konsumsi Talbinah (bubur gandum) hangat sangat dianjurkan untuk menenangkan tubuh yang sedang lelah meriang (HR. Bukhari no. 5689).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Keperawatan Medikal Bedah, Brunner & Suddarth.\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah."
  },
  sakit_kepala: {
    analisis: "[ANALISIS MEDIS] — Sakit kepala tegang (tension headache) dapat diredakan dengan memijat pelipis pelan, minum cukup air, dan menjauh dari komputer sementara waktu.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ menyarankan terapi berbekam (hijamah) di area kepala luar untuk meredakan sumbatan vaskular pemicu nyeri (HR. Bukhari no. 5691).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Tatalaksana Nyeri Kepala PERDOSSI.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari."
  },
  nyut_nyutan: {
    analisis: "[ANALISIS MEDIS] — Kepala nyut-nyutan (berdenyut) bisa jadi tanda migrain atau kelelahan mata. Hindari konsumsi kafein berlebih atau cokelat sementara waktu.",
    sunnah: "[MENURUT SUNNAH] — Jika kepala terasa sakit berdenyut, mengikat kepala dengan kain pengikat erat dicontohkan para sahabat untuk mengurangi pulsasi pembuluh darah (HR. Ibnu Majah no. 3502).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Neuro-Anatomi Klinik, FKUI.\n- Thibbun Nabawi: Sunan Ibnu Majah, Kitab Al-Thib."
  },
  tenggorokan_gatal: {
    analisis: "[ANALISIS MEDIS] — Tenggorokan gatal merupakan tanda awal infeksi virus atau iritasi debu. Berkumurlah dengan larutan air hangat bercampur garam.",
    sunnah: "[MENURUT SUNNAH] — Gunakan madu murni yang dicampur air hangat karena madu bersifat melunakkan iritasi jaringan tenggorokan (HR. Ibnu Majah no. 3452).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Efektivitas Kumur Saline, Jurnal Kedokteran Indonesia.\n- Thibbun Nabawi: Syarah Shahih Al-Bukhari, Ibnu Bathal."
  },
  dahak: {
    analisis: "[ANALISIS MEDIS] — Batuk berdahak membutuhkan agen mukolitik alami. Minum banyak air putih hangat sangat efektif mengencerkan kekentalan dahak di saluran napas.",
    sunnah: "[MENURUT SUNNAH] — Madu murni bertindak sebagai pengencer dahak alami yang diakui dalam kedokteran Nabawi karena membersihkan sisa mukus lambung dan dada (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Honey for Acute Cough, Cochrane Database.\n- Thibbun Nabawi: Ringkasan Shahih Al-Bukhari, Al-Zubaidi."
  },
  lambung: {
    analisis: "[ANALISIS MEDIS] — Keluhan nyeri lambung biasanya dipicu oleh erosi dinding lambung akibat telat makan. Disiplinkan jadwal makan harian Anda secara teratur.",
    sunnah: "[MENURUT SUNNAH] — Air rendaman kurma (Nabeez) berkhasiat menjaga stabilitas pH lambung agar tidak terlalu asam (HR. Muslim no. 2004).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Tatalaksana Gastritis Infeksi, PAPDI.\n- Thibbun Nabawi: Shahih Muslim, Kitab Al-Asyribah."
  },
  menceret: {
    analisis: "[ANALISIS MEDIS] — Menceret (diare) menandakan usus bekerja terlalu cepat membuang feses cair. Larutkan 1 sachet oralit dalam 200ml air matang setiap setelah buang air.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ memerintahkan untuk meminumkan madu murni guna membersihkan sisa bakteri buruk di pencernaan orang yang menceret (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: WHO Manual Guidelines for Diarrhoea.\n- Thibbun Nabawi: Al-Minhaj Syarah Shahih Muslim, An-Nawawi."
  },
  eneg: {
    analisis: "[ANALISIS MEDIS] — Rasa eneg (mual ringan) dapat dikurangi dengan mengunyah jahe hangat atau memposisikan tubuh tegak, jangan langsung berbaring setelah makan.",
    sunnah: "[MENURUT SUNNAH] — Bubur gandum Talbinah adalah sup terbaik untuk melapisi dinding lambung yang eneg agar kembali tenang (HR. Bukhari no. 5689).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Patofisiologi Sistem Pencernaan, Price & Wilson.\n- Thibbun Nabawi: Zad al-Ma'ad, Ibnu Qayyim Al-Jauziyyah."
  },
  lecet: {
    analisis: "[ANALISIS MEDIS] — Kulit lecet akibat gesekan harus segera dibersihkan dari pasir atau debu. Jangan berikan alkohol langsung pada luka terbuka karena perih dan merusak jaringan baru.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan madu murni tipis pada lecet kulit membantu pembentukan granulasi jaringan kulit baru secara cepat (HR. Bukhari no. 5680).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal Wound Management & Prevention, Molan PC.\n- Thibbun Nabawi: Kitab Al-Muwatta, Imam Malik."
  },
  tergores: {
    analisis: "[ANALISIS MEDIS] — Luka tergores benda tajam ringan harus segera ditekan menggunakan kasa steril selama 2-3 menit jika mengeluarkan darah, lalu pasang plester pelindung.",
    sunnah: "[MENURUT SUNNAH] — Memanfaatkan madu murni sebagai pembungkus luka alami (antiseptik barrier) mencegah masuknya kuman ke celah goresan (HR. Bukhari no. 5680).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Panduan Praktis Klinis PB IDI.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari."
  },
  kram_perut: {
    analisis: "[ANALISIS MEDIS] — Kram perut ringan akibat salah mencerna makanan diatasi dengan menempelkan botol berisi air hangat di atas permukaan handuk perut Anda.",
    sunnah: "[MENURUT SUNNAH] — Terapi madu murni membantu meredakan kejang atau kram spasme pada usus yang meradang (HR. Bukhari no. 5684).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Gastroenterologi-Hepatologi, Prof. Dr. H. Ali Sulaiman.\n- Thibbun Nabawi: Ringkasan Shahih Bukhari, Al-Zubaidi."
  },
  radang_tenggorokan: {
    analisis: "[ANALISIS MEDIS] — Radang tenggorokan ringan menimbulkan nyeri saat menelan. Hindari mengonsumsi gorengan kering atau keripik tajam yang memperparah gesekan mukosa.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ bersabda: 'Gunakanlah kayu India (Qusthul Hindi) ini karena bisa menyembuhkan radang tenggorokan.' (HR. Bukhari no. 5692).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar THT-KL, Fakultas Kedokteran UI.\n- Thibbun Nabawi: Syarah Shahih Al-Bukhari, Ibnu Bathal."
  },
  sakit_leher: {
    analisis: "[ANALISIS MEDIS] — Sakit leher belakang akibat otot kaku (stiff neck) mereda dengan latihan peregangan leher menoleh kiri-kanan secara perlahan demi relaksasi otot.",
    sunnah: "[MENURUT SUNNAH] — Minyak zaitun dari pohon yang berkah sangat disarankan untuk melumuri leher saat dilakukan pijat otot ringan (HR. Tirmidzi no. 1851).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Terapi Fisik Muskuloskeletal, dr. Helmi ZN.\n- Thibbun Nabawi: Zad al-Ma'ad, Jilid 4, Ibnu Qayyim."
  },
  kembung_perut: {
    analisis: "[ANALISIS MEDIS] — Perut terasa penuh berisi gas (kembung) diatasi dengan mengurangi makan sambil berbicara dan menghindari konsumsi ubi jalar berlebih.",
    sunnah: "[MENURUT SUNNAH] — Larangan bernapas langsung di dalam gelas saat minum meminimalisasi tertelannya udara berlebih ke lambung (HR. Bukhari no. 153).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Gastroenterologi, dr. Green.\n- Thibbun Nabawi: Shahih Al-Bukhari, Kitab Al-Asyribah."
  }
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'Hanya metode POST yang diizinkan.',
    });
  }

  // Parse request body
  const { message } = req.body || {};

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({
      error: 'Bad request',
      message: 'Pesan tidak boleh kosong.',
    });
  }

  // Normalisasi input (mengubah huruf kecil semua untuk pencocokan kata kunci)
  const inputLower = message.toLowerCase();

  // 2. CHECK LOGIC (Mencocokkan kata kunci gejala)
// 2. CHECK LOGIC (Mencocokkan kata kunci gejala secara akurat dengan KNOWLEDGE_BASE)
  let matchedKey = null;

  if (inputLower.includes('demam') || inputLower.includes('meriang') || inputLower.includes('panas')) {
    matchedKey = 'demam';
  } else if (inputLower.includes('batuk') || inputLower.includes('dahak') || inputLower.includes('tenggorokan gatal') || inputLower.includes('radang tenggorokan') || inputLower.includes('tenggorokan_gatal') || inputLower.includes('radang_tenggorokan')) {
    matchedKey = 'batuk';
  } else if (inputLower.includes('pusing') || inputLower.includes('sakit kepala') || inputLower.includes('migrain') || inputLower.includes('nyut')) {
    matchedKey = 'pusing';
  } else if (inputLower.includes('perut') || inputLower.includes('kram perut') || inputLower.includes('kembung') || inputLower.includes('diare') || inputLower.includes('menceret') || inputLower.includes('kram_perut') || inputLower.includes('kembung_perut')) {
    matchedKey = 'perut';
  } else if (inputLower.includes('mual') || inputLower.includes('eneg') || inputLower.includes('maag') || inputLower.includes('muntah') || inputLower.includes('nyeri ulu hati') || inputLower.includes('nyeri_ulu_hati')) {
    matchedKey = 'mual';
  } else if (inputLower.includes('luka') || inputLower.includes('lecet') || inputLower.includes('tergores')) {
    matchedKey = 'luka';
  } else if (inputLower.includes('lemas') || inputLower.includes('lelah') || inputLower.includes('lesu')) {
    matchedKey = 'lemas';
  } else if (inputLower.includes('menggigil') || inputLower.includes('kedinginan')) {
    matchedKey = 'menggigil';
  } else if (inputLower.includes('pilek') || inputLower.includes('hidung') || inputLower.includes('flu') || inputLower.includes('bersin') || inputLower.includes('sinusitis') || inputLower.includes('mimisan') || inputLower.includes('sesak')) {
    matchedKey = 'pilek';
  } else if (inputLower.includes('leher') || inputLower.includes('sakit leher') || inputLower.includes('leher kaku') || inputLower.includes('leher_kaku')) {
    // Dipetakan ke 'sakit_leher' karena di database bagian bawah tertulis sakit_leher
    matchedKey = 'sakit_leher'; 
  } else if (inputLower.includes('telinga') || inputLower.includes('nyeri telinga') || inputLower.includes('telinga berdengung') || inputLower.includes('telinga gatal')) {
    // Dipetakan ke 'sakit_telinga' sesuai key di database kamu
    matchedKey = 'sakit_telinga';
  } else if (inputLower.includes('gigi') || inputLower.includes('sakit gigi') || inputLower.includes('gusi') || inputLower.includes('gusi berdarah')) {
    matchedKey = 'sakit_gigi';
  } else if (inputLower.includes('sariawan') || inputLower.includes('bau mulut') || inputLower.includes('mulut')) {
    matchedKey = 'sariawan';
  } else if (inputLower.includes('gatal') || inputLower.includes('panu') || inputLower.includes('kutu air') || inputLower.includes('biang keringat')) {
    matchedKey = 'gatal';
  } else if (inputLower.includes('bisul')) {
    matchedKey = 'bisul';
  } else if (inputLower.includes('jerawat')) {
    matchedKey = 'jerawat';
  } else if (inputLower.includes('kulit kering') || inputLower.includes('kulit_kering')) {
    matchedKey = 'kulit_kering';
  } else if (inputLower.includes('ketombe') || inputLower.includes('rambut rontok') || inputLower.includes('rambut')) {
    matchedKey = 'ketombe';
  } else if (inputLower.includes('luka bakar') || inputLower.includes('luka_bakar')) {
    matchedKey = 'luka_bakar_ringan';
  } else if (inputLower.includes('lebam') || inputLower.includes('memar')) {
    matchedKey = 'lebam';
  } else if (inputLower.includes('kapalan') || inputLower.includes('mata ikan')) {
    matchedKey = 'kapalan';
  } else if (inputLower.includes('tumit') || inputLower.includes('tumit pecah')) {
    matchedKey = 'tumit_pecah';
  } else if (inputLower.includes('kesemutan') || inputLower.includes('kram otot')) {
    matchedKey = 'kram_otot';
  } else if (inputLower.includes('mata lelah') || inputLower.includes('mata merah') || inputLower.includes('mata kering')) {
    matchedKey = 'mata_lelah';
  } else if (inputLower.includes('berkeringat malam') || inputLower.includes('kurang tidur') || inputLower.includes('insomnia')) {
    matchedKey = 'kurang_tidur';
  } else if (inputLower.includes('kurang darah') || inputLower.includes('anemia')) {
    matchedKey = 'kurang_darah';
  } else if (inputLower.includes('obesitas') || inputLower.includes('gemuk') || inputLower.includes('berat badan')) {
    matchedKey = 'obesitas';
  } else if (inputLower.includes('alergi')) {
    matchedKey = 'alergi';
  } else if (inputLower.includes('ngorok') || inputLower.includes('mendengkur')) {
    matchedKey = 'ngorok';
  } else if (inputLower.includes('wasir')) {
    matchedKey = 'wasir_ringan';
  } else if (inputLower.includes('cegukan')) {
    matchedKey = 'cegukan';
  } else if (inputLower.includes('keracunan')) {
    matchedKey = 'keracunan_makanan_ringan';
  }

  // 3. GENERATE RESPONSE BASED ON RULES
  if (matchedKey && KNOWLEDGE_BASE[matchedKey]) {
    const data = KNOWLEDGE_BASE[matchedKey];
    // Gabungkan tiga komponen dengan spasi baris baru agar rapi di UI
    const finalResponse = `${data.analisis}\n\n${data.sunnah}\n\n${data.rujukan}`;

    return res.status(200).json({
      response: finalResponse,
      model: 'IslaMediQ Expert System (Rule-Based v1)'
    });
  }

  // FALLBACK RESPONSE (Jika kata kunci gejala ringan tidak cocok/ditemukan)
  const fallbackMessage = "Mohon maaf, Khusnuzon AI tidak mendeteksi gejala ringan yang sesuai dengan sistem panduan kami dalam pesan Anda.\n\nKarena aplikasi IslaMediQ ini hanya dirancang untuk membantu memberikan edukasi dan penanganan awal bagi keluhan atau gejala kesehatan yang bersifat RINGAN saja, kami sangat menyarankan Anda untuk **segera memeriksakan diri ke Puskesmas atau Rumah Sakit terdekat** demi mendapatkan pemeriksaan fisik langsung dan diagnosis pasti dari tenaga medis profesional. Jangan menunda pengobatan jika kondisi dirasa mengganggu.";

  return res.status(200).json({
    response: fallbackMessage,
    model: 'IslaMediQ Expert System (Rule-Based Fallback)'
  });
}
