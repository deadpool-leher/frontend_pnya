//ubah exercise 1 menggunakan
//1.IIFE
//2.Callback

//1.IIFE
let bmi = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(65, 1.70);

console.log("BMI saya adalah : " + bmi);

//2.Callback
(function(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi); //logic
    callback(bmi);
})(65, 1.70, function(bmi) {
    console.log("BMI saya adalah : " + bmi);
});