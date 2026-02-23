// 🟣 What is a Union Type?
// A union type allows a variable to hold more than one type.
var value;
var userId;
userId = 101; // ✅ OK
userId = "admin01"; // ✅ OK
// userId = true;      // ❌ Error: not allowed
function printLength(id) {
    if (typeof id === 'string') {
        console.log(id.length); // string-specific method
    }
    else {
        console.log(id.toFixed(2)); // number-specific method
    }
}
printLength("3");
var currentStatus;
currentStatus = "Loading";
function Status(currentStatus) {
    if (currentStatus === "Loading") {
        console.log("Current status is Loading");
    }
    else if (currentStatus === "Success") {
        console.log("Current Status is Success");
    }
    else {
        console.log("Current Status is Error");
    }
}
Status(currentStatus);
var messageType;
messageType = "Jayavel";
function logMessage(message) {
    if (typeof message === "string") {
        console.log(message);
    }
    else {
        console.log("Message Number: ".concat(message));
    }
}
logMessage(messageType);
