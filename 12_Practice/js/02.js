//Print the numbers from 1 to 5 to the console using a loop.

// console.log("Using a For Loop")
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Print the same numbers from 1 to 5 but this time use an array and map function

// const arr = [...Array(6).keys()].slice(1)
// arr.map((num, index) => {
//     if (index < 4){
//         return num + " ";
//         } else{
//             return num;
//             }
//             })
//             .forEach(val => console.log(val));

// Print using while loop
// console.log("Using While Loop");

// let i = 0;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

/********************************************************************************/

// Question 1: Print numbers from 1 to 10 using a for loop.

// for (i=1; i <= 10; i++){
//     console.log(i)
// }

/*

Explanation:

for loop ka syntax hota hai for(initialization; condition; increment/decrement).
Yahaan i ko 1 se shuru kiya gaya hai, jab tak i 10 se chhota ya equal hai, loop chalega. Har bar loop chalte samay i ko 1 se increment kiya jayega.



*/

/********************************************************************************/

// Question 2: Print even numbers from 2 to 20 using a for loop.

// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

/*
Explanation:

i ko 2 se shuru kiya gaya hai aur har bar 2 se increment kiya jayega.
Loop 20 tak chalega kyunki i 20 se chhota ya equal hai.
*/

/********************************************************************************/

//Question 3: Print numbers from 10 to 1 in reverse order using a for loop.

// for (let i = 10; i >= 1; i-= 1 ){
//     console.log(i)
// }

/*
Explanation:

i ko 10 se shuru kiya gaya hai, jab tak i 1 se bada ya equal hai, loop chalega. Har bar loop chalte samay i ko 1 se decrement kiya jayega.

*/

/********************************************************************************/

// Question 4: Print odd numbers from 1 to 15 using a while loop.

// let i=1;
// while(i<=15){
//     console.log(i);
//     i += 2;
// }

/*
Explanation:

i ko 1 se shuru kiya gaya hai, aur loop 15 tak chalega.
Har bar loop chalte samay i ko 2 se increment kiya jayega, taki odd numbers print ho.
*/

/********************************************************************************/

// Question 5: Calculate the sum of numbers from 1 to 50 using a while loop.

// let i = 1;
// let sum = 0;
// while (i <= 50) {
//     sum += i;
//     i++;
// }
// console.log("The sum is " + sum)

/*
Explanation:

i ko 1 se shuru kiya gaya hai aur har bar 1 se increment kiya jayega.
sum variable mein har iteration mein i ko add kiya jata hai.
Loop 50 tak chalta hai, uske baad sum print hota hai.

*/

/********************************************************************************/

// Question 6: Print numbers from 1 to 10 using a do-while loop.

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(
//     i<=10
// )

/*
Explanation:

do-while loop mein sabse pehle code execute hota hai, phir condition check hoti hai.
Yahaan i ko 1 se shuru kiya gaya hai, aur do-while loop 10 tak chalta hai.

*/

/********************************************************************************/

// Question 7: Calculate the factorial of a number using a for loop.

// let number = 5;
// let factorial = 1;
// for(let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log("Factorial:", factorial);

/*
Explanation:

Yahaan 5 ka factorial calculate kiya ja raha hai. Loop mein factorial variable mein har iteration mein i ko multiply kiya jata hai.
Pehle factorial ko 1 se initialize kiya jata hai, phir loop ke har iteration mein i se multiply hota hai.

*/

/********************************************************************************/

// Question 8: Print the following pattern using nested loops:

// *
// **
// ***
// ****
// *****

// for(let i = 1; i <= 5; i++) {
//     let pattern = '';
//     for(let j = 1; j <= i; j++) {
//         pattern += '*';
//     }
//     console.log(pattern);
// }

/*
Explanation:

Bahar wale loop se rows control ki ja rahi hain, aur andar wale loop se har row ki pattern banayi ja rahi hai.
Inner loop ke har iteration mein * concatenate kiya jata hai, jisse pattern ban jata hai.
*/

/********************************************************************************/

// Question 9: Print the following pattern using nested loops:

// *****
// ****
// ***
// **
// *

// for(let i = 5; i >= 1; i--) {
//   let pattern = '';
//   for(let j = 0; j < i; j++) {
//     pattern += '*';
// }
// console.log(pattern);
// }

/*

Explanation:

Bahar wale loop se rows control ki ja rahi hain, aur andar wale loop se har row ki pattern banayi ja rahi hai.
Inner loop ke har iteration mein * concatenate kiya jata hai, jisse pattern ban jata hai.

*/

/********************************************************************************/

// Question 10: Print the Fibonacci series up to 10 terms.

// let n = 10;
// let firstTerm = 0, secondTerm = 1;
// console.log("Fibonacci Series:");
// for(let i = 1; i <= n; i++) {
//     console.log(firstTerm);
//     let nextTerm = firstTerm + secondTerm;
//     firstTerm = secondTerm;
//     secondTerm = nextTerm;
// }

/*

Explanation:

Fibonacci series mein har term pehle do terms ka sum hota hai. Yahaan firstTerm aur secondTerm variables ka use kiya gaya hai.
firstTerm ko next term ke liye assign kiya jata hai aur secondTerm ko firstTerm ki value assign ki jati hai.

*/

/********************************************************************************/

// Question 1: 1 se 100 tak ke numbers ka sum nikalein, jo 3 aur 5 se divisible hain.

// let sum = 0;
// for(i=1; i<= 100; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//         sum += i;
//         }
// }
// console.log('Sum of all multiples of 3 and 5 from 1 to 100 is', sum)

/*
Explanation:

for loop ka use kiya gaya hai 1 se 100 tak ke numbers ke liye.
if statement mein check kiya gaya hai ki number 3 se ya 5 se divisible hai ya nahi. Agar divisible hai toh sum mein add kiya jata hai.
*/

/********************************************************************************/

// Question 2: Ek array ke elements ko reverse order mein print karein.

//  let arr = [1,2,3,4,5,6]
//  for(let i = arr.length - 1; i>= 0; i--){
//     console.log(arr[i]);
//  }

/*
Explanation:

for loop mein array ke elements ko reverse order mein print kiya jata hai.
arr.length - 1 se start kiya jata hai takki last element se loop start ho aur 0 tak jaata hai.
*/

/********************************************************************************/

// Question 3: Ek array ke odd numbers ka sum nikalein.
// let arr = [1,2,3,4,5,6]
// let sumOddNumbers = 0;
// for(i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         sumOddNumbers += arr[i];
//     }

// }
// console.log(sumOddNumbers)

/*
Explanation:

for loop ka use kiya gaya hai array ke elements ko check karne ke liye.
Har element ko 2 se divide karke check kiya jata hai. Agar remainder 0 nahi hai, toh woh odd number hai aur sum mein add kiya jata hai.
*/

/********************************************************************************/
// Question 4: Ek number ka factorial calculate karein using a while loop.

//  let number = 5;
//  let fact = 1;
//  let i = 1;
//  while (i<= number){
//     fact *= i;
//     i++;
// }
// console.log(fact);

/*
Explanation:

while loop ka use kiya gaya hai factorial calculate karne ke liye.
i ko 1 se start kiya gaya hai, aur har bar loop mein factorial ko i se multiply kiya jata hai.

*/

/********************************************************************************/

// Question 5: Ek array ke elements ko double karke naye array mein store karein.

// let arr = [2,4,6,8,10]
// console.log(arr.length)
// let doubledArr = [];
// for(i=0;i < arr.length; i++){
//     doubledArr.push(arr[i] * 2);
// }
// console.log("Doubled Array:", doubledArr);

/*
Explanation:

for loop ka use kiya gaya hai original array ke elements ko double karke naye array mein store karne ke liye.
push method ka use kiya gaya hai naye array mein elements ko add karne ke liye.
*/

/********************************************************************************/

// Question 6: Ek array ke maximum element ko find karein.

// let arr = [30, 5, 8, 45, 3];
// let maxElement = arr[0];
// console.log(maxElement);
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > maxElement) {
//         maxElement = arr[i];
//     }
// }
// console.log("Maximum Element:", maxElement);


/*
Explanation:

for loop ka use kiya gaya hai array ke elements ko check karne ke liye.
maxElement variable mein pehla element assign kiya jata hai. Fir loop mein har element ko check karke agar vo maxElement se bada hai toh maxElement ko update kiya jata hai.
*/