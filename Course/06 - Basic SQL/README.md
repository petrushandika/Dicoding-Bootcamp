# Pengenalan Data dan Basis Data

## Definisi Data

**Menurut Kamus Besar Bahasa Indonesia (KBBI):** Data adalah keterangan yang benar dan nyata.

**Menurut Kamus Cambridge:** Data adalah informasi, terutama fakta atau angka, yang dikumpulkan untuk diperiksa, dipertimbangkan, dan digunakan dalam pengambilan keputusan, atau informasi dalam bentuk elektronik yang dapat disimpan dan digunakan oleh komputer.

**Menurut Tata Sutabri (Konsep Sistem Informasi):** Data adalah kenyataan yang menggambarkan suatu kejadian dalam bentuk mentah yang memerlukan pengolahan lebih lanjut untuk menjadi informasi yang bermakna.

## Jenis Data Berdasarkan Sifatnya

### Data Kualitatif

Menurut Sugiyono (2014), data kualitatif berbentuk kata, skema, atau gambar yang diperoleh dari metode penelitian yang berlandaskan filsafat.

### Data Kuantitatif

Data kuantitatif dinyatakan dalam bentuk angka. Data ini didapatkan melalui pengukuran atau observasi yang melibatkan instrumen untuk mengumpulkan sejumlah besar data.

## Jenis-Jenis Data Berdasarkan Struktur

### Data Terstruktur

Data yang disusun dengan rapi dalam format tertentu, seperti tabel atau spreadsheet.

### Data Tidak Terstruktur

Data yang tidak memiliki format tertentu, seperti teks bebas, gambar, atau video.

### Data Semi Terstruktur

Data dengan format yang tidak kaku tetapi memiliki beberapa elemen terorganisir, seperti file XML atau JSON.

## Jenis Data Berdasarkan Bentuk

### Data Numerik

Data berupa angka hasil pengukuran, seperti tinggi badan, berat badan, atau tekanan darah.

### Data Kategorikal

Data yang dapat dikelompokkan berdasarkan karakteristik tertentu, seperti jenis kelamin atau status pernikahan.

## Tipe-Tipe Data

- **Integer:** Tipe data bilangan bulat yang menyimpan angka tanpa komponen pecahan.
- **Character:** Tipe data yang menyimpan satu huruf, angka, tanda baca, simbol, atau spasi.
- **Boolean:** Tipe data yang menyimpan nilai benar atau salah.
- **Array:** Tipe data yang menyimpan koleksi elemen dalam urutan tertentu.
- **String:** Tipe data teks yang dapat berisi huruf, angka, atau simbol.
- **Float:** Tipe data numerik yang menyimpan angka dengan komponen pecahan.

## Dataset dan Basis Data

| Kriteria     | Dataset                                    | Basis Data                                                             |
| ------------ | ------------------------------------------ | ---------------------------------------------------------------------- |
| Definisi     | Kumpulan data dalam format tertentu        | Kumpulan data yang terorganisir untuk memudahkan akses dan pengambilan |
| Contoh Tools | Google Spreadsheet, Excel, Public Datasets | BigQuery, MySQL, DB Browser SQL                                        |
| Fungsi       | Bagian dari basis data atau sumber lainnya | Menyimpan berbagai tipe data untuk aplikasi yang berbeda               |

## Basis Data Relasional

Basis data relasional menyusun informasi dalam tabel dengan baris dan kolom yang memiliki hubungan tertentu.

### Istilah Penting dalam Basis Data Relasional

- **Relasi:** Tabel yang terdiri dari kolom dan baris.
- **Derajat:** Jumlah atribut (kolom) dalam sebuah relasi.
- **Tupel:** Baris dalam sebuah relasi.
- **Kardinalitas:** Jumlah tupel dalam sebuah relasi.

### Aljabar Relasional

Operasi dasar dalam aljabar relasional:

- **Selection:** Memilih baris tertentu dari relasi.
- **Projection:** Memilih kolom tertentu dari relasi.
- **Cartesian Product:** Menggabungkan dua relasi.
- **Union:** Menggabungkan dua relasi dengan menghapus duplikat.
- **Set-Difference:** Mengambil elemen yang tidak ada di relasi lain.
- **Rename:** Mengubah nama atribut.

Operasi lanjutan:

