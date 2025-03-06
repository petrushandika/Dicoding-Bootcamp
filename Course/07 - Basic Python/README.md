# Berkenalan dengan Python

## Pengenalan

Python adalah bahasa pemrograman serbaguna yang pertama kali dirilis pada tahun 1991 oleh Guido van Rossum. Bahasa ini dikenal dengan sintaksis yang mudah dibaca, kemampuan exception handling, dan dukungan komunitas yang luas. Salah satu ciri khas Python adalah tidak mewajibkan penggunaan titik koma di akhir baris kode.

## Persiapan Lingkungan

### Instalasi Python

Untuk menggunakan Python secara lokal, unduh instalasi terbaru melalui situs resmi:
[Unduh Python](https://www.python.org/downloads/)

### IDE yang Direkomendasikan

Berikut adalah beberapa IDE populer yang sering digunakan untuk pengembangan aplikasi Python:

- **Visual Studio Code**: Mendukung banyak ekstensi dan plugin.
- **PyCharm**: Dirancang khusus untuk pengembangan Python.
- **Jupyter Notebook**: Berbasis web dan cocok untuk analisis data.
- **Google Colaboratory**: Alternatif berbasis web tanpa instalasi, cocok untuk proyek kolaborasi.

## Menjalankan Kode Program

Python dapat dijalankan dalam beberapa mode:

- **Kode Interaktif**: Melalui terminal atau command prompt untuk eksekusi langsung.
- **Script**: File dengan ekstensi `.py` yang dieksekusi secara langsung.
- **Notebook**: Menggunakan Jupyter Notebook atau Google Colaboratory untuk kode interaktif.

## Variabel dan Assignment

Variabel digunakan untuk menyimpan nilai dengan format:

```python
nama = "Dicoding"
umur = 25
```

Proses penetapan nilai pada variabel disebut **assignment**.

## Input/Output

Python mendukung input dan output melalui fungsi berikut:

- **Input**: `input()` untuk menerima masukan pengguna.
- **Output**: `print()` untuk menampilkan keluaran.

Contoh:

```python
nama = input("Masukkan nama: ")
print("Halo,", nama)
```

## Komentar

Komentar digunakan untuk memberikan penjelasan dalam kode tanpa memengaruhi eksekusi program.

- **Inline Comment**: Menggunakan tanda `#`.
- **Block Comment**: Menggunakan tiga single quote (`'''`) atau double quote (`"""`).

Contoh:

```python
# Ini adalah komentar satu baris
nama = "Dicoding"

"""
Ini adalah block comment
yang digunakan untuk memberikan penjelasan lebih panjang.
"""
print(nama)
```

# Rangkuman Berinteraksi dengan Data

### 1. **Abstraksi Data**

- Representasi data sesuai konteks masalah.
- Komputer hanya memahami data jika tipe datanya dideklarasikan.

### 2. **Deklarasi dan Inisialisasi**

- Deklarasi: Membuat variabel dengan tipe data.
- Inisialisasi: Memberikan nilai awal ke variabel.
- Contoh di Python:

```python
age = 17  # Inisialisasi langsung
print(type(age))  # Output: <class 'int'>
```

### 3. **Tipe Data Primitif**

- **Numbers:** `int`, `float`, `complex`
- **Boolean:** `True`, `False`
- **String:** Karakter berurutan diapit `' '` atau `" "`

### 4. **Tipe Data Collection**

- **List:** Data terurut, bisa diubah.
- **Tuple:** Data terurut, tidak bisa diubah.
- **Set:** Kumpulan unik, tidak terurut.
- **Dictionary:** Pasangan key-value, tidak terurut.

### 5. **Konversi Tipe Data**

- `int()`, `float()`, `str()`

### 6. **Transformasi String**

- **Huruf Besar/Kecil:** `upper()`, `lower()`
- **Pemotongan:** `strip()`, `lstrip()`, `rstrip()`
- **Pemisahan:** `split()`, `join()`
- **Penggantian:** `replace()`
- **Pengecekan:** `isalpha()`, `isdigit()`, `isspace()`

### 7. **String Literals & Raw String**

- Escape character seperti `\'`, `\"`, `\n`
- Raw string dengan prefix `r`:

```python
print(r'Hello\nWorld')
# Output: Hello\nWorld
```

### 8. **Operasi pada List, Set, dan String**

- `len()`: Menghitung elemen
- `min()`, `max()`: Nilai minimum dan maksimum
- `count()`: Menghitung kemunculan elemen
- `in`, `not in`: Pengecekan keanggotaan
- **Multiple Variable Assignment:**

```python
data = ['shirt', 'white', 'L']
apparel, color, size = data
```

- `sort()`: Mengurutkan elemen

# Ekspresi dalam Pemrograman Python

## Pengertian Ekspresi

Ekspresi pada pemrograman merupakan kombinasi dari satu atau lebih variabel, konstanta, operator, dan fungsi yang menghasilkan suatu nilai dalam tipe data tertentu.

## Jenis-Jenis Ekspresi

Ekspresi dapat dikategorikan berdasarkan dua aspek:

### Menurut Arity dari Operator

- **Biner:** Ekspresi dengan dua operan, seperti `x + y`, `x - y`, atau `x * y`.
- **Uner:** Ekspresi dengan satu operan, seperti `not x` atau `x += 1`.

### Menurut Tipe Data yang Dihasilkan

- **Ekspresi Aritmetika:** Menghasilkan nilai numerik, contohnya `2 + 2 = 4`.
- **Ekspresi Relasional:** Menghasilkan nilai boolean, contohnya `3 < 10 = True`.
- **Ekspresi Logika:** Menghasilkan nilai boolean, contohnya `True or False = True`.

## Jenis-Jenis Operator

### Operator Aritmetika

Digunakan untuk operasi matematika seperti penjumlahan, pengurangan, perkalian, dan sebagainya.
| Operator | Deskripsi | Contoh |
|----------|----------------|-------------|
| + | Penjumlahan | `x + y = 16` |
| - | Pengurangan | `x - y = 6` |
| _ | Perkalian | `x _ y = 55`|
| //       | Pembagian bulat |`x // y = 2`|
| /        | Pembagian riil  |`x / y = 2.2`|
| %        | Modulo        |`x % y = 1` |
| **       | Pangkat       |`x \*\* y = 161051` |

### Operator Relasional

Digunakan untuk membandingkan dua nilai dan menghasilkan boolean.
| Operator | Deskripsi | Contoh |
|----------|---------------------|-------------|
| == | Sama dengan | `x == y` menghasilkan `False` |
| != | Tidak sama dengan | `x != y` menghasilkan `True` |
| > | Lebih besar dari | `x > y` menghasilkan `False` |
| < | Kurang dari | `x < y` menghasilkan `True` |
| >= | Lebih besar atau sama dengan | `x >= y` menghasilkan `False` |
| <= | Kurang dari atau sama dengan | `x <= y` menghasilkan `True` |

### Operator Logika

Digunakan untuk operasi logika pada nilai boolean.
| Operator | Deskripsi | Contoh |
|----------|------------------------|--------------|
| and | True jika kedua operan True | `p and q = False` |
| or | True jika salah satu operan True | `p or q = True` |
| not | Membalikkan nilai operan | `not q = True` |

### Operator Assignment

Digunakan untuk menetapkan nilai pada variabel.
| Operator | Deskripsi | Contoh |
|----------|---------------------------|----------|
| += | Penjumlahan dan assignment | `x += y menghasilkan 16` |
| -= | Pengurangan dan assignment | `x -= y menghasilkan 6` |
| _= | Perkalian dan assignment | `x _= y menghasilkan 55`|
| /=       | Pembagian dan assignment  |`x /= y menghasilkan 2.2`|
| %=       | Modulo dan assignment     |`x %= y menghasilkan 1` |

# Aksi Sekuensial dalam Python

## Rangkuman Materi

### Pengenalan Aksi Sekuensial

Aksi sekuensial adalah serangkaian instruksi yang dijalankan oleh komputer sesuai dengan urutan penulisannya. Urutan instruksi sangat memengaruhi hasil eksekusi program, terutama pada program yang bergantung pada urutan eksekusi.

### Python Interpreter

Python menggunakan interpreter untuk mengeksekusi kode secara langsung baris per baris. Hal ini memungkinkan hasil eksekusi ditampilkan segera setelah setiap baris kode dijalankan. Mode interaktif Python adalah salah satu implementasi dari interpreter ini.

### Block Code

Program Python dibangun menggunakan blok kode yang terdiri dari satu atau lebih baris instruksi. Blok kode ini digunakan dalam berbagai struktur seperti modul, fungsi, dan kelas. Contoh blok kode sederhana adalah perulangan for:

```python
for i in range(10):
    print(i)
```

### Case-sensitive

Python bersifat case-sensitive, artinya huruf besar dan kecil dianggap berbeda. Contoh:

```python
teks = "Dicoding"
Teks = "Indonesia"

print(teks)  # Output: Dicoding
print(Teks)  # Output: Indonesia
```

### One-liner

Python mendukung penulisan kode dalam satu baris untuk beberapa operasi. Teknik ini membuat kode lebih ringkas dan mudah dibaca. Contoh penukaran dua variabel menggunakan one-liner:

```python
x, y = 1, 2
x, y = y, x
```

# Rangkuman Control Flow

Kita sudah berada di penghujung materi _Control Flow_. Sampai sejauh ini, Anda telah memiliki pemahaman mengenai berbagai jenis kontrol dalam pemrograman, seperti percabangan, perulangan, hingga penanganan kesalahan. Berikut adalah rangkuman keseluruhan materi.

### 1. Percabangan dan Ternary Operators

#### Percabangan

Percabangan digunakan untuk menjalankan kode berdasarkan kondisi tertentu dengan instruksi _Jika-maka_. Statement yang digunakan adalah:

- **If**: Mengevaluasi kondisi, jika bernilai `true`, maka blok kode akan dieksekusi.
- **Else**: Menjalankan blok kode jika kondisi _if_ bernilai `false`.
- **Elif**: Alternatif dari _if_ yang memungkinkan evaluasi kondisi tambahan.

Contoh:

```python
nilai = 75
if nilai >= 90:
    print("A")
elif nilai >= 75:
    print("B")
else:
    print("C")
```

#### Ternary Operators

Ternary operators adalah bentuk singkat dari percabangan if-else dalam satu baris.

Format:

```python
hasil = "Lulus" if nilai >= 75 else "Tidak Lulus"
```

### 2. Perulangan

Perulangan digunakan untuk menjalankan kode secara berulang berdasarkan kondisi tertentu.

#### For

Perulangan **for** digunakan untuk iterasi pada objek yang dapat diiterasi seperti list, tuple, atau string.

Contoh:

```python
angka = [1, 2, 3, 4, 5]
for n in angka:
    print(n)
```

#### While

Perulangan **while** berjalan selama kondisi bernilai `true`.

Contoh:

```python
counter = 1
while counter <= 5:
    print(counter)
    counter += 1
```

#### For Bersarang

Perulangan **for** bersarang digunakan untuk membuat perulangan di dalam perulangan lain.

Contoh:

```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

### 3. Kontrol Perulangan

- **Break**: Menghentikan perulangan secara paksa.
- **Continue**: Melewatkan iterasi saat ini dan melanjutkan iterasi berikutnya.
- **Else setelah For/While**: Dieksekusi saat perulangan selesai tanpa interupsi _break_.
- **Pass**: Placeholder tanpa aksi apa pun.

### 4. List Comprehension

List comprehension digunakan untuk membuat list baru berdasarkan list lain secara ringkas.

Contoh:

```python
angka = [1, 2, 3, 4, 5]
kuadrat = [n**2 for n in angka]
print(kuadrat)
```

### 5. Penanganan Kesalahan (_Error Handling_)

#### Kesalahan Sintaks

Kesalahan yang terjadi saat Python tidak dapat memahami perintah.

Contoh:

```python
if x = 5:
    print(x)  # SyntaxError
```

#### Pengecualian (_Exception_)

Kesalahan saat program berjalan, seperti pembagian dengan nol.

Contoh:

```python
try:
    hasil = 10 / 0
except ZeroDivisionError:
    print("Tidak bisa dibagi dengan nol")
```

# Array dan Pemrosesannya dalam Python

## Fundamental Array

Array adalah struktur data linear yang terdiri dari kumpulan elemen dengan tipe data yang sama dan diakses menggunakan indeks.

### Struktur Array

- **Indeks (Indices):** Posisi yang digunakan untuk mengakses elemen dalam array.
- **Indeks Pertama:** Dimulai dari 0.
- **Elemen:** Nilai yang berada pada indeks tertentu.
- **Panjang Array:** Jumlah elemen dalam array.

## Cara Menggunakan Array di Python

Python menyediakan dua cara untuk menggunakan array:

### 1. Menggunakan List (Cara Umum)

```python
x = [1, 2, 3, 4, 5]
print(x)
```

**Output:**

```
[1, 2, 3, 4, 5]
```

### 2. Menggunakan Library `array`

```python
import array

x = array.array("i", [1, 2, 3, 4, 5])
print(x)
print(type(x))
```

**Output:**

```
array('i', [1, 2, 3, 4, 5])
<class 'array.array'>
```

## Deklarasi Array

### 1. Mendefinisikan Isi Array

Jika sudah mengetahui nilai awal elemen:

```python
x = [10, 20, 30, 40, 50]
print(x)
```

### 2. Mendefinisikan Nilai Default

Jika nilai belum diketahui, gunakan nilai default:

```python
x = [0] * 5
print(x)
```

**Output:**

```
[0, 0, 0, 0, 0]
```

## Pemrosesan Sekuensial pada Array

Pemrosesan sekuensial adalah pemrosesan elemen array secara berurutan dari indeks terkecil hingga terbesar.

### Contoh Pemrosesan Sekuensial

1. Mengisi Array Secara Sekuensial:

```python
x = [i for i in range(1, 6)]
print(x)
```

2. Menghitung Rata-rata Elemen:

```python
x = [10, 20, 30, 40, 50]
average = sum(x) / len(x)
print(average)
```

3. Mencari Nilai Terbesar:

```python
x = [10, 20, 30, 40, 50]
max_value = max(x)
print(max_value)
```

4. Mencari Nilai Terkecil:

```python
x = [10, 20, 30, 40, 50]
min_value = min(x)
print(min_value)
```

5. Mencari Indeks Suatu Nilai:

```python
x = [10, 20, 30, 40, 50]
index = x.index(30)
print(index)
```

# Rangkuman Matriks dalam Python

## Fundamental Matriks

Matriks adalah himpunan elemen yang diatur dalam bentuk tabel dua dimensi dengan baris dan kolom. Dalam matematika, matriks digunakan untuk merepresentasikan data atau sistem persamaan linear.

### Contoh Matriks dalam Matematika

- **Matriks Pengukuran**: Matriks dengan elemen berupa bilangan real yang merepresentasikan hasil pengukuran pada suatu titik koordinat.
- **Matriks Satuan**: Matriks dengan elemen bernilai 0 dan 1, yang digunakan dalam operasi aljabar linier.

### Matriks dalam Python

Dalam pemrograman Python, matriks dapat diimplementasikan menggunakan:

- **Nested List (List di dalam List)**
- **Library NumPy**

Contoh deklarasi matriks menggunakan nested list:

```python
matriks = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]]

