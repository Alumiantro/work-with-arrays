// Напишите функцию copyArr(arr), которая копирует массив не изменяя jригинал

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
  return arr.slice()
}

const arr1 = arrayClone(vegetables);
console.log(arr1)