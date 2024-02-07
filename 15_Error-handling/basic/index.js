/*
let a= prompt("Enter a number :") //3
let b = prompt("Enter second number : ") // 4

let sum = a + b;
let c= prompt(sum); //34 , bcz js takes everything as string
*/

/*
// need to pase string to int :
let a= prompt("Enter a number :") //3
let b = prompt("Enter second number : ") // 4

let sum = parseInt(a) + parseInt(b);
let c= prompt(sum);// can also print on console  //7 

// but user can play with software by entering anything like string, float , char or combinations etc.
// so sum return NaN 
// IF USER enters wrong input then js not reflect error immidiately 
//and they do calculation on whatever user gives input and generates result , 
// this nature is called Forgiveness of js 

*/


/*
// so we need to handle this error byself by throwing error msg :


let a= prompt("Enter a number :") //3
let b = prompt("Enter second number : ") // sdfds

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed ")

}

let sum = parseInt(a) + parseInt(b);
let c= prompt(sum);

// above input throw an error ny saying : Uncaught SyntaxError: sorry this is not allowed 
*/


// try and catch 
// let a= prompt("Enter a number :") //3
// let b = prompt("Enter second number : ") //4

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry this is not allowed ")

// }

// let sum = parseInt(a) + parseInt(b);
// console.log("sum is ", sum*x) // x is not defined gives reference error 


//to handle this we can use try and catch

/*
//try-catch :
// not work with asynch js 

let a= prompt("Enter a number :") //3
let b = prompt("Enter second number : ") // 

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed ")

}

let sum = parseInt(a) + parseInt(b);

try {
    console.log("sum is ", sum*x)
    
} catch (error) {
    console.log("Error aa gaya bhai")
    
}

*/


//finally   :

// used in function 
// in normal function statement below the return statement not work after returning 
// to run below  statement after returnig finally used 

let a= prompt("Enter a number :") //3
let b = prompt("Enter second number : ") // 

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed ")

}

let sum = parseInt(a) + parseInt(b);

function main(){
    let x=1;

try {
    console.log("sum is ", sum*x)
    return true;
    
} catch (error) {
    console.log("Error aa gaya bhai")
    return false;
    
}
finally{
    console.log("files are closed and db connection is being closed ")
}

}

main();

// 3
//4
// sum is 7
//files are closed and db connection is being closed

// finally also work inside func although after returning true at try block