# OOP Concepts in JavaScript :

## Before ES6 : 2015

- There was no concept of class in js before ES6 then how obj was created ? the answer is `Constructor` was used as class before ES6.
- - In OOPs, class is the blueprint of objects. Similarly, before ES6, `Constructor` function was the blueprint of objects. 

- **Note :** Arrow function cannot be used as constructor function.

```js
// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding methods using the prototype
Car.prototype.getDetails = function() {
    return `${this.brand} ${this.model}`;
};

// Creating instances
let car1 = new Car('Tesla', 'Model S');
console.log(car1.getDetails()); // Output: Tesla Model S
```
## Now how to use inheritance without class before ES6 ?

- Using **prototype**

### Prototype :
- All JavaScript objects inherit properties and methods from a `**prototype**`.
- JS is a `prototype-based` language, so whenever we create a function, javascript engine adds a `prototype` property inside a function. 

- Prototype is basically an object alsp known as `prototype-object`, where there are various methods and properties in prototype-object, which enables all other objects to inherit these methods and properties.
- we can say that we can use prebuilt functions without defining that into program.

- whenevr we create an object, prototype automatically will attached to it.

```js

// simple object creation
let person = {};
console.log(person)

/* op>
{}
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__:ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

// onject creation using constructor function :

function Person(n){
    this.name = n;
}

let person1 = new Person("raj");
//console.log(person1)
console.log(person.prototype)

/* op>
Person {name: 'raj'}
name: "raj"
[[Prototype]]: Object
constructor: ƒ Person(n)  // < hre is the point
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__:ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/

```

### Prototype chain :
The prototype chain is a mechanism in JavaScript by which objects inherit properties and methods from other objects. When trying to access a property or method on an object, if JavaScript can't find it directly on that object, it looks for it on the object's prototype, then on the prototype's prototype, and so on, until it reaches the end of the chain (which is usually `null`).
- **key concepts:**
- 1. `Every object has a prototype`: In JavaScript, almost every object has a hidden internal property ([[Prototype]]), often accessible via __proto__.
- 2. `Prototype Chain`: If an object does not contain the property being looked for, JavaScript looks up the prototype chain until it finds the property or reaches the end of the chain.

### 1. simple example :
```js
// Object with a method
const animal = {
    canEat: true,
    eat() {
        console.log("Eating...");
    }
};

// Object that inherits from animal
const dog = {
    bark() {
        console.log("Woof!");
    }
};

// Set animal as the prototype of dog
Object.setPrototypeOf(dog, animal);

// Access properties/methods
dog.bark();    // Output: Woof!
dog.eat();     // Output: Eating...
console.log(dog.canEat); // Output: true
```
#### Explaination :
- `dog` doesn't have the `eat()` method or `canEat` property directly.
- JavaScript searches for `eat()` and `canEat` on `dog` but doesn’t find them.
- It then looks at the prototype (`animal`) and finds `eat()` and `canEat` there.
- This lookup process continues until it reaches `Object.prototype` and eventually `null` if nothing is found.

### 2. Prototype Chain with Constructor Functions :
When using constructor functions, objects created from them share the same prototype.

```js
// Constructor function
function Person(name) {
    this.name = name;
}

// Adding method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating instances
const person1 = new Person('John');
const person2 = new Person('Jane');

// Accessing the shared prototype method
person1.greet(); // Output: Hello, my name is John
person2.greet(); // Output: Hello, my name is Jane
```
#### Explaination :
- `person1` and `person2` don’t have the `greet()` method directly.
- The `greet()` method is found on `Person.prototype`, which is shared among all instances of Person.
- The prototype chain: `person1` -> `Person.prototype` -> `Object.prototype` -> `null`.


## Prototypical Inheritance
`Prototypical Inheritance` in JavaScript refers to the ability of an object to inherit properties and methods from another object. Unlike classical inheritance (as seen in languages like Java or C++), which involves classes, JavaScript's inheritance system is based on prototypes. Every object in JavaScript has an internal link to another object called its prototype, and this chain of prototypes forms what is called the `prototype chain`.

### Example 1: Basic Prototypical Inheritance
```js
// Parent object (prototype)
const animal = {
  eat() {
    console.log('Animal is eating');
  }
};

// Child object inheriting from the parent
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof!');
};

dog.eat();  // Output: Animal is eating (inherited from animal)
dog.bark(); // Output: Woof! (own method)
```
- In this example, the dog object inherits the eat() method from the animal object.
- The prototype chain looks like this: dog -> animal -> Object.prototype -> null.

