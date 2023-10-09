//object ->"new"
//in JS all method and function can act like object
// Like array ,string is an NULL object 
//fuction also an object it behave like function but also can like object
/*
function addtwo(n1,n2){
    return n1+n2;
}
console.log(addtwo(5,6));
addtwo.power=3;
console.log(addtwo.power);
console.log(addtwo.prototype); // is a NULL object

function user(name,age){
    this.name=name;
    this.age=age;
}
user.prototype.increment=function(){
    this.age++;
}
user.prototype.display=function(){
    console.log(`The age is ${this.age} `);
}
const userOne=new user("Tarun",21);
const userTwo=new user("kumar",22);
 
userOne.increment();
userOne.display();
console.log(user.prototype);
*/

//prototype in js
 
// let Name="Tarun      "
// console.log(Name.trueLength); //create method in prototype named "trueLength";

const arr=["virat","MSD"]
fun={
    virat: "king",
    MSD: "cool",
    getfun: function(){
        console.log(this.virat);
    }
}
Object.prototype.tarun=function(){
    console.log("Tarun is added");
}

Array.prototype.add=function(){
    console.log("tarun is added in array");
}
fun.tarun();
arr.tarun();
// fun.add();
arr.add();

//prototype Inheritance

