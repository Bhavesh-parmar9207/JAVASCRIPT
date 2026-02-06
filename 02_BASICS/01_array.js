//Array => which is collection of multiple items in single variable
//Shallow Copy => it points to the same reference
//Deep Copy => it points to the different reference
const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["spiderman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// // Array Methods
// myArr.push(6)//add value at last
// myArr.pop()//remove value from last
// myArr.unshift(9)//add value at first
// myArr.shift()//remove value from first
// console.log(myArr.includes(9));//find the value where o/p => boolean(T/F)
// console.log(myArr.indexOf(3));//if location is there it gives / gives on no-exist -1

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);//here type is change to String and bind

//================= Slice , Splice ======================//
console.log("A",myArr); 
const myn1 =(myArr.slice(1,3))//returns a this section of Array
console.log(myn1);

console.log("B" ,myArr);

//Splice

const myn2 = myArr.splice(1,3)//remove that portion
console.log("C" ,myArr);
console.log(myn2);









