//singleton ->when object creat by constructor
//object.creat

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
