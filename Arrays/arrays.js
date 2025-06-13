// Arrays
// Number Arrays
// let nums: number[] = [1, 2, 3, 4, 5];
// String Arrays
var fruits = ["Apple", "Banana", "Cherry"];
// nums.forEach(element => {
//     console.log(element);
// })
// Practice Questions
var songs = ["Vaa Senthalini", "Po Urave", "Yaarumilla", "Kannoram", "Adiyae Alagae"];
// let numbers: number[] = [1, 2, 3];
var numbers = [10, 25, 30, 5, 40];
var sum = 0;
numbers.forEach(function (num) {
    sum += num;
});
console.log("Sum of numbers array: ".concat(sum));
var booleanArray = [false, true, true, false, true];
var trueCount = 0;
booleanArray.forEach(function (element) {
    if (element === true)
        trueCount++;
});
console.log("True Count: ".concat(trueCount));
// numbers.push("Jayavel")
// 🧠 1. map() – Transform Every Element
// 🔹 What it does:
// Creates a new array by applying a function to each element.
var cube = numbers.map(function (num) { return num * num * num; });
console.log(cube);
// 🧠 2. filter() – Keep Only Matching Elements
// 🔹 What it does:
// Returns a new array with only elements that match a condition.
// 🧪 Example:
// ts
// Copy
// Edit
var highScores = numbers.filter(function (num) { return num > 20; });
console.log(highScores); // [25, 30, 40]
var nums = [5, 10, 15, 20];
nums = nums.map(function (n) { return n * 3; });
console.log(nums);
var naturalNumbers = [1, 2, 3, 4, 5, 6];
var evenNumber = naturalNumbers.filter(function (element) { return element % 2 == 0; });
console.log(evenNumber);
var names = ["jayavel", "rahul", "divya", "bharath"];
// Expected output: ["jayavel", "bharath"]
names = names.map(function (userName) { return userName.toUpperCase(); });
console.log(names);
var validNames = names.filter(function (userName) { return userName.length > 6; });
console.log(validNames);
