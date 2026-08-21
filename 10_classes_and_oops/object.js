function multipleBy5(num){
    return num*5
}
//function is object
multipleBy5.power = 2

console.log(multipleBy5(5));//25
console.log(multipleBy5.power);//2
console.log(multipleBy5.prototype);//{}
//we can says that in js function is object and function both.because at the end everything meats the objects at last.
//js is prototyped lang that's why it goes to null which is ends there. and also that 
//function---
//           | 
//array--->object--->null. 
//           |
//string-----


function createUSer(username, score){
    this.username = username
    this.score = score
}
createUSer.prototype.increment = function () {
    this.score++
    console.log(this.score);
    
}
createUSer.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);   
}

const one = new createUSer("bhavesh", 21)
const two = new createUSer("c2", 21)

one.printMe()
one.increment()