- **Intersection:** Mengambil elemen yang ada di kedua relasi.
- **Theta Join:** Menggabungkan relasi berdasarkan kondisi tertentu.
- **Natural Join:** Menggabungkan relasi dengan atribut yang sama.
- **Outer Join:** Menggabungkan relasi dengan memasukkan elemen yang tidak memiliki pasangan.
- **Division:** Membagi relasi berdasarkan atribut tertentu.

## Entity Relationship Diagram (ERD)

ERD adalah teknik untuk merancang basis data dengan tiga komponen utama:

- **Entity:** Objek nyata atau konsep yang memiliki data tersendiri.
- **Atribut:** Karakteristik atau properti dari sebuah entitas.
- **Relasi:** Hubungan antara dua atau lebih entitas.

# Database Management System (DBMS)

## Apa itu DBMS?

Database Management System (DBMS) adalah perangkat lunak yang digunakan untuk mengelola basis data. DBMS berfungsi sebagai perantara antara pengguna, aplikasi, dan basis data untuk memastikan data dapat diakses, dikelola, dan dimanipulasi dengan mudah dan efisien.

---

## Jenis-Jenis DBMS

### 1. Hierarchical DBMS

DBMS ini menyimpan data dalam struktur hierarki yang menyerupai hubungan **parent-child**. Setiap parent dapat memiliki banyak child, tetapi setiap child hanya boleh memiliki satu parent.

### 2. Network DBMS

Memungkinkan hubungan **many-to-many** antar data. Akses data dapat dilakukan melalui berbagai jalur, membuat sistem ini fleksibel untuk data yang memiliki banyak koneksi.

### 3. Relational DBMS (RDBMS)

Mengorganisir data dalam bentuk tabel dua dimensi dengan baris dan kolom. Setiap tabel memiliki **kunci unik** untuk mengidentifikasi data secara spesifik, dan data dimanipulasi menggunakan bahasa SQL.

### 4. Object-oriented DBMS

Menyimpan data dalam bentuk objek, diatur dalam struktur yang disebut **kelas**. Model ini memungkinkan penyimpanan data kompleks beserta metode yang dapat digunakan untuk memanipulasi data tersebut.

---

## Fungsi-Fungsi DBMS

### 1. Menjaga Integritas Data

Mengurangi redundansi dan menjaga konsistensi data agar selalu sesuai dengan aslinya.

### 2. Penyimpanan Data

Menyediakan sistem penyimpanan yang mendukung berbagai format data, termasuk gambar dan video.

### 3. Kamus Data

Mengelola elemen-elemen basis data dan hubungannya menggunakan SQL untuk memudahkan akses dan pencarian data.

### 4. Transformasi dan Presentasi Data

Mengubah data yang dimasukkan ke dalam struktur yang sesuai untuk disimpan dan diproses.

### 5. Keamanan Data

Memberikan hak akses yang tepat kepada pengguna dan mengatur tindakan yang dapat dilakukan pada basis data.

### 6. Akses Multi-Pengguna

Memungkinkan banyak pengguna untuk mengakses basis data secara bersamaan dengan efisiensi yang tinggi.

### 7. Pencadangan dan Pemulihan Data

Menyediakan prosedur backup dan recovery untuk mengantisipasi kehilangan data akibat kerusakan atau bencana.

### 8. Akses Bahasa dan Pemrograman

Menyediakan dukungan bahasa SQL, termasuk Data Manipulation Language (DML) dan Data Definition Language (DDL).

### 9. Antarmuka Komunikasi

Menyediakan interface yang memfasilitasi komunikasi antara basis data dan aplikasi lain, seperti browser.

### 10. Pengelolaan Transaksi

Menangani serangkaian tindakan yang diambil oleh pengguna atau aplikasi yang mengakses atau memodifikasi basis data.

---

## Peran DBMS di Industri

| Industri                    | Keterangan                                                                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Sistem Rekam Medis**      | Mengintegrasikan data pasien dengan sistem nasional, seperti status vaksinasi yang terhubung langsung ke database Kementerian Kesehatan. |
| **Platform Travel**         | Membantu mengelola data reservasi hotel, transportasi, dan data pribadi pengguna secara otomatis agar tidak tertukar.                    |
| **Perusahaan Transportasi** | Menyediakan informasi driver dan penumpang secara real-time, seperti nama, nomor telepon, dan detail kendaraan.                          |
| **Marketplace**             | Mengatur stok barang secara otomatis, mengurangi jumlah inventaris saat terjadi transaksi pembelian.                                     |
| **Perpustakaan Nasional**   | Aplikasi iPusnas menggunakan DBMS untuk mengelola daftar buku dan data peminjam dari seluruh Indonesia.                                  |

# **Pengenalan Structured Query Language (SQL)**

Structured Query Language (SQL) adalah bahasa standar yang digunakan untuk mengelola, mengakses, dan memanipulasi basis data relasional. SQL memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data dengan efisien.

---

## **1. Data Definition Language (DDL)**

DDL adalah sub-perintah SQL yang digunakan untuk membangun kerangka dasar dari sebuah basis data. Dengan DDL, Anda dapat membuat, menghapus, dan memodifikasi struktur tabel.

### **Perintah Utama DDL**

| **Statement**  | **Query** | **Deskripsi** |
| -------------- | --------- | ------------- |
| `CREATE TABLE` |

```sql
CREATE TABLE nama_tabel (
  nama_kolom1,
  nama_kolom2
);
```

| Membuat tabel baru dengan kolom yang ditentukan. |
| `DROP TABLE` |

```sql
DROP TABLE nama_tabel;
```

| Menghapus tabel dari basis data. |
| `VIEW` |

```sql
CREATE VIEW nama_view AS
SELECT nama_kolom1, nama_kolom2
FROM nama_tabel
WHERE kondisi;
```

| Membuat tampilan (view) dari hasil query tertentu. |

---

## **2. Data Manipulation Language (DML)**

DML digunakan untuk memanipulasi data dalam tabel yang sudah ada. Sub-perintah ini memungkinkan Anda untuk menambah, membaca, memperbarui, dan menghapus data.

### **Perintah Utama DML**

| **Statement** | **Query** | **Deskripsi** |
| ------------- | --------- | ------------- |
| `SELECT`      |

```sql
SELECT * FROM nama_tabel;
```

| Mengambil data dari tabel. |
| `INSERT` |

```sql
INSERT INTO nama_tabel (kolom1, kolom2)
VALUES (nilai1, nilai2);
```

| Menambahkan data baru ke tabel. |
| `DELETE` |

```sql
DELETE FROM nama_tabel WHERE kondisi;
```

| Menghapus data dari tabel. |
| `UPDATE` |

```sql
UPDATE nama_tabel
SET nama_kolom = nilai_baru
WHERE kondisi;
```

| Memperbarui data di tabel. |

---

## **3. Constraints**

Constraint adalah aturan yang diterapkan pada kolom tabel untuk memastikan validitas data.

### **Jenis-jenis Constraint**

| **Constraint** | **Deskripsi**                                            | **Contoh**                                           |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| `NOT NULL`     | Nilai kolom tidak boleh kosong.                          | Nilai kosong: `NULL`, Nilai terisi: `0` (bukan NULL) |
| `UNIQUE`       | Setiap nilai di kolom harus unik.                        | Contoh nilai: `1A`, `2B`, `3C`                       |
| `PRIMARY KEY`  | Nilai unik yang berfungsi sebagai identitas utama.       | Contoh: Nomor Induk, Email                           |
| `INDEX`        | Meningkatkan kecepatan pencarian data di kolom tertentu. |

```sql
CREATE INDEX nama_index
ON nama_tabel (nama_kolom);
```

|

---

## **4. Pengenalan Diagram**

Diagram ini membantu memvisualisasikan struktur basis data dan hubungan antar tabel.

| **Jenis Tabel**                     | **Definisi**                                                         |
| ----------------------------------- | -------------------------------------------------------------------- |
| **Entity**                          | Tabel tunggal yang berdiri sendiri.                                  |
| **Entity Relational Diagram (ERD)** | Diagram yang menunjukkan hubungan antar tabel yang saling terhubung. |

---

### **Contoh ERD Sederhana**

```
[Customer] --------< [Order]
```

- **Customer** memiliki banyak **Order**.
- Setiap **Order** berhubungan dengan satu **Customer** saja.

Berikut adalah README yang rapi tanpa menggunakan emoji:

# **Rangkuman Basic Query SQL**

## **1. Perintah Dasar SQL**

### **INSERT**

Digunakan untuk menambahkan data baru ke dalam tabel.

**Sintaks:**

```sql
INSERT INTO nama_tabel (nama_kolom1, nama_kolom2, ...)
VALUES ('value1', 'value2', ...);
```

**Contoh:**

```sql
INSERT INTO users (name, age)
VALUES ('John Doe', 30);
```

**Deskripsi:** Menambahkan data pada tabel yang telah dibuat sebelumnya.

---

### **SELECT & FROM**

Digunakan untuk mengambil data dari tabel.

**Sintaks:**

```sql
SELECT * FROM nama_tabel;
SELECT nama_kolom1, nama_kolom2 FROM nama_tabel;
```

**Contoh:**

```sql
SELECT * FROM users;
SELECT name, age FROM users;
```

**Deskripsi:** Memilih seluruh data (`*`) atau sebagian kolom dari tabel.

---

### **WHERE**

Digunakan untuk memfilter data berdasarkan kondisi tertentu.

**Sintaks:**

```sql
SELECT * FROM nama_tabel WHERE nama_kolom = 'value';
```

**Contoh:**

```sql
SELECT * FROM users WHERE age = 30;
```

**Deskripsi:** Menampilkan data sesuai dengan kondisi yang ditentukan.

---

### **ALIAS**

Digunakan untuk memberi nama sementara pada kolom atau tabel.

**Sintaks:**

```sql
SELECT nama_kolom AS alias_kolom FROM nama_tabel;
SELECT * FROM nama_tabel AS alias_tabel;
```

**Contoh:**

```sql
SELECT name AS 'Nama Pengguna' FROM users;
```

**Deskripsi:** Mengganti nama kolom atau tabel secara sementara untuk tampilan yang lebih jelas.

---

### **UPDATE**

Digunakan untuk memperbarui data yang sudah ada di tabel.

**Sintaks:**

```sql
UPDATE nama_tabel
SET nama_kolom = new_value
WHERE nama_kolom = some_value;
```

**Contoh:**

```sql
UPDATE users
SET age = 31
WHERE name = 'John Doe';
```

**Deskripsi:** Mengubah nilai pada baris yang sesuai dengan kondisi tertentu.

---

### **ORDER BY**

Digunakan untuk mengurutkan data berdasarkan kolom tertentu.

**Sintaks:**

```sql
SELECT * FROM nama_tabel ORDER BY nama_kolom ASC;
SELECT * FROM nama_tabel ORDER BY nama_kolom DESC;
```

**Contoh:**

```sql
SELECT * FROM users ORDER BY age ASC;
SELECT * FROM users ORDER BY name DESC;
```

**Deskripsi:**

- `ASC`: Mengurutkan dari nilai terkecil ke terbesar.
- `DESC`: Mengurutkan dari nilai terbesar ke terkecil.

---

### **LIMIT**

Digunakan untuk membatasi jumlah data yang ditampilkan.

**Sintaks:**

```sql
SELECT * FROM nama_tabel LIMIT jumlah_baris;
```

**Contoh:**

```sql
SELECT * FROM users LIMIT 5;
```

**Deskripsi:** Membatasi jumlah baris hasil query.

---

### **OFFSET**

Digunakan untuk melewati sejumlah baris data sebelum mulai menampilkan hasil.

**Sintaks:**

```sql
SELECT * FROM nama_tabel LIMIT jumlah_baris OFFSET jumlah_yang_dilompati;
```

**Contoh:**

```sql
SELECT * FROM users LIMIT 5 OFFSET 10;
```

**Deskripsi:** Menentukan jumlah baris yang akan dilewati sebelum menampilkan hasil.

---

### **DELETE**

Digunakan untuk menghapus data dari tabel.

**Sintaks:**

```sql
DELETE FROM nama_tabel WHERE nama_kolom = 'value';
```

**Contoh:**

```sql
DELETE FROM users WHERE name = 'John Doe';
```

**Deskripsi:** Menghapus satu atau beberapa baris sesuai kondisi yang ditetapkan.

---

## **Catatan**

- Gunakan perintah SQL dengan hati-hati, terutama `DELETE` dan `UPDATE`, karena dapat memengaruhi banyak data sekaligus.
- Selalu lakukan backup data sebelum melakukan perubahan besar pada database.
