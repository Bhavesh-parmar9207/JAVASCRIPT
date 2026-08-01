// const tinderUser = new Object() // it gives empty ob {} ==> Singletone
//Singleton Object => It's an object for which only one instance exists in memory.
//Non-singleton Object => It's simply an object created independently. Every time you create it, you get a new object.
const tinderUser = {} // Non-singleton object

tinderUser.id = "123"
tinderUser.name = "ABC"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser ={
    email : "abc@gmail.com",
    fullname : {
        usefullname : {
            firstname : "Bhavesh",
            lastname : "Parmar"
        }
    }

}
// console.log(regularUser);
// console.log(regularUser.fullname.usefullname);

// //assign object
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = {4:"e",5:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)//in ({}=> is target which gives as assigned | target (empty source), others are source)
// const obj5 = {...obj1,...obj2,...obj3,...obj4}//with the spread operator
// console.log(obj5)

// const users = [
//     {
//         id : 1,
//         email : "b@gmail.com" 
//     },
//     {
//         id : 1,
//         email : "b@gmail.com" 
//     },
//     {
//         id : 1,
//         email : "b@gmail.com" 
//     },
//     {
//         id : 1,
//         email : "b@gmail.com" 
//     }
// ]

// users[1].email
// console.log(tinderUser);

// //to get all key and values for getting details  from database
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to question to the object that parameter is there or not


// // ================= Object-Destructure ================= //

const course = {
    name : "English",
    price : "999",
    courseInstructor : "Yash"
}

const courseInstructor = new Object();

const {courseInstructor: Instructure} = course // destructure {oldname : newname}
console.log(courseInstructor);
console.log(Instructure);