print(matriks)
```

Output:

```
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

## Implementasi Matriks pada Python

### Deklarasi Matriks

- **Deklarasi Sekaligus Inisialisasi Nilai**

```python
matriks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

- **Deklarasi dengan Nilai Default (List Comprehension)**

```python
baris, kolom = 3, 3
matriks = [[0 for _ in range(kolom)] for _ in range(baris)]
print(matriks)
```

### Akses Elemen Matriks

Mengakses elemen pada matriks menggunakan metode indexing.

```python
elemen = matriks[1][2]  # Baris ke-2, Kolom ke-3
print(elemen)
```

## Operasi Matriks pada Python

### Operasi 1 Matriks

- **Menghitung Total Semua Elemen Matriks**

```python
total = sum(sum(baris) for baris in matriks)
print(total)
```

- **Mengalikan Elemen Matriks dengan Konstanta**

```python
konstanta = 2
matriks_kali = [[elemen * konstanta for elemen in baris] for baris in matriks]
print(matriks_kali)
```

- **Transpose Matriks**

```python
transpose = [[row[i] for row in matriks] for i in range(len(matriks[0]))]
print(transpose)
```

### Operasi 2 Matriks

- **Penjumlahan Dua Matriks**

```python
matriks1 = [[1, 2], [3, 4]]
matriks2 = [[5, 6], [7, 8]]

