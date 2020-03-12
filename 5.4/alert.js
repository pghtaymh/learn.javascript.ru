'use strict';
/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);
let index = styles.length % 2;
styles[index] = "Классика";
console.log(styles);
let firstElement = styles.shift();
console.log(firstElement);
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
*/

/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
    let userInput = 0;
    let array = [];
    let sum = 0;
    while (true) {
        userInput = +prompt("Вводите числа ", 0);
        if (userInput == "" || userInput == null || isFinite(userInput) == false) {
            break;
        }
        array.push(userInput);
         
    }
    for (const iterator of array) {
        console.log(iterator);
        if (isFinite(iterator)) {
            sum = sum + iterator;
        }
        
    }
    return sum;
}

let a = sumInput();
alert(a);