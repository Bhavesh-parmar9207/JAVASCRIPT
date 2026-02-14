// // const coding = ["js", "rb", "py", "java", "cpp"]
// // const values = coding.forEach((item) => {
// //     console.log(item);
// //     return item

// // })
// // console.log(values);//it gives values but not return anything | fro that we have to return 
// // //foreach never returns values there is always undefined    


// //conditional

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter((num) => {return num > 4})//here it return the values | if we use {} then we have to  return explicitly 
// // console.log(newNums);

// //using foreach 
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)//adding the valuues to empty arr
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 },
    { title: 'Book Three', genre: 'History', publish: 1999 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 2005 },
    { title: 'Book Five', genre: 'Science', publish: 2010 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987 },
    { title: 'Book Seven', genre: 'History', publish: 1990 },
    { title: 'Book Eight', genre: 'Science', publish: 2015 },
];

// let userBooks = books.filter((bk) => bk.genre === 'Science')//without return and {}
// console.log(userBooks);

userBooks = books.filter((bk) => { return bk.publish >= 1900 && bk.genre === 'Fiction' })//with return and {}
console.log(userBooks);
