// let student={name: "jatin",
    // class:25
// }
// student.class=26;
// console.log(student)
// student.age=252;
// let user = { name: "Aman", city: "Delhi" };
// 
// 
// user.age = user.name;
// 
// 
// delete user.name;
// 
// console.log(user); // { city: "Delhi", age: "Aman" }
// 
// const user = { name: "Aman" };
// user = { age: 25 }; //  
// var a="jatin";
// console.log(a+5);
// console.log(typeof(a+5));
// const student={name:"jatin",class:58};
// student.age=56
// console.log(student.name)
// 
// function my(){
// 
// }

// console.log(typeof(my))
// typeof 42;               // "number"
// typeof "Hello";          // "string"
// typeof true;             // "boolean"
// typeof undefined;        // "undefined"
// typeof null;             // "object"   // ⚠ JS ka old bug
// typeof { name: "Aman" }; // "object"
// typeof [1, 2, 3];        // "object"   // Array bhi object hota hai
// typeof function() {};    // "function"
// let a=null;
// console.log(a)
// let str = "  Hello JS  ";
// str.length                 // 12
// str.toUpperCase()          // "  HELLO JS  "
// str.toLowerCase()          // "  hello js  "
// str.trim()                 // "Hello JS"
// str.includes("JS")         // true
// str.startsWith("  He")     // true
// str.endsWith("JS  ")       // true
// str.indexOf("JS")          // 8
// str.slice(2, 7)            // "Hello"
// str.substring(2, 7)        // "Hello"
// str.replace("JS", "Java")  // "  Hello Java  "
// str.split(" ")             // ["", "", "Hello", "JS", "", ""]
// console.log(`${str} Rocks!`); // J             // Template literal
// console.log(str)
// let num = 123.456;
// num.toFixed(2)         // "123.46"
// num.toPrecision(4)     // "123.5"
// Number.isInteger(10)   // true
// Number.isNaN(NaN)      // true
// parseInt("42px")       // 42
// parseFloat("3.14abc")  // 3.14
// Math.round(4.7)        // 5
// Math.floor(4.7)        // 4
// Math.ceil(4.1)         // 5
// Math.random()          // 0 to <1 random
//opertatioos//
// =========================
// JS Operators Cheat Sheet
// =========================

// 1️⃣ Arithmetic Operators
// let a = 10, b = 3;
// console.log("a + b =", a + b);   // 13
// console.log("a - b =", a - b);   // 7
// console.log("a * b =", a * b);   // 30
// console.log("a / b =", a / b);   // 3.3333...
// console.log("a % b =", a % b);   // 1
// console.log("a ** b =", a ** b); // 1000
// a++; console.log("a++ =", a);    // 11
// b--; console.log("b-- =", b);    // 2
// 
2️⃣ Assignment Operators
// let x = 5;
// x += 2; console.log("x += 2:", x); // 7
// x -= 3; console.log("x -= 3:", x); // 4
// x *= 2; console.log("x *= 2:", x); // 8
// x /= 4; console.log("x /= 4:", x); // 2
// x %= 2; console.log("x %= 2:", x); // 0
// 
3️⃣ Comparison Operators
// console.log("5 == '5':", 5 == '5');   // true
// console.log("5 === '5':", 5 === '5'); // false
// console.log("5 != 3:", 5 != 3);       // true
// console.log("5 !== '5':", 5 !== '5'); // true
// console.log("5 > 3:", 5 > 3);         // true
// console.log("3 < 5:", 3 < 5);         // true
// console.log("5 >= 5:", 5 >= 5);       // true
// console.log("3 <= 5:", 3 <= 5);       // true
// 
4️⃣ Logical Operators
// console.log("true && false:", true && false); // false
// console.log("true || false:", true || false); // true
// console.log("!true:", !true);                 // false
// 
5️⃣ String Operators
// let str = "Hello";
// str += " World";
// console.log("Concatenate:", str); // Hello World
// 
6️⃣ Ternary Operator
// let age = 18;
// let status = age >= 18 ? 'Adult' : 'Minor';
// console.log("Ternary:", status); // Adult
// 
7️⃣ Bitwise Operators 
//  a = 5; // 0101
//  b = 3; // 0011
// 
// console.log(a & b); // 1
// console.log(a | b); // 7
// console.log(a ^ b); // 6
// console.log(~a);    // -6
// console.log(a << 1); // 10
// console.log(a >> 1); // 2
//  
8️⃣ typeof Operator
// console.log("typeof 123:", typeof 123);           // number
// console.log("typeof 'abc':", typeof 'abc');       // string
// console.log("typeof true:", typeof true);         // boolean
// console.log("typeof undefined:", typeof undefined); // undefined
// console.log("typeof null:", typeof null);         // object (JS quirk)
// console.log("typeof {}:", typeof {});             // object
// console.log("typeof []:", typeof []);             // object
// console.log("typeof function(){}:", typeof function(){}); // function
// 
// 
// for(let i=1; i<=5; i++) {
//   if(i===3) continue; // 3 skip ho jayega
//   if(i===5) break;    // loop yahi terminate ho jayega
//   console.log(i);
// }
// let day = 3;
// 
// switch(day) {
//   case 1:
    // console.log("Monday");
    // break;
//   case 2:
    // console.log("Tuesday");
    // break;
//   case 3:
    // console.log("Wednesday");
    // break;
//   default:
    // console.log("Invalid day");
// }
console.log("===== For Loop =====");
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log("\n===== While Loop =====");
let j = 0;
while (j < 5) {
  console.log(j); // 0 1 2 3 4
  j++;
}

console.log("\n===== Do...While Loop =====");
let k = 0;
do {
  console.log(k); // 0 1 2 3 4
  k++;
} while (k < 5);

console.log("\n===== For...in Loop (Object) =====");
let user = { name: "Aman", age: 20 };
for (let key in user) {
  console.log(key, user.key); 
  // Output:
  // name Aman
  // age 20 
}

console.log("\n===== For...of Loop (Array) =====");
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // 10 20 30
}

console.log("\n===== Nested Loops =====");
for (let m = 1; m <= 2; m++) {
  for (let n = 1; n <= 3; n++) {
    console.log(m, n); 
    // Output: 
    // 1 1  1 2  1 3
    // 2 1  2 2  2 3
  }
}

console.log("\n===== Break Statement =====");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // 1 2
}

console.log("\n===== Continue Statement =====");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4 5
}
let user = {
  name: "Aman",
  age: 20,
  city: "Delhi"
};

for (let key in user) {
  if (typeof user[key] === "number") {
    console.log(`${key} doubled is ${user[key] * 2}`);
  }
}
/* Output:
age doubled is 40
*/
const users = [
  { name: "Aman", age: 20 },
  { name: "Jatin", age: 22 },
  { name: "Ravi", age: 21 }
];
// Access
console.log(users[0].name); // Aman

// Loop through array
for (let user of users) {
  console.log(user.name, user.age);
}
/* Output:
Aman 20
Jatin 22
Ravi 21
*/
const users = {
  names: ["Aman", "Jatin", "Ravi"]
};

// Access
console.log(users.names[0]); // Aman
console.log(users.names[1]); // Jatin

// Loop through names
for (let name of users.names) {
  console.log(name);
}
/* Output:
Aman
Jatin
Ravi
*/
users.push({ name: "Rahul", age: 23 });
console.log(users[3].name); // Rahul


