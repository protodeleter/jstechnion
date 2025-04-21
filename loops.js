'use_strict';
// Task#1
// let val = 0;
// let counter = 1;
// while (counter <= 100) {
//     val += counter;

//     counter++;
// }
// console.log(val); // 101

// Task#2
// let userPrompt = prompt("Enter a number: ");

// do {
//     if (userPrompt < 0 || isNaN(userPrompt) || typeof userPrompt !== "undefined") {
//         userPrompt = prompt("Enter a positive number: ");
//     }
//     if (userPrompt > 0) {
//         console.log(userPrompt); // 0
//         break;
//     }
// } while (userPrompt != 0);

// Task#3
// for (let i = 1; i <= 7; i++) {
//     console.log(`7 * ${i} = ` + 7 * i); // 0, 1, 2, 3, 4
// }


// Task#4
// const secret = 7;

// for (let i = 0; i < 3; i++) {
//     let up = prompt("Guess the number: ");

//     if (up == secret) {
//         alert("Correct!");
//         break;
//     }
// }


// Task#5
// for (let i = 0; i <= 30; i++) {
//     if (i % 3 == 0) continue;

//     console.log(i); // 0, 1, 2, 3, 4

// }

// Task#6
// final value is 1 because i--;
// let i = 3;

// while (i) {
//     alert(i--);
// }


// Task#7

// let i = 0;
// while (++i < 5) {
//     console.log(i);
// } // 0, 1, 2
// final result is 1 2 3 4 because ++i

// let i = 0;
// while (i++ < 5) {
//     console.log(i); // 1, 2, 3, 4, 5
// }

// final result is 1 2 3 4 5 becuase i++


// Task#8

// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0, 1, 2, 3, 4
// } //

// for (let i = 0; i < 5; ++i) {
//     console.log(i); // 0, 1, 2, 3, 4
// } //


// Task#9

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i); // 0, 1, 2, 3, 4
//     }
// } //


// Task#10

// let i = 0;
// while (i < 3) {

//     alert(`number ${i}!`);
//     i++;
// }