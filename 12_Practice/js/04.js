/********************************************************************************/
// Write a function that takes a string and returns the reversed version of it.

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// let inputStr = "Hello, adarsh";
// let reversedStr = reverseStr(inputStr);
// console.log(`Reversed String is: ${reversedStr}`)

/********************************************************************************/
// function checkEvenOrOdd() {
//     let userInput = prompt("Enter a number:");
//     let number = parseInt(userInput);

//     if (isNaN(number)) {
//         console.log("Invalid input. Please enter a valid number.");
//     } else {
//         if (number % 2 === 0) {
//             console.log("Even");
//         } else {
//             console.log("Odd");
//         }
//     }
// }

// checkEvenOrOdd();

/********************************************************************************/

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function checkEvenOrOdd() {
//     rl.question("Enter a number: ", function(userInput) {
//         let number = parseInt(userInput);

//         if (isNaN(number)) {
//             console.log("Invalid input. Please enter a valid number.");
//         } else {
//             if (number % 2 === 0) {
//                 console.log("Even");
//             } else {
//                 console.log("Odd");
//             }
//         }
//         rl.close();
//     });
// }

// checkEvenOrOdd();

/********************************************************************************/

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// let num = 5;
// let result = checkEvenOrOdd(num);
// console.log("Result:", result);

/********************************************************************************/
// Create a program that checks if a given year is a leap year.

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let inputYear = 2100; // Yahan aap apne desired saal ko enter kar sakte hain
// let isLeap = isLeapYear(inputYear);

// if (isLeap) {
//     console.log(inputYear + " ek leap year hai.");
// } else {
//     console.log(inputYear + " ek normal year hai.");
// }

/********************************************************************************/
// Create an object representing a car with properties like make, model, and year.Add a method to the car object to start the engine.

// let car = {
//     make:"Toyota",
//     model:"Camry",
//     year:2022
// }
// car.startEngine = function(){
//     console.log("Engine Start")
// }
// car.startEngine()

// Car object banaya gaya hai
// let car = {
//     make: "Toyota",     // Car ki company ka naam
//     model: "Corolla",   // Car ka model
//     year: 2022,         // Car ki manufacturing year

//     // startEngine method banaya gaya hai
//     startEngine: function() {
//         console.log("Engine started. Vroom Vroom!");
//     }
// };

// // Car object ka property access kiya gaya hai aur method call kiya gaya hai
// console.log("Make:", car.make);
// console.log("Model:", car.model);
// console.log("Year:", car.year);
// car.startEngine(); // startEngine method call kiya gaya hai

/********************************************************************************/
// let container = document.getElementById("container");
// let button = document.createElement("button");
// button.textContent = "Click Me";
// container.appendChild(button);
// button.addEventListener("click",()=>{
//     alert("Button Clicked")
// })

/********************************************************************************/
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(100, 50));
