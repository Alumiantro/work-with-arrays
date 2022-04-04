// Напишите код, который находит наиболее часто используемый элемент массива.

const str = 'addddbcsaertdd';

function returnMaxCount(str){
  let obj = {};
  for(let i = 0 ; i < str.length; i++){
    let key = str[i];
    if(obj[key]){
      obj[key]++
    }else {
      obj[key] = 1;
    }
  }
  let maxCount = 0;
  let maxString = '';
  for (var key in obj) {
    if (maxCount < obj[key]) {
      maxCount = obj[key]
      maxString = key
    }
  }
  return 'Самая частая буква ' + maxString + ' Встречается ' + key + ' раз';
}

console.log(returnMaxCount(str))