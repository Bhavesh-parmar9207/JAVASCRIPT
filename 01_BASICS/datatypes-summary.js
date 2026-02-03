//Interview Perspectives - JavaScript

/*2 parts are divided in 
1. primitive data types(7 categories)
=>String 
=>Number
=>boolean
=>null
=>undefined
=>Symbol(To create unique identifiers)
=>BigInt(for larger integers than the Number type can hold)
*/
const score = 100;//number type
const scoreValue = 100.1;//number type
const isLoggedIn = false;//boolean type
const outsideTemp = null;//explicitly set to no value
let userEmail;//undefined => value is not assigned

const id = Symbol('123');   //
const anotherId = Symbol('123');
console.log(id === anotherId);//false => unique

const bigNumber =123456789n;


/*
2. reference (Non-primitive)data types
=>Object
=>Array
=>Function

*/


const heros = ['Shaktiman','Naagraj','Doga'];//array
const myObj = {name: "Ravi",age: 22};//consobject
const myfunction = function(){console.log("Hello World")};//function

console.log(score);
console.log(bigNumber);
console.log(heros);
console.log(myObj);
console.log(myfunction);
