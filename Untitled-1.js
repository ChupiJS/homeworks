// FIRST

let exampleNumber1_1 = 123;

if(exampleNumber1_1 % 2 === 0){
    console.log('even');
} else{
    console.log('odd');
}

// SECOND

let exampleNumber1_2 = 14, exampleNumber2_2 = 2;

if(exampleNumber1_2 % exampleNumber2_2 === 0 || exampleNumber2_2 % exampleNumber1_2 === 0){
    console.log('1');
} else{
    console.log('0');
} 

// THIRD

let exampleNumber1_3 = 66, exampleNumber2_3 = 44, maximum = 180;
let exampleNumber3_3 = maximum - (exampleNumber1_3 + exampleNumber2_3);
console.log(exampleNumber3_3);

// FOURTH 
let exampleNumber4_1 = parseFloat(prompt("Enter the first number:")),
    exampleNumber4_2 = parseFloat(prompt("Enter the second number:")),
    exampleNumber4_3 = parseFloat(prompt("Enter the third number:")),
    exampleNumber4_4 = parseFloat(prompt("Enter the fourth number:")),
    exampleNumber4_5 = parseFloat(prompt("Enter the fifth number:"));

let sum = exampleNumber4_1 + exampleNumber4_2 + exampleNumber4_3 + exampleNumber4_4 + exampleNumber4_5;

let average = sum / 5;

console.log("The average is: " + average);

// FIFTH
let exampleNumber5_1 = parseFloat(prompt('Enter the number: '));

if (exampleNumber5_1 % 7 === 0 && exampleNumber5_1 % 5 === 0 && exampleNumber5_1 % 3 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 7, 5, and 3');
} else if (exampleNumber5_1 % 7 === 0 && exampleNumber5_1 % 5 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 7 and 5');
} else if (exampleNumber5_1 % 7 === 0 && exampleNumber5_1 % 3 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 7 and 3');
} else if (exampleNumber5_1 % 5 === 0 && exampleNumber5_1 % 3 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 5 and 3');
} else if (exampleNumber5_1 % 7 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 7');
} else if (exampleNumber5_1 % 5 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 5');
} else if (exampleNumber5_1 % 3 === 0) {
    console.log(exampleNumber5_1 + ' is a multiple of 3');
} else {
    console.log(exampleNumber5_1 + ' is not a multiple of 7, 5, or 3');
}