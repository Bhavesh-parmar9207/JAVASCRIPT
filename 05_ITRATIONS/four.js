//forin
const myObject = {
    js: 'JavaScript', 
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple" 
}
for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);    
}

//forin in array 
const ProgrammingLang = ["js", "rb", "py", "java", "cpp"]
for (const key in ProgrammingLang) {
   console.log(ProgrammingLang[key]);
   
    
}

