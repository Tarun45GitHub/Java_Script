//for
let array=[4,5,6,2,9]
for(let index=0;index<Array.length;index++){
    let element=array[index];
   // console.log(element);
}

//break and continue
for (let i = 0; i <20; i++) {
    if(i==10) break;
    if (i==5)  continue;
    // console.log(i);   
    
}

//while
let i=1
while (i<=10) {
   // console.log(`The value is ${i}`);
    i=i+2;
}

//do-while
let a=11
do {
   // console.log(`value of a is ${a}`);
    a++;
} while (a<=10);

// For of -> array specific loop
const arr=[1,2,3,4,5]
for (const it of arr) {
   // console.log(it);
}
const str="Hello World"
for (const st of str) {
   // console.log(st);
}

//Maps -> store unique in set order
const map=new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('a',1)
//console.log(map);

for (const [key,value] of map) {
   // console.log(key,"->",value);
}

//Forin
const myobj={
    js:"JavaScript",
    cpp:"c++/c",
    rb:"ruby"
}
for (const key in myobj) {
   // console.log(`${key} is ${myobj[key]}`);
}
const array2=[1,2,3,4,5]
for (const key in array2) {
  //console.log(array2[key]);
}

//For each
const arr3=[85,52,56,54,25]
arr3.forEach(element => {
   // console.log(element);
});
arr3.forEach( (index,key,arr) =>{
   // console.log(index,key,arr);
})

//Filter
const codding=[7,4,5,7]
 const num=codding.forEach((item)=>
{
   // console.log(item);
    return item;
}
)
//console.log(num); //for each not return any thing
const nums=[1,3,5,9,6,10]
//const number=nums.filter((item)=>item>4)
const number=nums.filter((item)=>{
    return item>4;
})
console.log(number);