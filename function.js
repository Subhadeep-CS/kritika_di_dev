/**
 *
 * Function ===> mini program
 *
 * 1. resuable
 * 2. reduce repatative
 *
 * Function statement // Function Decleration
 *
 * function [function_name]([argument]){
 * //function body
 *
 * //retrun
 * }
 *
 * Annonymous function
 *
 * First class function
 */

function print_name(name) {
  console.log("Hello World");
  return name;
}

// function expression
let b = function () {
  console.log("Hello");
};

b();

// function (){
//     console.log("Hello world");
// }

let a = print_name("abc");

console.log("Print", a);

/**
 *
 * Higher order function ==> accept function as a parameter or return a function as a value
 *
 *
 */

function print_hello(xyz) {
  //higher order function
}

print_hello(print_name);

function print_high() {
  // higher order function
  function hello() {
    console.log("Inside function");
  }

  return hello;
}

function sum(a, b) {
  return a + b;
}

function division(a, b) {
  return a / b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function calculator(a, b, mode) {
  let answer = mode(a, b);
  return answer;
}

const sum_1 = calculator(10, 20, multiplication);
console.log(sum_1);

// function calculator(10,20,function sum(a, b) {
//   return a + b;
// }){
//     let answer = mode(a, b);
//     return;
// }
