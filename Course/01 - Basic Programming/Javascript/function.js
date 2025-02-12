// Regular Function
function greeting() {
  console.log("Selamat pagi!");
}
greeting();

// Parameter Function
function parameters(x, y) {
  console.log("Selamat " + x + ", " + y + "!");
}

parameters("Sore", "Petrus");
parameters("Pagi", "Handika");

// Default Value
function defaults(a, b = "Bapak/Ibu") {
  console.log("Selamat " + a + ", " + b + "!");
}
defaults("Sore", "Petrus");
defaults("Pagi", "Handika");

/*
Tips dalam membuat fungsi :
- Hindari membuat parameter yang banyak (lebih dari 2 karakter)
- Melakukan satu hal / memecahkan fungsi
- Nama fungsi harus mempresentasikan tujuan
- Hindari duplikasi kode pada penggunaan fungsi
*/
