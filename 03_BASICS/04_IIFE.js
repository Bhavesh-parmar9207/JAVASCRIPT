//Immediately Invoked Function Expressions (IIFE) - To remove polution of global scope

(function chai(){
//Named IIFE
    console.log('DB CONNECTED   ');
})();

// hERE ()() first for function second to execution call 

//sometimes if there is multiple iife implemented then we need end first function with ;
((name) => {
    //simple IIFE
    console.log(`DB CONNECTED AGAIN ${name}`);
})();