//forin => used to iterate over the enumerable properties of an object. It provides an easy way to access each key (property name) one by one.
const myObject = {
    js: 'JavaScript', 
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple" 
}
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);    
}

//forin in array 
const ProgrammingLang = ["js", "rb", "py", "java", "cpp"]
for (const key in ProgrammingLang) {
   console.log(ProgrammingLang[key]);
    
}

