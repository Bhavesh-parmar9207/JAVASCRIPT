//Higher Order Loops

//forof
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); 
}
const greetings = "Bhavesh"
for (const greet of greetings) {
    // console.log(`Each word is  :  ${greet}`);
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


// Create a new Map
const myMap = new Map();

// 1. set(key, value) adds or updates an element with a specified key and value.
myMap.set('name', 'GFG');
myMap.set('age', 25);
myMap.set(1, 'One'); 

console.log(myMap);


// 2. get(key) returns the value associated with the specified key.
console.log(myMap.get('name')); 
console.log(myMap.get('age')); 
console.log(myMap.get(1)); 
console.log(myMap.get('invalidKey')); // Output: undefined

// 3. has(key) returns a boolean indicating whether an element with the specified key exists.
console.log(myMap.has('name')); // Output: true
console.log(myMap.has('address')); // Output: false
console.log(myMap.has(1)); // Output: true

// 4. delete(key) removes the element with the specified key.
myMap.delete('age'); // Output: true
console.log(myMap.has('age')); // Output: false
console.log(myMap); // Output: Map { 'name' => 'GFG', 1 => 'One' }

// 5. clear() removes all elements from the Map.
myMap.clear();
console.log(myMap); // Output: Map {}

console.log(myMap.size); 

myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.size); 
console.log(myMap);