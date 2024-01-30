



console.log("named export");
export let order = function(bueyr, item){
    console.log(`${bueyr} ordered this ${item}`);
}


// default export 
        // it is used when we need to export only one variable from file / module 
        // we can import it by using anyname instead of 'order' 
export default order;