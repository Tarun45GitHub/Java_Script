/*
function printname(){
    console.log("Tarun");
}
printname //reference
printname() //function call
*/
/*
function addtwoNumber(num1,num2){
    console.log(num1+num2);
}
addtwoNumber(3,5); //8
addtwoNumber(4,"2") //42
addtwoNumber(5)     //NaN
addtwoNumber(3,"b") //3b
addtwoNumber(5,null) //5
*/
// In Function Defination use Paramete and In Functin Call ues Argument
/*
function addtwoNumber(num1,num2){
    console.log(num1+num2);
}
const result=addtwoNumber(5,6);
console.log(result);  //undefine
*/
/*
function addtwoNumber(num1,num2){
    return num1+num2;
    console.log("Tarun"); //not print function already return
}
const result=addtwoNumber(5,6);
console.log(result);  
*/
/*
function printuser(username){
    if (!username) { // username=== undefife 
        console.log("plase enter user name");
        return
    }
    else
    {
        console.log( `Hi,${username} wellcome`);
        return
    }
}
printuser("Tarun")
printuser();  //pass undefine not null
*/
/*
function printuser(username ="Kumar"){

    if (!username) { // username=== undefife 
        console.log("plase enter user name");
        return
    }
    else
    {
        console.log( `Hi,${username} wellcome`);
        return
    }
}
printuser("Tarun")
printuser();  //use definations value
*/
/*
function claculateprice( num1,...num){
    
    return num;
}
console.log(claculateprice(200,400,500));
*/
/*
const myArray=[1,5,8]
function arrayfunction(getArray){
    return getArray[1];
}
console.log(arrayfunction(myArray));
console.log(arrayfunction([5,6,8]));
*/
//same as object can use in function
