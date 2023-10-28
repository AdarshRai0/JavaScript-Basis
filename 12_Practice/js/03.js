/********************************************************************************/
// Question 1: Ek function banayein jo ek array ko reverse kare.

// function reverseArr(arr) {
//   return arr.reverse();
// }

// let originalArr = [1, 2, 3, 4, 5, 6];
// let reversedArr = reverseArr(originalArr);
// console.log(reversedArr)

/*
Explanation:

reverse() function ka use kiya gaya hai array ko reverse karne ke liye.
*/

/********************************************************************************/
// Question 2: Ek function banayein jo ek string mein se special characters hata de.

// function removeSpecialCharacters(str) {
//     return str.replace(/[^\w\s]/gi, '');
// }

// let inputString = "Hello, @World!";
// let cleanedString = removeSpecialCharacters(inputString);
// console.log("Cleaned String:", cleanedString);


/********************************************************************************/
// Question 3: Ek function banayein jo ek string ko words mein split kare aur har word ka first letter capital ho.

// function capitalizeWords(str) {
//     return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }

// let inputString = "hello world example";
// let capitalizedString = capitalizeWords(inputString);
// console.log("Capitalized String:", capitalizedString);

/*
Explanation:

split(' ') se string ko words mein split kiya jata hai.
map() function ka use kiya jata hai har word ke first letter ko capital banane ke liye.
join(' ') se words ko phir se ek string mein join kiya jata hai.
*/


/********************************************************************************/

// Question 4: Ek function banayein jo ek array ke duplicate elements ko remove kare.

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }

// let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = removeDuplicates(arrayWithDuplicates);
// console.log("Array without Duplicates:", uniqueArray);

/*

Explanation:

Set object ka use kiya gaya hai unique elements ko store karne ke liye.
Array.from() se set ko phir se array mein convert kiya gaya hai.

*/





/********************************************************************************/

// Question 5: Ek function banayein jo ek number ko English words mein convert kare (e.g., 123 -> "One Hundred Twenty-Three").

// function numberToWords(num) {
//     const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//     const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//     if (num === 0) {
//         return "Zero";
//     }

//     function convertLessThanThousand(number) {
//         if (number === 0) {
//             return "";
//         } else if (number < 10) {
//             return units[number];
//         } else if (number < 20) {
//             return teens[number - 10];
//         } else if (number < 100) {
//             return tens[Math.floor(number / 10)] + " " + convertLessThanThousand(number % 10);
//         } else {
//             return units[Math.floor(number / 100)] + " Hundred " + convertLessThanThousand(number % 100);
//         }
//     }

//     const billion = Math.floor(num / 1000000000);
//     const million = Math.floor((num % 1000000000) / 1000000);
//     const thousand = Math.floor((num % 1000000) / 1000);
//     const rest = num % 1000;

//     let result = "";

//     if (billion > 0) {
//         result += convertLessThanThousand(billion) + " Billion ";
//     }

//     if (million > 0) {
//         result += convertLessThanThousand(million) + " Million ";
//     }

//     if (thousand > 0) {
//         result += convertLessThanThousand(thousand) + " Thousand ";
//     }

//     if (rest > 0) {
//         result += convertLessThanThousand(rest);
//     }

//     return result.trim();
// }

// let number = 199999;
// let words = numberToWords(number);
// console.log("Number in Words:", words);






/********************************************************************************/
// Write a function to add two numbers and return the result.

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(7,9))






/********************************************************************************/

// function area(width,height){
//     let area= width * height;
//     return area
// }
// let calculatedArea = area(5,4)
// console.log(calculatedArea);





/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/

/********************************************************************************/
