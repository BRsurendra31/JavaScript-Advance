

import {laptopPrice, order, quant} from "./js1.js"; // now we can use variable of exported module

console.log("module exported successfully");
order("jack", "laptop"); 



console.log("laptop price = ", laptopPrice);
//console.log("laptop quantity = ", quantity);
 
// after renaming variable 
console.log("laptop quantity = " , quant);




