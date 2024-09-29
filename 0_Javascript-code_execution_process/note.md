## Memory management in JavaScript :
In JavaScript, memory management happens in two main areas: the `Heap` and the `Call Stack`. Both are crucial for how the JavaScript engine handles memory during the execution of code.

### 1. Primitive Types (Numbers, Strings, Booleans, `null`, `undefined`, `Symbol`)
- Stored in: `Call Stack`
- Reason: Primitives are simple data types with fixed memory size, and they are stored directly in the call stack. This allows fast access.

```js
let age = 25;  // Primitive number, stored in the call stack
let name = "John";  // Primitive string, stored in the call stack
```

### 2. Reference Types (Objects, Arrays, Functions)
- Stored in: `Heap`
- Reason: Objects, arrays, and functions are more complex and can grow dynamically. They are allocated in the heap because the heap has no fixed size limit, unlike the call stack.

```js
let person = { name: "John", age: 30 };  // Object, stored in the heap
let arr = [1, 2, 3];  // Array, stored in the heap
```
### 3. Variables Holding References
- Stored in: Call Stack
- Reason: When you create an object or array, the reference (or pointer) to that object in memory is stored in the call stack, while the actual data (the object or array) is stored in the heap.

```js
let person = { name: "John", age: 30 };  // The `person` variable (a reference) is in the call stack, but the object is in the heap.
```

### 4. Functions and Methods
- Stored in: Heap (if they are declared as objects or part of an object)
- Reason: Functions are treated as first-class objects in JavaScript, meaning they can be stored as variables, passed around, or assigned as methods to objects. The actual function definition is stored in the heap, but when the function is called, the execution context is pushed onto the call stack.

```js
function greet() {
    console.log("Hello");
}

let sayHi = greet;  // The function reference is stored in the stack, but the actual function is in the heap.

sayHi();  // When invoked, the execution context is pushed to the call stack.
```

### 5. Function Scope & Variables
- Stored in: Call Stack
- Reason: Local variables declared within a function are stored in the call stack during the function’s execution. Once the function completes execution, these variables are removed from the stack.

```js
function add(a, b) {
    let sum = a + b;  // `a`, `b`, and `sum` are stored in the call stack during execution
    return sum;
}
add(2, 3);
```
### 6. Closures
- Stored in: Heap (for referenced variables)
- Reason: Variables that are captured by a closure (a function that retains access to its outer scope even after the outer function has finished execution) are stored in the heap because the closure keeps a reference to these variables even after their execution context is removed from the call stack.

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;  // `count` is stored in the heap because the closure retains access to it
        console.log(count);
    };
}
const counter = outer();  // `counter` keeps the closure alive
counter();  // Outputs: 1
counter();  // Outputs: 2
```

### Key Concept:
- **Stack for Fast Access:** The call stack is for quick, short-term memory (primitive values and function calls).
- **Heap for Dynamic Data:**The heap is used for larger, more complex structures (objects, arrays, functions) that require flexibility in size and lifetime.


## JavaScript :
- JavaScript is an `Interpreted` language.
- When we say JavaScript is an interpreted language, it means that JavaScript code is executed line by line by an interpreter, rather than being compiled entirely before execution like in C++ or Java.

## JavaScript Code Execution Process

JavaScript code execution involves multiple stages, including parsing, compilation, and execution. It follows the **Execution Context** and **Call Stack** model to handle synchronous and asynchronous operations.

### 1. JavaScript Engine
- JavaScript engines like **V8 (Chrome)** or **SpiderMonkey (Firefox)** interpret and execute JavaScript code.
- The engine consists of two main components:
  - **Memory Heap**: Where memory allocation happens.
  - **Call Stack**: Where code execution (function calls) is tracked.

## 2. Execution Context
- The **Execution Context** defines the environment in which JavaScript code is executed. Every function and global code has its execution context.
  
### 2.1 Global Execution Context (GEC)
- The **Global Execution Context** is created when the JavaScript code first runs.
- It has two phases:
  1. **Creation Phase**: In this phase, JavaScript performs:
     - **Variable Hoisting**: Declarations of `var`, `let`, and `const` are hoisted.
     - **Function Hoisting**: Function declarations are hoisted to the top of their scope.
     - **`this` binding**: The global `this` is bound to the global object (`window` in browsers).
  
  2. **Execution Phase**: The code is executed line by line, and the variables are assigned their values.

### 2.2 Function Execution Context (FEC)
- Every time a function is invoked, a new **Function Execution Context** is created.
- It has the same two phases as the Global Execution Context:
  1. **Creation Phase**:
     - Local variables and function arguments are hoisted.
     - `this` is bound to the function's execution context.
  2. **Execution Phase**: The function code is executed line by line.

## 3. Call Stack
- The **Call Stack** is a data structure that manages the execution of functions.
  - When a function is called, it is pushed onto the stack.
  - Once the function completes execution, it is popped off the stack.
  
```javascript
function greet() {
    console.log("Hello");
}

