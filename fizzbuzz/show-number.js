function showNums(num1, num2) {
    for (let i = num1; i < num2; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz')
        }
        else if (i % 3 === 0) {
        console.log('Fizz')
        }
        else if (i % 5 === 0) {
        console.log('Buzz')
        }
        else {
        console.log(i)
        }
    }
}
showNums(1, 100)