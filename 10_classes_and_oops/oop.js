//obj literal 
const user = {
    username : "bhavesh",
    loginCount : 8,
    signedIn : true,
    getUSerDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);//=> this gives all detais about defined in user
    }
// this keyword  is used for correnteyword
//this is object which allows to put value inside
}
// console.log(user.username);
// console.log(user.getUSerDetails());
// console.log(this);//=>{}




function User(username, loginCount, isLoggedIn) {
    this.username = username //variablename = passedvalue
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
        
    }
    
    return this  

}
// " new " =>  is constructor function. it allows to make multiple instances from single object literal
// const promiseOne = new Promise()
// inside new => 
// 1. every time it creates a empty object
// 2. calls a consturctor function(pack all argument in that) because of new keyword
// 3. all arguments are injected inside this keyword
// 4. give all values
const userOne = new User("Bhavesh", 12, true);
const userTwo = new User("ram", 11, false); // it can overwrite
console.log(userOne.constructor);
// console.log(userTwo);



