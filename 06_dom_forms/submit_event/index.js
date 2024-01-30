// submit event


// let form = document.querySelector('.sign-up-Form');
// let email = document.querySelector('#email')// for id - # as css
// let password = document.querySelector('#password');

// form.addEventListener('submit', (e)=>{
//    e.preventDefault(); 
//     console.log(email.value, password.value);



// })
// op> surendra874874@gmail.com ass

// short cut 
// let form = document.querySelector('.sign-up-Form');

// form.addEventListener('submit', (e)=>{
//    e.preventDefault(); //by dafault form pahle kahi submit hota hai then reload and we are not provided a page to submit so remove this we needed preventDefault() 
//     console.log(form.email.value, form.password.value);

// })

// op>surendra874874@gmail.com ert

// we can also do using name -
let form = document.querySelector('.sign-up-Form');

form.addEventListener('submit', (e)=>{
e.preventDefault(); //by dafault form pahle kahi submit hota hai then reload and we are not provided a page to submit so remove this we needed preventDefault() 
 console.log(form.userEmail.value, form.userPassword.value);
})
// op> surendra@gmail.com rtdjjh
