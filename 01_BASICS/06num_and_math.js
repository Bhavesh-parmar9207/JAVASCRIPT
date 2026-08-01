// const score = 100
// console.log(score);

// const balance = new Number(100);//object type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));//1

// const otherNumber = 125.8966
// console.log(otherNumber.toPrecision(3));//use =>  it gives you roundoff the value

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'))// => to give indian standerd type method

// ===================== Math ================================ //

console.log("Math");
            
console.log(Math.abs(-4));//only change the Negetive to positive values
console.log(Math.round(2.3));//round-off the value
console.log(Math.ceil(2.3));//round-off the next big(upper) value
console.log(Math.floor(2.3));//round-off the next small(loewr) value
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));


console.log(Math.random());//always five random number between 0 to 1

console.log(Math.random()*10 + 1);

console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
console.log("value: " + Math.floor(Math.random() * (max - min + 1)) + min);//to get value beteen 10 to 20