

// callback hell 1

function getData(dataId, getNextData){
  setTimeout(()=>{
    console.log("data", dataId)
    if(getNextData){
      getNextData();
    }
  },2000);
}

getData(1, ()=>{
  console.log("ge4tting data2")
  getData(2, ()=>{
    console.log("ge4tting data3")
    getData(3,()=>{
      console.log("ge4tting data4")
      getData(4,()=>{
        console.log("ge4tting data5")
        getData(5)
      })
    })
  })
});

// callback hell 2 
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown


// callbacks 

// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)


// Callback hell 3 : 
    // nothing but it is nested callbacks codes
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
  setTimeout(()=>{
    if(element){
      element.textContent = text;
      element.style.color = color;
      if(onSuccessCallback){
        onSuccessCallback();
      }
    }else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
  },time)
}
// pyramid of doom
changeText(heading1, "one","violet",1000,()=>{
  changeText(heading2, "two","purple",2000,()=>{
    changeText(heading3, "three","red",1000,()=>{
      changeText(heading4, "four","pink",1000,()=>{
        changeText(heading5, "five","green",2000,()=>{
          changeText(heading6, "six","blue",1000,()=>{
            changeText(heading7, "seven","brown",1000,()=>{
              changeText(heading8, "eight","cyan",1000,()=>{
                changeText(heading9, "nine","#cda562",1000,()=>{
                  changeText(heading10, "ten","dca652",1000,()=>{
                    
                  },()=>{console.log("Heading10 does not exist")})
                },()=>{console.log("Heading9 does not exist")})
              },()=>{console.log("Heading8 does not exist")})
            },()=>{console.log("Heading7 does not exist")})
          },()=>{console.log("Heading6 does not exist")})
        },()=>{console.log("Heading5 does not exist")})
      },()=>{console.log("Heading4 does not exist")})
    },()=>{console.log("Heading3 does not exist")})
  },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})

// Issues with Callbacks :
//   1. Callback hell
//       // dificult to read code bcz collback code become complex and makes a structure "pyramid of doom"
//     // to reduse this issue , promises are used  

//   2. Inversion of control
//       we pass the control of program to others , so it is possible to misuse this contol to unknown or by unknwon i.e inversion of control 