### Example 2: Creating Objects with Prototypes Using Object.create() :
- Object.create() allows you to create a new object with a specified prototype.
```js
const animal = {
  eat() {
    console.log('Animal is eating');
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof!');
};

dog.eat();  // Output: Animal is eating (from animal prototype)
dog.bark(); // Output: Woof!
```
- Here, `dog` is created with `animal` as its prototype. Thus, `dog` inherits all properties and methods from `animal`.

### Example 2: Creating Objects with Prototypes Using Constructor Functions:

```js
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to Person's prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Create a new Person object
const person1 = new Person('John', 30);
person1.greet(); // Output: Hello, my name is John
```
- The Person function acts as a constructor, creating new objects with the name and age properties.
- The greet() method is added to Person.prototype, which is shared among all instances of Person.

## ES6 Classes and Prototypes

With ES6, JavaScript introduced the class keyword, which provides syntactic sugar over the existing prototype-based inheritance system. Although it looks like class-based inheritance, it still uses prototypes under the hood.

### ES6 Classes (Behind the Scenes Prototypes)
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('John', 30);
person1.greet(); // Output: Hello, my name is John

console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
```
- In this case, Person is a class, but under the hood, JavaScript still uses prototypes.
- The greet() method is added to Person.prototype, and instances of Person inherit this method through the prototype chain.


## after ES6 : 2015

JavaScript is a prototype-based language that supports Object-Oriented Programming (OOP) concepts, including encapsulation, inheritance, polymorphism, and abstraction. Below are examples of each OOP concept in JavaScript.

### 1. Encapsulation
Definition: Encapsulation is the concept of wrapping data (variables) and methods (functions) that operate on that data into a single unit, known as an object. This encapsulation helps restrict access to some of the object's components, which is a means of preventing unintended interference and misuse of the methods and variables.

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance; // Private variable

    // Method to get the balance
    this.getBalance = function() {
      return _balance;
    };

    // Method to deposit money
    this.deposit = function(amount) {
      if (amount > 0) {
        _balance += amount;
        console.log(`Deposited: ${amount}`);
      }
    };

    // Method to withdraw money
    this.withdraw = function(amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(`Withdrew: ${amount}`);
      } else {
        console.log('Insufficient balance');
      }
    };
  }
}

// Creating a new BankAccount instance
const account = new BankAccount('Alice', 1000);
account.deposit(500);        // Output: Deposited: 500
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);       // Output: Withdrew: 200
console.log(account.getBalance()); // Output: 1300
// Trying to access the private variable _balance directly will not work
// console.log(account._balance); // Output: undefined
```

- The _balance variable is private and cannot be accessed directly from outside the class.
- Methods like getBalance, deposit, and withdraw allow controlled access to the balance, promoting data integrity.

### 2. Inheritance
Inheritance is a mechanism where a new class can inherit properties and methods from an existing class. This promotes code reusability and establishes a hierarchical relationship between classes.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

// Creating instances of Dog and Cat
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

dog.speak(); // Output: Rex barks.
cat.speak(); // Output: Whiskers meows.
```
- The Dog and Cat classes inherit from the Animal class using the extends keyword.
- Each subclass overrides the speak method, providing its specific implementation while still maintaining the relationship with the Animal class.

### 3. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common super class. It enables a single function or method to work in different ways based on the object it is operating on.

```js
class Shape {
  area() {
    return 0; // Default implementation
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height; // Rectangle area calculation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius; // Circle area calculation
  }
}

// Array of shapes
const shapes = [new Rectangle(10, 20), new Circle(5)];

shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`); 
});

// Output:
// Area: 200
// Area: 78.53981633974483
```
- Both Rectangle and Circle extend Shape and implement the area method.
- The shapes array contains different shapes, and calling area() will invoke the respective method for each shape, showcasing polymorphism.

### 4. Abstraction
Abstraction is the concept of hiding complex implementation details and exposing only the necessary features of an object. It helps in reducing programming complexity and increasing efficiency.

```js
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  // Abstract method (not implemented)
  startEngine() {
    throw new Error('Method not implemented');
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log(`${this.brand} car engine started.`);
  }
}

class Motorcycle extends Vehicle {
  startEngine() {
    console.log(`${this.brand} motorcycle engine started.`);
  }
}

// Creating instances
const myCar = new Car('Toyota');
const myBike = new Motorcycle('Harley-Davidson');

myCar.startEngine(); // Output: Toyota car engine started.
myBike.startEngine(); // Output: Harley-Davidson motorcycle engine started.
```
- The Vehicle class has an abstract method startEngine, which is expected to be implemented by its subclasses.
- Both Car and Motorcycle provide their implementations of startEngine, while the details of how each engine starts are hidden from the user.
