/* ============================================================
   IslaMediQ — Fasting Data & Calendar
   ============================================================ */

export const sunnahFastingTypes = [
  {
    id: 'senin-kamis',
    name: 'Puasa Senin-Kamis',
    description: 'Puasa sunnah yang sangat dianjurkan, dilakukan setiap hari Senin dan Kamis.',
    dalil: 'Rasulullah ﷺ ditanya tentang puasa hari Senin, beliau bersabda: "Itu adalah hari aku dilahirkan dan hari diturunkan wahyu kepadaku." (HR. Muslim no. 1162)',
    schedule: 'Setiap Senin & Kamis',
    reward: '10 poin per hari',
    days: [1, 4] // Monday=1, Thursday=4
  },
  {
    id: 'ayyamul-bidh',
    name: 'Puasa Ayyamul Bidh',
    description: 'Puasa 3 hari di pertengahan bulan Hijriyah (tanggal 13, 14, 15).',
    dalil: 'Dari Abu Hurairah ra, Rasulullah ﷺ berpesan kepadaku tiga hal: puasa tiga hari setiap bulan, dua rakaat shalat Dhuha, dan shalat Witir sebelum tidur. (HR. Bukhari no. 1981, Muslim no. 721)',
    schedule: 'Tanggal 13, 14, 15 bulan Hijriyah',
    reward: '10 poin per hari'
  },
  {
    id: 'puasa-daud',
    name: 'Puasa Daud',
    description: 'Puasa selang-seling: sehari puasa, sehari berbuka. Puasa yang paling dicintai Allah.',
    dalil: 'Rasulullah ﷺ bersabda: "Puasa yang paling dicintai Allah adalah puasa Daud; beliau puasa sehari dan berbuka sehari." (HR. Bukhari no. 1131, Muslim no. 1159)',
    schedule: 'Selang-seling sehari',
    reward: '15 poin per hari'
  },
  {
    id: 'syawal',
    name: 'Puasa 6 Hari Syawal',
    description: 'Puasa enam hari di bulan Syawal setelah Idul Fitri.',
    dalil: 'Rasulullah ﷺ bersabda: "Barangsiapa berpuasa Ramadhan kemudian mengikutinya dengan enam hari di bulan Syawal, maka seolah-olah dia berpuasa setahun penuh." (HR. Muslim no. 1164)',
    schedule: '6 hari di bulan Syawal',
    reward: '15 poin per hari'
  },
  {
    id: 'arafah',
    name: 'Puasa Arafah',
    description: 'Puasa pada tanggal 9 Dzulhijjah bagi yang tidak berhaji.',
    dalil: 'Rasulullah ﷺ bersabda tentang puasa Arafah: "Aku berharap kepada Allah agar menghapuskan dosa setahun sebelumnya dan setahun sesudahnya." (HR. Muslim no. 1162)',
    schedule: '9 Dzulhijjah',
    reward: '20 poin'
  },
  {
    id: 'asyura',
    name: "Puasa 'Asyura",
    description: 'Puasa pada tanggal 10 Muharram, disunnahkan juga tanggal 9.',
    dalil: "Rasulullah ﷺ bersabda: \"Puasa hari 'Asyura, aku berharap kepada Allah agar menghapuskan dosa setahun sebelumnya.\" (HR. Muslim no. 1162)",
    schedule: '9-10 Muharram',
    reward: '15 poin'
  }
];

export const sahurRecommendations = [
  { food: 'Kurma + Air Putih', benefit: 'Sunnah Rasulullah ﷺ, sumber energi cepat dan hidrasi', category: 'sunnah' },
  { food: 'Oatmeal/Havermut', benefit: 'Karbohidrat kompleks, serat tinggi, energi bertahan lama', category: 'karbohidrat' },
  { food: 'Telur Rebus', benefit: 'Protein tinggi, mengenyangkan lebih lama', category: 'protein' },
  { food: 'Pisang', benefit: 'Kalium tinggi, mencegah kram dan lemas', category: 'buah' },
  { food: 'Nasi Merah', benefit: 'Serat lebih tinggi dari nasi putih, indeks glikemik rendah', category: 'karbohidrat' },
  { food: 'Alpukat', benefit: 'Lemak sehat, sangat mengenyangkan, kaya vitamin E', category: 'buah' },
  { food: 'Madu', benefit: 'Sunnah Nabawi, energi alami, antimikroba', category: 'sunnah' },
  { food: 'Susu/Yoghurt', benefit: 'Kalsium dan protein, membantu hidrasi', category: 'protein' },
];

export const breakfastRecommendations = [
  { food: 'Kurma (3 atau 5 buah)', benefit: 'Sunnah Rasulullah ﷺ, gula alami untuk pemulihan cepat', category: 'sunnah' },
  { food: 'Air Putih Hangat', benefit: 'Rehidrasi tubuh, lebih baik dari minuman manis', category: 'minuman' },
  { food: 'Sup Hangat', benefit: 'Menghangatkan perut, mudah dicerna, rehidrasi', category: 'makanan' },
  { food: 'Buah Segar', benefit: 'Vitamin dan mineral alami, serat untuk pencernaan', category: 'buah' },
  { food: 'Madu + Air Hangat', benefit: 'Sunnah Nabawi, membantu pencernaan setelah puasa', category: 'sunnah' },
  { food: 'Jus Kurma (Nabeez)', benefit: 'Minuman tradisional Nabawi, kaya nutrisi', category: 'sunnah' },
];

/**
 * Get sunnah fasting days for a given month
 * Returns array of { day, type, label }
 */
export function getSunnahFastingDays(year, month) {
  const days = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon, ..., 4=Thu

    // Monday
    if (dayOfWeek === 1) {
      days.push({ day: d, type: 'senin-kamis', label: 'Senin' });
    }
    // Thursday
    if (dayOfWeek === 4) {
      days.push({ day: d, type: 'senin-kamis', label: 'Kamis' });
    }
  }

  // Approximate Ayyamul Bidh (13, 14, 15 of Hijri month)
  // Simple approximation: shift by ~10-11 days from Gregorian mid-month
  // This is not accurate but gives a visual indicator
  const approxBidh = [13, 14, 15];
  approxBidh.forEach(bd => {
    if (bd <= daysInMonth) {
      const existing = days.find(d => d.day === bd);
      if (!existing) {
        days.push({ day: bd, type: 'ayyamul-bidh', label: 'Ayyamul Bidh' });
      }
    }
  });

  return days;
}

/**
 * Get the month name in Indonesian
 */
export function getMonthName(month) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return months[month];
}