function sayName(name) {
    console.log("My name is " + name);
}

greet();      // greet() is pushed, executed, and popped from the call stack.
sayName("Sam");  // sayName() is pushed, executed, and popped from the call stack.
```

## 4. Hoisting
- Hoisting is a process where variable and function declarations are moved to the top of their scope during the creation phase of the execution context.
```js
console.log(x); // Outputs: undefined due to hoisting
var x = 5;
```
- Only declarations are hoisted, not the initializations.

## 5. Event Loop and Callback Queue

JavaScript is single-threaded, meaning it can only execute one operation at a time. To handle asynchronous operations like HTTP requests or timers, the Event Loop comes into play.

### 5.1 Event Loop
- The Event Loop checks the Call Stack and the Callback Queue. If the stack is empty, it takes functions from the queue and pushes them onto the stack.

### 5.2 Callback Queue
- Asynchronous operations like setTimeout() and fetch() are sent to the Web APIs. Once completed, their callbacks are placed in the Callback Queue to be executed when the call stack is empty.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");
```
```sql
Start
End
Timer finished
```

## 6. Microtask Queue

- Microtasks (like Promises) are handled differently from regular tasks (like setTimeout). They are placed in a separate queue called the Microtask Queue and are executed before the Callback Queue.
-
```js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");
```
```sql
Start
End
Promise resolved
```
- Here, Promises in the microtask queue are executed immediately after the current task (before any timers).


### Summary
- JavaScript uses the Call Stack to manage execution.
- Execution Context (Global and Function) is created for every piece of code executed.
- Hoisting moves declarations to the top of the scope.
- Event Loop manages asynchronous tasks, ensuring non-blocking behavior.
- Callback Queue handles async callbacks; Microtask Queue prioritizes microtasks like promises.


## compare JavaScript execution process with Java and C++ :

## 1. JavaScript Execution Process

### JavaScript is a **Just-in-Time (JIT) compiled** language:
- It is **interpreted** line by line and **compiled** at runtime by the JavaScript engine (e.g., V8 for Chrome).
- JavaScript executes in a **single-threaded** environment but can handle asynchronous operations through **event-driven programming**.

### Key Features:
- **Execution Contexts**: JavaScript code runs in the context of either the global scope or within a function.
- **Hoisting**: Variables and functions are hoisted to the top of their scope.
- **Event Loop & Call Stack**: JavaScript uses a call stack for synchronous operations and an event loop with a callback queue for asynchronous tasks.
- **Non-blocking I/O**: Asynchronous operations (like network requests) do not block the main thread.
- **Just-in-Time Compilation (JIT)**: JavaScript engines compile code just before it is executed, optimizing performance dynamically.

### Example:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Asynchronous");
}, 1000);

