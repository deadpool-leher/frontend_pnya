//javascript array
//deklarasi array
//cara 1,array literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //cara 2
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2)
//Tipe data yang bisa di simpan di dalam array
// let numbers = [1, 2, 3, 4, 5]; //number
// let student = ["John", "Jane", "Bob"]; //string
// let John = ["John", 30, true, [80, 90, 100]]; //mixed
// console.log(John);

// //array lenght
// console.log(numbers.length);
// console.log(student.length);
// console.log(John.length);

// //mengakses
// console.log(numbers[3])
// console.log(student[1])
// console.log(John[2])
// console.log(John[3][4])

// //mengakses element terakhir
// let numbers2= [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers2[numbers2.length -1])


//array method
let Array = [1,2,3, "hallo",false,true];
console.log (Array);

//1
console.log(Array,toString());
//2
console.log(Array.join());
console.log(Array.join(" "));
console.log(Array.join("-"));
//3
Array.pop();
console.log(Array);
//4
Array.push("selamat malam");
console.log(Array);
//5
Array.shift();
console.log(Array);
//6
Array.unshift();
console.log(Array);
//7
Array.splice(3 -1);
console.log(Array);
Array.splice[3, 0, 4, 5];
console.log(Array);
//8
let buah
