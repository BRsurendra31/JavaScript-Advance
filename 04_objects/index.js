console.log(person.age); // Dot notation: Outputs 30
console.log(person['name']); // Bracket notation: Outputs John

// Accessing Object Properties
console.log(person.age); // Dot notation: Outputs 30
console.log(person['name']); // Bracket notation: Outputs John


//Adding or Modifying Properties
person.job = "Developer"; // Adds a new property
person.age = 31; // Modifies an existing property
console.log(person.job); // Outputs: Developer
console.log(person.age); // Outputs: 31

//Deleting Properties

delete person.age;
console.log(person.age); // Outputs: undefined

// Methods in Objects
// Functions within objects are called methods.

const car = {
    brand: "Tesla",
    speed: 120,
    drive: function() {
        return `${this.brand} is driving at ${this.speed} km/h`;
    }
};
console.log(car.drive()); // Outputs: Tesla is driving at 120 km/h



// this Keyword

//this refers to the current object and is used to access its properties or methods from within.

const student = {
    name: "Alice",
    introduce() {
        console.log(`I am ${this.name}`);
    }
};
student.introduce(); // Outputs: I am Alice


// Nested Objects
// Objects can contain other objects.


const user = {
    name: "Sam",
    address: {
        city: "New York",
        zip: 10001
    }
};
console.log(user.address.city); // Outputs: New York

// Object Methods: Object.keys(), Object.values(), Object.entries()

//Used to get properties or entries from objects.

const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

console.log(Object.keys(book));   // Outputs: ['title', 'author', 'year']
console.log(Object.values(book)); // Outputs: ['1984', 'George Orwell', 1949]
console.log(Object.entries(book)); // Outputs: [['title', '1984'], ['author', 'George Orwell'], ['year', 1949]]


// Object Destructuring
// Allows extracting properties into variables.

const { title, author } = book;
console.log(title);  // Outputs: 1984
console.log(author); // Outputs: George Orwell


// Spread Operator

//The **spread operator (`...`)** is used to expand elements of an array or object. It can be used for:

// **Cloning** arrays or objects.
// - **Merging** arrays or objects.
// - Passing arguments to functions.


// ### 1.1 Copying an Array
// - The spread operator allows you to create a **shallow copy** of an array.

const numbers = [1, 2, 3];
const copyNumbers = [...numbers];
console.log(copyNumbers); // Outputs: [1, 2, 3]

// ###1.2 Merging Arrays

// You can merge two or more arrays by spreading their elements.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]


// 1.3 Adding Elements to an Array
// You can add new elements while copying an array.

const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'grape'];
console.log(moreFruits); // Outputs: ['orange', 'apple', 'banana', 'grape']


// 1.4 Using Spread in Function Arguments
// The spread operator can also be used to pass an array as individual arguments to a function.

const sum = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6

//2. Spread in Objects

// 2.1 Copying an Object
// Spread operator can be used to create a shallow copy of an object.

const user = { name: "Alice", age: 25 };
const copyUser = { ...user };
console.log(copyUser); // Outputs: { name: "Alice", age: 25 }


// 2.2 Merging Objects
// You can merge multiple objects into a new one using the spread operator.

const person = { name: "John" };
const details = { age: 30, job: "Developer" };
const mergedPerson = { ...person, ...details };
console.log(mergedPerson); // Outputs: { name: "John", age: 30, job: "Developer" }


// 2.3 Adding or Overwriting Properties
// You can add new properties or overwrite existing properties when spreading.

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "New York" };
console.log(updatedUser); // Outputs: { name: "Alice", age: 26, city: "New York" }


// 2.4 Nested Object Issue (Shallow Copy)
// Spread only creates a shallow copy, meaning nested objects are not deeply cloned.

const person = { name: "John", address: { city: "LA" } };
const copyPerson = { ...person };
copyPerson.address.city = "New York";
console.log(person.address.city); // Outputs: New York (original object is also affected)

//To deeply clone an object, you need to use techniques like JSON.parse(JSON.stringify(object)) or external libraries like lodash.