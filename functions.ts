const addTwo = (num: number): number => {
  return num + 2;
  // return "Hello";
};

let value: number = addTwo(4);

console.log(value);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("Hello");

function signUpuser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean,
) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Jayavel", "Jaya@gmail.com");

signUpuser("Jayavel", "jayavel1520@gmail.com", "1234567890", true);

// function getValue(myVal: number): boolean | string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

// const heros = ["Thor", "Spider Man", "Iron Man"];

const heros = ["Thor", "Spider Man", "Iron Man"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(error: string): void {
  console.log(error);
}

function handleErorr(error: string): never {
  throw new Error(error);
}

export {};
