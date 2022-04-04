// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.

const array = [1,2,3,4,5,6,7,8,9];

 function getFirst(array, n) {
   const resultArray = array.slice(-n)
   return (resultArray)
};

console.log(getFirst(array, 1));  // 9
console.log(getFirst(array, 4)); // 6,7,8,9
console.log(getFirst(array, 12)); // 1,2,3,4,5,6,7,8,9