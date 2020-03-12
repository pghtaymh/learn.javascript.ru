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
*/
