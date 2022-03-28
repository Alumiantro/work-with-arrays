// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

const arr1 = [1, [2,[3,[4]]]];
const arr2 = [1, [2], [3, [[4]]],[5,6]];

function expand(arr) {
  const newArr1 = arr.flat(Infinity)
  return (newArr1).join()
}

console.log(expand(arr1)); // 1,2,3,4
console.log(expand(arr2)); // 1,2,3,4,5,6