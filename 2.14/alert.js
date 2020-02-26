'use strict';
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


function checkAge(age) {
  let result;
  return result = (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  let result;
  return result = (age > 18) || confirm('Родители разрешили?');
}

let variable = checkAge(19);
console.log(variable);

variable = checkAge(15);
console.log(variable);
*/

/*
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


function min (a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } 
  return 'they are same!';
}

let c = min(12, 6);
console.log(c);
c = min (1, 5);
console.log(c);
c = min(6,6);
console.log(c);
*/

/*
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).


function pow (x, n) {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result = result * x;
  }
  return result;
}


let userInputX = +prompt('Введите x: ','');
let userInputN = +prompt('Введите n: ','');

alert(pow(userInputX,userInputN));
*/

function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // в