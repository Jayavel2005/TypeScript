// 🧠 Chapter: Functions in TypeScript
// Functions in TypeScript are similar to JavaScript, but with type annotations for:
// Parameters
// Return types
function greet(userName) {
    console.log("Hello ".concat(userName));
}
greet("Jayavel");
// name: string → Parameter type
// : void → No return value
// Function with Return Type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 4));
// let greetUser = (userName: string): void => {
//     console.log(`Vanakam ${userName}`);
// }
// greetUser("Jayavel");
var subtract = function (a, b) {
    return a - b;
};
console.log("Difference: ".concat(subtract(10, 5)));
var isEven = function (num) {
    if (num % 2 === 0)
        return true;
    else
        return false;
};
if (isEven(5))
    console.log("The Given Number is Even");
else
    console.log("The given number is Odd");
// What Are Optional Parameters?
// In TypeScript, when you don’t want to force the user to pass all arguments, you can make some of them optional using a ?.
function greetUser(name) {
    if (name) {
        console.log("Hello, ".concat(name));
    }
    else {
        console.log("Hello, Guest");
    }
}
greetUser("Jayavel"); // Hello, Jayavel
greetUser(); // Hello, Guest
function welcome(user) {
    console.log(user ? "Welcome, ".concat(user) : 'Welcome, Guest');
}
welcome();
welcome("Jayavel");
// Mini Project On Default Parameters
var generateBill = function (price, gst, discount) {
    if (gst === void 0) { gst = 18; }
    if (discount === void 0) { discount = 0; }
    var totalWithGst = price + (price * gst / 100);
    var finalAmount = totalWithGst - (totalWithGst * discount / 100);
    return finalAmount;
};
// Test it
console.log("Bill 1: \u20B9".concat(generateBill(1000))); // No discount
console.log("Bill 2: \u20B9".concat(generateBill(2000, 18, 5))); // 5% discount
console.log("Bill 3: \u20B9".concat(generateBill(1500, 12, 10))); // Custom GST & discount
