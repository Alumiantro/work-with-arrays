// Напишите код, который определяет сумму и произведение значений массива.

const arr = [ 1, 2, 3, 4, 5, 6 , 7, 8, 9];
let sum = 0;
let product = 1;

function calcul (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product; 
  return sum;
}

calcul(arr)
console.log(" Сумма : " + sum + " Произведение : " + product); /* Сумма : 45 Произведение : 362880 */