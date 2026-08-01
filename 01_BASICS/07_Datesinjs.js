//Dates - It represents a single moment in time in plateform-independent format(count in milisecond).

let myDate = new Date()
// console.log(myDate.toString());//Thu Feb 05 2026 12:43:53 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Thu Feb 05 2026
// console.log(myDate.toJSON());//2026-02-05T07:17:58.935Z
// console.log(myDate.toLocaleString());//2/5/2026, 12:48:35 PM

// console.log(typeof myDate);//object


// let myCreatedDate = new Date(2025, 0, 26) //=> Sun Jan 26 2025
// let myCreatedDate = new Date(2025, 0, 26, 5, 5) // => 1/26/2025, 5:05:00 AM
// let myCreatedDate = new Date("2023-01-04") // "YYYY-MM-DD"
let myCreatedDate = new Date("01-04-2023")
// console.log(myCreatedDate.toLocaleString());

// =============== TimeStamp ====================== // 
//in real use = to get exect time in submission of quizes


let myTimeStamp =   Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//secondes convertion


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);//EXECT MONTH
// console.log(newDate.getDay());




newDate.toLocaleString('default', {
    weekday : "long"
 })//to gegt your according data


