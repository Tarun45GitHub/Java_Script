//promise => is an object representing the eventual completion or failure of an asynchronous operation.
// const Promise=new Promise()        //promise is an Object
const PromiseOne=new Promise(function(reslove,reject){   // representing the eventual completion or failure
    //Do an asynchronous operation or task like -> DateBase Call,Cryptography,Networking etc.
    setTimeout(function(){
        console.log("Promise One Complete");
        reslove()
    },500)
})

PromiseOne.then(function(){  //.then() directly related to  reslove
    console.log("Promise One consumed");
})

// type Two Promise
new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("PromiseTwo Complete");
        reslove()
    },1000)
}).then(function(){
    console.log("PromiseTwo consumed");
})

//type Three promise
const PromiseThree=new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove({FirstName:"Tarun",LastName:"Dalbera"})
    },1000)
})
PromiseThree.then(function(user){ // can acess reslove data also
    console.log(user);
})

//Type Four Promise
const PromiseFour= new Promise(function(reslove,reject){
   setTimeout(function(){
    let error=true;
    if(error!=false){
        reslove({userName:"Tarun",password:"12345"})
    }
    else{
        reject("ERROR:Something went wrong")
    }
},1000)
})
PromiseFour.then((user)=>{
    console.log(user.password);
}).catch((e)=>{
    console.log(e);
})
PromiseFour
.then((user)=>{return(user.userName)})
.then((name)=>{console.log(name);})
.catch((e)=>{console.log(e);})
.finally(()=>{console.log("promiseFour Consumed");})
    
//Type Five Promise
const PromiseFive=new Promise(function(reslove,reject){
    setTimeout(function(){
        let error=false;
        if(error!=false){
            reslove({userName:"Dalbera",password:"6789"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000) 
})
async function consumePromiseFive(){
    // const response=await PromiseFive
    //console.log(response); //it can not handle when value came from reject
    try {
        const response=await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    //use try catch like above
}
consumePromiseFive();

/****************fetch************************ */
async function getData(){
    try {
        const response=await fetch('https://github.com/Tarun45GitHub/Project.git')
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR");
    }
}
getData();