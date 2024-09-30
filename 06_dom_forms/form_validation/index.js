// form validation 



// Regular expressions (Regex):-

// it is the pattern of characters that form a search pattern.  hey are used for pattern matching within strings, allowing you to validate, search, replace, or manipulate text efficiently.
// or we can say for data validation


// Common Use Cases:

//1.Validation: Check if a string meets certain criteria (e.g., email format, phone numbers)

//2. Search: Find specific patterns in text

//3. Replace: Modify parts of a string that match a certain pattern.


// Implementation of password validation :

//Length at least = 8
// At least contain one upper case letter
// At least contain one Lower case letter
// At least contain one digit 0 to 9


let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email')// for id - # as css
let password = document.querySelector('#password');
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z)(?=.*[0-9]).{8,}$"

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern)
    console.log(result);
    if(result){
        console.log("your password is strong ");

    }else{
        console.log("Try again");
    }

} )
 
/* op> 
Surendra#@20
index.js:29 ['Surendra#@20', index: 0, input: 'Surendra#@20', groups: undefined]
index.js:31 your password is strong 
*/



// e.preventDefault();

// When a form is submitted, the default behavior of the browser is to send the form data to the server and reload the page. By calling e.preventDefault();, you stop this default action from occurring. This allows you to control what happens next.
//If you didn't include e.preventDefault();, when the "Sign Up" button is clicked, the form would be submitted, the page would reload, and you wouldn't see the console output because the form action would take precedence, navigating away from the page.

// By using e.preventDefault();, the page stays the same, allowing you to process the data in JavaScript. You can then perform additional actions like validation, sending the data to a server via AJAX, or displaying feedback to the user without losing the current state of the page.






