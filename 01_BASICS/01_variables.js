const accountId = 123456;//block-scoped but cannot be reassigned after initialization
let accountEmail = "abc@gmail.com" //block-scoped, allows reassignment but not redeclaration
var accountPassword = "23568"//don't use var because of function-scoped and allows both redeclaration

let accountState; //undefined which shows vallue is not assigned

accountId = 2 //beacuse of const we cannot reassign

console.log(accountId);
accountEmail = "ab@gmail.com"
accountPassword = "45678"
accountcity = "goa"

/* never use var - because of issue in block scope and functional scope */


console.table([accountId, accountEmail, accountPassword, accountcity, accountState])//to get all diclared data in table format