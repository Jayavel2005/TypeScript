// 🧠 Chapter: Functions in TypeScript
// Functions in TypeScript are similar to JavaScript, but with type annotations for:

// Parameters

// Return types

function greet(userName: string): void {
    console.log(`Hello ${userName}`);

}

greet("Jayavel");

// name: string → Parameter type

// : void → No return value

// Function with Return Type

function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(3, 4));


// let greetUser = (userName: string): void => {
//     console.log(`Vanakam ${userName}`);

// }

// greetUser("Jayavel");


const subtract = (a: number, b: number): number => {
    return a - b
}
console.log(`Difference: ${subtract(10, 5)}`);

const isEven = (num: number): boolean => {
    if (num % 2 === 0) return true;
    else return false;

}

if (isEven(5)) console.log("The Given Number is Even");
else console.log("The given number is Odd");

// What Are Optional Parameters?
// In TypeScript, when you don’t want to force the user to pass all arguments, you can make some of them optional using a ?.

function greetUser(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}`);
    } else {
        console.log("Hello, Guest");
    }
}

greetUser("Jayavel"); // Hello, Jayavel
greetUser();          // Hello, Guest


function welcome(user?: string) {
    console.log(user ? `Welcome, ${user}` : 'Welcome, Guest');

}
welcome();
welcome("Jayavel")

// Mini Project On Default Parameters

const generateBill = (price: number, gst: number = 18, discount: number = 0): number => {
    let totalWithGst = price + (price * gst / 100);
    let finalAmount = totalWithGst - (totalWithGst * discount / 100);
    return finalAmount;
}

// Test it
console.log(`Bill 1: ₹${generateBill(1000)}`);               // No discount
console.log(`Bill 2: ₹${generateBill(2000, 18, 5)}`);         // 5% discount
console.log(`Bill 3: ₹${generateBill(1500, 12, 10)}`);        // Custom GST & discount