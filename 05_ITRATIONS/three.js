//Higher Order Loops

//forof
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); 
}
const greetings = "Bhavesh"
for (const greet of greetings) {
    // console.log(`Eacch word is  :  ${greet}`);
}



//Maps

const map = new Map()
map.set("IN","India")
map.set("USA","United Sstates of America")
map.set("FR","France")
// console.log(map);
//now forof loops in map
for (const [key, value] of map) {
    // console.log(key, `:-`,value);
}


//forof in object
const myObject = {
    'game1':'NFS',
    'game2':'GTA'
}
// for (const [key,value] of myObject) {
//     console.log(key, `:-`,value);
// } this isn't workable because object is not iterable