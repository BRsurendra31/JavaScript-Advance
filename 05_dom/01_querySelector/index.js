//getting html element/s using querySelector/All

// querySelector returns "first element" that match css selector 
// Toget all matched elements we use querySelector all 

// access element with element name 

// let resultedElent = document.querySelector('p');
// console.log(resultedElent);
// single matched element will be selected that matched with p   as  op> <p>Helo coder</p>

/*
let resultedElent = document.querySelectorAll('p');
console.log(resultedElent);
// all element will be selected that matched with element p
//op
// NodeList(2) [p, p]
// 0: p //<p>Hello coder</p>
// 1:p //<p>welcome coder</p>
// length:2
*/

                
// Access element with class 
/*
let resultedElent = document.querySelector('.coderdost');
console.log(resultedElent);
// // sinlge element will be selected that matched with class "codedot" , op ><h2 class="coderdost"> coder dost family</h2>
// siilarly for querySelectorAll

*/


// access element with id 

/*
let resultedElent = document.querySelector('#coders');
console.log(resultedElent); //<h3 id="coders"> my passion is coding</h3>
console.dir(resultedElent); //h3#coders
// dir to see all things in object formate

// we can change these all properties using   programming
// to do we have two steps - 1. selection 2. then modification

*/



// other ways to get html elements 

// > old methods , still in today use 

//1. Get element by tagName 
// let tagNameElement = document.getElementsByTagName('p');
// console.log(tagNameElement);
// this gives htmll collections not node like querySelector 
// for each loop doesnt work in this while works in querySelector
 // similarly -
// 2. Get element by clsss name 
// 3. Get element by id
// 3. Get element by class name 

// but querySelector is modern and most preferable to use 



// Updating and changing content -
