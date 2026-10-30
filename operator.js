// write a program to perform basic arithmetic operations
var a = 10;
var b = 6;

var sum = a + b;
console.log("Sum: " + sum); // Output: Sum: 15

var module = b % a;
console.log("Module: " + module); // Output: Module: 0

var compare = a >= b;
var isEqual = a != b;
console.log("Is a greater than b? ", compare); // Output: Is a greater than b? true
console.log("Is a equal to b? ", isEqual); // Output: Is a equal to b? false

a += 10;

var dummy_value = 20;

dummy_value = dummy_value + 30;

dummy_value += 30;

console.log(dummy_value);

var target_value = dummy_value ** 2;

var my_age = 41;

var is_verified = my_age > 18 && my_age < 40;

var is_sum = 20 + 20 || 18 < 20;

// 40 && 18<20

console.log(!is_sum);
