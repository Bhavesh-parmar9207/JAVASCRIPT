const myNums = [1, 2, 3,]

//reduce
// const mtTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc value is : ${acc} & currval is ${currval}`);

//     return acc + currval
// }, 0)//after scope give value will take by acc for first iteation

//with arrow function
// const mtTotal = myNums.reduce((acc, currval) => acc + currval, 0)


// console.log(mtTotal);



const shoppingcart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "mobile",
        price: 19999
    },
    {
        item: "laptop",
        price: 299999
    }
]

const mtTotal = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(mtTotal);