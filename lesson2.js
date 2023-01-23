// let x = 12345.17345;
// console.log(x.toFixed(0));
// console.log(x);
// console.log(typeof Number (x.toFixed(0)));
// console.log(x);
// x = Number (x.toFixed(0));
// console.log(x.toPrecision(4));

// console.log(Number('10.2423'));
// // console.log(Please choose: \n1. ok);

// let text1 = 'Hello people of planet Earth';
// console.log(text1[6] + text1[7] + text1[8]);
// console.log(text1.slice(6, 12));

// console.log(text1.slice(-7));
// console.log(text1.slice(-6, -1));

// console.log(text1.substring(-12, 6));
// console.log(text1.substr(6, 6));

// console.log(text1.replace('Earth', 'mars'));
// console.log(text1.replace('Earth', ''));


// const myCar = {
//     make: 'Honda', 
//     model: 'Civic',
//     isPopular: true
// }

// console.log(myCar.make);
// console.log(myCar.make + ' ' + myCar.model);
// const myCar2 = myCar;

// myCar.model = 'Accord'
// myCar2.make = 'BmW';
// console.log(myCar);
// console.log(myCar2);

// const myCar = {
//     isPopular: true
// }

// myCar.make = 'Honda';
// myCar.model = 'Civic';
// console.log(myCar);

// delete myCar.isPopular;

// console.log(myCar);

// const myCar = {
//     make: 'Honda', 
//     model: 'Civic',
// }

// console.log(myCar['make']);
// myCar['modal'] = 'C-RV';
// const carPopularity = 'isPopular'
// myCar.carPopularity = true;
// myCar[carPopularity] = true;
// console.log(myCar);


// const myCar = {
//     make: 'Honda', 
//     model: 'Civic',
//     info:{
//         year: 2000,
//         color: 'red'
//     }
// }

// console.log(myCar['info'].color[0]);


// const myCar = {
//     make: 'Honda', 
//     model: 'Civic',
//     info:{
//         year: 2000,
//         color: 'red',
//         service: {
//             mileage: 2000,
//             nextService: '10.03.2023'
//         }
//     }
// }

// // console.log(myCar['info'].color.slice(1));
// console.log(myCar.info.service.nextService);

// const userName = 'Terminator'
// const friendsQty = 1000;

// const userProfile = {
//     userName, friendsQty,
//     // name: userName,
//     // friends: friendsQty,
//     emailVerified: false
// }
// console.log(userProfile);


// const myCar = {
// make: 'Honda',
// model: 'Civic',
// isPopular: true,
// info: {
//     color: 'red',
//     mileage: 1000
// }
// } 

// let jsonString = JSON.stringify(myCar);
// console.log(jsonString);

// let myCar2 = JSON.parse(jsonString);
// myCar.info.mileage = 2000;
// myCar.info.color = 'blue'
// console.log(myCar);
// console.log(myCar2);

// const button = {
//     width: '200px',
//     text: 'Buy!'
// }

// const redButton = {
//     ...button,
//     color: 'red', 
// }

// console.log(redButton);

// const btnText = {
//     text: 'Submit'
// }

// const btnStyle = {
//     color: 'red',
//     width: 200,
//     height: 40
// }

// const button = {
//     ...btnText,
//     ...btnStyle
// }

// console.log(button);



// const numberArray = [1, 2, 3];
// console.log(numberArray);
// console.log(typeof numberArray);


// const numberArray2 = new Array(1, 2, 3);
// console.log(numberArray2);

// console.log (numberArray2[1]);


// const mixedArr = [1, true, 'Hello world!'];
// // console.log(mixedArr.length);

// // mixedArr.length = 10;
// // console.log(mixedArr);
// // console.log(mixedArr.length);
// console.log(mixedArr[2]);


// const nums = [1, 2, 3, 4, 5]
// // nums[0] = true;
// nums[100] = true;
// console.log(nums);

// console.log(nums.length);


// const testerArr = [1, 2, 3];

// let x = testerArr.pop();
// console.log(testerArr);
// console.log(x);

// const taxes = {
//     vat: 0.20,
//     unemployement: 0.016,
//     insurance: 0.008,
//     pension: 0.002
// }

// let salary = 2000;


// console.log(Object.entries(taxes)[0]);
// console.log(Object.values(taxes));

// let deduction = 0;
// Object.values(taxes).forEach(tax => {
//     deduction += salary * tax;
// })
// console.log(salary - deduction);



// const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]]
// let text = [];
// people.forEach(person => {
//     console.log("hello " + person[0] + ' ' + person[1] + '! You are ' + person[2] + ' years old');
//     console.log(`Hello ${person[0]} ${person[1]}`);
// })


const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const primeSquares = [];
const primeCubes = [];

primes.forEach(num => {
    primeSquares.push (num ** 2);
    primeCubes.unshift (num ** 3);
})

console.log(primeSquares);
console.log(primeCubes  );