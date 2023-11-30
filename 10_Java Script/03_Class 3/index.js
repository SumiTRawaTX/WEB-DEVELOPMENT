console.log('hello jee');

// let lastName = 'babbar';
// let firstName = new String('love');

// let message = 
// `this is ${lastName},
// my first
// message`;
// console.log(message);
// let words = message.split(' ');
// console.log(words);

// let date = new Date();
// console.log(date);

// let date2 = new Date('june 20 1998 07:15');

// let date3 = new Date(1998, 6, 20, 7);

// let number = [1,2,3,5];
// console.log(number);

// // searching
// console.log(number);
// console.log(number.indexOf(9));

// /we want to check if a number exist in an array
// if(number.indexOf(4)!=-1)
//     console.log("present"); //this is not right way

// console.log(number.includes(7));

// console.log(number, indexOf(4,2));

// let courses = [
//     {no:1, naam:'love'},
//     {no:2, naam:'rahul'}
// ];

// console.log(courses);

// courses.find(function(course) {
//     return course.name =='love'
// })

// let course = courses.find(course => course.name === 'kilvish');

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);

// console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = number;
// // // numbers=[];
// // numbers.length=0;
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(numbers2);


// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks =[1,2,3,4,5,6,7,8];
// let sliced = marks.slice(2,4);
// console.log(sliced);


// let first = [1,2,3];
// let second = [4,5,6];

// let combine = [...first,'a',false, ...second,'b',true];
// console.log(combine);

// let arr=[1,2,,3,4,5];
// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(number) {
//     console.log(number);
// });

// arr.forEach(number=>console.log(number));

// let number = [1,2,3,4,5];

// const joined = number.join(',');
// console.log(joined);

// let message = 'this is mu first message';
// let parts = message.split(' ');
// console.log(parts);

// let numbers = [49,30,10,20,50];
// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// let numbers = [1,2,-1,-4];

//     let filtered = numbers.filter(value => value => 0);
//     console.log(filtered);

// let number = [7,8,9,10];
// console.log(number);
// let items = number.map (function(value) {
//     return 'student-no' + value;
// });
// console.log(items);

let number = [1,2,-6,-9];
let filter = number.filter(value=> value=> 0);

let items = filter.map(function(num) {
    return {value:num};
});