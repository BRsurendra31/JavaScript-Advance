# Array Destructuring 
Array destructuring is a syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise way to assign array elements to variables based on their position in the array.
```js
// syntax
let [variable1, variable2] = array;
```
## Examples of Array Destructuring:
### 1. Basic Example
```js
const fruits = ['apple', 'banana', 'orange'];

let [first, second, third] = fruits;

console.log(first);  // Output: 'apple'
console.log(second); // Output: 'banana'
console.log(third);  // Output: 'orange'
```
- Here, first is assigned to 'apple', second to 'banana', and third to 'orange'.

### 2. Skipping Elements
You can skip elements by leaving empty commas in the destructuring pattern.
```js
const numbers = [10, 20, 30, 40, 50];

let [first, , third] = numbers;

console.log(first);  // Output: 10
console.log(third);  // Output: 30

//In this case, the second element (20) is skipped.
```
### 3. Default Values
You can assign default values if the array doesn't have enough elements.

```js
const colors = ['red'];

let [primary, secondary = 'blue'] = colors;

console.log(primary);   // Output: 'red'
console.log(secondary); // Output: 'blue'
``` 
### 4. Rest Parameter with Destructuring
You can use the rest parameter (...) to collect the remaining elements of the array.
```js
const languages = ['JavaScript', 'Python', 'Ruby', 'Go'];

let [first, second, ...rest] = languages;

console.log(first);  // Output: 'JavaScript'
console.log(second); // Output: 'Python'
console.log(rest);   // Output: ['Ruby', 'Go']
```
### 5. Swapping Variables
Array destructuring is often used to swap variables easily without a temporary variable.
```js
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // Output: 2
console.log(y); // Output: 1
```
### 6. Destructuring with Functions
```js
function getScores() {
  return [85, 90, 95];
}

let [math, science, english] = getScores();

console.log(math);    // Output: 85
console.log(science); // Output: 90
console.log(english); // Output: 95

//This function returns an array, and destructuring allows us to assign the returned values directly to the variables.
```
# Object Destructuring 

Object destructuring allows you to extract properties from an object and assign them to variables with a concise syntax. This is particularly useful for dealing with complex objects and makes your code more readable and maintainable.

```js
//syntax
const { property1, property2 } = object;
```

## Examples 
```js
//1. Basic Example
const user = {
  name: 'John',
  age: 30,
  location: 'New York'
};

let { name, age, location } = user;

console.log(name);    // Output: 'John'
console.log(age);     // Output: 30
console.log(location); // Output: 'New York'


// 2. Assigning to New Variable Names

//You can assign properties to variables with different names than the property names in the object.
const person = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 25
};

let { firstName: fName, lastName: lName } = person;

console.log(fName);  // Output: 'Alice'
console.log(lName);  // Output: 'Johnson'

//3. Default Values
const settings = {
  theme: 'dark'
};

let { theme, fontSize = '16px' } = settings;

console.log(theme);    // Output: 'dark'
console.log(fontSize); // Output: '16px'

//4. Nested Object Destructuring

const userProfile = {
  user: {
    id: 101,
    info: {
      name: 'Emily',
      age: 27
    }
  }
};

let { user: { info: { name, age } } } = userProfile;

console.log(name); // Output: 'Emily'
console.log(age);  // Output: 27

// 5. Rest Parameter in Object Destructuring

//You can use the rest parameter (...) to collect remaining properties.
const employee = {
  name: 'David',
  position: 'Developer',
  salary: 50000
};

let { name, ...rest } = employee;

console.log(name);  // Output: 'David'
console.log(rest);  // Output: { position: 'Developer', salary: 50000 }

// 6. Destructuring in Function Parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = {
  name: 'Sara',
  age: 22
};

displayUser(user);  // Output: Name: Sara, Age: 22
```

# Spread Operator in JavaScript
he spread operator (...) allows an iterable (such as an array or object) to be expanded in places where zero or more arguments or elements are expected. It's useful for copying, merging, or spreading arrays and objects.

```js
//syntax
```

## Examples 

```js

// 1. Copying an Array
// The spread operator can be used to create a shallow copy of an array.
const numbers = [1, 2, 3];
const newNumbers = [...numbers];

console.log(newNumbers); // Output: [1, 2, 3]
console.log(newNumbers === numbers); // Output: false (they are different arrays)

//2. Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];

console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

// 3. Adding Elements to Arrays

const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

//4. Copying an Object
//Similar to arrays, you can copy an object using the spread operator.

const person = { name: 'John', age: 30 };
const copiedPerson = { ...person };

console.log(copiedPerson); // Output: { name: 'John', age: 30 }
console.log(copiedPerson === person); // Output: false (they are different objects)


// 5. Merging Objects
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { location: 'NYC', occupation: 'Engineer' };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); 
// Output: { name: 'Alice', age: 25, location: 'NYC', occupation: 'Engineer' }

//6. Updating Object Properties
const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, age: 31 };

console.log(updatedPerson); // Output: { name: 'John', age: 31 }

//7. Function Arguments (Rest Parameters)
//The spread operator can be used to pass an array as individual arguments to a function

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Here, the spread operator splits the numbers array into individual arguments (1, 2, 3) and passes them to the sum function.


```
### Difference Between Spread Operator and Rest Parameter:
- `Spread Operator` expands an iterable into individual elements (used in arrays and function arguments).
- `Rest Parameter` collects multiple elements and condenses them into a single array (used in function parameters).

```js
function show(...args) {  // Rest parameter
  console.log(args);
}

show(1, 2, 3); // Output: [1, 2, 3]

const numbers = [1, 2, 3];
console.log(...numbers);  // Spread operator (Output: 1 2 3)
```