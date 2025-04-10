//####################### Number #####################################
const score=200
console.log(score);

const number=new Number(300)
console.log(number);
console.log(number.toFixed(2));

const otherNumber=123.8965
console.log(otherNumber.toPrecision(3)); //124

const hundereds=10000000;
console.log(hundereds.toLocaleString());
//############################################# Math #####################
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(6.3)); //7
console.log(Math.floor(6.3)); //6


console.log(Math.random()); //random value between one to zero

const min=1
const max=7
console.log(Math.floor((Math.random()*(max-min+1))+ min));