console.log("End");
``` 
```sql
Start
End
Asynchronous
```

## 2. Java Execution Process
- Java is a `Compiled` and `Interpreted` language
- Java code is first compiled into `bytecode` by the Java Compiler `(javac)`.
- The Java Virtual Machine (JVM) interprets and executes the `bytecode`.

- **Features :**
- Compilation: Java source code (.java) is compiled into bytecode (.class files) by the Java compiler.
- Execution by JVM: The JVM uses Just-in-Time (JIT) compilation to optimize frequently used methods during runtime.
- Multi-threading: Java natively supports multi-threaded programming, allowing concurrent execution of multiple threads.
- Garbage Collection: Java automatically handles memory management via garbage collection, freeing up unused memory.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Start");
        
        new Thread(() -> {
            System.out.println("Asynchronous Task");
        }).start();

        System.out.println("End");
    }
}
```
```sql
Start
End
Asynchronous Task
```

### Java Execution Steps:
- 1. Compilation: Source code is compiled into bytecode.
- 2. Class Loading: JVM loads the .class file (bytecode).
- 3. Execution: JVM interprets or compiles the bytecode into machine code via JIT
- 4. Multi-threading: Java allows multiple threads to run simultaneously.

## 3. C++ Execution Process
- C++ is a Compiled language
- It is a statically typed language where the entire code is compiled into machine code before execution.
- The C++ compiler (g++, clang, etc.) compiles the source code into an executable binary file.

### Key Features:
- Compilation to Machine Code: C++ source code is compiled directly into native machine code specific to the system's architecture.
- Manual Memory Management: C++ allows developers to allocate and deallocate memory manually using new and delete.
- Multi-threading Support: C++ supports multi-threading through libraries like pthread and std::thread.
- No Hoisting: Unlike JavaScript, C++ variables are not hoisted, and declarations must appear before usage.
- No Event Loop: C++ executes sequentially, with no built-in asynchronous event loop. However, concurrency can be managed with threading.

```c++
#include <iostream>
#include <thread>

void asyncTask() {
    std::cout << "Asynchronous Task" << std::endl;
}

int main() {
    std::cout << "Start" << std::endl;

    std::thread t(asyncTask); // Asynchronous task
    t.join(); // Waits for the thread to complete

    std::cout << "End" << std::endl;
    return 0;
}
```
```sql
Start
Asynchronous Task
End
```
### C++ Execution Steps:
- 1. Compilation: Source code is compiled into machine code.
- 2. Linking: The linker combines object files into a final executable
- 3. Execution: The system executes the generated binary file.


## Summery

### avaScript Code Execution:
- Interpreted Language: Unlike C++ (which is directly compiled into machine code) and Java (which is compiled to bytecode and then executed by the JVM), JavaScript is typically interpreted in real-time by the browser or JavaScript runtime environment (like Node.js).
- Just-in-Time (JIT) Compilation: Modern JavaScript engines (e.g., Google V8 for Chrome, SpiderMonkey for Firefox) employ JIT compilation. Instead of converting JavaScript to bytecode first, the JavaScript engine interprets the code line by line initially, and during execution, the JIT compiler converts frequently used code segments directly into machine code for faster execution.
- No Bytecode: JavaScript doesn't have an intermediate bytecode format like Java. Instead, the JavaScript engine compiles the code to machine code on the fly as needed during execution.

### Key Steps in JavaScript Execution:
1. Parsing: The JavaScript engine parses the source code into an Abstract Syntax Tree (AST).
2. Interpretation/Execution: Initially, the JavaScript engine interprets the code. The interpreter translates the AST into bytecode or machine code at runtime
3. JIT Compilation: For performance-critical code, the JIT compiler steps in to optimize frequently executed code by compiling it directly into machine code.
4. Execution Environment: JavaScript executes inside a browser (client-side) or a runtime environment like Node.js (server-side), with access to APIs and resources provided by the environment.

### Diagram of Execution:

1. **JavaScript Source Code**  
    ↓  
2. **Parsing (AST)**  
    ↓  
3. **Interpreter**  
    - Executes code directly or converts it to machine code on the fly.  
    ↓  
4. **Machine Code**  
    ↓  
5. **Execution by the CPU**

In contrast:
- C++: Compiled directly to machine code before execution.
- Java: Compiled to bytecode, which the JVM interprets and optionally JIT-compiles into machine code during runtime.

