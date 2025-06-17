// Intersection Types is used to Combine Multiple types

type User = {
    username: string;
    email: string;
};

type Admin = {
    role: "admin";
    accessLevel: number;
};

type AdminUser = User & Admin;

const admin1: AdminUser = {
    username: "nova",
    email: "nova@example.com",
    role: "admin",
    accessLevel: 10
};


type Student = {
    stu_name: string,
    rollNo: number,
}
type Marks = {
    math: number,
    science: number,
    english: number,
}
type Reportcard = Student & Marks;

const student1: Reportcard = {
    stu_name: "Jayavel",
    rollNo: 22108026,
    math: 99,
    science: 95,
    english: 100,
}

console.log(student1);


