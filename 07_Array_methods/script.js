// Arrays Methods :

//1. push()

//dds one or more elements to the end of an array and returns the new length of the array.
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2. pop()

// Removes the last element from an array and returns that element. This method changes the length of the array.

let fruits2 = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']

// 3. shift()

// Removes the first element from an array and returns that element. This method changes the length of the array.

let fruits3 = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange']


// 4.  unshift()

// Adds one or more elements to the beginning of an array and returns the new length of the array.

let fruits4 = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // Output: ['apple', 'banana', 'orange']


// concat()

//Merges two or more arrays and returns a new array without modifying the original arrays.

let fruits5 = ['apple', 'banana'];
let vegetables = ['carrot', 'potato'];
let food = fruits.concat(vegetables);
console.log(food); // Output: ['apple', 'banana', 'carrot', 'potato']

//. join()

//Joins all elements of an array into a string and returns this string.

let fruits6 = ['apple', 'banana', 'orange'];
// let fruitString = fruits.join(', ');
console.log(fruits6.join()); // Output: 'apple, banana, orange'
console.log(fruits6.join('-')); // Output: 'apple- banana- orange'
console.log(fruits6.join('*')); // Output: 'apple *banana* orange'
let joined = fruits6.join();
console.log(typeof(joined)) // string

// slice()

// Returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).

let fruits7 = ['apple', 'banana', 'orange', 'mango'];
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana', 'orange']

// splice()

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let fruits8 = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'mango', 'pineapple'); // Remove 1 element at index 1 and add 'mango' and 'pineapple'
console.log(fruits); // Output: ['apple', 'mango', 'pineapple', 'orange']

// this is mutative method, changed the original arrays


// forEach()

//Executes a provided function once for each array element.

let fruits9 = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
    console.log(fruit);
});
// Output:
// apple
// banana
// orange

// map()

// Creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]


//filter()

//Creates a new array with all elements that pass the test implemented by the provided function.

let numbers2 = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce()

// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers3 = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10


// Higher irder method 


// find()

//Returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise, it returns undefined.

let numbers5 = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found); // Output: 12


// includes()

// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let fruits10 = ['apple', 'banana', 'orange'];
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true


// Method Chaining in JavaScript ::

// Method chaining is a technique in JavaScript that allows multiple methods to be called on the same object or value, one after another, in a single statement. This is achieved by ensuring that each method returns the object itself (or another object), making it possible to call the next method.

// Many array methods and object methods in JavaScript return the object itself, enabling method chaining.

// 1. Chaining Array Methods

let numbers4 = [1, 2, 3, 4, 5, 6];

let result = numbers
  .filter(num => num % 2 === 0) // Filters even numbers [2, 4, 6]
  .map(num => num * 2)          // Doubles each number [4, 8, 12]
  .reduce((sum, num) => sum + num, 0); // Sums the array [24]

console.log(result); // Output: 24

//2.  String Methods Chaining

let text = "  Hello JavaScript World!  ";

let result1 = text
  .trim()                // Removes whitespace from both ends
  .toUpperCase()         // Converts string to uppercase
  .split(' ')            // Splits the string into an array by spaces
  .join('-');            // Joins the array back into a string with hyphens

console.log(result); // Output: "HELLO-JAVASCRIPT-WORLD!"



// 3. Custom Objects and Method Chaining

class Calculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(number) {
      this.value += number;
      return this; // Return this for chaining
    }
  
    subtract(number) {
      this.value -= number;
      return this; // Return this for chaining
    }
  
    multiply(number) {
      this.value *= number;
      return this; // Return this for chaining
    }
  
    divide(number) {
      this.value /= number;
      return this; // Return this for chaining
    }
  
    getResult() {
      return this.value;
    }
  }
  
  let result2 = new Calculator(10)
    .add(5)         // Adds 5 (15)
    .subtract(3)    // Subtracts 3 (12)
    .multiply(2)    // Multiplies by 2 (24)
    .divide(4)      // Divides by 4 (6)
    .getResult();   // Gets the final result
  
  console.log(result); // Output: 6
  