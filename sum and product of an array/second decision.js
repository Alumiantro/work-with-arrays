// Напишите код, который определяет сумму и произведение значений массива.

const arr = [ 1, 2, 3, 4, 5, 6 , 7, 8, 9];

const initialValue = 1
const sum = arr.reduce((acc, curVal) => acc + curVal, initialValue);
const product = arr.reduce((acc, curVal) => acc * curVal, initialValue);

console.log(" Сумма : " + sum + " Произведение : " + product); /* Сумма : 45 Произведение : 362880 */