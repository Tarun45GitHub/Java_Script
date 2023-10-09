//Immediately Invoked Function Expressions(IIFE)
//->To remove global scope pollution
//not only immediately function call

//IIFE
(function one(){
    //named IIFE
    console.log("Tarun");

})() ;//semicolon is more important here
// one()
//IIFE using arrow function
(()=>{
    //unname IIFE
    console.log("Immediately invoked function expression");
}

)();
((name)=>{
    //parameter pass in IIFE
    console.log(`myname is ${name}`);
})("Tarun")

