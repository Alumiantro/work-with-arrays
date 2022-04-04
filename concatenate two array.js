// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

var array1 = [5, 2, 1, -10, 8];
var array2 = [5, 2, 1, -9, 3, 7]; 

var union = function(array1, array2) {
  const array3 = array1.concat(array2)
  array3.sort()
  for(let i = 0; i < array3.length - 1; i++) {
    if (array3[i] === array3[i + 1]) {
      array3.splice(i, 1)
    }
  }
  return array3
}

console.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]