function setuser(username){
    console.log("setuser called");
    this.username=username;
}
function createuser(username,password,email){
    // setuser(username);
    setuser.call(this,username)
    this.password=password;
    this.email=email;
}
const user =new createuser("tarun","123456","email@js.com")
console.log(user);