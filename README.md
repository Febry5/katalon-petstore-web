# katalon-petstore-web

Proyek ini adalah tugas Final Project - Katalon Studio bagian Web Automation. Otomatisasi pengujian dilakukan pada website pengujian resmi JPetStore Demo (https://petstore.octoperf.com/actions/Catalog.action) untuk memastikan fungsi-fungsi utama situs berjalan lancar tanpa eror.

# 🛠️ Prasyarat & Cara Menjalankan
1. Download dan instal aplikasi **Katalon Studio** di laptop Anda.
2. Clone atau download folder proyek ini ke komputer Anda.
3. Buka Katalon Studio, lalu pilih **File** > **Open Project** > Arahkan ke folder proyek ini.
4. Pastikan Execution Profile menggunakan profile `default` yang sudah terisi kredensial rahasia secara aman (tanpa hardcode).
5. Buka folder **Test Suites** pada panel kiri Katalon Studio.
6. Klik dua kali pada file **Suite_PetStore_Final**.
7. Klik tombol **Run** (panah hijau melingkar) di toolbar bagian atas untuk menjalankan semua tes secara otomatis.

# 📊 Test Suite & Test Coverage
Proyek ini mencakup total **5 Skenario Uji (Test Cases)** yang dijalankan secara massal dan berurutan melalui satu Test Suite:
1. **TC1_login_berhasil** (Positive Case) - Menguji keberhasilan masuk sistem menggunakan data Global Variable yang valid.
2. **TC2_login_gagal** (Negative Case) - Memastikan sistem menolak masuk dan memberi pesan eror jika password diisi salah.
3. **TC3_cari_produk** (Data-Driven Testing / DDT) - Menguji fitur pencarian produk secara otomatis menggunakan daftar kata kunci (Fish, Dogs, Cats) dari Data Internal.
4. **TC4_tambah_keranjang** (Positive Case) - Menguji alur memilih kategori hewan hingga sukses masuk ke dalam keranjang belanja.
5. **TC5_checkout_sukses** (Positive Case) - Menguji alur penuh (End-to-End) dari login akun, belanja produk, hingga penyelesaian pembayaran pesanan (Checkout).

*Seluruh pengujian dikonfigurasi menggunakan mode kombinasi manual-skrip (Hybrid Mode), menggunakan koordinat XPath dinamis yang stabil, dan berhasil lolos uji 100% (Passed).*
