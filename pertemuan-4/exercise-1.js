// BODY MASS INDEX
// Rumus BMI = Berat / (Tinggi * Tinggi)

function hitungBMI(berat, tinggi) {
   
    if (isNaN(berat), berat <= 0, isNaN(tinggi), tinggi <= 0) {
        return "Masukkan input yang benar!";
    }

    let tinggiMeter = tinggi / 100;
    let BMI = berat / (tinggiMeter * tinggiMeter);
    BMI = BMI.toFixed(1);

    return BMI;
}

let berat = 50;
let tinggi = 170;
let BMI = hitungBMI(berat, tinggi);
console.log("Hasil BMI:", BMI);


