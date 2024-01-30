// Constructor function was worked as class before ES6

function Book(name, id){
    this.b_Name = name;
    this.b_id= id;

     this.sayHi = function(){
        console.log("Hi");
    } 

}

let book1 = new Book("physics", 7);
let book2 = new Book("maths", 8);
console.log(book1);
console.log(book2);