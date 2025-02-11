# Mengerti Konsep Dasar Pemrograman

Sintaksis merupakan aturan-aturan yang ada di dalam bahasa pemrograman. Sintaksis dasar:

## Case Sensitivy

Sebuah kode akan berpengaruh kepada sebuah penulisan, misalnya kita memiliki sebuah variabel bernama `Kucing` dan variabel `kucing`, dalam kasus tersebut memiliki entitas yang berbeda. apabila ada salah pada penulisan akan menghasilkan error kecuali kita menggunakan bahasa pemograman case non-sensitivity tidak menghasilkan error pada penamaan variabel berbeda, contohnya seperti Pascal dan Fortran.

## Penulisan Statement

Statement merupakan kumpulan intruksi tunggal yang berkaitan satu sama lain, contohnya seperti buku resep masakan yang berisikan intruksi pembuatan makanan tersebut. Dan contoh dalam kehidupan sehari-hari, dimana kita akan bertanya alamat rumah yang ingin kita kunjungi dan harus memiliki arahan detail alamat tersebut agar sampai pada tujuan.

## Whitespace

Saat kita mengetik kode biasanya berupa spasi atau tab untuk identasi. Selain itu juga menggunakan enter dan ada baris kosong untuk membedakan setiap kode yang ada. Kebanyakan bahasa pemrograman tidak memerlukan whitespace, kecuali pada bahasa pemrograman python

```python
if currentScore > highScore:
    highScore = currentScore
    print("Nice, you got high score")
print("Thanks for playing")
```

```python
if currentScore > highScore:
    highScore = currentScore
    print("Nice, you got high score")
    print("Thanks for playing")
```

pentingnya identitas pada _python_ untuk menentukan statement yang ada, maka sintaks diatas jelas berbeda, dikarenakan ketika posisinya sama maka akan dianggap statement yang sama.

`Kode pertama:` "Thanks for playing" selalu dicetak, terlepas dari apakah currentScore > highScore atau tidak.

`Kode kedua:` "Thanks for playing" hanya dicetak jika currentScore > highScore karena berada di dalam blok if.

## Keyword

Keyword merupakan kata kunci yang telah disediakan oleh sebuah bahasa pemrograman. Hal yang harus diketahui keyword tidak dapat berdiri sendiri tanpa sebuah variabel

## Penulisan Pseudocode

Pseudocode merupakan istilah untuk menuliskan sebuah sintaks, statement, algoritma, dan lainnya dalam bahasa yang bisa dipahami oleh manusia.

## Variabel

Dalam sebuah program akan menyimpan sebuah penamaan, misalnya variabel Username untuk menampung nama pengguna, variabel _playerScore_ menampung skor permain, dan seterusnya.

#### Deklarasi Variabel

Bahasa pemrograman harus mendeklarasikan variabel terlebih dahulu, Deklarasi yang dimaksud yaitu membuat statement pada source code untuk mengatakan bahwa _"Saya ingin membuat variabel baru"_

## Operator

Operator merupakan sebuah cara untuk menunjukkan tugas yang spesifik atau satu operasi saja, seperti penjumlahan, pengurangan, perkalian, dan lainnya.

Operator membutuhkan dua nilai atau kita sebut _operand_ yang berada di sebelah kanan dan kiri dari operator

#### Assignment Operator

- Operator ini disimbolkan dengan sama dengan ("=")

```python
score = 0 // variabel score saat ini bernilai 0
```

- Operator juga bisa digabungkan dengan ekspresi matematika misalnya penjumlahan, pengurangan, dan lainnya.

```python
score = 100 + 50 // variabel score saat ini bernilai 150
```

## Tipe Data

Kita belajar dengan data sensus penduduk, dimana data dimulai dari nama, tempat tanggal lahir, jenis kelamin, pekerjaan, dan sebagainya. Kemudian isi dari variabel, misal Petrus merupakan variabel nama, variabel umur memiliki umur 23, dan lain sebagainya.

### Macam-Macam Tipe Data

#### Numerik

- Variabel yang erat hubungannya dengan angka
- Terdapat dua jenis angka:
  - Nilai angka yang bulat, seperti 3, 5, 7, 12, 20, dll. _Int (integer)_
  - Nilai angka yang desimal, seperti 4,5; 5,4; 10,3; 15,6; dsb _Float_

#### Boolean

- Tipe data paling sederhana, hanya memiliki dua nilai yaitu _true_ atau _false_

```swift
var currentPlaying : Bool = true
```

```javascript
var isPlaying = true;
```

```java
boolean isGameOver = false;
```

```python
isLoggedIn = true
```

#### Teks atau Karakter

- Untuk membuat satu karakter, kalimat, maupun paragraf
- Terdapat dua tipe data:
  - Char : Satu karakter saja
  - String : Kumpulan karakter

#### Char dan String

```java
// Satu karakter
char singleCharacter = 'B';

// Banyak karakter
string message = "Hello World";
```

## Logika Perbandingan

### Logika dan Algoritma

- Logika dan algoritma dalam pemrograman adalah dua hal yang berbeda, namun keduanya tidak terpisahkan dan saling melengkapi.
- Logika merupakan pemikiran yang digunakan untuk mencari solusi terhadap sebuah permasalahan dalam program.
- Algoritma meruapakan alur yang berurutan ketika menyelesaikan permasalah tersebut.

### Logika Perbandingan Sederhana

