class User {
    constructor(username) {
        this.username = username        
    }
    logMe(){
        console.log(`username is ${this.username}`);   
    }
}
class Teacher extends User{
    constructor(username, email, password) {
        super(username) // it directly calls from the user's constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course added by ${this.username}`);
    }
}
const abc = new Teacher("abc","abc@gmail.com","123")
abc.addCourse();
