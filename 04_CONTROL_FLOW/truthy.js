const userMail = []
// if(userMail){
//     console.log("got a Mail ");
    
// }else{
//     console.log("not a mail");
    
// }

//Falsy Values => false, 0, -0, BigInt 0n, "", null , NaN, Undefined 
//truthy Values => "0", 'false'(because it's string), " "(there is space in string), [], {}, function(){}

//check array is empty = check length of array
// if(userMail.length === 0){
//     console.log("Array is Empty"); 
// }

//object = empty or not
// const emptyobj = {}
// if(Object.keys(emptyobj).length == 0){
// console.log("object is empty");
// }


//Nullish Coaleshing Operator ( ?? ) : null , Undefined
//it checks that if there is some parameters that affected by null/Undefined values then with 
// this we can change to any other given conditional values
//it's callback for handle on error occurance
let val1;
val1 = 5 ?? 10
let val2;
val2 = null ?? 10
console.log(val1);
console.log(val2);


// //Terniary Operator

// // condition ? true : false
const foodPrice  = 100
foodPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

 