/* ==========================================================
   DAFTAR POSTINGAN "LATEST UPDATES"  (bisa diedit pakai Notepad)

   CARA TAMBAH POSTINGAN BARU
   1. Simpan gambar poster (persegi, JPG/PNG/WebP) di folder updates/
   2. Salin salah satu blok { ... } di bawah, tempel DI ATAS blok pertama,
      lalu ganti isinya. Yang paling atas tampil paling kiri.
   3. Simpan file ini, lalu refresh halaman (Ctrl+F5).

   ATURAN PENULISAN (penting, supaya tidak error)
   - Teks ditulis di dalam tanda kutip dua "seperti ini".
   - Jangan pakai tanda kutip dua " di dalam teks.
   - Setiap baris diakhiri koma, KECUALI baris terakhir dalam satu blok.
   - Setiap blok { ... } diakhiri koma, KECUALI blok terakhir.
   - "who" dan "note" boleh dihapus kalau tidak dipakai.
   - Kalau "wa" tidak ada, pesan WhatsApp dibuat otomatis dari "title".

   ARTI KOLOM
   img     : lokasi gambar, contoh "updates/nama-file.jpg"
   alt     : deskripsi gambar (untuk pembaca layar)
   card    : judul tebal di kartu
   teaser  : kalimat singkat di kartu
   title   : judul di popup
   lead    : penjelasan di popup
   who     : daftar "Untuk siapa" (opsional)
   note    : catatan kotak di popup (opsional)
   wa      : pesan WhatsApp otomatis ke reseller (opsional)
   ========================================================== */
const POSTS = [
  { "img": "updates/rx-king-shock-breaker.jpg",
    "alt": "Poster Aspira Shock Breaker RX-King, produk Astra Otoparts untuk Yamaha RX-King",
    "card": "Aspira Shock Breaker RX-King.",
    "teaser": "Shock breaker Astra Otoparts untuk Yamaha RX-King (semua tahun). Tanyakan stok dan harga ke reseller kami.",
    "title": "Aspira Shock Breaker RX-King",
    "lead": "Shock breaker Aspira dari Astra Otoparts untuk Yamaha RX-King (semua tahun). Redaman optimal, kualitas premium, dan siap untuk perjalanan jauh.",
    "who": ["Toko sparepart motor yang melayani pelanggan RX-King.","Bengkel motor yang membutuhkan pasokan shock breaker belakang.","Reseller yang mencari pasokan rutin."],
    "note": "Produk ini untuk Yamaha RX-King. Pastikan tipe motor sesuai sebelum memesan.",
    "wa": "Halo Asia Jaya Otomotif, saya mau tanya stok dan harga Aspira Shock Breaker RX-King." },
  { "img": "updates/aisin-fuel-pump.jpg",
    "alt": "Poster AISIN Fuel Pump, ready stock 100% original AISIN",
    "card": "AISIN Fuel Pump.",
    "teaser": "Fuel pump 100% original AISIN, ready stock untuk toko dan bengkel.",
    "title": "AISIN Fuel Pump Ready Stock",
    "lead": "Fuel pump 100% original AISIN. Suplai bahan bakar lebih stabil, performa mesin lebih maksimal, dan tahan lama.",
    "who": ["Toko sparepart yang ingin melengkapi stok fuel pump.","Bengkel yang membutuhkan pasokan untuk kendaraan pelanggan.","Reseller yang mencari pasokan rutin."],
    "note": "Pastikan fuel pump cocok dengan kendaraan sebelum memesan. Sebutkan tipe dan tahun mobil atau nomor part, dan tim reseller akan bantu mengeceknya.",
    "wa": "Halo Asia Jaya Otomotif, saya mau tanya stok dan harga AISIN Fuel Pump." },
  { "img": "updates/mobil-super-10w40.jpg",
    "alt": "Poster Mobil Super All-in-One Protection 10W-40 full synthetic 1 liter, ready stock dan original",
    "card": "Mobil Super 10W-40.",
    "teaser": "Oli mesin full synthetic 1L, ready stock dan original. Tanyakan harga khusus toko dan bengkel.",
    "title": "Mobil Super 10W-40 Ready Stock",
    "lead": "Mobil Super All-in-One Protection 10W-40 (API SP | SN), oli mesin full synthetic kemasan 1L untuk mesin bensin dan diesel. Ready stock dan original.",
    "who": ["Toko oli dan sparepart yang ingin menambah stok.","Bengkel yang membutuhkan oli untuk servis berkala.","Reseller yang mencari pasokan rutin."],
    "note": "Stok dan harga bisa berubah sewaktu-waktu, jadi pastikan lewat reseller sebelum memesan.",
    "wa": "Halo Asia Jaya Otomotif, saya mau tanya stok dan harga Mobil Super 10W-40 1L." },
  { "img": "updates/mobil-delvac-15w40.jpg",
    "alt": "Poster Mobil Delvac 15W-40 Super Defense kemasan 1 liter, ready stock",
    "card": "Mobil Delvac 15W-40.",
    "teaser": "Oli mesin Mobil Delvac 15W-40 kemasan 1L, ready stock. Pesan sekarang lewat reseller.",
    "title": "Mobil Delvac 15W-40 Ready Stock",
    "lead": "Mobil Delvac 15W-40 Super Defense kemasan 1L, ready stock untuk toko dan bengkel yang melayani kendaraan diesel.",
    "who": ["Toko oli dan sparepart yang ingin menambah stok.","Bengkel truk dan kendaraan diesel.","Reseller yang mencari pasokan rutin."],
    "note": "Stok dan harga bisa berubah sewaktu-waktu, jadi pastikan lewat reseller sebelum memesan.",
    "wa": "Halo Asia Jaya Otomotif, saya mau tanya stok dan harga Mobil Delvac 15W-40 1L." }
];
