// Dates 

// let dates = new Date();
// console.log(dates); // 2025-09-29T12:11:32.753Z
// console.log(dates.toString()); // Mon Sep 29 2025 12:11:32 GMT+0000 (Coordinated Universal Time)
// console.log(dates.toDateString()); // Mon Sep 29 2025
// console.log(dates.toISOString()); // 2025-09-29T12:11:32.753Z
// console.log(dates.toJSON()); // 2025-09-29T12:11:32.753Z
// console.log(dates.toLocaleString()); // 9/29/2025, 12:11:32 PM
// console.log(dates.toLocaleDateString()); // 9/29/2025
// console.log(dates.toUTCString()); // Mon, 29 Sep 2025 12:11:32 GMT

let myCreatedDate = new Date("09-29-20025");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log("Month : ", newDate.getMonth()+1); // starts from 0 to 11;