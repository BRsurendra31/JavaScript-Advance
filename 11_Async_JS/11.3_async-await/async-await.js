
// async-await
    // async func always returns promise 

    // async function print(){
    //     console.log("hello");
    // }
    // // op
    // // >print=();
    // // >hello
    // // >promise{<fulfilled>: undefiend}




// await pauses the execution of its surrouning async function until the promie is settled 

function getData(dataId){ // no need getnextData
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("success")
          },3000);
    })
    
  }

  async function getAllData(){
    await getData(3)
    await getData(6)// wait untill data3 success
    await getData(7)
    await getData(9)
    
  }
getAllData();

// // op
// >data3
// >data6
// >data7
// >data9



  //Below just for awareness 

//When to use return
// Directly return a promise when the value is intended to be used by the caller.
//  For example, promise of query result can be directly returned.

// async function fetchMatch (gameID) {
//   const matchID = await api.findMatchIDByGameID(gameID);
  
//   return db.findMatchByID(matchID);
// }



//When to use await

// await should be used for commands to ensure void is returned. 
// The reason why void is returned for command is to enforce command-query separation. 
// Do not mix updates with reads as that violates single-responsibility principle.

// async function updateMatchScore (match) {
//   const score = calculateScore(match);
  
//   await db.updateMatchScoreByID(match.id, score);
// }


//When to use return await

// return await should only be used inside a try…catch as it is redundant otherwise. 
// This can be enforced with the ESLint rule no-return-await.
// Note the await is required for the catch block to work. 
// Without the await, the error will bubble up to the caller without the console.log message.

// async function fetchMatch (gameID) {
//   try {
//     return await api.findMatchIDByGameID(gameID);
//   } catch (error) {
//     console.log('failed to find match for game %s: %O',
//       gameID,
//       error
//     );
    
//     throw error;
//   }
// }


//When to use nothing
// Do not await all promises. Sometime a promise should be a side-effect to prevent blocking the async function 
// or causing the entire async function to be rejected when the promise fails.

// async function fetchMatch (gameID) {
//   const matchID = await api.findMatchIDByGameID(gameID);
  
//   // we don't care if track becomes a rejected promise
//   track({
//     type: 'query',
//     query: 'fetchMatch',
//     arguments: {
//       gameID
//     },
//     result: {
//       matchID
//     }
//   });
// return db.findMatchByID(matchID);
// }