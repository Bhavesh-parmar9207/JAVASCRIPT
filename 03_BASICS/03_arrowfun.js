
const user = {
    username : "Yash",
    price : 23,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`);//=>to refer corrent context use {this.}
        console.log(this);
        
    }
 }
// user.welcomeMessage()//here corrent context of that values is "Yash"
// user.username = "abc"
// user.welcomeMessage()//here changed value are taken 

//console.log(this);//it gives empty object because of their is no context in global 

// Note : in browser global object is windows object

//(This) is always uses in comtext not in function
// function mo(){
//     const usrname = "abc"
//     console.log(this.username);    //undefined
// }
// mo()

//=================Arrow Function====================//
// const chai = function (){
//     const usrname = "abc"
//     console.log(this.username);
//}
const chai = () => {
    const usrname = "abc"
    console.log(this); // undefined / {}
}
// chai()

//simple arrow function
// const add = (num1, num2) => {
//     return num1 + num2
// } in this curly paranthisis we need to give return statement 


/* Implisit Return */
// const add = (num1, num2) => (num1 + num2) //in this bracket only apply operation(Don't need return)
const add = (num1, num2) => ({usrname : "bhavesh"})//returning object
console.log(add(3,1));
