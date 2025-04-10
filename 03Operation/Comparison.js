console.log("1"==1); //not good pratice
console.log("01">=1);
//alaways compare in same data type

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //but true
//Reason is equality check == and comparisons <,>,<=,>= work differently
//comparison convert null to 0 (number)

//=== strick check -> can not convert