//Basic comparison operators
// console.log( 2 > 1);
// console.log( 2 < 1);
// conosole.log( 2 >= 1);
// console.log( 2 <= 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// avoid below type coercion

//always compare same type
// console.log("2" > 1);//auto convert to num 
// console.log("02" > 1);

//conpare of null
// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true ==> null is converted to 0
// console.log(undefined < 0);//undefined => always false


// === strict equality operator => also checks datatype
console.log("2" === 2);
