function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function creaetUser(username, email, password) {
    // SetUsername(username) // it looks like call but it's only reference
    SetUsername.call(this, username) 

    this.email = email
    this.password = password

    
}

const abc = new creaetUser("abc", "abc@gmail.com", "123")
console.log(abc);

