//Rest Parameter & Spread Operator

//Rest Paramameter
//Digunakan pada saat kita membuat fungsi
//yg memiliki banyak parameter

//fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
  };
  func1("A", "B", "C", "D", "E");
  
  //Fungsi dengan rest parameter
  const func2 = (...params) => {
    console.log(params);
  };
  func2("A", "B", "C", "D", "E");
  
  //rest parameter harus berada di terakhir dlm parameter
  
  const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
  };
  func3("A", "B", "C", "D", "E");

  //mini exercise
  const penjumlahan = (...arr) => {
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
  };
  
  console.log(penjumlahan(1, 2, 3, 4, 5, 6));

  //2.spread operator
  //array
  let numbers = (1, 2, 3, 4, 5);
  console.log(numbers);
  console.log(...numbers);