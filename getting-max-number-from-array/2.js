const maxNum = (numsArr) => {
    let result = numsArr[0]
    numsArr.forEach(function (currentValue, index) {
      if (index < numsArr.length - 1) {
        if (result < numsArr[index +1]) {
          result = numsArr[index + 1]
        }
      }
    })
    return result
  }
  console.log(maxNum([1, 4, 5, 100, -23, 0, 17]))