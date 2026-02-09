function myName(){
    console.log("bhavesh");
    console.log("parmar");    
}

myName // --> only name of function is reference
// myName() // --> execute the function


function addNums(num1,num2){
    return num1 + num2
}

const result = addNums(2,2)
// console.log("Result : ",result);
//===============================================

function loginUserMsg(username){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}
//      console.log(loginUserMsg("bhavesh"));
// console.log(loginUserMsg());// ->  undefined just logged in



function calculateCartPrice(...num1){ // ... as Rest Operator
    return num1
}
// console.log((calculateCartPrice(200, 400, 1000)));

const user = {
  username : "abc",
  price : 999
}

function handleObject(anyobject){
    console.log(`Username is : ${anyobject.username} and price is : ${anyobject.price}`);
}

// handleObject(user)
// handleObject({username : "xyz", price : 1999})//passing direct object

//===========================

const myNewArray = [200, 400, 100, 600]
function getValue(getArray){
    return getArray[1]
}

// console.log(getValue(myNewArray));
console.log(getValue([200,800,500]));
