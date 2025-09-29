// object merging 

// const obj1 = {
//     1:"a", 2:"b", 3:"c",
// };

// const obj2 = {
//     4:"A", 5:"B", 6:"C",
// };

// const obj3 = {
//     7:"1", 8:"2", 9:"3",
// };

// // const obj = Object.assign({}, obj1, obj2, obj3);
// const obj = {...obj1, ...obj2, ...obj3}; // spred method.

// console.log(obj);
// console.log(obj1);


// ************************************************   Object Destructuring  ****************************************************************

const course = {
    name: "JS",
    fee: 99,
    courseInstructor: "Hitesh Chaudhary",
}

// console.log(course.courseInstructor); // 1st - method

const {courseInstructor} = course;
console.log(courseInstructor); // 2nd - method

const {courseInstructor : instructor} = course;
console.log(instructor); // 3rd - method