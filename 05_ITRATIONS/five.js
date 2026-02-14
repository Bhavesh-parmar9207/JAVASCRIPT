//foreach loops
const coding = ["js", "rb", "py", "java", "cpp"]
//because it's callback function it don't have function name
//it takes automatic values from it works in array
// coding.forEach(function (item) {
//     console.log(item);
// })//callback function   

// arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// passon function
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)//direct function declared

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//iteration via foreach
const myCoding = [
    {
        languageName: "javaScript", languafeFileName: "JS"
    },
    {
        languageName: "java", languafeFileName: "java"
    },
    {
        languageName: "python", languafeFileName: "py"
    },
]

//object in array
//with this method we can get values from objects
myCoding.forEach((item) => {
    console.log(item.languageName);

})





