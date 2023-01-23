// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for
const nums = [2, 3, 4, 5];
let result = 1;
for (i = 0; i < nums.length; i++ ) {
    result = result * nums[i];
}
console.log(result);

// 2
// Для каждого элемента массива вывести строку типа: Riga is in Latvia
// Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}

for (prop in countries) {
    console.log(countries[prop] + ' is in ' + prop);
}


// 3
// Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;
while (val >= 5) {
    val = val / 2;
    console.log(val);
}


// 4
// Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// строка должна состоять из 4 символов одно из которых число диапозона
// если 5 то строка 0005, если 500 то строка 0500
// PS если понадобиться длина числа, метод length с числом не работает
// String(число) конвертирует число в строку
let emptyArr = [];
for(i = 0; i <= 999; i++) {
    let str = String(i);
    if (str.length === 1) {
        str = '000' + str;
    }
    if (str.length === 2) {
        str = '00' + str;
    } 
    if (str.length === 3) {
        str = '0' + str;
    }
    emptyArr.push(str);
}
console.log(emptyArr);


// 5
// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
// const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (prop of numbers) {
        if (prop % 2 == 0) {
            console.log(prop);
        }
        if (prop === 23) {
            break;
          }
    }

// 6
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

for (let i = 0; i < people.length; i++) {
        let a = (`<li><h1>${people[i].name} ${people[i].surname}</h1></li>`);
        console.log(a);
        }

// 7
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное
function getF7 (start, end) {
        let a = start + 1;
        let b = end;
        for(i = a; i < b; i++){
                let c = '';
                let d = '';
                if (i % 2 !== 0) {
                   c = 'Hечётное';
                } else {
                   d = 'Чётное';
                }
                console.log(i, c, d);
        }   
 }
 getF7(2, 9)

// 8
// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше

function getF8 (a, b) {
    console.log('Число ' + Math.max(a, b) + ' больше');
}
getF8(2, 49)

// 9
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх
function getF9 (a, b, c) {
    console.log(Math.max(a, b, c)); 
}
getNumber(2, 14, 6)

// 10
// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
    name: 'Jack',
    surname: 'Smith',
    emailVerified: false,
    age: 20,
    gender: 'Male',
    city: 'London',
    zip: 13233,
    hasChildren: false,      
    married: true
}

for (prom in myProfile) {
    a = (myProfile[prom]);
    if (typeof a === 'string') {
        console.log(prom, a);
    }}