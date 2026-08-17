//foreach loops => Take each item from the array, one by one, and perform some operation on it.
const coding = ["js", "rb", "py", "java", "cpp"]
//because it's callback function it don't have function name
//it takes automatic values from it works in array
coding.forEach((item, index) => console.log(`${index+1}: ${item}`));
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
        languageName: "javaScript", languageFileName: "JS"
    },
    {
        languageName: "java", languageFileName: "java"
    },
    {
        languageName: "python", languageFileName: "py"
    },
]

//object in array
//with this method we can get values from objects
myCoding.forEach(item => console.log(item.languageName));
//it's a callback function which takes item as parameter and print the languageName of each object in array.which is short way of writing function. 
// It is called arrow function. It is a new feature of ES6.






