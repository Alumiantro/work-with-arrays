function colonOdd (num) {
    return num.split('').map((currentValue, index) => {
      if (+currentValue % 2 !== 0) {
      return currentValue + ':'
      } else
      return currentValue
    }).join('')
    }
  console.log(colonOdd('523428395'))