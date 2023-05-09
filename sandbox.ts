// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// arrays
let users: string[] = [];

users.push('test')

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('tech king')
mixed.push(20);
mixed.push(false);

console.log(mixed)

let uid: string|number;
uid = 'test';
uid = 10;

// objects
let students: object;
students = { name: 'moseti', age: 20};

let staff: {
    name: string,
    age: number,
    role: string
}

staff = {name: 'makori', age: 22, role: 'designer'}