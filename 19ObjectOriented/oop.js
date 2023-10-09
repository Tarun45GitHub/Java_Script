//Object Literal =>an object literal is a comma-separated list of properties and functions  inside of curly braces. 
const ObjectLiteral={
    Name:"Tarun Dalbera",
    age:21 ,
    getdetails: function(){
        // console.log(`Name is ${Name}`);  //can not find the 'Name' 
        console.log(`Name is ${this.Name}`); //this -> current context
        console.log(this);
    }
}
/*
console.log(ObjectLiteral.Name);
console.log(ObjectLiteral.getdetails());
console.log(this); //empty object
*/

//new => constructor function
// const date=new date();

//fuction() constructor
function user(username,password){
    this.username=username;
    this.password=password;
    // return this; by default return this
}
// const userOne=user('Tarun','1234')
// console.log(userOne.username);
// const userTwo=user('kumar','4567');
// console.log(userTwo.username);
// console.log(userOne.username); //user one value also change so we need 'new ' keyword

const userOne= new user('Tarun','1234')
console.log(userOne);
const userTwo= new user('kumar','4567');
console.log(userTwo);
console.log(userOne);
console.log(userTwo.constructor);

//1. new creat a new object
//2. call constructor function
//3. inject in this keyword all code
//4. return this

