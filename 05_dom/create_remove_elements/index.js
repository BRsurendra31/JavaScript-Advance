// create , remove elements

// creating
const ul = document.querySelector('ul');
let button = document.querySelector('.clickMe');
button.addEventListener('click', function(){
    let li = document.createElement('li')
    li.textContent = "something added"
    //ul.append(li) or
    ul.prepend(li);


})
/* op>
by apend -
Eat
sleeo
code
repeat
something added
something added
something added

by prepend -
something added
something added
something added
something added
Eat
sleeo
code
repeat
*/


// removing 

let elements = document.querySelectorAll('li');

elements.forEach(function(element){

    element.addEventListener('click', function(e){
        e.target.remove()// as element is targeted(clickrd) as that element will be removed 

    })

})
// eat is clicked then automaticalm it removed from list and so on 



// we add or remove any elements h1 div etc 