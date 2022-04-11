// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).

arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
const filterFalse = (arr) => arr.filter((curVal) => Boolean(curVal))
console.log(filterFalse(arr))