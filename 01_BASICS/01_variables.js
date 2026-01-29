const accountId = 123456;
let accountEmail = "abc@gmail.com"
var accountPassword = "23568"//don't use var
accountcity = "London"

let accountState; //undefined which shows vallue is not assigned

// accountId = 2 //beacuse of const we cannot reassign

console.log(accountId);
accountEmail = "ab@gmail.com"
accountPassword = "45678"
accountcity = "goa"

/* never use var - because of issue in block scope and functional scope */


console.table([accountId, accountEmail, accountPassword, accountcity, accountState])//to get all diclared data in table format