//Promises =>  built-in object that acts as a placeholder for the future result of an asynchronous operation
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