- Digunakan untuk membandingkan dua hal yang mempunyai nilai.
- Biasanya digunakan untuk menentukan suatu kondisi pada percabangan.

```c
if score > 500 {
    print("Congratulations")
}
```

### Mengecek Kondisi pada IF

- Misalnya ada kondisi sebagai berikut:
  - Jika score sama dengan 0
  - Jika nama pengguna sama dengan Budi
- Cara menuliskan kondisi tersebut :

```c
if score = 0
if username = "Budi"

if username != "Joko"
```

### Blok Kode

```c
if score > 500 { --> Awal blok kode
    print("Congratulations")
} --> Akhir blok kode
```

- Menggunakan simbol kurung kurawal. {...}
- Kode di dalam blok akan dijalankan ketika kondisi IF sudah terpenuhi.
- Setiap ada kurung kurawal pembuka harus diakhiri dengan kurung kurawal penutup.

### If Else

```c
if score > 500 {
    // blok kode ini dijalankan ketika kondisi score > 500 terpenuhi (true)
    print("Congratulations")
} else {
    // blok kode ini dijalankan ketika kondisi score > 500 tidak terpenuhi (false)
    print("Try again")
}
```

- Jika kondisi skor lebih dari 500 maka kondisinya adalah true lantas mengimplementasikan statement Congratulations tanpa menjalankan kondisi yang ada di bawahnya.
- Namun, jika kondisi tidak terpenuhi, ia akan beralih menjalankan kondisi else yang diartikan "selain itu".

## Logika Perbandingan Kompleks

### AND & OR

```c
if ((jumlah pembelian > 20000) && (jenisMember == "Premium")) {
    print("Anda mendapatkan diskon 25%")
}
```

```c
if ((jumlah pembelian > 20000) || (jenisMember == "Premium")) {
    print("Anda mendapatkan diskon 25%")
}
```

## Logika Perulangan

### While

- Jenis perulangan yang statement di dalamnya akan dijalankan terus menerus selama kondisinya memenuhi syarat atau true

```c
// Jika kondisi bernilai true atau memenuhi syarat
while (myNumber < 500) { --> Statement akan terus dijalankan
    // statement pertama
    // statement berikutnya
    // statement lagi
    ...
    dst.
}
```

```c
// Jika kondisi bernilai false atau tidak memenuhi syarat
while (myNumber < 500) { --> Statement dalam while dilewati dan tidak dijalankan
    // statement pertama
    // statement berikutnya
    // statement lagi
    ...
    dst.
}
```

#### Contoh Kode While

```c
int counter = 0
while (counter < 5) {
    print ("nilai counter : ", counter)
    counter = counter + 1
}
print("Sudah di luar kondisi while.")

/*
Output
nilai counter: 0
nilai counter: 1
nilai counter: 2
nilai counter: 3
nilai counter: 4
Sudah di luar kondisi while
*/
```

### For

- Nilai perulangan, jumlah perulangan, dan akhiran yang biasanya berupa statement sudah jelas.

```c
// Gaya penulisan bahasa C
for (inisialisasi; kondisi; statement kondisi perulangan) {
    ...
    ...
    ...
}
```

#### Contoh Kode For

```c
for (int counter = 0; counter < 5; counter++) {
    print("nilai counter" + counter)
}
print("Sudah di luar kondisi for.")

/*
Output
nilai counter: 0
nilai counter: 1
nilai counter: 2
nilai counter: 3
nilai counter: 4
Sudah di luar kondisi for
*/
```

### Menggabungkan IF dengan salah satu perulangan

ondisi yang ingin kita buat adalah kita membuat program menghitung counter dengan menggunakan while. Jika nilai counter yang awalnya bernilai 0 saat proses while kurang dari sama dengan 10, maka akan mencetak nilai tersebut di layar. Tetapi yang tercetak hanya nilai genap saja.

Pertama kita pecah terlebih dahulu kasus di atas menjadi bagian-bagian kecil yaitu.

- Variabel counter memiliki nilai awal 0
- Kondisi while berjalan selama nilai counter kurang dari sama dengan 10
- Ketika berada dalam while juga dilakukan pengecekan nilai counter, jika habis dibagi 2 maka nilai counter tersebut akan tercetak. Sehingga jika tidak habis dibagi 2, maka nilai counter tidak ditampilkan.

#### Contoh Kode While & If

```c
int counter = 0
while (counter <= 10){
  counter = counter + 1
  if (counter % 2 == 0) {
     print("nilai counter dengan bilangan genap: ", counter)
  }
}
print("Sudah di luar kondisi while.")

/*
Output
nilai counter dengan bilangan genap:  2
nilai counter dengan bilangan genap:  4
nilai counter dengan bilangan genap:  6
nilai counter dengan bilangan genap:  8
nilai counter dengan bilangan genap:  10
Sudah di luar kondisi while.
*/
```

#### Contoh Kode For & If

```c
for (int counter = 0; counter <= 10; counter++){
  If (counter % 2 == 0) {
      print(“nilai counter dengan bilangan genap:” + counter)
  }
}
print("Sudah di luar kondisi for.")

/*
Output
nilai counter dengan bilangan genap:  0
nilai counter dengan bilangan genap:  2
nilai counter dengan bilangan genap:  4
nilai counter dengan bilangan genap:  6
nilai counter dengan bilangan genap:  8
nilai counter dengan bilangan genap:  10
Sudah di luar kondisi for.
*/
```
