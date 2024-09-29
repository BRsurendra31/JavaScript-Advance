// event bubbling, stop event bubbling , event capturing and event deligation 


// event bubbling :-
// When an event occurs on an element, such as a click, it first runs the event handlers on the element itself. Then, it "bubbles up" the DOM tree, executing the event handlers of all its ancestors (parent, grandparent, etc.), unless the propagation is stopped
// i.e event travels from child to root 
//this is called event bubbling 

/* 
let ggparent = document.querySelector(".GreatgrandParent");

ggparent.addEventListener("click", ()=>{
    console.log("ggparent clicked me");
})
let gparent = document.querySelector(".grandParent");

gparent.addEventListener("click", ()=>{
    console.log("Gparent clicked me");
})
let parent = document.querySelector(".parent");

parent.addEventListener("click", ()=>{
    console.log("Parent clicked me");
})

let child = document.querySelector(".child");

child.addEventListener("click", ()=>{
    console.log("child clicked me");
})

*/

// op> 
// child clicked me
// parent clicked me 
// Gparent clicked me
// ggparent clicked me

// that means This happens because the event first triggers the child event, then bubbles up to the parent and so on.

// above propagation :
// button > div > body > html




// stop event bubbling

//To stop event bubbling, you can use event.stopPropagation() inside the event handler. This prevents the event from propagating to parent elements.

/*
document.querySelector('.child').addEventListener('click', function(event) {
    event.stopPropagation();  // Stops event from reaching parent
    console.log('Child clicked me');
});
*/

// op> child clicked me

// In this case, clicking the button will only trigger the Child clicked message, and the event will not bubble up to the parent.



// Event capturing :

// Event capturing, also known as trickling, is the opposite of event bubbling. It is a mechanism in the DOM (Document Object Model) where an event starts from the root of the DOM tree and propagates down to the target element that triggered the event.


document.querySelector('.parent').addEventListener('click', function() {
    console.log('Parent clicked during capturing phase');
}, true); // true indicates capturing phase

document.querySelector('.child').addEventListener('click', function() {
    console.log('Child clicked');
});

// op>
//Parent clicked during capturing phase
// Child clicked

// we can clearly see propagationis from child to parent and so on



// Stopping Event Capturing:

// While you can stop event bubbling with event.stopPropagation(), you typically don't stop capturing as it's less common in practice.



// Event Delegation :

//Event delegation is a technique in JavaScript that allows you to attach a single event listener to a parent element instead of adding multiple event listeners to individual child elements. This approach takes advantage of the event bubbling mechanism, making it more efficient, especially when dealing with a large number of elements.

// How Event Delegation Works:

// 1. You add an event listener to a parent element.
//2. When an event occurs on a child element, the event bubbles up to the parent
// 3. The event listener on the parent checks the event target to determine which child element triggered the event.


document.querySelector('#itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked on: ' + event.target.textContent);
    }
});

// op>
// when clicked on Item 1 - op> Clicked on: Item 1
//  when clicked on Item 2 - op> Clicked on: Item 2 so on

