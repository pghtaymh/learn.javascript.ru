'use strict';
/*
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message ); */

// 1
/*
let name = prompt("Какое «официальное» название \"JavaScript\"?",'');
if (name.toUpperCase() == 'ECMAScript'.toUpperCase()) {
    alert("Правильно!");
} else alert("You don't know? “ECMAScript”!");
*/

// 2
/*
let userVar = +prompt('Введите число: ', '');
if (userVar > 0) {
    alert(1);
} else if (userVar < 0) {
    alert(-1);
} else alert (0);
*/

//3
/*
let result;
let a = 2, b = 1;
result = (a + b < 4) ? 'Мало': 'Много';
alert(result);
*/

//4

let message, login;
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';