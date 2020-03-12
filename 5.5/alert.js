'use strict';
/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


function camelize(str) {
    //console.log(str.split('-'));
    return str.split('-').map(item => str.indexOf(item) != 0 && item.length > 0 ? item[0].toUpperCase()+ item.substring(1): item ).join('');
}

console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
*/

/*
Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b) {
    let newArray = [];
    arr.map(item => item >= a && item <= b ? newArray.push(item):"");
    return newArray;
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
*/

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]


function filterRangeInPlace(arr, a, b) {

    arr.map(item => item >= a || item <= b ? arr.splice(arr.indexOf(item),1):"");
    
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);
*/

/*
Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];
arr.sort( (a, b) => a - b);
console.log(arr);
*/

/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
    let newArray = arr.slice();
    return newArray.sort();

}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
*/

/*
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.

function Calculator() {
    this.Methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }
    this.calculate = function (str) {
        let array = str.split(' ');
        let op = array[1];
        let operandOne = +array[0];
        let operandTwo = +array[2];
        
        if (isNaN(operandOne) || isNaN (operandTwo) || this.Methods[op] == null) {
            return null;
        }
        else return this.Methods[op](operandOne,operandTwo);
        
    }
    this.addMethod = function(name, func) {
        this.Methods[name] = func;
    }
}
let calculator = new Calculator();
let oneOperation = calculator.calculate("1 + 2");
let twoOperation = calculator.calculate("1 - 2");
console.log(oneOperation);
console.log(twoOperation);
calculator.addMethod("**", (a, b) => a ** b);
let result = calculator.calculate("2 ** 3");
console.log(result); // 8
console.log(calculator.Methods);
*/

/*
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

alert( names ); // Вася, Петя, Маша
*/
