// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива

const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach(function(elem) {
        let a = elem.length;
        if (a <= 5) {
            shortNames.push(elem);
        }
})
console.log(shortNames);

// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary']; 

names.forEach(function(elem) {
    a = elem;
    b = elem.length
    console.log('Hello ' + a +'.' + ' Your name is ' + b + ' characters long!');
})


// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 100000
}

function getLine () {
    let messagePopular;
    let messageMileage;
    (myCar.popular === true) ? messagePopular = 'is popular' : messagePopular ='is not popular';
    (myCar.mileage >= 100000) ? messageMileage = 'Covered by warranty anymore!' : messageMileage = 'Is covered by warranty!';
    console.log('Your Honda Civic ' + messagePopular + '. ' + messageMileage);
}
getLine ()


// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

function getNumber (num1, num2) {
    if (num1 < 0 || num2 < 0) {
      a = (Math.abs(num1));
      b = (Math.abs(num2));
      } 
    console.log(a + b);
}
getNumber(10, -10)


// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

function getFunction (num1, num2) {
    (num1 < 0 || num2 < 0) 
    ? console.log('Одно из чисел отрицательное') 
    : console.log(num1 + num2);
}
getFunction(2, 20)