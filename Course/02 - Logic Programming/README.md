# Logika Pemrograman

Logika pemrograman adalah sebuah kemampuan dasar yang menerapkan pemahaman operasi logika terhadap data ke dalam ilmu komputer.

## Perbedaan Logika dan Algoritma Pemrograman

Logika Pemrograman : Membantu menyelesaikan permasalahan
Algoritma Pemrograman : Membuat penyelesaian terstruktur

#### Hal yang harus diperhatikan menyusun algoritma, seperti :

- **Finiteness (Keterbatasan)** : Jangan membuat algoritma panjang yang tidak ada akhirnya, algoritma yang berproses pastinya memiliki langkah-langkah penyelesaiannya.

- **Definiteness (Kepastian)** : Langkah algoritma harus jelas, detail, dan tidak ambigu. Dengan kata lain, pembaca harus mengerti apa tujuan yang dimaksud.

- **Effectiveness (Efketivitas)** : Langkah di dalamnya harus sesuai kebutuhan dan tidak perlu berlebihan, dengan adanya langkah yang jelas maka waktu yang dibutuhkan lebih singkat dan dalam batas wajar.

- **Input (Masukkan)** : Algoritma pasti membutuhkan nol atau lebih masukan (input) sebelum prosesnya dimulai. Misalnya pada algoritma luas persegi panjang yaitu masukan 2 input dan menghitung panjang dan lebarnya.

- **Output (Keluaran)** : Keluaran adalah besaran nilai yang memiliki hubungan dengan masukan, seperti hasil dari perhitungann luas persegi panjang.

## Penalaran Logika Induktif dan Deduktif

#### Logika Induktif

Observation &rarr; Pattern &rarr; Tentative Hypothesis &rarr; Theory

Penalaran Logika Induktif &rarr; Logika pendukung pembuktian dan fakta

Proses penalaran induktif dimulai dari,

- Pengamatan terhadap suatu peristiwa atau hal lainnya.
- Mendeteksi pola dan keteraturan dari pengalaman yang telah terjadi.
- Merumuskan beberapa hipotesis sementara yang dapat kita eksplorasi
- Mengambil kesimpulan

#### Contoh Kasus

Misalnya, pada suatu sore anda ingin membeli nasi goreng menggunakan sepeda motor karena warung lumayan jauh. Kemudian langit mulai mendung dan angin bertiup dingin. Karena pada sore hari sering turun hujan, Anda langsung memasukkan jas hujan ke jok motor dan berangkat ke warung, disini lah anda sudah menerapkan penalaran induktif.

#### Logika Deduktif

Theory &rarr; Hypothesis &rarr; Observation &rarr; Confirmation

**Deduktif = Silogisme**, silogisme adalah bentuk, cara berpikir atau menarik simpulan yang terdiri atas premis umum, premis khusus, dan simpulan (misalnya semua manusia akan mati, si A manusia, jadi si A akan mati). Sehingga bisa dikatakan jika A = B dan B = C, maka hasil kesimpulan dari penalaran logikanya adalah A = C.

```javascript
Contoh :

Semua burung memiliki bulu
Semua kenari adalah burung

Kesimpulannya: Semua kenari memiliki bulu

Semua hewan berbisa berbahaya.
Beberapa ular adalah hewan berbisa

Kesimpulannya: beberapa ular adalah hewan berbahaya
```

## Logika Pemrograman Dasar

#### Logika Aritmatika

Logika aritmatika untuk membantu pemecahan masalah yang melibatkan operasi matematika seperti penjumlahan, pengurangan, dan lainnya.

#### Logika Perbandingan

Contoh kasus, ketika kita bermain game harus memiliki minimal skor 500 untuk menyelesaikannya. Ketika skor lebih besar dari 500 maka saya berhasil. Namun, jika skor dibawah 500 maka saya gagal

#### Logika Perulangan

Kembali ke masa sekolah, saat kita terlambat maka akan dihukum untuk menulis di kertas sebanyak 100x dengan teks "Saya tidak akan mengulanginya lagi". Apabila kita lakukan secara manual akan sangat melelahkan. Maka, logika perulangan adalah solusi untuk menyelesaikan permasalahan tersebut, bagian yang perlu di lakukan untuk melakukan logika perulangan adalah :

- Kondisi yang harus terpenuhi supaya proses perulangan bisa berjalan.
- Instruksi yang harus dilakukan secara berulang.
- Sebuah variabel yang menghitung posisi perulangan saat itu.

## Gerbang Logika

Gerbang Logika (Logic Gate) : Rangkaian sirkuit digital yang berguna untuk memproses logika boolean (logika yang menghasilkan output benar atau salah).

#### Gerbang Logika AND

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Benar      |
| Salah     | Benar     | Salah      |
| Benar     | Salah     | Salah      |
| Salah     | Salah     | Salah      |

_Notes : Apabila salah satu input salah sudah dipastikan output yang dihasilkan adalah salah_

#### Gerbang Logika OR

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Benar      |
| Salah     | Benar     | Benar      |
| Benar     | Salah     | Benar      |
| Salah     | Salah     | Salah      |

_Notes : Apabila salah satu input benar sudah dipastikan output yang dihasilkan adalah benar_

#### Gerbang Logika NOT

| A (Input) | X (Output) |
| --------- | ---------- |
| Benar     | Salah      |
| Salah     | Benar      |

_Notes : Gerbang logika NOT akan menghasilkan keluaran yang berlawanan dari input_

#### Gerbang Logika NAND (NOT AND)

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Salah      |
| Salah     | Benar     | Benar      |
| Benar     | Salah     | Benar      |
| Salah     | Salah     | Benar      |

