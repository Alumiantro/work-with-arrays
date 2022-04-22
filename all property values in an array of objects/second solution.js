let litmir = [ 
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];
 
 function propertyValue(array, key) {
   for (let property of array) {
     console.log(property[key])
   }
 // let key = "likes birds";
 // то же самое, что и user["likes birds"] = true;
 // user[key] = true;
 }
 
 propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
 propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид