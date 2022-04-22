const num = 5;
const arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

function findCouple (arr, num) {
  const obj = {};
  const result = []
  const arrSort = arr.sort((a, b) => a - b)
  for (let i = 0; i < arrSort.length; i++) {
    if (arrSort[i] === arrSort[i + 1]) {
      arrSort.splice(i, 1)
    }
  }
  for (let i = 0; i < arrSort.length; i++) {
    obj[arrSort[i]] = i;
  }
  console.log(arrSort)
  for (let i = 0; i < arrSort.length; i++) {
    const term = num - arrSort[i]
    if (obj[term] && obj[term] !== arrSort[i]) {
    result.push ('Ваша пара чисел: ' + obj[term] + ' и ' + i)
    }
  }
  console.log(result)
}

findCouple (arr, num)