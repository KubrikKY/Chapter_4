'use strict';
// ------------1-------------

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.



function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;


for (let key in salaries) {
    sum += salaries[key];
}

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}

// ------------2-------------

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read () {
        this.a = +prompt('Number a?', 0);
        this.b = +prompt('Number b?', 0);
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    },
};

// ------------3-------------


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator () {
    this.read = function () {
        this.a = +prompt('Number a?', 0);
        this.b = +prompt('Number b?', 0);
    };
    this.read = function () {
        return this.a + this.b;
    };
    this.read = function () {
        return this.a * this.b;
    };
}

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Num?', 0);
    };
}

