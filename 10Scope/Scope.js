 /*if(true){
    let a=10
    const b=20
    var c=30
    d=40
 }
//  console.log(a);
//  console.log(b);
 console.log(c);
 console.log(d);
//  The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
*/
/*
let a=30
 if(true){
    let a=10
    const b=20
    var c=30
    d=40
    console.log("inner a",a);
 }
 console.log(a);
 */
/*
function one(){
    const fname="Tarun"
    function two (){
      //two() is inner function,that forms the closure
      //a closure gives you access to an outer function's scope from an inner function.
        const lname="Dalber"
        console.log(fname);
    }
   // console.log(lname);
    two()
}
one()
*/
/*
console.log(addone(5)); //This type function can acess before declaration
 function addone(num){
    return num+1;
 }
 console.log(addone(5));

//  console.log(addtwo(5)); This type function cann't access before declaration
 const addtwo=function(num){
    return num+2;
 }
 console.log(addtwo(5));
 */