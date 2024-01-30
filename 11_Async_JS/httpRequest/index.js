// Async JS 

// Example 1. Making HTTP Request


// let request = new XMLHttpRequest(); // there are lots of functions in XMLHttpRequest prototype including open(), send()  
// console.log(request);  


// let request = new XMLHttpRequest();
// console.log(request, request.readyState)

// request.addEventListener('readystatechange', ()=>{
//     console.log(request, request.readyState);
// })


// // set up request 
// request.open("Get", "https://jsonplaceholder.typicode.com/todos");

// // sending the request 
// request.send();

// you can check request and respond in network/todos 

/* op>
 
states 
0
1
2
3

*/


// value    state       Description 
// 0        UNSENT      client has been created, open() not call yet
// 1        OPENED      open() has been called 
// 2        HEADERS_RECEIVED  send() has been called and headers
// 3        LOADING     downloading; responseText holds partial data 
// 4        DONE        the operation is completed


// for response in text 
let request = new XMLHttpRequest();
console.log(request, request.readyState)

request.addEventListener('readystatechange', ()=>{
    if(request.readyState == 4){
        console.log(request.responseText);
    }
})


// set up request 
request.open("Get", "https://jsonplaceholder.typicode.com/todos");

// sending the request 
request.send();


/* op 

status: 200

[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },

  */



  // http response status codes

//   informational response (100-199)
//   successful response (200-299)
//   redirection Message (300-399)
//   client error response (400-499)
//   server error response  (500-599)




