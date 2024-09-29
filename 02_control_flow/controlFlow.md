# JavaScript: Control Flow

Control flow refers to the order in which individual statements, instructions, or function calls are executed in a program.

## 1. Conditional Statements

### `if`, `else if`, `else`
- Used to perform different actions based on different conditions.

```javascript
if (condition) {
    // Executes if condition is true
} else if (anotherCondition) {
    // Executes if the first condition is false, and this condition is true
} else {
    // Executes if all conditions are false
}



### `switch`
- Evaluates an expression and executes code based on matching cases.
- `break` is used to prevent fall-through; `default` runs if no cases match.

```javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Default code
}
```

## 2. Looping statements :
-Repeats a block of code for a fixed number of iterations.
### `for`

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}
```

### `while`
- Loops through a block of code as long as a condition is true.

```js
let i = 0;
while (i < 5) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
    i++;
}
```

### `do...while`
- Executes a block of code once, then repeats the loop as long as the condition is true.

```js 
let i = 0;
do {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

## 3. 3. Control Flow Interruptions

- Immediately terminates the `loop` or `switch` statement.

### `break`
```js
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Loop breaks when i equals 3
    console.log(i); // Outputs: 0, 1, 2
}
```

### `continue`

- Skips the current iteration and moves to the next iteration of the loop.

```js

for (let i = 0; i <= 10; i++) {
    if (i === 3) continue; // Skips the iteration when i equals 3
    console.log(i); // Outputs: 0, 1, 2, 4, 5, 6, 7, 8, 9, 10
}
```
### `return`

- Ends function execution and returns a value from the function.

```js

function sum(a, b) {
    return a + b; // Returns the sum and exits the function
}
console.log(sum(2, 3)); // Outputs: 5
```

## 4. Error Handling :

### `try...catch`

- Allows handling of errors and prevents crashes by catching exceptions.

```js
try {
    // Code that may throw an error
    let result = riskyOperation();
} catch (error) {
    // Code to handle errors
    console.error("An error occurred:", error);
} finally {
    // Code that always runs, even if an error occurs
    console.log("Finished error handling");
}
```
### `throw`

- Used to create custom error messages by manually throwing exceptions.

```js
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }
}
try {
    checkAge(15);
} catch (error) {
    console.error(error.message); // Outputs: Age must be 18 or older.
}
```


