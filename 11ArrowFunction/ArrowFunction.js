// console.log(this);
/*
const user={
    name:"Tarun",
    age:20,
    welcomefuction:function(){
        console.log(`welcome,${this.name}`); 
       // console.log(this); //this 
    }
}
user.welcomefuction()
user.name="Dalbera"   //chaage name
user.welcomefuction() 
console.log(this);  //Null object
//value of "this"in browser  window
//so  the global object in browser is window
*/

function one(){
    let one="1";
    // console.log(this); //not empty object
    // console.log(this.one); //this keyword  not workin this function
}
one();



const three=()=>{ //arrow function
    let three="2"
    // console.log(this.three);  //undefined
    // console.log(this);  //empty object
} 
three();

//const addtwo =(num1,num2) => num1+num2
const addtwo =(num1,num2) => (num1+num2) //parenthasis important -> do not have to write return ,is called implesite return;
const name=() => ({username: "Tarun"})  //object under arrow function


// console.log(addtwo(5,6));
// console.log(name());
