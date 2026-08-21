let myName = "Bhavesh   "

// console.log(myName.length);//it give length with extraspaces also
//----------------------------------------------------------------------

let myHero = ["thor","spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpidePower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
            
    }
}
Object.prototype.abc = function () {
    // console.log(`abc has all powers`);
}

Array.prototype.A = function () {
    // console.log(`A says hello`);
    
}
// heroPower.abc()
myHero.abc()
// heroPower.A()
heroPower.abc()



//inheritance
//old structure
const User = {
    username: "abc",
    email: "abc@gmail.com"
}
const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUSername = "new    "
String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}
anotherUSername.trueLength()//it give with this reference
"nmk".trueLength()