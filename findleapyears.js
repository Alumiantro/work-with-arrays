// Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.

function chooseYears(start, end) {
    const leapYear = []
    for (let i = start; i <= end; i++) {
      if (i % 4 === 0) {
        leapYear.push(i)
      }
    }
    return(leapYear)
  }
  
  console.log(chooseYears(2000, 2018)); // [2000,2004,2008,2012,2016]