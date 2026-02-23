// Arrays

// Number Arrays

// let nums: number[] = [1, 2, 3, 4, 5];

// String Arrays

let fruits: string[] = ["Apple", "Banana", "Cherry"];

// nums.forEach(element => {
//     console.log(element);

// })

// Practice Questions

let songs: string[] = ["Vaa Senthalini", "Po Urave", "Yaarumilla", "Kannoram", "Adiyae Alagae"];

// let numbers: number[] = [1, 2, 3];

let numbers: number[] = [10, 25, 30, 5, 40];


let sum: number = 0;
numbers.forEach(num => {
    sum += num;
})

console.log(`Sum of numbers array: ${sum}`);


let booleanArray: boolean[] = [false, true, true, false, true];
let trueCount: number = 0;

booleanArray.forEach(element => {
    if (element === true)
        trueCount++;
});

console.log(`True Count: ${trueCount}`);


// numbers.push("Jayavel")

// 🧠 1. map() – Transform Every Element
// 🔹 What it does:
// Creates a new array by applying a function to each element.


let cube: number[] = numbers.map(num => num * num * num);
console.log(cube);


// 🧠 2. filter() – Keep Only Matching Elements
// 🔹 What it does:
// Returns a new array with only elements that match a condition.

// 🧪 Example:
// ts
// Copy
// Edit

let highScores = numbers.filter(num => num > 20);

console.log(highScores); // [25, 30, 40]


let nums: number[] = [5, 10, 15, 20];

nums = nums.map(n => n * 3);
console.log(nums);


let naturalNumbers: number[] = [1, 2, 3, 4, 5, 6];

let evenNumber: number[] = naturalNumbers.filter(element => element % 2 == 0);

console.log(evenNumber);

let names: string[] = ["jayavel", "rahul", "divya", "bharath"];
// Expected output: ["jayavel", "bharath"]

names = names.map(userName => userName.toUpperCase());
console.log(names);

let validNames: string[] = names.filter(userName => userName.length > 6);

console.log(validNames);

// Tuples

// 🎯 Chapter: Tuples in TypeScript
// 📦 What is a Tuple?
// A tuple is an array with:

// Fixed length

// Fixed types in specific positions

// It's perfect when you know exactly how many values and what type each one should be.

let user: [string, number] = ["Jayavel", 22];

// Explanation:
// Position 0 must be a string

// Position 1 must be a number

// let user: [string, number] = [21, "Jayavel"]; // ❌ Wrong order

// let user: [string, number] = ["Jayavel", 21, true]; // ❌ Too many values


// Destructuring Tuples
// ts
// Copy
// Edit
let person: [string, number] = ["Jayavel", 21];

let [usrename, age] = person;
console.log(usrename); // Jayavel
console.log(age);  // 21

let book:[string, number] = ["The art of being alone",290];

let [bookName, price] = book;;
console.log(`Book Name: ${bookName} and Price: ${price}`);

let product:[string, number, boolean] = ["Cricket Bat",290,true];

let student:[string, number] = ["Arun",19];
let [studentName, studentAge] = student;

console.log(studentName, studentAge);
