/* ==========================================================================
   Centralized Data Store (data.js) - E-Book QOMAR
   ========================================================================== */

// 1. Data Flashcards Kosakata
const kosaKataMateri = [
  {
    id: 1,
    arab: "مَدْرَسَةٌ",
    transliterasi: "Madrasatun",
    arti: "Sekolah",
    gambar: "../Image/sekolah.webp"
  },
  {
    id: 2,
    arab: "فَصْلٌ",
    transliterasi: "Fashlun",
    arti: "Kelas",
    gambar: "../Image/kelas.webp"
  },
  {
    id: 3,
    arab: "كِتَابٌ",
    transliterasi: "Kitabun",
    arti: "Buku",
    gambar: "../Image/kitab.webp"
  },
  {
    id: 4,
    arab: "قَلَمٌ",
    transliterasi: "Qalamun",
    arti: "Pena",
    gambar: "../Image/qalam.webp"
  },
  {
    id: 5,
    arab: "مَكْتَبٌ",
    transliterasi: "Maktabun",
    arti: "Meja",
    gambar: "../Image/meja.webp"
  },
  {
    id: 6,
    arab: "كُرْسِيٌّ",
    transliterasi: "Kursiyyun",
    arti: "Kursi",
    gambar: "../Image/kursi.webp"
  }
];

// 2. Data Playlist Video
const videoMateri = [
  {
    id: 1,
    judul: "Bab 1 : الْعُنْوَانُ",
    deskripsi: "Pelajari cara menyebutkan alamat rumah, nomor telepon, dan nama jalan dalam Bahasa Arab melalui cerita komik interaktif Ahmad dan Fatimah.",
    videoUrl: "../Video/video_komik_bab1.mp4"
  },
  {
    id: 2,
    judul: "Bab 2 : الْمِهْنَةُ",
    deskripsi: "Tonton cerita komik menarik tentang pengenalan berbagai jenis profesi dan pekerjaan dalam Bahasa Arab.",
    videoUrl: "../Video/video_komik_bab2.mp4"
  },
  {
    id: 3,
    judul: "Bab 3 : أَمَلِيْ",
    deskripsi: "Temukan cara mengungkapkan impian, harapan, dan cita-cita masa depan dalam Bahasa Arab.",
    videoUrl: "../Video/video_komik_bab3.mp4"
  }
];

