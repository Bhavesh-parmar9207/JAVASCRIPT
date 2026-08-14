//code never runs complete it should be run in conditional based flow (at a time login)

//if-Statement
// true = Execute , false = not execute
// <,>,<=,>=,==,!=,=== 

// const tempreture = 45
// if(tempreture < 50 ){
// console.log("temp is < 50");
// }else{
//     console.log("temp is >50");
// }    

// const score = 100
// if(score >= 100 ){
//     let power ="fly"
    
//     console.log(`user power : ${power}`);
// }
// // console.log(`${power} is not accessable out of scope}`);


//implicit scope = assumes that there is scope (It's not correct way for write code)
//const balance = 1000
// if (balance > 100 ) console.log("test");
//nested
// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750 ){
//     console.log("less than 750");
// } else if (balance < 950 ){
//     console.log("less than 950");
// } else if (balance < 1200 ){
//     console.log("less than 1200");
// }    


//Multiple Constion => if one condition is not passed then can't run whole code
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//And
if( userLoggedIn && debitCard && 2==2){
    console.log("Allow Purchase");
}
//Or
if(loggedInFromGoogle || loggedInFromGoogle){
    console.log("user Loggedin");
}
