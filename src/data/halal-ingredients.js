/**
 * IslaMediQ — Database Bahan Halal-Haram
 * Referensi kode-E, bahan syubhat, dan bahan Thibbun Nabawi.
 * Sumber: JAKIM, MUI, IFANCA, dan literatur fiqh kontemporer.
 */

export const halalDatabase = {
  /* ════════════════════════════════════════════════════════
   *  BAHAN HARAM — jelas dilarang, ada alternatif halal
   * ════════════════════════════════════════════════════════ */
  haram: [
    {
      name: 'Karmin / Cochineal',
      code: 'E120',
      reason: 'Pewarna merah dari serangga cochineal (Dactylopius coccus). Termasuk bangkai serangga yang diharamkan menurut mayoritas ulama.',
      alternatives: ['Betanin / Bit Merah (E162)', 'Paprika Oleoresin (E160c)', 'Antosianin (E163)']
    },
    {
      name: 'Gelatin (dari babi)',
      code: 'E441',
      reason: 'Protein yang diekstrak dari kulit dan tulang babi. Haram karena berasal dari babi.',
      alternatives: ['Gelatin sapi halal', 'Agar-agar (E406)', 'Karagenan (E407)', 'Pektin (E440)']
    },
    {
      name: 'Lemak Babi / Lard',
      code: 'E570 (asam stearat dari babi)',
      reason: 'Lemak hewani dari babi. Sering ditemukan di produk roti, biskuit, dan margarin impor.',
      alternatives: ['Lemak nabati (sawit, zaitun)', 'Mentega sapi halal']
    },
    {
      name: 'Pepsin (dari babi)',
      code: '-',
      reason: 'Enzim pencernaan yang diekstrak dari lambung babi. Digunakan dalam pembuatan keju dan suplemen.',
      alternatives: ['Rennet mikroba halal', 'Rennet nabati', 'Enzim dari sapi halal']
    },
    {
      name: 'Shortening (dari babi)',
      code: '-',
      reason: 'Lemak padat dari babi yang digunakan dalam pastry dan produk roti.',
      alternatives: ['Shortening nabati (sawit)', 'Mentega halal', 'Minyak kelapa']
    },
    {
      name: 'Etanol / Alkohol (sebagai minuman)',
      code: '-',
      reason: 'Khamr (minuman yang memabukkan) diharamkan berdasarkan QS. Al-Maidah: 90.',
      alternatives: ['Cuka (alkohol telah berubah sifat / istihalah)', 'Minuman non-alkohol']
    },
    {
      name: 'L-Sistein dari rambut manusia',
      code: 'E920',
      reason: 'Asam amino yang sering diekstrak dari rambut manusia atau bulu unggas non-halal. Digunakan sebagai pengembang roti.',
      alternatives: ['L-Sistein sintetis', 'L-Sistein dari fermentasi mikroba']
    },
    {
      name: 'Shellac',
      code: 'E904',
      reason: 'Resin dari sekresi serangga lac (Kerria lacca). Digunakan sebagai pelapis permen dan buah. Sebagian ulama mengharamkannya.',
      alternatives: ['Lilin carnauba (E903)', 'Lilin lebah halal (E901)']
    }
  ],

  /* ════════════════════════════════════════════════════════
   *  BAHAN SYUBHAT — meragukan, perlu verifikasi sumber
   * ════════════════════════════════════════════════════════ */
  syubhat: [
    {
      name: 'Mono- dan Digliserida',
      code: 'E471',
      reason: 'Pengemulsi yang bisa berasal dari lemak hewani (babi/sapi) atau nabati.',
      notes: 'Halal jika dari sumber nabati atau hewan halal yang disembelih syar\'i. Cek sertifikat halal produk.'
    },
    {
      name: 'Whey',
      code: '-',
      reason: 'Protein susu yang proses pembuatannya bisa menggunakan rennet dari babi.',
      notes: 'Halal jika menggunakan rennet mikroba atau hewan halal. Cek sertifikat halal.'
    },
    {
      name: 'Lesitin',
      code: 'E322',
      reason: 'Pengemulsi yang bisa berasal dari kedelai (halal), telur, atau sumber hewani lain.',
      notes: 'Lesitin kedelai (soy lecithin) umumnya halal. Cek sumber pada label.'
    },
    {
      name: 'Gliserol / Gliserin',
      code: 'E422',
      reason: 'Bisa berasal dari lemak hewani (termasuk babi) atau nabati.',
      notes: 'Halal jika dari sumber nabati (sawit) atau hewan halal. Banyak digunakan di obat, pasta gigi, dan kosmetik.'
    },
    {
      name: 'Asam Stearat',
      code: 'E570',
      reason: 'Asam lemak yang bisa berasal dari lemak babi, sapi, atau nabati.',
      notes: 'Cek sumber. Asam stearat nabati (dari sawit) bersifat halal.'
    },
    {
      name: 'Rennet / Keju',
      code: '-',
      reason: 'Enzim penggumpal susu yang tradisionalnya berasal dari lambung anak sapi. Bisa juga dari babi.',
      notes: 'Halal jika menggunakan rennet mikroba (microbial rennet) atau rennet dari hewan halal yang disembelih syar\'i.'
    },
    {
      name: 'Vanilla Extract',
      code: '-',
      reason: 'Proses ekstraksi menggunakan etanol sebagai pelarut (35–40% alkohol).',
      notes: 'Sebagian ulama membolehkan karena kadar alkohol yang tersisa sangat sedikit dan tidak memabukkan (istihlak). Alternatif: vanillin sintetis atau bubuk vanilla.'
    },
    {
      name: 'Kecap Inggris (Worcestershire Sauce)',
      code: '-',
      reason: 'Beberapa merek mengandung ikan anchovy yang tidak disembelih.',
      notes: 'Mayoritas ulama membolehkan ikan tanpa penyembelihan (ikan termasuk hewan yang halal bangkainya). Namun cek bahan lain seperti alkohol.'
    },
    {
      name: 'Karbon Aktif dari Tulang',
      code: 'E153',
      reason: 'Pewarna hitam yang bisa berasal dari tulang hewan (termasuk babi) yang dibakar.',
      notes: 'Halal jika dari sumber nabati (batok kelapa, kayu). Karbon aktif dari tulang babi haram.'
    },
    {
      name: 'Cuka (Vinegar)',
      code: '-',
      reason: 'Proses pembuatan melibatkan fermentasi alkohol yang kemudian berubah menjadi asam asetat.',
      notes: 'Mayoritas ulama (termasuk MUI dan JAKIM) menghalalkan cuka karena istihalah (perubahan sifat sempurna). Rasulullah ﷺ bersabda: "Sebaik-baik lauk adalah cuka" (HR. Muslim no. 2051).'
    }
  ],

  /* ════════════════════════════════════════════════════════
   *  BAHAN HALAL — aman digunakan
   * ════════════════════════════════════════════════════════ */
  halal: [
    { name: 'Asam Sitrat', code: 'E330' },
    { name: 'Asam Askorbat (Vitamin C)', code: 'E300' },
    { name: 'Pektin', code: 'E440' },
    { name: 'Agar-Agar', code: 'E406' },
    { name: 'Karagenan', code: 'E407' },
    { name: 'Guar Gum', code: 'E412' },
    { name: 'Xanthan Gum', code: 'E415' },
    { name: 'Selulosa', code: 'E460' },
    { name: 'Natrium Bikarbonat (Baking Soda)', code: 'E500' },
    { name: 'Kalsium Karbonat', code: 'E170' },
    { name: 'Kurkumin (Kunyit)', code: 'E100' },
    { name: 'Klorofil', code: 'E140' },
    { name: 'Karamel', code: 'E150a' },
    { name: 'Betanin (Bit Merah)', code: 'E162' },
    { name: 'Antosianin', code: 'E163' },
    { name: 'Tokoferol (Vitamin E)', code: 'E306' },
    { name: 'Natrium Benzoat', code: 'E211' },
    { name: 'Kalium Sorbat', code: 'E202' },
    { name: 'Asam Tartarat', code: 'E334' },
    { name: 'Lesitin Kedelai', code: 'E322 (kedelai)' },
    { name: 'Maltodekstrin', code: '-' },
    { name: 'Tepung Tapioka', code: '-' },
    { name: 'Minyak Sawit', code: '-' },
    { name: 'Minyak Zaitun', code: '-' },
    { name: 'Gula Aren', code: '-' },
    { name: 'Garam Laut', code: '-' },
    { name: 'Madu Murni', code: '-' },
    { name: 'Lilin Carnauba', code: 'E903' }
  ],

  /* ════════════════════════════════════════════════════════
   *  BAHAN THIBBUN NABAWI — bahan berkhasiat dari Sunnah
   * ════════════════════════════════════════════════════════ */
  thibbuNabawi: [
    {
      name: 'Madu',
      nameAr: 'العسل',
      benefits: 'Antibakteri, antioksidan, penyembuh luka, pereda batuk, meningkatkan imun.',
      hadith: 'QS. An-Nahl: 69 — "Di dalamnya terdapat obat yang menyembuhkan bagi manusia."'
    },
    {
      name: 'Habbatussauda (Jintan Hitam)',
      nameAr: 'الحبة السوداء',
      benefits: 'Imunomodulator, antiinflamasi, antidiabetes, antihipertensi, antioksidan.',
      hadith: 'HR. Bukhari no. 5688 — "Di dalamnya terdapat obat untuk segala penyakit kecuali kematian."'
    },
    {
      name: 'Minyak Zaitun',
      nameAr: 'زيت الزيتون',
      benefits: 'Kardioprotektif, antiinflamasi, kaya omega-9 dan polifenol, melembapkan kulit.',
      hadith: 'HR. Tirmidzi no. 1851 — "Makanlah minyak zaitun dan berminyaklah dengannya, karena ia dari pohon yang diberkahi."'
    },
    {
      name: 'Kurma Ajwa',
      nameAr: 'تمر العجوة',
      benefits: 'Sumber energi cepat, kaya kalium dan magnesium, antioksidan, hepatoprotektif.',
      hadith: 'HR. Bukhari no. 5445 — "Barangsiapa makan 7 butir kurma Ajwa di pagi hari, tidak akan terkena racun dan sihir."'
    },
    {
      name: 'Senna Makki',
      nameAr: 'السنا',
      benefits: 'Pencahar alami (laksatif stimulan), melancarkan pencernaan, membersihkan usus besar.',
      hadith: 'HR. Ibnu Majah no. 3457 — "Hendaklah kalian menggunakan senna dan sanoot."'
    },
    {
      name: 'Air Zamzam',
      nameAr: 'ماء زمزم',
      benefits: 'Kaya kalsium dan magnesium, pH basa, bersih secara mikrobiologis, rehidrasi.',
      hadith: 'HR. Ibnu Majah no. 3062 — "Air Zamzam sesuai dengan niat peminumnya."'
    },
    {
      name: 'Jahe',
      nameAr: 'الزنجبيل',
      benefits: 'Antiemetik (anti mual), antiinflamasi, menghangatkan tubuh, melancarkan pencernaan.',
      hadith: 'QS. Al-Insan: 17 — "Mereka diberi minum minuman yang campurannya adalah jahe."'
    },
    {
      name: 'Cendawan Truffle',
      nameAr: 'الكمأة',
      benefits: 'Kaya protein, antioksidan, antimikroba, berkhasiat untuk mata.',
      hadith: 'HR. Bukhari no. 4478 — "Truffle termasuk manna dan airnya obat untuk mata."'
    },
    {
      name: 'Tsufah / Henna',
      nameAr: 'الحناء',
      benefits: 'Antiinflamasi topikal, meredakan sakit kepala, pewarna rambut alami, antifungal.',
      hadith: 'HR. Tirmidzi no. 2054 — Nabi ﷺ pernah meletakkan henna pada luka untuk menghentikan pendarahan.'
    },
    {
      name: 'Kacang Siwak (Miswak)',
      nameAr: 'السواك',
      benefits: 'Antibakteri mulut, membersihkan gigi alami, mengandung fluoride dan silika.',
      hadith: 'HR. Bukhari no. 887 — "Seandainya tidak memberatkan umatku, niscaya kuperintahkan mereka bersiwak setiap shalat."'
    },
    {
      name: 'Cuka',
      nameAr: 'الخل',
      benefits: 'Antimikroba, membantu pencernaan, menstabilkan gula darah, pengawet alami.',
      hadith: 'HR. Muslim no. 2051 — "Sebaik-baik lauk adalah cuka."'
    },
    {
      name: 'Susu',
      nameAr: 'اللبن',
      benefits: 'Sumber kalsium, protein, vitamin D, menjaga kesehatan tulang dan gigi.',
      hadith: 'HR. Tirmidzi no. 3455 — Nabi ﷺ berdoa saat minum susu: "Bārik lanā fīh wa zidnā minhu."'
    }
  ]
};
