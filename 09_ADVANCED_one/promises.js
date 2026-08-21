//Promise => “I don't have the result right now, but I will give you the result later — either success or failure.”
// ----- BASIC EXAMPLE ----- // 
// const myPromise = new Promise((resolve, reject) => {

//     // Some asynchronous operation
//     let success = true;

//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed!");
//     }

// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/*
 - resolve and reject are functions provided by JavaScript.
 - resolve() Used when the operation is successful. ==> it pass .then(result)
 - reject() Used when something goes wrong. ==> it pass .catch(error)

before all of  this js use callback which is very difficult for increase the oprations which is called callback hell.

- Modern js uses goes step up with async/await
 */

/*
# Async/Await => async makes a function Promise-based, and await tells JavaScript to wait for a Promise's result before continuing that async function.
// ----- BASIC EXAMPLE ----- // 
function getUser() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User data received");
        }, 2000);

    });
}

async function showUser() {

    const user = await getUser();

    console.log(user);
}

//flow
showUser();
showUser()
    ↓
getUser()
    ↓
Promise returned
    ↓
await
    ↓
Promise pending
    ↓
2 seconds
    ↓
resolve()
    ↓
"user data received"
    ↓
console.log()

fetch() => is a built-in Web API used to make HTTP requests.returns a Promise.
fetch("https://api.example.com/users")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });


Because fetch() returns a Promise, we can use await.
    
async function getUsers() {

    const response = await fetch("https://api.example.com/users");

    console.log(response);
}
----------------------------------------------------------------------------------------
async function getUsers() {

    const response = await fetch("/api/users");

    const data = await response.json();

    console.log(data);
}

//bts   
getUsers()
    ↓
fetch("/api/users")
    ↓
HTTP request sent
    ↓
Promise = pending
    ↓
await
    ↓
JavaScript can continue other work
    ↓
Server responds
    ↓
Promise = fulfilled
    ↓
response received
    ↓
response.json()
    ↓
Another Promise
    ↓
await
    ↓
JSON converted to JavaScript object
    ↓
data
    ↓
console.log(data)

*/



//--------------------------------------------------------------------------------------------------------------------------

const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    //DB calls, cyptography, network
    setTimeout(function(){
        console.log('Async task complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})
//above don it different way

//secpromise
//below code performs 1 after another in one promise
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
    
})


//resolve is directly connected with .then()
// taking value from upper promise to lower with then
//thrdprom
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username:"bhavesh", email: "bparmar@rku.ac.in"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//Fourth
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"bhavesh", pass:"123"})

        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})


//tried by saving inside vaiable and print it but didn't worked
//we can use .then() multiple times => we say it chaining
// need the catch also because it handle the error 
promiseFour.then((user)=>{
  console.log(user);
  return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => {console.log("The promise is either resolved or rejected");})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"bhavesh", pass:"123"})

        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})


//async await is simlarly to then & catch ( ) 
//it never control the array directly
async function cosumePromiseFive(){
   try {
     const responce =await promiseFive
     console.log(responce);
   } catch (error) {
        console.log(error);
        
   }
    
}

cosumePromiseFive()


// async function getAllUser(){
//     try {
//         const responce = fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(responce);

//         // const data = responce.json()
//         // console.log(data);
//     } catch (error) {
//         console.log("E :", error);
//     }
    
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
//here this fetch part is returns first then async await part is returns 
//in a fetch it send in the web Browser/ node enviorment and then it give a network request and that is working or giving any error like 404 still it;s working 
//beacause it sends request to network that's why it goes into the data which have two fulid with inside working fun
//where it works or error that part goes into onfulfield[fun] which locates to data
//if not works completely that part goes into onrejection[fun] which locates to data
//that whole data relets to responce and responce is global memory stored which behave it.