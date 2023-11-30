// console.log('kya haal');

// function run() {
//     console.log('running');
// }

// fuction call or invoke
// run ();

// fuction assignment
// let stand = function walk() {
//     console.log('walking');
// }
//  stand();

// let jump = stand;
// jump();

// let x = 1;
// x ='a';
// console.log(x);

// function sum(a, b) {
//     let total = 0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }

// // console.log(sum(1,3));
// // console.log(sum(1));
// //console.log(sum());
// let ans = sum(1,2,3);
// console.log(ans);

// function sum(...args) {
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// default parameters
// function interest (p,r,y) {
//     return p*r*y/100;
// }
// console.log(interest(1000, 10, 5));

//  GETTTER SETTER

// GETTER -> access property
// SETTER -> change or mutate poperties

// let person = {
//     fName:'love',
//     lName : 'babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`; 
//     },
//     set fullName(value) {
//         if(typeof value !== string) {
//             throw new Error("you have not sent a sring")
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);
// issue -> read only

// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }
// console.log(person.fullName());

// try {
//     person.fullName = true;
// }

// catch (e) {
//     alert('you have sent anumber in fullName');
// }

// console.log(person.fullName);

// {
//     var a = 5;
// }
// console.log(a);

// function walk() {
//     var a=7;
// }
// console.log(a);

let arr =[1,2,3,4];
// let total = 0;

// for (let value of arr) {
//     total = total + value;
// }
// console.log(total);/

let totalSum = arr.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
console.log("printing total sum: ");
console.log(totalSum);