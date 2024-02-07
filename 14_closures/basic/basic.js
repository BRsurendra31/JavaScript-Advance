//Block scope :  // source-mdn web docs

// function fun1(){
//    let userName = "surendra20"

// }// we cant access variable outside function scope, bcz variables can be accessed within its block only
// console.log(userName) //Uncaught ReferenceError: userName is not defined



/*

//# Lexical scoping :

//     //eg1
// function outer(){
//     let userName = "srd20";
    
//     function inner(){
//         console.log("inner-",userName); //inner- srd20
//     }
//      inner();
// }
// outer();
// console.log("outer-", userName) //reference error- userName is not defined

// // eg2
// function outer(){
//     let userName = "surendra20";
    
//     function inner1(){
//         console.log("inner1-",userName); //inner1- surendra20
//     }
//     function inner2(){
//         console.log("inner2-",userName); //inner2- surendra20
//     }
//     inner1();
//     inner2();
     

// }
// outer();
// console.log("outer-", userName) //reference error- userName is not defined

// // lexical scoping : a child function(inner func) have the access of parent function(outer fun) data 
// //i.e Nested functions have access to variables declared in their outer scope.
// //In this particular example, the scope is called a function scope, because the variable is accessible and only accessible within the function body where it's declared.
// //note- parent func share same memory with childs


// //eg3

// function outer(){
//     let userName = "surendra20";
//     console.log(password);//error- data cannot accessed from child to parent 
//     function inner1(){
//         let password = "surendra#@28"
//         console.log("inner1-",userName); //inner1- surendra20
//     }
//     function inner2(){
//         console.log(password)//error- data not accessible between child to child works totally as differeny two functions
//         console.log("inner2-",userName); //inner2- surendra20
//     }
//     inner1();
//     inner2();
     

// }
// outer();
// console.log("outer-", userName) //reference error- userName is not defined

*/


//# Closure :


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }

//     return displayName; // note it return reference not 
//   }
  
//   const myFunc = makeFunc();
//   console.log("after myfun")// just for understanding 
//   myFunc();
  

// /* we know that function ka scope tabtak rahta h jabtak vo execute hota h,
//   the local variables within a function exist for just the duration of that function's execution.
//   Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible for myFun()
//   but this is not the case with JavaScript bcz  functions in JavaScript form closures in which function reference is returnd.

//   >In closure , whole lexical scope of func is shared (memory is shared as reference) not only executio context(displaName func and its data).

//   >In short closure me jab func return hota h to sirf function hi nahi usaka sara lexical scope return hota h  
// */