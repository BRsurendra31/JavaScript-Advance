/*
const coding = ["js", "java", "python", "R"]

coding.forEach((item)=> console.log(item))
// op>
// js
// java
// python
// R

coding.forEach((item)=>{ // withn scope i.e {}
    console.log(item)
})
// js
// java
// python
// R

const value = coding.forEach((item)=>{
    console.log(item)
    return item; // remember- if you are using scope i.e {} then in this case you have to return explicitely(directly)
})
console.log(value) // undefined - bcz forEach dont return anything even after giving return statement to it explicitely - But filter return 
// op>
// js
// java
// python
// R
// undefined

*/

// Filter 

const myNums = [1,4,6,7,8,9,3]

myNums.filter((item)=>console.log(item))
//op>
// 1
// 4
// 6
// 7
// 8
// 9
// 3

const value3 = myNums.filter((item)=> console.log(item))
console.log(value3) // [] returns empty arr
//op>
// 1
// 4
// 6
// 7
// 8
// 9
// 3
// [] 

const value2 = myNums.filter((item)=>{
  
    console.log(item)
})
console.log(value2); // [] returns empty arr, we are using scope and have to addd return statement

//op>
// 1
// 4
// 6
// 7
// 8
// 9
// 3
// [] 

const val = myNums.filter((item)=>{
  
    console.log(item)
    return item; 
})
console.log(val); // printed returned items after filte

//op

// 1
// 4
// 6
// 7
// 8
// 9
// 3
// [1, 4, 6, 7,8, 9, 3] // that means filterns the value