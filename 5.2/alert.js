'use strict';
/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let a = +prompt('Введите первое число: ', 0);
let b = +prompt('Введите второе число: ', 0);

if (isFinite(a) == true && isFinite(b) == true) {
    alert('Сумма двух чисел = ' + Number(a + b));
}
*/

/*
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35?

alert( (6.35 * 10).toFixed(1) );
*/

/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


function readNumber() {
    let varA;
    while (true) {
        varA = +prompt("Введите число: ");
        if (varA == "" || varA == null) {
         return null;
        }
    }
    return varA;
}

let varB = readNumber();
alert('Вы ввели : ' + varB);
*/

/*
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function random(min, max) {
    let a = Math.random(min,max+1);

    return Math.round(a);
}
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525