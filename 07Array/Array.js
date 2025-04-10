//array
let myArray=[1,4,8,6 ,'2', true]

//js array resizeable ,can store different type data type
//array element cannot acess by arbitori
//js array - copies create sallow copies

/******************************************************************************************************************** */
//array method
// myArray.push(5)
// myArray.pop();
// myArray.unshift(0) //add at first
// myArray.shift()  //remove from first

// console.log(myArray);
const newArr=myArray.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log('A',myArray);

const mya1=myArray.slice(1,3);
// console.log(mya1);
// console.log('B',myArray);

const mya2=myArray.splice(1,3) //not only include the range but also manipulate the original array
// console.log(mya2);
// console.log('C',myArray);

/*************************************************************************************************************** */

const AnArray=['ram','shaym','laxman'];
const nextArray=['shibu','rana'];

// AnArray.push(nextArray);

// console.log(AnArray);
// console.log(AnArray[3][0]);  //shibu

// const allArray=AnArray.concat(nextArray);  //concat add two array and return a new array
// console.log(allArray);

const newArray=[...AnArray,...nextArray];    //spread operator
// console.log(newArray);

console.log(Array.isArray("tarun"));
console.log(Array.from("tarun"));   //string to array

console.log(Array.from({name:"tarun"})); //importent
 
let num1=100;
let num2=200;
let num3=300;
console.log(Array.of(num1,num2,num3));


