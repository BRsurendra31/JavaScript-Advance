// prototype :
    //(inheritance concept in js)

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


// some basic use 

let person2 = {
    name : " surendra"
};

console.log(person2.hasOwnProperty('name')); // chaecks whether property of obj (name) present or not , it returns true/false 

// op>
// true


// accessing other obj properties in other one:
     
    const obj1={
        name : "raj",
        
    }
    
    const obj2 = {
        roll : 1 ,
        __proto__ : obj1
    
    }
     console.log(obj2);
     console.log(obj2.name);

     /* op >

     {roll: 1}
     roll: 1
     [[Prototype]]: Object
     name: "raj"
     [[Prototype]]: Object
    .....
    ....
*/

// when name already present in obj 2 then it returns name from obj2 only
// (inheritance )
const obj3={
    name : "raj",
    getName: function(){
        return this.name;
    }
}

const obj4 = {
    roll : 1 ,
  //name : "surendra",
    __proto__ : obj3

}
 console.log(obj4.getName());

 // op >  raj   // surendra (if it available in obj4)

 const obj5 = {
    branch : "cse" ,
  //name : "surendra",
    __proto__ : obj4

}
 console.log(obj5);
 console.log(obj4.name);; //raj

 /* op>

raj
{roll: 1}
roll: 1
[[Prototype]]: Object
roll: 1
[[Prototype]]: Object
getName: ƒ ()
name:"raj"
[[Prototype]]: Object
*/



//  prototype for self 

function MyPrototype(name){
    this.name = name;

}

MyPrototype.prototype = obj5;
const myProto = new MyPrototype("Priyam");
console.log(myProto);
console.log(myProto.name);
console.log(myProto.roll);
console.log(myProto.branch);

/* op > 
    MyPrototype {name: 'Priyam'}
    namem: "Priyam"
    [[Prototype]]:Object
    branch: "cse"
    [[Prototype]]: Object
    roll: 1
    [[Prototype]]: Object
    getName: ƒ ()
    name: "raj"
    [[Prototype]]: Object

*/ 


// prototype 
        // (code dost)


let Car = function(color , model ){
    this.color = color;
    this.model = model;
}

Car.prototype.startEngine = function(){
    console.log("this is start engine ");
}
Car.prototype.company = "Honda";
console.log(Car.prototype);
let carObj1 = new Car("yellow", 2022)
let carObj2 = new Car("blue", 2021)
//console.log(carObj1, carObj2);
console.log(carObj1.__proto__.__proto__.__proto__);

/*
{startEngine: ƒ, constructor: ƒ}
startEngine
: 
ƒ ()
constructor
: 
ƒ (color , model )
[[Prototype]]: Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
*/





// arr 

let arr = [1,2, 3];
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__) // null
console.log(arr.__proto__.__proto__.__proto__.__proto__) // error > cannot read properties of null