hasil = [[matriks1[i][j] + matriks2[i][j] for j in range(len(matriks1[0]))] for i in range(len(matriks1))]
print(hasil)
```

- **Perkalian Dua Matriks**

```python
import numpy as np

matriks1 = np.array([[1, 2], [3, 4]])
matriks2 = np.array([[5, 6], [7, 8]])

hasil = np.dot(matriks1, matriks2)
print(hasil)
```

# Rangkuman Subprogram dalam Python

### Definisi Subprogram

Subprogram adalah serangkaian instruksi yang digunakan untuk melakukan operasi tertentu secara berulang dalam program. Subprogram terdiri dari:

1. **Fungsi**: Mengembalikan nilai output setelah menerima input.
2. **Prosedur**: Melakukan operasi tertentu tanpa mengembalikan nilai.

---

### Fungsi

Fungsi berperan sebagai mesin yang menerima input dan menghasilkan output. Fungsi dalam Python terbagi menjadi:

1. **Built-in Functions**: Fungsi bawaan yang langsung tersedia (contoh: `print()`, `len()`).
2. **User-defined Functions**: Fungsi yang didefinisikan sendiri oleh pengguna.

#### Struktur Pembuatan Fungsi

```python
def nama_fungsi(parameter):
    """Docstring untuk dokumentasi fungsi."""
    # Blok kode
    return hasil
```

Pemanggilan fungsi:

```python
hasil = nama_fungsi(argumen)
```

---

### Library dalam Python

Library adalah kumpulan modul dan paket yang berisi fungsi siap pakai.

- **Python Standard Library**: Library bawaan yang otomatis terinstal.
- **External Library**: Library tambahan yang perlu diinstal (contoh: `NumPy`, `Pandas`).

### Modul vs Package vs Library

| Nama    | Definisi                       | Contoh                     |
| ------- | ------------------------------ | -------------------------- |
| Modul   | File Python berisi fungsi/kode | `math`, `random`           |
| Package | Direktori berisi modul terkait | `NumPy`, `Pandas`          |
| Library | Kumpulan modul dan paket       | `TensorFlow`, `Matplotlib` |

---

### Jenis Parameter dan Argumen

1. **Keyword Argument**: Argumen dengan nama parameter eksplisit.

   ```python
   def luas(panjang, lebar):
       return panjang * lebar
   print(luas(panjang=5, lebar=10))
   ```

2. **Positional Argument**: Argumen sesuai urutan parameter.

   ```python
   print(luas(5, 10))
   ```

3. **Positional-or-Keyword**: Kombinasi positional dan keyword.

4. **Positional-Only**: Hanya menerima argumen posisi (dengan simbol `/`).

   ```python
   def tambah(a, b, /):
       return a + b
   ```

5. **Keyword-Only**: Hanya menerima argumen keyword (dengan simbol `*`).

   ```python
   def salam(*, nama, pesan):
       return f"Halo {nama}, {pesan}"
   ```

6. **Var-Positional**: Menerima banyak argumen posisi (dengan `*args`).

   ```python
   def jumlah(*args):
       return sum(args)
   ```

7. **Var-Keyword**: Menerima banyak keyword argument (dengan `**kwargs`).
   ```python
   def info(**kwargs):
       return kwargs
   ```

---

### Docstring

Docstring digunakan untuk dokumentasi fungsi.

```python
def luas(panjang, lebar):
    """Menghitung luas persegi panjang."""
    return panjang * lebar
```

# Pemrograman Berorientasi Objek (OOP) dalam Python

## Duck Typing

Duck typing adalah konsep yang menekankan pada perilaku sebuah objek daripada tipe atau kelasnya. Prinsipnya adalah: "Jika sesuatu berjalan seperti bebek dan bersuara seperti bebek, maka itu adalah bebek." Python mendukung konsep ini dengan memungkinkan pengembang untuk fokus pada metode daripada tipe objek.

## Kelas, Objek, dan Metode

- **Kelas**: Cetak biru untuk membuat objek.
- **Objek**: Instansiasi dari sebuah kelas.
- **Metode**: Fungsi yang didefinisikan di dalam kelas yang mendeskripsikan perilaku dari sebuah objek.
- **Atribut**: Variabel yang terkait dengan kelas atau objek.

Contoh:

```python
class Mobil:
    warna = "Merah"

mobil_1 = Mobil()
print(mobil_1.warna)
```

## Konstruktor Kelas

Metode konstruktor `__init__()` digunakan untuk menginisialisasi atribut objek.

Contoh:

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan

mobil_1 = Mobil('Merah', 'DicodingCar', 160)
print(mobil_1.warna)
```

## Jenis Metode

1. **Metode Objek**: Terikat pada instansiasi objek menggunakan `self`.
2. **Metode Statis**: Metode independen menggunakan `@staticmethod`.
3. **Metode Kelas**: Terikat pada kelas menggunakan `@classmethod`.

