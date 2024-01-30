// form validation 



// Regular expression (Regex):-

// it is the pattern of characters used to do pattern matching 
// or we can say for data validation


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

// i  need to learn about regular expression or use online resourses as required














