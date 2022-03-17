// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.


const array = [1,2,3,4,5,6,7,8,9];

 function getFirst(array, n) {
   const resultArray = array.slice(0, n)
   return (resultArray)
};

console.log(getFirst(array, 1));  // 1
console.log(getFirst(array, 4)); // 1,2,3,4
console.log(getFirst(array,-3)); // 1,2,3,4,5,6