//if-else
if (true) {
    //statement code
}
//<,>,<=,>=,==,!=,===,!==
else{

}
//switch
let num=2
switch (num) {    
case 1:
        console.log("one");
        break;
case 2:
        console.log("two");
        break;

    default:
        console.log("Three");
        break;
}
//true-false
//falsy value=> false,Zero(0),-0,BigInt 0n,"",'',null,undefined,NaN
//truthy value => true,"0",'false'," ",[],{},function(){},' '
/*
//array check
if(Array.length===0){
    console.log('array is empty');
}
*/
/*
//object check
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}
*/

//Nullish Conalescing Operator(??): null undefined
let val1;
//val1=5 ?? 10; 
//val1=null??5;  
// val1=3??undefined
// val1=null??undefined
val1=null??8??9
console.log(val1);

//Terniary Operator
//condition ? true : false
const num3=50;
num3>50?console.log("greater 50"):console.log("less 50");
