// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
        
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const abc = new User("abc", "abc@gmail.com", "123")
// console.log(abc.encryptPassword());
// console.log(abc.changeUsername());




//BTS
//without class functionality
function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const bac = new User("bac", "bac@gmail.com", "456")
console.log(bac.encryptPassword());
console.log(bac.changeUsername());