// 3. Soal Kuis Pilihan Ganda (PG)
const kuisPG = [
    {
        id: 1,
        soal: "مَا عُنْوَانُ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "فِي شَارِعِ سُوْدِرْمَانَ (Jl. Sudirman)",
            "فِي شَارِعِ وِجَايَا كُسُوْمَا (Jl. Wijaya Kusuma)",
            "فِي شَارِعِ وِجَايَنْتُوْ (Jl. Wijayanto)",
            "فِي شَارِعِ أَحْمَدَ يَانِي (Jl. Ahmad Yani)"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        soal: "أَيْنَ يَعْمَلُ الطَّبِيْبُ؟",
        pilihan: [
            "فِي الْمُسْتَشْفَى",
            "فِي السُّوْقِ",
            "فِي الْمَدْرَسَةِ",
            "فِي الْمَطْعَمِ"
        ],
        correctIndex: 0
    },
    {
        id: 3,
        soal: "مَنْ يَبِيْعُ السِّلَعَ فِي السُّوْقِ؟",
        pilihan: [
            "الطَّبِيْبُ",
            "الْفَلَّاحُ",
            "التَّاجِرُ",
            "الْمُدَرِّسُ"
        ],
        correctIndex: 2
    },
    {
        id: 4,
        soal: "مَا مَعْنَى هٰذِهِ الصُّورَةِ؟",
        pilihan: [
            "الْمَدْرَسَةُ",
            "السُّوْقُ",
            "الْمُسْتَشْفَى",
            "الْمَسْجِدُ"
        ],
        correctIndex: 3,
        gambar: "../../Public/Image/image1.jpg"
    },
    {
        id: 5,
        soal: "مَا مِهْنَةُ هٰذِهِ الصُّورَة ؟",
        pilihan: [
            "طَبِيْبٌ",
            "تَاجِرٌ",
            "فَلَّاحٌ",
            "شُرْطِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/image2.jpeg"
    },
    {
        id: 6,
        soal: "مَاذَا تُعَلِّمُ الْمُدَرِّسَةُ؟",
        pilihan: [
            "اللُّغَةَ الإِنْدُونِيْسِيَّةَ",
            "اللُّغَةَ الْعَرَبِيَّةَ",
            "الرِّيَاضِيَّاتِ",
            "الْعُلُومَ"
        ],
        correctIndex: 1
    },
    {
        id: 7,
        soal: "مَا أَمَلُ فَوْزَانَ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "مُهَنْدِسًا",
            "كَاتِبًا",
            "شُرْطِيًّا",
            "طَبِيْبًا"
        ],
        correctIndex: 3
    },
    {
        id: 8,
        soal: "مَا أَمَلُ حَنِيْفٍ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "كَاتِبًا",
            "طَبِيْبًا",
            "مُهَنْدِسًا",
            "جُنْدِيًّا"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        soal: "مَا مِهْنَةُ هٰذَا الرَّجُلِ؟",
        pilihan: [
            "فَلَّاحٌ",
            "تَاجِرٌ",
            "مُهَنْدِسٌ",
            "جُنْدِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/image3.jpg"
    },
    {
        id: 10,
        soal: "مَا مَعْنَى هٰذِهِ الصُّورَةِ؟",
        pilihan: [
            "مُهَنْدِسٌ",
            "طَبِيْبٌ",
            "شُرْطِيٌّ",
            "كَاتِبٌ"
        ],
        correctIndex: 2,
        gambar: "../../Public/Image/image4.jpg"
    },
    {
        id: 11,
        soal: "أَيْنَ عُنْوَانُ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "فِي شَارِعِ وِجَايَا كُسُوْمَا",
            "فِي شَارِعِ وِجَايَنْتُوْ",
            "فِي شَارِعِ سُوْدِرْمَانَ",
            "فِي شَارِعِ أَحْمَدَ يَانِي"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },
    {
        id: 12,
        soal: "مَاذَا يُوْجَدُ جَانِبَ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "سُوْقٌ",
            "مَدْرَسَةٌ",
            "نَهْرٌ",
            "مَسْجِدٌ كَبِيْرٌ"
        ],
        correctIndex: 3,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },
    {
        id: 13,
        soal: "مَاذَا يُوْجَدُ أَمَامَ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "دُكَّانٌ",
            "مَدْرَسَةٌ إِبْتِدَائِيَّةٌ",
            "مَزْرَعَةٌ",
            "مُسْتَشْفًى"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّان.</span>"
    },
    {
        id: 14,
        soal: "مَا مِهْنَةُ الأَبِ؟",
        pilihan: [
            "تَاجِرٌ",
            "طَبِيْبٌ",
            "مُدَرِّسٌ",
            "فَلَّاحٌ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 15,
        soal: "أَيْنَ تَعْمَلُ الأُمُّ؟",
        pilihan: [
            "فِي الْمَدْرَسَةِ",
            "فِي السُّوْقِ",
            "فِي الْمَطْعَمِ",
            "فِي الْمَزْرَعَةِ"
        ],
        correctIndex: 2,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 16,
        soal: "مَنْ تُسَاعِدُ الطَّبِيْبَ؟",
        pilihan: [
            "الأُمُّ",
            "مُمِرِّضَةٌ",
            "الْجَدَّةُ",
            "الْعَمَّةُ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 17,
        soal: "مَاذَا تَعَلَّمَ فَوْزَانُ فِي الْفَصْلِ؟",
        pilihan: [
            "أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ",
            "أَنْوَاعَ الْحَيَوَانَاتِ",
            "أَنْوَاعَ الْفَوَاكِهِ",
            "أَنْوَاعَ الْمِهَنِ"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 18,
        soal: "مَاذَا أَمَلُ فَوْزَانُ فِيْ الْمُسْتَقْبَلِ؟",
        pilihan: [
            "مُهَنْدِسًا",
            "طَبِيْبًا",
            "جُنْدِيًّا",
            "تَاجِرًا"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 19,
        soal: "مَاذَا يُرِيْدُ حَنِيْفٌ أَنْ يَكُوْنَ؟",
        pilihan: [
            "طَبِيْبًا",
            "شُرْطِيًّا",
            "مُهَنْدِسًا",
            "كَاتِبًا"
        ],
        correctIndex: 3,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 20,
        soal: "مَنْ يُرِيْدُ أَنْ يَكُوْنَ طَبِيْبًا؟",
        pilihan: [
            "فَوْزَانُ",
            "نَجِيْبٌ",
            "الطَّبِيْبُ",
            "حَنِيْفٌ"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    }
];

// 4. Soal Kuis Essay
const kuisEssay = [
    {
        id: 1,
        soal: "Tuliskan arti dari kata berikut dalam Bahasa Indonesia: مَكْتَبَةٌ (Maktabatun).",
        kpiJawaban: "Perpustakaan"
    },
    {
        id: 2,
        soal: "Sebutkan 3 kosakata Bahasa Arab tentang benda-benda di dalam kelas beserta artinya!",
        kpiJawaban: "Contoh jawaban: 1) كِتَابٌ (Kitābun) = Buku, 2) قَلَمٌ (Qalamun) = Pena, 3) كُرْسِيٌّ (Kursi) = Kursi."
    },
    {
        id: 3,
        soal: "Buatlah satu kalimat sederhana dalam Bahasa Arab menggunakan kata  مُعَلِّمٌ  (Mu'allimun)!",
        kpiJawaban: "Contoh jawaban: اَلْمُعَلِّمُ فِي الْمَدْرَسَةِ (Al-Mu'allimu fī al-Madrasati) = Guru di sekolah."
    },
    {
        id: 4,
        soal: "Sebutkan nama-nama hari dalam Bahasa Arab yang kamu ketahui!",
        kpiJawaban: "Ahad (Minggu), Al-Itsnain (Senin), Ats-Tsulatsa (Selasa), Al-Arbi'a (Rabu), Al-Khamis (Kamis), Al-Jumu'ah (Jumat), As-Sabt (Sabtu)."
    },
    {
        id: 5,
        soal: "Kapan iqamah dikumandangkan?",
        kpiJawaban: "Iqamah dikumandangkan ketika shalat berjamaah akan segera dimulai (sebagai tanda untuk merapatkan barisan)."
    }
];

// 5. Informasi Kontak & Pengiriman Tugas Praktik
const praktikInfo = {
    instruksi: "Rekam video dirimu sedang membaca teks komik Bahasa Arab dari buku QOMAR dengan suara lantang dan jelas. Pastikan wajahmu terlihat dalam video dan durasi minimal 1 menit. Kirim video rekaman melalui WhatsApp ke Guru dengan menekan tombol di bawah ini.",
    nomorWA: "6285707602967",
    namaGuru: "Ustadzah Ocktavia Annisa",
    templatePesan: "Assalamu'alaikum, Ustadzah. Saya kirim tugas praktik membaca komik Bahasa Arab QOMAR. Berikut video rekaman saya. Terima kasih. 🙏"
};