Contoh:

```python
class Mobil:
    @staticmethod
    def intro_mobil():
        print("Ini adalah metode dari kelas Mobil")

Mobil.intro_mobil()
```

## Pewarisan (Inheritance)

Pewarisan memungkinkan sebuah kelas mewarisi atribut dan metode dari kelas lain.

Contoh:

```python
class Mobil:
    def tambah_kecepatan(self):
        self.kecepatan += 10

class MobilSport(Mobil):
    def turbo(self):
        self.kecepatan += 50
```

## Override

Sebuah subclass dapat menimpa metode dari kelas induk.

Contoh:

```python
class MobilSport(Mobil):
    def tambah_kecepatan(self):
        self.kecepatan += 20
```

## Super

Fungsi `super()` memanggil metode dari kelas induk.

Contoh:

```python
class MobilSport(Mobil):
    def tambah_kecepatan(self):
        super().tambah_kecepatan()
        print("Kecepatan Anda meningkat! Hati-Hati!")
```

# Rangkuman Style Guide pada Python

Kita sudah berada di penghujung materi style guide pada Python. Sampai sejauh ini, Anda diharapkan memahami cara membangun kode Python yang lebih baik dan benar sesuai panduan yang telah diberikan oleh Python melalui PEP8. Mari kita rangkum secara saksama.

### Pengecekan Style Guide PEP8

Saat membangun program pada Python, seringkali kode yang dibuat cukup berantakan sehingga kita perlu mengecek bahwa kode tersebut sudah rapi dan benar dengan mengacu pada panduan yang telah diberikan oleh Python, yaitu PEP8.

PEP (Python Enhancement Proposals) adalah panduan yang menjadi acuan untuk perkembangan Python. Salah satu panduan tersebut adalah PEP8 yang berjudul _"Style Guide for Python Code"_. Tujuan dari panduan ini adalah agar kode Anda lebih mudah dibaca dan dipahami oleh programmer lain serta menghindari kemungkinan kesalahan yang akan muncul.

### Lint

**Lint** atau **linting** adalah proses pengecekan kode atas kemungkinan terjadinya kesalahan (error), termasuk pengecekan kesesuaian terhadap style guide PEP8. Aplikasi yang digunakan untuk proses ini disebut **linter**.

Tiga jenis aplikasi linter yang umum digunakan adalah:

- **Pycodestyle**: Membantu mengecek kode terkait gaya penulisan kode dengan konvensi PEP8.
- **Pylint**: Melakukan analisis kode Python, mengecek error, dan memberikan saran untuk refactoring.
- **Flake8**: Membungkus kemampuan aplikasi lain seperti pycodestyle, pyflakes, dan beberapa fitur lainnya.

### Memformat Kode

Proses memformat kode digunakan untuk memperbaiki format kode agar sesuai dengan PEP8. Berikut beberapa aplikasi untuk memformat kode:

- **black**: Memformat kode secara otomatis sesuai dengan aturan PEP8.
- **YAPF (Yet Another Python Formatter)**: Dikembangkan oleh Google untuk memformat kode Python.
- **autopep8**: Memformat kode menggunakan bantuan lint pycodestyle.

