"use strict" //treat all Js code as newer version

// alert("ok")  //it run in browser not in nodejs
 
// console.log(3+
//     3); console.log("tarun"); //bad practice
//code readability is should be high

let number=353
let name="tarun";
let isLogged=true

/*different datatype
number=> range 2^53
string =>""
boolean=> true/false
null=> standalone value (empty)
undefined=> value not defined
symbol=>
object =>special type
*/

// console.table([typeof number,typeof name,typeof isLogged]) //typeof use define type of datatype
// console.log(typeof null); //object type
// console.log(typeof undefined); //undefined type
// console.log(typeof Symbol); //function type 
// console.log(typeof Object); //function type 

 /************************************************************************************************ */
 let num1="33a";
 console.log( typeof num1);
 let num2=Number(num1);
 console.log( typeof num2);
 console.log(num2);
 //"33"(string)=>33(number)
 //"33q"(string)=>NaN(number)
 //true/false(boolean)=>1/0(number)
 //null(object)=>0(number)
 //undefine(object)=> NaN(number)
 //also can convert number to string


 /********************************************************************************************************* */
 //data type mainly  devide into two type on the basic of access and push data in memory
 // primitive -> it send the copy of the value
//   String ,Number,Boolean,null,undefined,Symbol,BigInt
 //non-primitive or reference
//   Array,Object,Function
  //**js is Dynamically typed language-> the data type of variables are determind by the value not by programmer */

  /************************************************************************************************************************ */
  //stack(primitive)  heap(non-primitive)
  let myname="tarun"
  let anothername=myname;
 anothername="Tarun dalbera" 
 console.log(myname);
 console.log(anothername); //stack it pass the copy to another variable

 let userone={   //object 
    email:"user@email.com",
    mobile:456398214,
 }
 let usertwo=userone;
 usertwo.email="tarun@email.com"
 console.log(userone.email); //tarundalbera@gmail.com
 console.log(usertwo.email);
 //heap memory give reference to variable 











