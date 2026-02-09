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
console.log(loginUserMsg());// ->  undefined just logged in