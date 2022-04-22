// Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

let litmir = [ 
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];
 
 function propertyValue(array, key) {
   const result = array.map(item => item[key])
   console.log(result)
 }
 
 propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
 propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид