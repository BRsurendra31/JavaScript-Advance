
// named export 

console.log("named export");
export let order = function(bueyr, item){
    console.log(`${bueyr} ordered this ${item}`);
}


// export multiple values 
let laptopPrice = 50000;
let quantity = 20;

//export {laptopPrice, quantity};

// we can rename variable 
export {laptopPrice, quantity as quant };

