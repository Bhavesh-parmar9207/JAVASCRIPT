const name = "Bhavesh";
const repoCount = 50;

// console.log(name+repoCount+" value");

// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);//stirng interpolation=> using backticks ` `
//output: hello my name is Bhavesh and my repocount is 50


const gameName = new String('bhavesh-parmar')//another way to create string using String constructor
// console.log(gameName[0]);//B

// console.log(gameName.__proto__);//14

// console.log(gameName.length);//14
// console.log(gameName.toUpperCase());//BHAVESH PARMAR
// console.log(gameName.charAt(5));//to find character at index
// console.log(gameName.indexOf('p'));//to find index of character

// const newString = gameName.substring(0, 5);// extracts characters from index 0 to 4
// console.log(newString);
// const anotherString = gameName.slice(-3, 0);
// console.log(anotherString);

//trim and replace

const stringWithSpace = "    bhavesh     ";
console.log(stringWithSpace)    
console.log(stringWithSpace.trim());//removes space from both side

const url = "www.bhavesh.com/profile/bhavesh parmar";
console.log(url.replace("bhavesh parmar","bhavesh-parmar"));//replaces first occurence


console.log(url.includes('bhavesh'));//true => checks if substring is present or not


console.log(gameName.split('-'));//splits string into array of characters
