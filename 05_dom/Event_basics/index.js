// Event basics 

// events -
// 1. click event 
//2. copy event
// 3. submit event 
// 4. keyboard event 

// 1. click event on button

let eventElement = document.querySelector('.clickMe');
eventElement.addEventListener('click', function(){ // function() it is listener /  a call back func it will execute when click hoga 
    console.log('someone clicked me ')// listener only listen before clicking and execute after clickin g
    // technical term - listener get event when someone clicks 
})
//op> (6) someone clicked me - 6 indicates 6 time clicks 


// Actually "button" is not only clicable , everything on screen is clickable and we can feel it using mouse click anywhere



//2. click event on list :-

// let elements = document.querySelectorAll('li');
// console.log(elements);
// /*op>
// NodeList(4) [li, li, li, li]
// 0:li
// 1:li
// 2:li
// 3:li
// length:4
// [[Prototype]]: NodeList
// */

// now we get nodelist (in the form of array) so we can easily apply listener on each list using forEach method

// let elements = document.querySelectorAll('li');

// elements.forEach(function(element){

//     element.addEventListener('click', function(){
//         console.log('Item clicked');
//     })

// })
//op> (2)Item clicked - 2 indicates 2 times click on list 

// we can find on which list is clicked using 'target' key - 

// let elements = document.querySelectorAll('li');

// elements.forEach(function(element){

//     element.addEventListener('click', function(e){
//         console.log('Item clicked');
//         console.log(e.target);

//     })

// })
/* op>
Item clicked 
code
Item clicked 
repeat

            i.e two items are targeted(clicked) from the list code and repeat

*/ 

// we can give line- through on clicked item 
let elements = document.querySelectorAll('li');

elements.forEach(function(element){

    element.addEventListener('click', function(e){
        console.log('Item clicked');
        console.log(e.target);
        e.target.style.textDecoration = "line-through";

    })

})
/*op>
sleeo
code
repeat
        these all items are with line-through we cant see anywhere otherthan screen

*/ 

