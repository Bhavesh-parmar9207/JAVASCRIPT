//out side this written call global scope
// var c = 300
//out side of block scope declared variable should be present in scope 
//but in scope declared variables are not available for outside of scope
let a = 100
if(true){//in this written call block scope
    let a = 10
    const b = 20
    console.log("INNER : ",a);   //10
}
 



console.log("OUTER : ",a);//100
// console.log(b);
// console.log(c);
