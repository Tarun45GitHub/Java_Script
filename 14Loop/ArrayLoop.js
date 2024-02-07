let myarr=[1,2,3,4,5,6,7,8,9,10];

//for each it acess every items one by one but it do not return anything
myarr.forEach((num)=>{
    // console.log(num);
})
let newArr=myarr.forEach((num)=>{
    // console.log(num);
    return num;
})
// console.log(newArr); //undefined

// **************************filter ************************
// it return new array according to condition
// const filterArray=myarr.filter((num)=>num>5);
// const filterArray=myarr.filter((num)=>{num>5});
const filterArray=myarr.filter((num)=>
          { return num>5}
);
// console.log(filterArray);
// *********************************** map **********************
//  it perform some task on ever items

// const mapArray=myarr.map((num)=> num+10 );
// const mapArray=myarr.map((num)=> {num+10} );
const mapArray=myarr.map((num)=> 
{ return num+10} );
// console.log(mapArray);

// ********************* chain **********************************
// its perform more then one operation

const chainArray=myarr.map((num)=>{
   return num*10;
}).filter((num)=>{
   return num>50
}).map((num)=>{
   return num+2
})

// console.log(chainArray);

//**************************************reduce******************************** */

// const reduceArray=myarr.reduce(function(pre,cur,curInd,arr){
//     console.log(pre,cur);
//     return pre+cur
    
// },0)
const reduceArray=myarr.reduce((pre,cur)=>pre+cur,0)
console.log(reduceArray);