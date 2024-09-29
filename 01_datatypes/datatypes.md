
## `var`

- **Scope**: `var` is function-scoped, meaning the variable is accessible within the function in which it is declared. If declared outside of any function, it becomes a global variable. Unlike `let` and `const`, var does not have block scope.
- **declaration**:  Variables declared with var can be redeclare(reassign).
- In modern practice, var is not preferable to use.

# whe to use `let` and `const`

In JavaScript, `const` and `let` are both used to declare variables, but they serve different purposes and have distinct characteristics.

## `let`
- **Scope**: `let` is block-scoped, meaning the variable is only accessible within the block (enclosed by `{}`) in which it is defined.
- **declaration**: we can declare a let variable but cannot redeclare it.

### Example:
```javascript
let count = 1;
if (true) {
    let count = 2; // Different variable, scoped to this block
    console.log(count); // Outputs: 2
}
console.log(count); // Outputs: 1
```

## `const`
- **Scope**: `const` is also block-scoped like `let`.
- **Immutable Binding**: we cannot declare a const variable, we have to assign a value to it when we use const but we cannot cmodify its value. However, if the variable is an object or array, its properties or elements can be modified.

### Example:
```javascript
const maxUsers = 100;
// maxUsers = 200; // This would cause an error

const user = { name: "John" };
user.name = "Doe"; // This is allowed
console.log(user.name); // Outputs: Doe
```

## When to Use
- Use **`let`** when you need to declare a variable that might change its value later in your code.
- Use **`const`** when you want to ensure that a variable's binding remains constant and cannot be reassigned. It is a good practice to use `const` by default and only switch to `let` when necessary.

## Summary
- `let`: For variables that will change.
- `const`: For constants or variables that shouldn’t be reassigned.


# JavaScript: Hoisting in `let`, `const`, and `var`

## What is Hoisting?
- **Hoisting** is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (global or function) during the compilation phase, before the code is executed.

### Hoisting with `var`
- `var` declarations are **hoisted** to the top of their function or global scope.
- However, **only the declaration** is hoisted, not the initialization. This means the variable is accessible but will have the value `undefined` until it is assigned.

#### Example:
```javascript
console.log(x); // Outputs: undefined (because of hoisting)
var x = 10;
console.log(x); // Outputs: 10
```

### Hoisting with `let`
- Variables declared with `let` are also hoisted, but they are not initialized. They are in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
- Accessing a `let` variable before its declaration results in a ReferenceError.

#### Example:
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Outputs: 20

```

### Hoisting with `const`
- const behaves similarly to `let` in terms of hoisting.
The variable is hoisted but not initialized, and trying to access it before its declaration will throw a ReferenceError.
- const must also be initialized during declaration.

#### Example:
```javascript
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Outputs: 30
```

### Temporal Dead Zone (TDZ)

- Both let and const are in the temporal dead zone from the start of their scope until the declaration is encountered.
- The variable exists in memory but is not accessible during this phase.

### Summary of Hoisting Behavior:

- `var`: Hoisted and initialized to `undefined`. Accessible before declaration but with a value of `undefined`.
- `let`: Hoisted but not initialized. Not accessible before declaration (results in a `ReferenceError` due to TDZ).
- `const`: Hoisted but not initialized. Must be initialized at declaration and not accessible before declaration (results in a `ReferenceError` due to TDZ).

