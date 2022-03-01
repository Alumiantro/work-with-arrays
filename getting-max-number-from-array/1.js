const maxNum = (arrNums) => {
    const sortArr = arrNums.sort(function(a, b) {
      return b-a;
    });
    return sortArr[0]
  }
  console.log(maxNum([1, -3, 345, 0]))