//Looping


//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is num");        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value :  ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value : ${j} and also Inner Loop Value ${i}`);
        // console.log(i + `*` + j + `=` + i*j);
        
    }
     
}

let myArray = ["Batman","Spiderman","Superman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
        
}



// break and continue

//favourite value comes then get out
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break => from here next iterations are not execute
        continue
    }
    console.log(`Value of i is : ${i}`);
    
}