// 2 ways to declare = Constructor | literals(no singleton)

// Constructor
// Object.create => with singleton


// Object Literals => Here we defines key and their values

const mySym = Symbol("key1") // => Symbol is declared like this

const jsUser = {
    name : "Bhavesh",
    "full name" : "Bhavesh Parmar",//=>this only accecible for ["full name" ] decleration
    [mySym] : "mykey1",// => this is the correct way to declare symbol as key in [ ]
    age : 18,
    location : "Ahmedabad",
    email : "bhavesh@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday "]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "bhavesh@chatgpt.com"// => we can change values like this
//Object.freeze(jsUser)// => now we can't change values of object
// jsUser.email = "bhavesh@microsoft.com"
// console.log(jsUser);

//functions which is treat as variables
jsUser.greeting = function(){
    console.log("Hello JS Users");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello JS Users, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
