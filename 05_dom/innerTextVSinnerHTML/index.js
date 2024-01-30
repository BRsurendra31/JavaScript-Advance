
// updating and changing content 

// innerText


 
// Ignores spaces
// let heading = document.querySelector('h1');
// console.log(heading.innerText);
// //op> welcome coder dost family

// retrieve and set content in plain text
 //let content = document.querySelector('.content');
// console.log(content.innerText);
// // op>welcome coders

// modify
//let content = document.querySelector('.content');
// content.innerText = "<p> Great coder </P>";
// console.log(content.innerText);
// //op> <p> Great coder </P> in console and  same shows on screen with tag as o/p
// // overrited the welcome coders by  <p> Great coder </P> same on both screen and console
// let content = document.querySelector('.content');
// content.innerText += "<p> Great coder </P>";
// console.log(content.innerText);
// op> welcome coders<p> Great coder </P> same on both screen and console
let content = document.querySelector('.content');
content.innerText += " kase ho aplog, sab thik hai n ";
console.log(content.innerText);
//op> welcome coders kase ho aplog, sab thik hai n on both screen and console
// so we  can add text dynamically 









// innerHTML
// it does not ignore spaces 
// retrieve(get) and set content in HTML formate

// it does not ignore spaces 
// let heading = document.querySelector('h1');
// console.log(heading.innerHTML);
// //op>          welcome coder dost family
            // '>' this is the notation of console  

// let content = document.querySelector('.content');
//  console.log(content.innerHTML);
//  // op><p>welcome coders</p> in console and "welcome coders" shows on screen without tag as o/p

// modify
// let content = document.querySelector('.content');
// content.innerHTML ="<p> Great coder </P>";
//  console.log(content.innerHTML);
 // op> <p>Great coder</p> in console and "Great coder" on screeen overrrite "welcom coders"  in console and 
//  let content = document.querySelector('.content');
//  content.innerHTML +="<p> Great coder </P>";
//   console.log(content.innerHTML);
//op> <p> Great coder </P> added in html file dynamically not overrite "<p>welcom coder<p>" both shows on screen as "welcome coders "\n  and "Great coder"
 
// we can modify both  html and text content dynamically through js



