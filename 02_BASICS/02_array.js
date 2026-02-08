const marvel_heros = ["thor", "Ironman","Spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)// give dc in marvel as 3rd 
// console.log(marvel_heros[3][1]); // =>flash
//console.log(marvel_heros); 

// const all_heroos = marvel_heros.concat(dc_heros) // => now this merge and gives all in one herros
// console.log(all_heroos);

//Spread Operator

const all_heros = [...marvel_heros, ...dc_heros] // now it gives merged array with multiple array 
// console.log(all_heros);

// const annother_array = [1, 2, 3, [ 4, 5, 6 ], 7, [6, 7, [4, 5]]]
// const real_array = annother_array.flat(Infinity)// => it gives you flate full array with all subarray(we also define depth 1 2 etc.)
// console.log(real_array);

console.log(Array.isArray("Bhavesh"))//=>check is that array or not
console.log(Array.from("Bhavesh"))//=> it convert string to array
console.log(Array.from({ name : "Bhavesh"}))//=> Empty Array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//make array form miltiple variable/elements

