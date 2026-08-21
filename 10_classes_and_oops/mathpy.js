const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
/*
it's core things in labguage making in c++ and hardcoded so that's why it's non-changeble.
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//it that have properties like upper build in PI
const coffee = {
    name : 'coffee',
    price : 150,
    isAvailable : true,
    
    order: function(){
        console.log("no coffee");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// Object.defineProperty(coffee, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: true
// })
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

//not iterable for iterate use Object.entries()
for (let [key, value] of Object.entries(coffee)) {

    if(typeof value != 'function'){
            
    console.log(`${key} : ${value}`);
    }
}