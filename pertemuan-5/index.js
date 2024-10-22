//IIFE dan call back
//1. IIFE ()
//
// (function() {
//     console.log("hello world");

// })();    
// //with params & arg & return value
// let Output= (function (fullname){
//     return "hello" + fullname;
// }) ("deadpool");
// console.log(Output)   

//no 2.callback
function sayHello(callback) {
    callback();
}

sayHello(function () {
    console.log("Hello World");
});

// With params
function sayHello(callback) {
    let output = callback("deadpool");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello" + fullName;
});
console.log(output);