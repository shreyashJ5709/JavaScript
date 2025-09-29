const arr = [1,2,3,4,5,6];

// slice splice

console.log("A", arr); // [1, 2, 3, 4, 5, 6]

const arr1 = arr.slice(1, 3);
console.log(arr1); // [2, 3,]

console.log("B", arr); // [1, 2, 3, 4, 5, 6]

const arr2 = arr.splice(3, 2);
console.log(arr2); // [4, 5]

console.log("C", arr); // [1, 2, 3, 6]