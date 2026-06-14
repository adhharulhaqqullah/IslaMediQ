/* ============================================================
   IslaMediQ — Rule-Based API Endpoint: /api/chat
   Sistem pakar sederhana menggunakan pencocokan kata kunci (keywords)
   100% Stabil, Bebas Limit, Instan, dan Tanpa API Key Luar
   ============================================================ */

// 1. KNOWLEDGE BASE (Pangkalan Data Gejala, Hadis Shahih, dan Rujukan)
const KNOWLEDGE_BASE = {
  demam: {
    analisis: "[ANALISIS MEDIS] — Demam atau peningkatan suhu tubuh biasanya merupakan tanda alami bahwa sistem kekebalan tubuh Anda sedang aktif melawan infeksi ringan, seperti flu atau radang tenggorokan. Kondisi ini umumnya tidak berbahaya selama suhu tubuh tidak terlalu tinggi dan tidak disertai gejala berat seperti kaku kuduk. Perbanyaklah istirahat, kompres air hangat di lipatan ketiak atau paha, dan jaga hidrasi dengan minum air putih yang cukup. Selalu konsultasikan dengan dokter untuk diagnosis pasti jika demam berlanjut lebih dari 3 hari.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ mengajarkan untuk meredakan demam menggunakan air dingin yang bersih.\n\nالْحُمَّى مِنْ فَوْحِ جَهَنَّمَ فَأَبْرِدُوهَا بِالْمَاءِ\n\n*Latin:* Al-humma min fauhi jahannama fa-abriduha bil-ma'.\n\n*Artinya:* 'Demam itu berasal dari embusan api neraka, maka dinginkanlah ia dengan air.' (HR. Bukhari no. 5723, HR. Muslim no. 2210).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Ajar Ilmu Penyakit Dalam, Ed. VI, dr. Sudoyo AW, Penerbit Interna Publishing.\n- Thibbun Nabawi: Kitab Thibbun Nabawi, Ibnu Qayyim Al-Jauziyyah, Penerbit Darul Haq."
  },
  batuk: {
    analisis: "[ANALISIS MEDIS] — Batuk merupakan mekanisme pertahanan tubuh yang refleks untuk membersihkan saluran pernapasan dari lendir, debu, atau iritan lainnya. Batuk ringan umumnya disebabkan oleh infeksi virus (common cold) yang bisa sembuh dengan sendirinya. Pastikan Anda menghindari makanan berminyak, es, serta menjaga kelembapan tenggorokan dengan cairan hangat. Mohon konsultasikan dengan dokter untuk pemeriksaan fisik lebih lanjut jika batuk disertai sesak napas atau batuk darah.",
    sunnah: "[MENURUT SUNNAH] — Untuk meringankan gejala batuk dan masalah pernapasan, sangat dianjurkan mengonsumsi madu murni yang memiliki sifat penyembuh alami.\n\nعَلَيْكُمْ بِالشِّفَاءَيْنِ الْعَسَلِ وَالْقُرْآنِ\n\n*Latin:* 'Alaikum bisy-syifa'aini: al-'asali wal-qur'an.\n\n*Artinya:* 'Hendaklah kalian menggunakan dua obat: madu dan Al-Qur'an.' (HR. Ibnu Majah no. 3452, dinyatakan shahih oleh Al-Hakim).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal 'Honey for Acute Cough in Children', Oduwole O, dkk., Cochrane Database of Systematic Reviews.\n- Thibbun Nabawi: Fathul Bari Syarah Shahih Al-Bukhari, Ibnu Hajar Al-Asqalani, Penerbit Pustaka Azzam."
  },
  pusing: {
    analisis: "[ANALISIS MEDIS] — Pusing atau sakit kepala ringan sering kali dipicu oleh faktor kelelahan, kurang tidur, dehidrasi, terlambat makan (hipoglikemia), atau stres psikologis ringan. Kondisi ini menenangkan dan biasanya mereda setelah tubuh mendapatkan istirahat yang cukup dan asupan cairan yang adekuat. Cobalah berbaring di ruangan yang tenang dan gelap. Harap berkonsultasi dengan dokter untuk diagnosis pasti apabila pusing terasa berputar hebat atau terjadi terus-menerus.",
    sunnah: "[MENURUT SUNNAH] — Rasulullah ﷺ sering memanfaatkan bekam (hijamah) di area kepala untuk mengatasi keluhan sakit kepala/pusing.\n\nاحْتَجَمَ رَسُولُ اللَّهِ صلى الله عليه وسلم فِي رَأْسِهِ وَهُوَ مُحْرِمٌ مِنْ وَجَعٍ كَانَ بِهِ\n\n*Latin:* Ihtajama Rasulullahi shallallahu 'alaihi wasallam fi ra'sihi wahuwa muhrimun min waja'in kana bihi.\n\n*Artinya:* 'Rasulullah ﷺ pernah berbekam di kepalanya ketika beliau tengah ihram karena sakit kepala yang beliau rasakan.' (HR. Bukhari no. 5691).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Pedoman Tatalaksana Nyeri Kepala, Kelompok Studi Nyeri Kepala PERDOSSI (Persatuan Dokter Spesialis Saraf Indonesia).\n- Thibbun Nabawi: Zad al-Ma'ad fi Hadyi Khair al-'Ibad, Jilid 4, Ibnu Qayyim Al-Jauziyyah, Penerbit Muassasatur Risalah."
  },
  perut: {
    analisis: "[ANALISIS MEDIS] — Sakit perut ringan atau kram lambung ringan umumnya disebabkan oleh gangguan pencernaan, akumulasi gas (kembung), atau akibat salah mengonsumsi makanan yang terlalu pedas/asam. Tenang dan jangan panik, cobalah mengonsumsi air hangat dan menghindari makanan berat sementara waktu untuk mengistirahatkan usus Anda. Selalu konsultasikan ke dokter jika sakit perut terasa sangat tajam di sisi kanan bawah atau disertai muntah hebat.",
    sunnah: "[MENURUT SUNNAH] — Madu adalah obat utama yang ditegaskan dalam hadis shahih untuk mengatasi masalah pencernaan dan sakit perut.\n\nاسْقِهِ عَسَلاً\n\n*Latin:* Isqihi 'asala.\n\n*Artinya:* 'Minumkanlah madu kepadanya.' (Pesan Rasulullah ﷺ kepada seseorang yang saudaranya mengeluhkan sakit perut/diare) (HR. Bukhari no. 5684, HR. Muslim no. 2217).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Gastroenterologi-Hepatologi, Prof. Dr. H. Ali Sulaiman, Penerbit Universitas Indonesia (UI Press).\n- Thibbun Nabawi: Ringkasan Shahih Bukhari, Al-Zubaidi, Penerbit Dar Al-Kutub Al-Ilmiyah."
  },
  mual: {
    analisis: "[ANALISIS MEDIS] — Mual atau rasa tidak nyaman di hulu hati sering kali berhubungan dengan penyakit asam lambung (maag/GERD), kelelahan perjalanan, atau tahap awal masuk angin. Tarik napas dalam-dalam secara perlahan, hindari aroma menyengat, dan posisikan tubuh bersandar setengah duduk agar asam lambung tidak naik. Dianjurkan konsultasi ke dokter spesialis atau dokter umum terdekat jika mual memicu dehidrasi berat.",
    sunnah: "[MENURUT SUNNAH] — Untuk memelihara kesehatan lambung dan menghilangkan rasa mual atau lemas, mengonsumsi talbinah (sup gandum) sangat dianjurkan.\n\nالتَّلْبِينَةُ مُجِمَّةٌ لِفُؤَادِ الْمَرِيضِ تَذْهَبُ بِبَعْضِ الْحُزْنِ\n\n*Latin:* At-talbinatu mujimmatun li-fu'adil-maridat, tadzhabu bi-ba'dhil-huzn.\n\n*Artinya:* 'Talbinah itu dapat menenangkan hati orang yang sakit dan menghilangkan sebagian kesedihan (serta rasa lemas).' (HR. Bukhari no. 5689, HR. Muslim no. 2216).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Buku Saku Patofisiologi Corwin, Elizabeth J., Penerbit EGC.\n- Thibbun Nabawi: Kitab Al-Asbab wal-'Alamat, Ibnu Sina, Pola Diet Sehat Nabawi."
  },
  luka: {
    analisis: "[ANALISIS MEDIS] — Luka ringan atau lecet akibat tergores sebaiknya segera dibersihkan di bawah air mengalir yang bersih untuk menghilangkan kotoran dan bakteri penyebab infeksi. Setelah bersih, berikan antiseptik ringan dan biarkan luka tetap kering. Jangan menggaruk kropeng yang mulai terbentuk. Segera bawa ke fasilitas medis jika luka cukup dalam dan membutuhkan jahitan.",
    sunnah: "[MENURUT SUNNAH] — Mengoleskan madu murni pada luka luar berkhasiat mencegah infeksi kuman dan mempercepat penyembuhan jaringan kulit.\n\nالشِّفَاءُ فِي ثَلاَثَةٍ شَرْبَةِ عَسَلٍ...\n\n*Latin:* Asy-syifa'u fi tsalatsatin: syarbati 'asalin...\n\n*Artinya:* 'Kesembuhan itu ada pada tiga hal: minum madu...' (HR. Bukhari no. 5680).",
    rujukan: "[SUMBER RUJUKAN]\n- Medis Modern: Jurnal 'Honey: A Biologic Wound Dressing', Molan PC, Jurnal Wound Management & Prevention.\n- Thibbun Nabawi: Kitab Al-Muwatta, Imam Malik, Bab Pengobatan."
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
  let matchedKey = null;

  if (inputLower.includes('demam') || inputLower.includes('panas') || inputLower.includes('meriang')) {
    matchedKey = 'demam';
  } else if (inputLower.includes('batuk') || inputLower.includes('tenggorokan gatal') || inputLower.includes('dahak')) {
    matchedKey = 'batuk';
  } else if (inputLower.includes('pusing') || inputLower.includes('sakit kepala') || inputLower.includes('migrain') || inputLower.includes('nyut')) {
    matchedKey = 'pusing';
  } else if (inputLower.includes('perut') || inputLower.includes('lambung') || inputLower.includes('kembung') || inputLower.includes('diare') || inputLower.includes('menceret')) {
    matchedKey = 'perut';
  } else if (inputLower.includes('mual') || inputLower.includes('muntah') || inputLower.includes('eneg') || inputLower.includes('maag')) {
    matchedKey = 'mual';
  } else if (inputLower.includes('luka') || inputLower.includes('lecet') || inputLower.includes('berdarah') || inputLower.includes('tergores')) {
    matchedKey = 'luka';
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

  // FALLBACK RESPONSE (Jika kata kunci tidak dikenali atau bukan topik kesehatan)
  const fallbackMessage = "Assalamu'alaikum! Saya Khusnuzon, asisten kesehatan AI dari IslaMediQ. Maaf, saya tidak mendeteksi kata kunci gejala ringan yang spesifik (seperti demam, batuk, pusing, sakit perut, mual, atau luka ringan) dalam pesan Anda. \n\nPerlu diketahui bahwa saya hanya diprogram untuk membantu memberikan edukasi seputar topik kesehatan ringan. Jika Anda merasakan keluhan medis yang serius atau berkepanjangan, kami sangat menyarankan untuk segera berkonsultasi langsung dengan dokter atau fasilitas pelayanan kesehatan terdekat demi diagnosis yang pasti.";

  return res.status(200).json({
    response: fallbackMessage,
    model: 'IslaMediQ Expert System (Rule-Based Fallback)'
  });
}
