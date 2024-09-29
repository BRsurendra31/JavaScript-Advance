
## 1. Function Declaration
- A function that is defined using the `function` keyword.

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Outputs: 5
```

## 2. Function Expression
- A function that is assigned to a variable.

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Outputs: 5
```

## 3. Arrow Functions
- Shorter syntax for writing functions, introduced in ES6
- Does not have its own `this` or `arguments`.

```javascript
const subtract = (a, b) => a - b;
console.log(subtract(5, 2)); // Outputs: 3
```

## 4. Anonymous Functions
- Functions without a name, usually passed as arguments or used in function expressions.

```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

```

## 5.  IIFE (Immediately Invoked Function Expression)
- A function that is executed immediately after it is defined.

```javascript
(function() {
    console.log("IIFE is executed");
})();

```

### Function Parameters and Arguments :

#### `Default Parameters`

- Assign default values to function parameters.

```js
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // Outputs: Hello, Guest
```
#### `Rest Parameters`
- Allows a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10
```

#### `Spread Operator`

- Expands array elements into individual arguments.

```js
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // Outputs: 3
```


## 5. Higher-Order Functions

- Functions that accept other functions as arguments or return a function.

```js
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const result = applyOperation(3, 4, (a, b) => a * b);
console.log(result); // Outputs: 12
```

## 6. Closures

- A function that remembers and can access its lexical scope, even when it is executed outside that scope.

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
```

## 7. Recursion

- A function that calls itself.

```js
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Outputs: 120
```

## 8. Method Binding (this)
- Functions can be bound to specific objects using `.bind()`, `.call()`, or `.apply()`.

```js
const person = {
    name: 'Alice',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFunc = person.greet.bind(person);
greetFunc(); // Outputs: Hello, Alice
```
