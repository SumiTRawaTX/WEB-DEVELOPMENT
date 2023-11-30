console.log('chaliye shuru kerte hai');

// // object create 
// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// factory function 

// function createRectangle(length, breadth) {
//     let rectangle = {
//         length,
//         breadth,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }

//         // or
//         // draw:  {
//         //     console.log('drawing rectangle');
//         // }

//     };
//     return rectangle;
// }

// let rectangeObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2, 3);
// let rectangle3 = createRectangle(7, 9);

// Camelcase -> numberOfStudent 
// constructor function -> pascal notation -> first letter of every word is capital -> numberOfStudent
    // function Rectangle(len, bre) {
    //     this.length=len;
    //     this.breadth=bre;
    //     this.draw= function() {
    //         console.log('drawing');
    //     }
    // }

    //object creation using constaructor function
    // let rectangeObject = new Rectangle(4, 6);

    // rectangleObject.color ='yellow';
    // console.log(rectangleObject);

// let rectangle2 = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle3 = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// let a={value: 10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a=10;
// function inc(a) {
//     a++;
// }
// inc(a);
// console.log(a);

// let a={value:10};

// function inc(a) {
//     a.value++;
// }
// inc(a);
// console.log(a.value);

// let rectangle = {
//     length:2,
//     breadth:4
// };

// for-in loop
// for(let key in rectangle) {
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }/

// if('color' in rectangle) {
//     console.log('present');
// }
// else {
//     console.log('absent');
// }


// object-colone 1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest= {};

// for (let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);


// object-2

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 ={value: 25};

// let dest= Object.assign({}, src, src2);
// console.log(dest);
// screen.a++;
// console.log(dest);

// object-3
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest ={...src};
// console.log(dest);

// src.a++;
// console.log(dest);