// let x = 5,  y = 10; 

// function sum(a, b) {
//     const result = a + b;
//     console.log(result);
// }

// sum(x, y)
// sum(12, 200)

// const sayHello = function() {
//     console.log('Hello world!');
// }
// sayHello();

// const sayGoodbye = () => console.log('Good Bye!');
// sayGoodbye();


// const sayGoodbye = name => console.log('Good' + name + '!');
// sayGoodbye('artem');

// function sample (x, y) {
//     let c;
//     x = x + 1;
//     c = x + y;
//     // console.log(c);
//     return c
// }
// sample(5, 2);
// console.log(sample(5, 2), 'two');


// function triangleArea(sideA, sideB, sideC) {
//     let halfPerimetr = (sideA + sideB + sideC) / 2;
//     let area = (halfPerimetr * (halfPerimetr - sideA) * (halfPerimetr - sideB) * (halfPerimetr - sideC)) ** 0.5;
//     return area;
// }
// console.log(triangleArea(3, 4, 5));


// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 0,
//     driveCar: function () {
//         myCar.mileage += 100;
//     }
// }

// myCar.driveCar();
// console.log(myCar.mileage);

// function wrapper(f) {
//     console.log('Starting!');
//     f();
//     console.log('Ending!');
// }

// function sayHello() {
//     console.log('Hello world!');
// }
// wrapper(sayHello);
// console.log(sayHello);

// let a = 10, b = 20, c = 30;
// function localVisibilityArea() {
//     let a = 1, b = 2, c = 3;
//     return [a, b, c]
// }


// console.log(localVisibilityArea());
// console.log([a, b, c]);

// let x = 10;
// if (x > 10) {
//     console.log('HOORAY!');
// } else if (x < 10) {
//     console.log('smaller than 10') 
//     }
//     else {console.log('NO');}


// let y = '[1, 2, 3]';

// if (typeof y === 'object') {
//     console.log();
//     y.forEach(num => console.log(num ** 2));
// }
// else {
//     console.log('Y is not object');
// }

// let a = 15;
// if (a % 2 === 0) {
//     console.log('Even');
// } else {console.log('odd');
// }


// let x = 10;
// if (x > 0) {
//     console.log('X is greater than 0');
// }
// if (x > 9) {
//     console.log('X is greater than 10');
// }

// let isikukood = '39308220194';

// if (isikukood.length === 11) {
//     console.log("ID is ok");
// } else if (isikukood.length > 11) {
//     console.log('ID is too long');
// } else if (isikukood.length < 11) {
//     console.log('ID is too short');
// }


// if (isikukood.length === 11) {
//     console.log("ID is ok");
// } else { 
//     if (isikukood.length > 11) {
//     console.log('ID is too long');
// } else {
//     console.log('ID is too short');
// }
// }


let x = 1;

if (x > 0 && x < 10) {
    console.log('OK');
}

if (x > 0 || x < 5) {
    console.log('OK AGAIN');
}


