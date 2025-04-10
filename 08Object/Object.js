//singleton objects create when objects create by constructor(object.create)

//object literals
const symb=Symbol("key1")
const mys=Symbol("key")

const user={
    name: "Tarun" ,//can also define by key and value
    age:20,        //behind the seen is track like "age"
    email:"tarun@google.com",
    "location":"kharakpur",  //location can not acess by dot(.)
     symb:"key2" ,//it can not symbol it is a string
    [mys]:"key3"

}
// console.log(user.age);
//another type of access
// console.log(user["email"]);
// console.log(user["location"]);
// console.log(typeof user.symb);//it is string
// console.log(user.mys);  //it also can't acess by dot
// console.log(typeof( user[mys])); //this is the best practice

user["email"]="tarundalber@gmail.com"
// console.log(user["email"]);

//Object.freeze(user) //freez value and key
// user["email"]="tarun@gmail.com"
user.funOne=function(){
    console.log("this an functin in object");
}
user.funTwo=function(){
    console.log(`hi my name is ${this.name}`);
}
// console.log(user);
// user.funOne();
// user.funTwo();

//************************************************************************************************************************** */
//singleton ->when object creat by constructor
//object.creat
// let obj=new Object() //singleton object 
// let obj={}  //non-singleton object
// console.log(obj);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2};//not concatinate
// const obj3=Object.assign( obj1,obj2) //add obj1 and obj2 in obj3
// console.log(obj1);  //it store all value in object one
const obj3=Object.assign({}, obj1,obj2) // it takes frist object as a terget and rest all are as resourse
// const obj3={...obj1,...obj2} //most usefull sprade oparetor
console.log(obj3);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj3));

//******************************************************************************************** */

const clas={
    name:"Tarun",
    roll:45,
    dept:"it"
}
//destructure
const{dept:dpt}=clas;
// console.log(dept); //can acess with out object name
console.log(dpt);

//jason
{
    name:"Tarun Dalbera"
    
}
