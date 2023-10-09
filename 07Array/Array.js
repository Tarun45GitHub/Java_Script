//array
let myArray=[1,4,8,6 ,'2', true]

//js array resizeable
//array element cannot acess by arbitori
//js array - copies create sallow copies

//array method
// myArray.push(5)
// myArray.pop();
// myArray.unshift(0) //add at first
myArray.shift()  //remove from first

console.log(myArray);
const newArr=myArray.join()
console.log(newArr);
console.log(typeof newArr);

console.log('A',myArray);

const mya1=myArray.slice(1,3);
console.log(mya1);
console.log('B',myArray);

const mya2=myArray.splice(1,3) //not only include the range but also manipulate the array
console.log(mya2);
console.log('C',myArray);



