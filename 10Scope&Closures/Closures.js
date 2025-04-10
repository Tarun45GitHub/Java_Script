// closure => is functon along with its lexical enviroment
// a closure gives a function access to its outer scop

//lexical scoping
function one(){
   let user="tarun1";
    function two(){
       let user="tarun2";
        console.log(user);
        
    }
    two()
}
one()

//closure
function three(){
    let x=5;
    function four(){
        console.log(x);
        
    }
     return four
}
y=three();
y();