### Statement Gabungan

Disarankan untuk tidak menggabungkan lebih dari satu statement dalam satu baris.

**Disarankan:**

```python
if foo == 'blah':
    do_blah_thing()
do_one()
do_two()
do_three()
```

**Tidak Disarankan:**

```python
if foo == 'blah': do_blah_thing()
do_one(); do_two(); do_three()
```

### Penggunaan Trailing Commas

Trailing commas bersifat opsional, kecuali saat membuat tuple dengan satu elemen.

**Disarankan:**

```python
FILES = ('setup.cfg',)
```

**Tidak Disarankan:**

```python
FILES = 'setup.cfg',
```

### Anotasi Fungsi

Anotasi fungsi digunakan untuk menambahkan informasi tentang parameter dan nilai kembalian fungsi.

**Disarankan:**

```python
def munge(input: str):
    pass

def munge() -> str:
    pass
```

**Tidak Disarankan:**

```python
def munge(input:str):
    pass

def munge()->str:
    pass
```

### Style Guide Prinsip Penamaan pada Python

Beberapa rekomendasi penamaan dalam Python meliputi:

- Huruf kecil dengan pemisah garis bawah: `huruf_kecil_dengan_pemisah`
- Huruf besar di awal kata (CamelCase): `HurufBesarDiAwalKata`
- Konstanta dengan huruf besar: `HURUFBESAR`

Selain itu, penamaan deskriptif dan konsistensi internal sangat diutamakan dalam penulisan kode.

Dengan mengikuti style guide ini, kode Python yang Anda tulis akan lebih terstruktur, mudah dibaca, dan bebas dari error yang tidak perlu.

# Rangkuman Unit Testing

Kita sudah berada di penghujung materi Unit Testing. Sampai sejauh ini, Anda diharapkan telah paham terkait tes unit menggunakan library unittest pada Python. Sekarang, mari kita rangkum secara saksama.

## Pengantar Unit Testing

Saat membangun aplikasi atau program yang lebih kompleks, aplikasi tersebut akan memunculkan dependensi, yaitu satu atau lebih fungsi digunakan oleh fungsi lain. Bahkan, ketika kita mulai membangun aplikasi dengan rekan kita, kita membuat fungsi yang digunakan oleh rekan ataupun sebaliknya. Dependensi tersebut tentu perlu dipastikan bahwa fungsionalitasnya dapat berjalan dengan baik dan tidak terganggu dengan adanya perubahan atau fungsi baru yang dibuat.

Di sinilah kita butuh pengujian (tes) untuk fungsi-fungsi tersebut. Pengujian sebenarnya dapat dibedakan menjadi dua tipe, yaitu manual dan otomatis.

Manual testing adalah proses pengujian yang dilakukan oleh seseorang yang ditunjuk sebagai tester (penguji).

Testing otomatis merupakan hal yang sebaliknya. Ini adalah pengujian yang dilakukan secara otomatis terhadap kode-kode yang kita bangun berdasarkan rencana pengujian (test plan).

Tidak hanya sekadar manual dan otomatis, ada juga unit testing dan integration testing.

Integration testing adalah pengujian yang bertujuan untuk menguji suatu sistem sebagai satu kesatuan.

Unit testing adalah pengujian yang lebih spesifik dan fokus terhadap bagian-bagian kecil.

Dalam Python, untuk melakukan unit testing dapat menggunakan library unittest. Layaknya sebuah framework pengujian, unittest mendukung beberapa hal esensial berikut:

- Pengujian secara otomatis.
- Kode awal proses (setup) dan akhir proses (shutdown) yang dapat digunakan ulang.
- Penyatuan sejumlah pengujian dalam sebuah koleksi.
- Terpisahnya framework pengujian dari framework pelaporan (reporting).

Library unittest mendukung sejumlah konsep penting yang berorientasi objek, antara lain berikut:

