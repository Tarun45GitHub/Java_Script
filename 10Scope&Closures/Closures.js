// closure => is functon along with its lexical enviroment
// a closure gives a function access to its outer scop

let name="Ram";
function fun1(){
    let name="Shaym";
    let x=2;
    console.log("in fun1 name:" + name);
     function fun2(y){
        // let name="Rakesh";
        x+=y;
        console.log("in fun2 name:"+ name); 
        console.log(x);
         
     }
    fun2(5) //fun2 can not access out side the fun1
    // return fun2
    
}
fun1()


//  A=fun1()
//  A(5) //here have reference of variabe of fun1 
//  A(5)
