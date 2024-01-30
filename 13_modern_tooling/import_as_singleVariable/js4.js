

// import {laptopPrice, order, quant} from "./js1.js"; // now we can use variable of exported module

// import as single variable

import * as js4Module from "./js3.js" // js4Module work as object 
                                      // it imports all exported variable 
console.log("laptop price = ", js4Module.laptopPrice);
js4Module.order("jack", "laptop");




