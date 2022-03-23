// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

const array = [1, 4, 6, 4, 6, 5, 5, 7, 8]

function countIdentic(arr) {
    return arr.sort((a, b) => a-b).reduce(function result (acc, curVal, index, array) {
      if (curVal === array[index+1] && curVal !== array[index+2]) {
          acc += 1
       }
          return acc
    }, 0)
}

console.log(countIdentic(array))