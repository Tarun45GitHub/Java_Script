let First ="Tarun"
const Second="Dalbera"
const Name=First+ Second;
console.log(Name+5);

//latest technique
console.log(`Hello My Name is ${Name} `); //also called string interpulation

//another more style
const MyName=new String(`Tarun`) //here String is a Object
console.log(MyName);
// some important prototype
console.log(MyName.length); 
console.log(MyName.charAt(2)); //string char of given index
console.log(MyName.indexOf('u')); // index of given char in string
console.log(MyName.substring(0,3)); //substring from 0 to 3
console.log(MyName.slice(-5,3));//nagetive also acess
//trim use for remove space

console.log(MyName.replace('a','b'));



