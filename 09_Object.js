
/*
//object literals
const symb=Symbol("key1")
const mys=Symbol("key")

const user={
    name: "Tarun" ,//can also define by key and value
    age:20,        //behind the seen is track like "age"
    email:"tarun@google.com",
    "location":"kharakpur",
     symb:"key2" ,//it can not symbol it is a string
    [mys]:"key3"

}
console.log(user.age);
//another type of access
console.log(user["email"]);
//location can not acess by dot(.)
console.log(user["location"]);
console.log(typeof user.symb);//it is string
console.log(user.mys);  //it also can't acess by dot
console.log(typeof user[mys]); //this is the best practice

user["email"]="tarundalber@gmail.com"
console.log(user["email"]);

//Object.freeze(user) //freez value and key
// user["email"]="tarun@gmail.com"
// console.log(user);
//************************************************************************************************************************** */
//singleton ->when object creat by constructor
//object.creat
/*
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2};//not concatinate
// const obj3=Object.assign({}, obj1,obj2) //add obj1 and obj2 in obj3
const obj3={...obj1,...obj2} //most usefull sprade oparetor
console.log(obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj3));
*/
//******************************************************************************************** */

const clas={
    name:"Tarun",
    roll:45,
    dept:"it"
}
const{dept}=clas;
console.log(dept); //can acess with out object name

//jason
{
    name:"Tarun Dalbera"
    
}
