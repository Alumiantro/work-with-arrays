// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

const arr3 = []

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== undefined && arr2[i] !== undefined) {
  arr3.push (arr1[i] + arr2[i])
  } else {
    arr3.push (arr1[i] || arr2[i])
  }
} 

console.log(arr3); // [5,7,9,4,5]