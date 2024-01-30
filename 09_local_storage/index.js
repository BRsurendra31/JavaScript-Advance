// // local storage

// // set item in local storage 

// localStorage.setItem('passion', 'programming'); // key-passion, value-programming
// localStorage.setItem('age', 24);
// console.log(localStorage);// we can alo check it in application section inn dev tool

// /*op>
// Storage {passion: 'programming', age: '24', length: 2}
// age:"24"
// passion:"programming"
// length:2
// [[Prototype]]:Storage
// */

// // get item from local storage

// // console.log(localStorage.getItem('passion')); // get item bt key
// // console.log(localStorage.getItem('age')); // get item bt key
// // //op>
// // //progaramming
// // // 24

// // // update 
// // localStorage.setItem('passion', 'jogging');// overrite the prev
// // console.log(localStorage);
// // /*op>
// // {passion: 'coding', age: '24', length: 2}
// // */

console.log(localStorage); // after commenting all , still local storage has stored values

// these values will stored permanently on particular local lost in particular local storage even after close and open browser again

// it will we stored permanently untill we rtemove or clear



// remove item from local storage
localStorage.removeItem('passion'); // remove item by key
console.log(localStorage);

// op
// {age: '24', length: 1} // passion key removed with its value






// How to store complex data structure like -
// array of objects
// bcz in local storage data store in string formate 

let vehicle = [
    {company : "Honda", model : '2009'},
    {company : "toyota", model : ' 2010'}
]
console.log(typeof vehicle);// object

// need to convert into string 
let stringOfVehicle = JSON.stringify(vehicle);
console.log(stringOfVehicle);
console.log(typeof stringOfVehicle) // string 

// we can store it in local storage

localStorage.setItem('vehicle', stringOfVehicle);
console.log(localStorage);

/* op > 
Storage {age: '24', vehicle: '[{"company":"Honda","model":"2009"},{"company":"toyota","model":" 2010"}]', length: 2}
*/

// get stored item but in object formate 

let storedData = localStorage.getItem('vehicle');
let objFormate = JSON.parse(storedData);
console.log(objFormate);
console.log(typeof objFormate); // object

// same way we can store and retrieve complex data 

// data stored local host wise so that no one can get others dat 