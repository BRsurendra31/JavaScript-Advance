## for...of Loop in JavaScript
The `for...of` loop is a modern loop introduced in ES6 that iterates over iterable objects such as arrays, strings, maps, sets, and more. It provides a simple way to loop through the values of an iterable.

```js 
//syntax
for (const element of iterable) {
    // Code to execute with each element
}
```
### Examples 

```js
//Example 1: Iterating Over an Array
const numbers = [10, 20, 30];

for (const num of numbers) {
    console.log(num);  // Outputs: 10, 20, 30
}

// Example 2: Iterating Over a String
const word = 'hello';

for (const char of word) {
    console.log(char);  // Outputs: h, e, l, l, o
}

// Example 3: Iterating Over a Map
const userRoles = new Map([
  ['John', 'Admin'],
  ['Jane', 'Editor'],
  ['Mark', 'Viewer']
]);

for (const [user, role] of userRoles) {
    console.log(`${user} is a ${role}`);
}

// Output:
// John is a Admin
// Jane is a Editor
// Mark is a Viewer


//Example 4: Iterating Over a Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (const num of uniqueNumbers) {
    console.log(num);  // Outputs: 1, 2, 3, 4, 5
}

```
## for...in loop
- The for...in loop is used to iterate over the enumerable properties (keys) of an object. It is primarily designed to loop through object properties, but it can also be used with arrays and other iterable objects, though it is not recommended for arrays due to potential unexpected behavior (as it loops over the object properties and not the values).

```js 
// syntax
for (const key in object) {
    // Code to execute for each property
}
```
- key: Represents the property or index in the object
- object: Can be an object, array, or another iterable.

```js

// basic 
const arr = ['a', 'b', 'c'];
for (const index in arr) {
    console.log(index);  // Outputs: 0, 1, 2
}

//Example 1: Iterating Over an Object
const user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Output:
// name: John
// age: 30
// isAdmin: true


// Example 2: Iterating Over an Array (Not Recommended)
const arr = [10, 20, 30];

for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// Output:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: 30

//Example 3: Iterating Over an Array-Like Object

const arrayLike = {
    0: 'apple',
    1: 'banana',
    2: 'cherry',
    length: 3
};

for (const key in arrayLike) {
    console.log(`${key}: ${arrayLike[key]}`);
}

// Output:
// 0: apple
// 1: banana
// 2: cherry
// length: 3


// Example 4: Enumerating Prototype Properties
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log('Hello!');
};

const john = new Person('John', 30);

for (const key in john) {
    console.log(key);
}

// Output:
// name
// age
// greet

```

## forEach Loop in JavaScript
The forEach() method is an array-specific method that is used to execute a provided function once for each element in an array. It is a higher-order function and is part of the Array.prototype in JavaScript.
Unlike for or for...in loops, forEach() is designed to iterate over the elements in an array, not over object properties. It cannot break, continue, or return early from the loop.


```js
// syntax
array.forEach(callback(currentValue, index, array) {
  // Your logic here
}, thisArg);
```

```js
// basic
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// Example 2: Using Index in forEach
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});

// Output:
// 0: apple
// 1: banana
// 2: cherry


//Example 3: Arrow Function Syntax

const numbers = [10, 20, 30, 40];

numbers.forEach(number => console.log(number * 2));

// Output:
// 20
// 40
// 60
// 80
```
### Important Points about forEach():
- 1. No Early Exit: You cannot break, return, or continue inside a forEach() loop. It will iterate over every element.

```js
const arr = [1, 2, 3];

arr.forEach(num => {
    if (num === 2) return;  // This does not exit the loop
    console.log(num);
});

// Output:
// 1
// 3
```
- 2. Not Suitable for Asynchronous Operations: If you're planning to run asynchronous code (such as setTimeout or fetch) inside a forEach() loop, note that forEach() will not wait for the promises to resolve.


### conclusion
- for...of: Best for looping over arrays and iterable objects.
- for...in: Best for looping over object properties.
- forEach(): Best for performing actions on array elements without needing to exit early.