_Notes : berlawanan dengan gerbang logika AND_

#### Gerbang Logika NOR (NOT OR)

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Salah      |
| Salah     | Benar     | Salah      |
| Benar     | Salah     | Salah      |
| Salah     | Salah     | Benar      |

_Notes : Berlawanan dengan gerbang logika OR_

#### Gerbang Logika XOR (Exclusive OR)

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Salah      |
| Salah     | Benar     | Benar      |
| Benar     | Salah     | Benar      |
| Salah     | Salah     | Salah      |

_Notes : Nilai input yang sama akan menghasilkan output yang salah_

#### Gerbang Logika XNOR (Exclusive NOR)

| A (Input) | B (Input) | X (Output) |
| --------- | --------- | ---------- |
| Benar     | Benar     | Benar      |
| Salah     | Benar     | Salah      |
| Benar     | Salah     | Salah      |
| Salah     | Salah     | Benar      |

_Notes : Nilai input yang beda akan menghasilkan output yang salah_

## Pengenalan Computational Thinking

Computational thinking sebagai proses berpikir dalam perumusan masalah dan beserta solusinya. Computational thinking bukanlah sebuah istilah tunggal karena di dalamnya terdapat beberapa elemen penting. Berikut 5 Elemen computational thinking :

- Memecah permasalahan yang besar menjadi bagian kecil (decomposition).
- Pelajari pola dari setiap permasalahan (pattern recognition).
- Mengabstraksikan suatu permasalahan (abstraction).
- Susun langkah menggunakan algoritma (algorithm).
- Mengevaluasi solusi yang didapatkan (evaluation).

#### Decomposition

Decomposition : Memecah permasalahan menjadi bagian-bagian kecil.

Contoh sederhana dari pembuatan nasi goreng, hal tersebut tidak bisa langsung dikerjakan. Di dalamnya harus kita pecah terlebih dahulu supaya mudah dikerjakan. Berikut bagian pembuatan nasi goreng :

- Apa saja alat yang dibutuhkan?
- Apa saja bahan-bahannya?
- Berapa lama waktu yang dibutuhkan?
- Bagaimana cara memasaknya?
- Bagaimana cara penyajiannya?

Dengan adanya tugas kecil diatas kita bisa mempersiapkan terlebih dahhulu seperti kompor, penggorengan, dan spatula Kemudian beralih ke bahan lainnya. Karena hal tersebut kita mudah mengerjakannya.

#### Pattern Recognition

Pattern Recognition : Teknik pemecahan masalah dengan melihat perbedaan atau persamaan pola dari berbagai permasalahan. Sehingga kita dapat memprediksi atau memproyeksikan solusi apa yang harus dilakukan.

Contoh sederhana, setiap jenis kucingnya dengan cepat dan tepat. Bayangkan ketika kita tidak mengetahui pola atau perbedaan dan persamaan dari ketiga jenis kucing tadi. Pasti waktu yang dibutuhkan akan semakin lama karena harus melihat kembali jenis kucing yang sedang dibuat satu per satu. Atau mungkin semisal belum mengetahui bentuk kucing sama sekali, mungkin saja digambarkan tanpa ekor atau memiliki dua kaki.

Jika tadi kita ibaratkan dengan tiga jenis kucing, maka bagaimana jika Anda mendapat tugas menggambar kucing dan singa? Tekniknya sama yaitu pelajari terlebih dahulu pola di antara keduanya, maka Anda akan lebih mudah dan cepat untuk menggambarkannya.

#### Abstraction

Abstraksi : bagian ketiga dari computational thinking yang identik dengan penyaringan dan pengumpulan data yang bersifat umum. Selain itu, abstraksi juga akan mengesampingkan detail data yang bersifat khusus atau yang tidak kita perlukan untuk lebih berkonsentrasi terhadap apa yang akan dilakukan.

Masih ingat ilustrasi menggambar kucing? Dalam proses abstraksi ini kita mulai dengan mencatat karakteristik yang dimiliki kucing secara umum dan khusus. Hasil pencatatannya sebagai berikut:

Karakteristik umum: Memiliki kaki, bulu, ekor, mata, bisa mengeong, makan ikan.
Karakteristik khusus: Memiliki kaki pendek, ekor panjang, mata biru, mengeong dengan keras, makan ikan asin.
Untuk menggambar kucing secara umum, kita memang perlu mengetahui kalau kucing pasti memiliki kaki, ekor, bulu, dan mata karena semua kucing seperti itu. Tetapi kita tidak perlu tahu apa warna bulu atau matanya, ekornya panjang atau pendek, dan seterusnya.

#### Algorithm

Algoritm : Proses yang dimulai dari memecah masalah menjadi bagian kecil hingga abstraksi dan mengurutkannya menjadi urutan yang tepat sesuai jenis permasalahan.

Contoh sederhana, Ibaratkan proses penyusunan algoritma ini dengan alur kegiatan yang harus dilakukan untuk berangkat ke sekolah. Mulai dari bangun tidur, mandi, menggosok gigi, sarapan, hingga tiba di sekolah. Setiap kegiatan juga memiliki detailnya sendiri-sendiri, misal mandi pukul 6, sarapan nasi goreng, pergi ke sekolah naik sepeda, dll. Dari rangkaian kegiatan tersebut secara tidak langsung Anda telah menerapkan algoritma yang terstruktur setiap hari ketika berangkat ke sekolah.

#### Evaluation

Proses terakhir yang dapat kita lakukan adalah melakukan evaluasi terhadap solusi yang telah kita dapatkan. Proses ini perlu dilakukan sebelum melangkah ke permasalahan atau tugas yang baru.
