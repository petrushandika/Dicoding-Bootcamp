# Pengantar Git dan Github

Version Control System merupakan tools untuk mengatur suatu perubahan dan konfigurasi dari suatu aplikasi, termasuk juga source code. Fungsi VCS tersebut juga untuk melakukan perubahan dan backup files yang mempermudah pencarian bug atau masalah.

## Mengenal Git secara Lebih Dalam

Contoh kasus pada pengerjaan sebuah tugas penulisan dimana sering kali mengalami revisi pada penulisan, tetapi berbeda dengan revisi yang anda lakukan pada umumnya tidak bisa melihat perubahan sebelumnya. Berbeda dengan Git dimana ia sebagai solusi untuk menyimpan semua revisi Anda ke dalam penyimpanan yang lebih aman.

### Git

Git adalah perangkat lunak yang disediakan secara open source (kode sumber terbuka). Git bertujuan untuk mendukung kolaborasi antar anggota tim serta mengontrol setiap versi perubahan dalam sebuah pekerjaan pengembangan aplikasi ataupun pada bidang lainnya.

#### Git Repository

Git Repository (Repositori Git) merupakan wadah penyimpanan kumpulan file dari berbagai versi proyek yang berbeda. Kumpulan file ini diimpor melalui repository ke server lokal pengguna untuk pembaruan dan modifikasi lebih lanjut dalam konten file.

#### Git Branch

Git Branch merupakan fitur yang dapat digunakan untuk membuat sebuah percabangan untuk versi baru dari proyek Anda. Penggunaan Git Branch ini sangat berguna pada saat Anda melakukan eksperimen dengan proyek Anda. Dengan begitu, Anda tidak akan mengubah apa pun di dalam proyek utama.

#### Git Fork

Fork merupakan salinan dari sebuah repository orang lain yang tersimpan di dalam sebuah repository Git. Forking repository memungkinkan Anda untuk bereksperimen dengan bebas dan membuat perubahan tanpa memengaruhi repository utamanya.

#### Git Clone

Git Clone adalah cara paling umum dilakukan untuk mendapatkan salinan tulisan dan hasil salinannya disimpan dalam penyimpanan lokal.

#### Git Commit

Commit merupakan cuplikan perubahan (snapshot) dari repository Anda pada waktu tertentu. Dengan begitu, setiap pekerjaan yang telah selesai, dapat disimpan ke dalam repository Anda.

#### Git Push

Perintah Git push merupakan tindakan lanjutan dari perintah Git commit. Git push mengunggah semua commit cabang (branch commit) pada repository lokal ke repository server. Secara default, Git push hanya memperbarui cabang yang sesuai pada remote. Sehingga jika Anda sedang berada di branch master atau melakukan check out ke master dengan perintah Git push, hanya branch master-lah yang akan diperbarui.

## Mengenal Perintah Dasar Git secara Lebih Dalam

#### Git Commit

Git Commit merupakan perintah untuk menyimpan hasil perubahan setiap file yang ada di dalam direktori kerja, baik itu file yang baru saja ditambahkan maupun file yang terjadi perubahan.

#### Git Checkout

Git Checkout merupakan perintah layaknya mesin waktu di mana perintah ini memungkinkan para pengguna Git untuk melakukan pengembalian kondisi berkas seperti waktu yang dituju atau commit yang dituju.

#### Git Reset

Git Reset, seperti namanya, perintah ini berfungsi untuk mengatur ulang. Maksudnya, perintah ini merupakan perintah untuk mengembalikan suatu kondisi berkas ke commit yang dituju dan menghapus riwayat sesudahnya.

#### Git Revert

Git Revert merupakan perintah yang mirip dengan reset, tetapi fungsinya lebih daripada Git Reset. Perintah ini akan mengembalikan kondisi suatu berkas ke waktu/commit yang dituju tanpa menghapus catatan riwayat commit.

## Mengenal Repository

Repository bisa diartikan sebagai tempat penyimpanan atau direktori dari sekumpulan file/berkas yang mana dalam repository ini Git bisa merekam setiap perubahan berkas dan menyimpannya di dalam riwayat commit.

#### Remote Repository

Remote Repository merupakan tempat penyimpanan berkas-berkas pekerjaan atau kenangan yang kita miliki di dalam server.

#### Local Repository

Local Repository merupakan tempat penyimpanan lokal yang berada di komputer kita. Local repository ini dapat kita ubah-ubah (hapus, modifikasi, tambah) sesuai dengan keinginan kita sebelum akhirnya nanti di-push ke remote repository.
