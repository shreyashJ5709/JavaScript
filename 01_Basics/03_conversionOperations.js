let score = null;
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 and false => 0

let isLoggedIn = "abc";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "shreyash" => true;

let someNumkber = 45;
let stringNumber = String(someNumkber);
console.log(stringNumber);
console.log(typeof(stringNumber));