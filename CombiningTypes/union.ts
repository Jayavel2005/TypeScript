// 🟣 What is a Union Type?
// A union type allows a variable to hold more than one type.

let value: number | string;

let userId: number | string;

userId = 101;       // ✅ OK
userId = "admin01"; // ✅ OK
// userId = true;      // ❌ Error: not allowed


function printLength(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.length); // string-specific method
    } else {
        console.log(id.toFixed(2)); // number-specific method
    }
}

printLength("3");

// type is used to create a custom unions

type Status = "Loading" | "Success" | "Error";

let currentStatus: Status;
currentStatus = "Loading"

function Status(currentStatus: Status) {
    if(currentStatus === "Loading"){
        console.log("Current status is Loading");
        
    }else if(currentStatus === "Success"){
        console.log("Current Status is Success");
        
    }
    else{
        console.log("Current Status is Error");
        
    }
}

Status(currentStatus)


let messageType : string | number;

messageType = "Jayavel"

function logMessage(message : string | number){
    if(typeof message === "string")
    {
        console.log(message);
        
    }
    else{
        console.log(`Message Number: ${message}`);
        
    }
}

logMessage(messageType)
