// user name validation 

// username can only consist of A-Z or a-z
// username length between 6 to 12 

let form = document.querySelector('.sign-up-Form');
let user = document.querySelector('#name');
let password = document.querySelector('#password');
userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let username = user.value;
    
    // test 
    let result = userNamePattern.test(username);
    if(result== true){
        console.log("user name is valid")

    }else{
        console.log("user name is invalid try again");
    }
})
/* op> 
surendra
user name is valid 
sure23
user name invalid
*/

// keyboard event 
// (live feedback)

user.addEventListener('keyup', (e)=>{
    if(userNamePattern.test(e.target.value)){
        user.setAttribute('class', 'success');
        console.log('passed')
    }else{
        user.setAttribute('class', 'error')
        console.log('fail')
    }
})
/*
su
fail
suren
fail
surendra
passsed
*/




