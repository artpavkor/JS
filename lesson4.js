// const year = 2022;

// switch(year % 4) {
//     case 0:
//         console.log('It is a leap year');
//         break
//     case 1:
//         console.log('Last year was a leap year!');
//         break
//     case 3: 
//         console.log('Next year will be a leap year');
//         break
//     default:
//         console.log('It is not a leap year');
//     }
//     console.log('Good bye');

// const moth = 6;
// switch (moth) {
//     case 6:
//         console.log('June, start of summer');
//         break
//     case 7:
//         console.log('july, middle of summer');    
//         break
//     default:
//         console.log('It is not summer.');    
// }
// console.log('Good bye');


// const number = 10;
// number 
// ? console.log(number + 10) 
// : console.log(number - 10);  

// const someArray = [true, 'abc, 123'];

// const myCar = {
//     make: 'honda',
//     model: 'Civik',
//     year: 2022,
// }

// for (let i = 1; i <= 1000; i++ ) {
//     i % 2 == 0  
//     ? console.log(i, 'is Even')
//     : console.log(i, 'is Odd');
// }

// for (let num1 = 0; num1 < 10; num1++) {
//     for (let num2 = 0; num2 < 10; num2++) {
//         for (let num3 = 0; num3 < 10; num3++) {
//             console.log(num1, num2, num3);
//         }
//     }
// }

// const myArr = ['one', 'two', 'three'];

// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// // One
// myArr.forEach((val, index) => console.log(val, index));
// // Two
// function printSom(val, index) {
//     console.log(val, index);
// }
// myArr.forEach(printSom);
// // Three
// myArr.forEach(function(val, index) {console.log(val, index);})


// let counter = 0;
// // while(counter <= 100) {
// //     console.log(counter);
// //     counter += 1;   
// // }

// do {
//     console.log(counter);
//     counter += 1;
// } while (counter < 0)
 
// const myArr = ['one', 'two', 'three', 'four'];
// // const myCar = {
// //       make: 'Honda',
// //       model: 'Civic',
// //       mileage: 2000,
// //         info: {
// //             color: 'red',
// //             mileage: 1000,
// //         }
// //     }

// // for (const key in myCar) {
// //     console.log(key, myCar[key]);
// // }



// let txt = 'hello world';

// for (const val of txt) {
//     console.log(val);
// }


// const people = [
//         {
//             name: 'Jack',
//             surname: 'Smith',
//             age: 20
//         },

//         {
//             name: 'Mary',
//             surname: 'Gold',
//             age: 18
//         },

//         {
//             name: 'Sarah',
//             surname: 'Green',
//             age: 25
//         }
// ]
// for (const person of people) {
//     for (const key in person) {
//         console.log(person[key]);

//     }
//     console.log('------------');
// }


for (const letter of 'javascript') {
    if (letter === 's') {
        continue
    } else if (letter === 'p') {
        break
    }
    else {
        console.log(letter);
    }
}