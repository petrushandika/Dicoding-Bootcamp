let scoreA = 100;
let scoreB = 90;

// if dan else
if (scoreA > scoreB) {
  console.log("Selamat, Anda Menang!");
} else {
  console.log("Anda Kalah!");
}

// if, else if, dan else
const score = 83;

if (score > 89) {
  console.log("Anda mendapatkan peringkat A");
} else if (score > 79) {
  console.log("Anda mendapatkan peringkat B");
} else if (score > 69) {
  console.log("Anda mendapatkan peringkat C");
} else {
  console.log("Anda mendapatkan peringkat D");
}

// if / else dengan OR dan AND
let x = 125000;
let y = "Bronze";

if (x > 100000 && y == "Silver") {
  console.log("Selamat, Anda mendapatkan diskon sebesar 10%");
} else {
  console.log("Maaf, saat ini Anda belum mendapatkan diskon");
}

if (x > 100000 || y == "Silver") {
  console.log("Selamat, Anda mendapatkan diskon sebesar 10%");
} else {
  console.log("Maaf, saat ini Anda belum mendapatkan diskon");
}
