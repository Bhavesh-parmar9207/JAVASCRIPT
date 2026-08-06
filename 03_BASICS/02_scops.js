// //out side this written call global scope
// // var c = 300
// //out side of block scope declared variable should be present in scope 
// //but in scope declared variables are not available for outside of scope
// let a = 100
if(true){//in this written call block scope
    let a = 10
    const b = 20
    console.log("INNER : ",a);   //10
}
 



// console.log("OUTER : ",a);//100
// // console.log(b);
// // console.log(c);
//================ Nested Scope ====================================//

// function one(){
//     const username = "yash"

//     function two(){
//         const website = "amazon"
//         console.log(username);
//     }
//     // console.log(website); => it gives error because of it's block scope declared value
//     two()//=> Yash 
    
// }
// one()

// if(true){
//     const username = "abc"
//     if(username === "abc"){
//         const website = " amazon"
//         console.log(username + website);
        
//     }
//     // console.log(website); => here it gives error because of it's inner block scope
    
// }
// // console.log(username); => here it gives error because of it's block scope

//====================================================//
//Fucuntion Declaration 
console.log(addone(5));//it gives 5 because it's direct declared function   
function addone(num){
    return num+1
}
// console.log(addone(5))//here it don't return value because it hold in variable function 

// Function Expression
const addtion = function addTwo(num){ // it's call  expression as variable for declare function in variable
return num+2
}
console.log(addtion(5))//here it return value because it's hold in variable function
