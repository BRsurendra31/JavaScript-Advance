// digital clock

let hourHand = document.querySelector('.hour')
let minuteHand  = document.querySelector('.minute')
let secondHand = document.querySelector('.second');

let ticking = function(){
    let currentDate = new Date();
    let getHour = currentDate.getHours()
    let getMinute = currentDate.getMinutes()
    let getSecond= currentDate.getSeconds()
    

    // box me time content dikhane k liye 
    hourHand.textContent = getHour;
    minuteHand.textContent = getMinute;
    secondHand.textContent = getSecond;
    //  console.log(currentDate)
}
//setInterval(ticking, 1000); // har 1000ms i.e har 1sec bad ticking k fun ko chalata rahega 