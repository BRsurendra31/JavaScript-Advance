// promises 

// let promise = new Promise((resolve, reject)=>{
//     console.log("iam a promise ")// promiseSatate - pending 
//     // resolve(123); // promiseSatate - fulfilled 
//     reject("error aa gaya ")// promiseSatate- rejected

    
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId)
//             resolve("success")
//             if(getNextData){
//               getNextData();
//             }
//           },5000);
//     })
    
//   }

//   let p1= getData(1);
//   let p2= getData(2);
// // op

// // data1 
// // data2 both come simultaneously after 5sec






// // Promise can be 
//   1. pending 
//   2. fulfilled(resolve)
//   3. reject 


// // if promise Fulfilled (resolve) then -
//                         Promise.then ((res){...}); we use 

// // if promise reject then 
//                 promise.catch((err){...}); we use 


// // e.g

// const getPromuse =()=>{
// return new Promise ((resolve, reject)=>{
//   console.log("iam promise ");
//   //resolve("success");
//   reject("error");

// });

// }

// let promise = getPromuse();
// promise.then((res)=>{
//   console.log("promise fulfilled : ", res );
// });
// promise.catch((err)=>{
//   console.log("err aa gaya :", err);
// });

// // // op for resolve 
// // >iam promise 
// // >promise fulfilled : sucess 

// // // op for reject 
// // >iam promise 
// // >error aa gaya : erroe





// promise chain 
    // go to notebook for very basic 

// // by  callback hell 
// function getData(dataId, getNextData){
//   setTimeout(()=>{
//     console.log("data", dataId)
//     if(getNextData){
//       getNextData();
//     }
//   },3000);
// }
// // more complex 
// getData(1, ()=>{
//   console.log("ge4tting data2")
//   getData(2, ()=>{
//     console.log("ge4tting data3")
//     getData(3,()=>{
//       console.log("ge4tting data4")
//       getData(4,()=>{
//         console.log("ge4tting data5")
//         getData(5)
//       })
//     })
//   })
// });



// by  promise chain 
function getData(dataId){ // no need getnextData
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("success")
          },3000);
    })
    
  }
  // optimised 
  getData(4)
          .then((res)=>{
            return getData(6);

            })
            .then((res)=>{
              return getData(9);
            })
            .then((res)=>{
              return getData(23);
            })
            .then((res)=>{
              console.log(res);
            });
// // op 
// >data4 - take 3 sec 
// >data6 3 sec after data4 and so on 
// >data9
//>data23
//>success 



