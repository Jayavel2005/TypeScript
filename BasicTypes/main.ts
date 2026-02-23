// Basic Data Types

// Number

let num1 : number = 10;
let num2 : number = 20;

console.log(num1, num2);


// Strings

let userName: string = "Jayavel";

console.log(userName);


// Boolean

let isDeveloper:boolean = true;


// Null and Undefined

let x:undefined = undefined;

let y:null = null;

// Any

let value:any = "Jayavel"  // Any can store any kind of data type


// Practice

let Name:string = "Jayavel";
let age:number = 20;
let isDev: boolean = true;
let me:any = "Only Dev";


let college: string = "Rathinam Technical campus";  // ❌ Fix this


let num: number = 100;
let isPassed: boolean = num > 35;
console.log(isPassed);


let myName: string = "Jayavle";
let myAge: number = 20;
let isStudent: boolean = true;

console.log(`Hi, my name is ${myName}. I'm ${myAge} years old. Am I a student? ${isStudent}`);


// duck typing

let complexType = {
    myName : " Jayavel",
    id : 22
};

complexType = {myName : "sanjay", id :4}