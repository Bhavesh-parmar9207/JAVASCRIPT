class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USername: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const bhavesh = new User("bhavesh")
console.log(bhavesh.createId())

class Teacher extends User(){}