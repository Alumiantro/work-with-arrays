function changeRegister (str) {
    const strArr = str.split('').map((currentValue) => {
      if (currentValue == currentValue.toUpperCase()) {
        return (currentValue.toLowerCase())
      } else
      return (currentValue.toUpperCase())
    })
    return strArr.join('')
  }
  
  console.log(changeRegister('КаЖдЫй ОхОтНиК'))