// parent , children , and sibling


// // see parent and its children :-
// let parentElement = document.querySelector('.content');
// console.log(parentElement);
// /* op>
//  <div class="content">
// <p>children1 of content</p>
// <p>children2 of content</p>
// </div>
// */

// all children of parent
// let parentElement = document.querySelector('.content');
// console.log(parentElement.children);
// op> HTMLcollection 

// we can not run forEach method on HTMLcollection
// first convert it into array

// console.log(Array.from(parentElement.children)); // you can see in console  its converted into Array
// //adding new class to children(Accessind children)
// Array.from(parentElement.children).forEach(function(x){
//     x.classList.add("coders");
// })

// /*op> from browser's Element section (bcz dynamic changes not show in static html file)
// <div class="content">
//         <p class="coders">children1 of content</p>
//         <p class="coders">children2 of content</p>
//     </div>
//     */  


// find parent of spacific child
let childElement = document.querySelector('h1');
console.log(childElement.parentElement);
console.log(childElement.previousElementSibling);

// similarly we  can find next/prev sibling of child


    