- Test fixture merepresentasikan persiapan yang dibutuhkan untuk melakukan satu pengujian atau lebih serta proses pembersihannya (cleanup).
- Test case adalah sebuah unit dari pengujian ketika ia mengecek sejumlah respons dari sebagian kelompok masukan. unittest menyediakan basis class dan TestCase yang akan digunakan untuk membuat kasus pengujian baru.
- Test suite adalah sebuah koleksi dari kasus-kasus pengujian, koleksi dari test suite itu sendiri, atau gabungan keduanya.
- Test runner adalah komponen yang akan mengatur (orchestrates) eksekusi dari pengujian-pengujian dan menyediakan keluaran untuk pengguna.

## Penerapan Unit Test dengan Library unittest

Untuk melakukan unit testing, Anda bisa menggunakan library bawaan dari Python, yaitu unittest.

```python
import unittest

def koneksi_ke_db():
    print("[terhubung ke db]")

def putus_koneksi_db(db):
    print("[tidak terhubung ke db {}]".format(db))

class User:
    username = ""
    aktif = False

    def __init__(self, db, username):  # using db sample
        self.username = username

    def set_aktif(self):
        self.aktif = True


class TestUser(unittest.TestCase):
    # Test Case 1
    def test_user_default_not_active(self):
        db = koneksi_ke_db()
        dicoding = User(db, "dicoding")
        self.assertFalse(dicoding.aktif)  # tidak aktif secara default
        putus_koneksi_db(db)

    # Test Case 2
    def test_user_is_active(self):
        db = koneksi_ke_db()
        dicoding = User(db, "dicoding")
        dicoding.set_aktif()  # aktifkan user baru
        self.assertTrue(dicoding.aktif)
        putus_koneksi_db(db)

if __name__ == "__main__":
    # Test Runner
    unittest.main()
```

# Rangkuman Library Populer pada Python

## Pengenalan Library

Library adalah kumpulan modul dan paket yang saling terkait dan dapat digunakan kembali. Library Python terbagi menjadi dua jenis:

1. **Python Standard Library**: Library bawaan yang otomatis terinstal saat instalasi Python, seperti `os`, `datetime`, dan `re`.
2. **Python External Library**: Library eksternal yang dikembangkan komunitas, seperti `NumPy` dan `Pandas`, yang memerlukan instalasi tambahan menggunakan package manager seperti PIP atau Conda.

## Package Manager

### PIP

- Package manager resmi Python.
- Mengelola instalasi, pembaruan, dan penghapusan package dari Python Package Index (PyPI).
- Perintah dasar:
  - Instalasi: `pip install <nama-package>`
  - Uninstall: `pip uninstall <nama-package>`

### Conda

- Package manager dan environment manager.
- Membantu membuat lingkungan virtual terisolasi.
- Instalasi melalui Anaconda atau Miniconda.
- Mendukung bahasa selain Python seperti R.

## Library Text Processing

1. **String**: Modul bawaan untuk manipulasi teks seperti `upper()`, `lower()`, `split()`, dan `title()`.
2. **Regex**: Library untuk pencarian teks berbasis pola menggunakan ekspresi reguler.

## Library Matematika

- **Math**: Modul bawaan untuk operasi matematika seperti `sqrt()` dan `pi`.

## Library Parser

- **ArgParse**: Library untuk memproses argumen baris perintah.

Contoh penggunaan:

```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('-o', '--output', action='store_true', help="Tampilkan output")
args = parser.parse_args()
if args.output:
    print("Halo, ini merupakan output")
```

## Library Pengolahan Data

1. **Pandas**: Manipulasi dan analisis data.
2. **NumPy**: Operasi array multidimensi.
3. **Matplotlib**: Visualisasi data.
4. **Seaborn**: Visualisasi data dengan grafik yang lebih estetis (dibangun di atas Matplotlib).

## Library File Management

1. **OS**: Interaksi dengan sistem file.
2. **JSON**: Serialisasi data dengan format JSON.
3. **Pickle**: Serialisasi objek Python ke byte stream.

## Library Web Scraping

1. **BeautifulSoup**: Mengambil dan mengekstrak data dari halaman web.
2. **Urllib**: Library bawaan untuk scraping konten website.

---

Dengan memahami library populer ini, Anda dapat mempercepat proses pengembangan aplikasi, analisis data, hingga pemrosesan teks dan web scraping menggunakan Python.
