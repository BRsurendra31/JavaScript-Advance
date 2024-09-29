// follow Notebook


// Variables 



function example() {
    console.log(x); // Outputs: undefined (due to hoisting)
    var x = 5;
    console.log(x); // Outputs: 5
}
example();

if (true) {
    var y = 10; // y is function-scoped, not block-scoped
}
console.log(y); // Outputs: 10


let a=9;
// let a =8; // we cannot reassign a let variable
console.log(a);


let count = 1;
if (true) {
    let count = 2; // Different variable, scoped to this block
    console.log(count); // Outputs: 2
}
console.log(count); // Outputs: 1


const maxUsers = 100;
// maxUsers = 200; // This would cause an error

const user = { name: "John" };
user.name = "Doe"; // This is allowed
console.log(user.name); // Outputs: Doe


// HOISTING

console.log(x); // Outputs: undefined (because of hoisting)
var x = 10;
console.log(x); // Outputs: 10
