/*
getter and setters are use that someimes we don't wwants to give evrery properties access to everyone
for give a error for that access we can pass

below code can full the stack error bcause there is 2 times the set hase been appplied first in constructor and second set himself
which makes stack the full.

for that make a different name of pass => _password


we can also say that we fetch a value from database can gives a uppercase value

also we can do that if wants that give user a other value and save other value it happens with changes in get with change it from
        return this._password.toUpperCase() => `${this.username}

*/

class User {
    constructor(email, password){
            this.email = email
            this.password = password
    }

    get email (){ 
        return this._email.toUpperCase() 
    }
    set email (value){ 
        return this._email = value.toUpperCase() 
    }//now _email becomes private property

    get password(){ 
        return `${this.password}bhavesh` 
    }
    set password(value){ 
        this._password = value.toUpperCase()
    }
}

const bhavesh = new User("bhavesh@a.ai", "123")
console.log(bhavesh.password);
