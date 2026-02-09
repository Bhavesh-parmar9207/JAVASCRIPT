// const tinderUser = new Object() // it gives empty ob {} ==> Singletone

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
// console.log(regularUser.fullname.usefullname);

//assign object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {4:"e",5:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)//in ({}=> is target which gives as assigned | target (empty source), others are source)
const obj4 = {...obj1,...obj2,...obj3}//with the spread operator
//console.log(obj4)

const users = [
    {
        id : 1,
        email : "b@gmail.com" 
    },
    {
        id : 1,
        email : "b@gmail.com" 
    },
    {
        id : 1,
        email : "b@gmail.com" 
    },
    {
        id : 1,
        email : "b@gmail.com" 
    }
]

users[1].email
console.log(tinderUser);

//to get all key and values for getting details  from database
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to question to the object that parameter is there or not


// ================= Object-Destructure ================= //

const course = {
    name : "English",
    price : "999",
    courseInstructor : "Yash"
}

// course.courseInstructor

const {courseInstructor: Instructure} = course // destructure {oldname : newname}
// console.log(courseInstructor);
console.log(Instructure);
