function removeDuplicates(arr) {
    const arrSort = arr.sort((currentValue, nextValue) => {
       if (currentValue === nextValue) {
          return currentValue;}
     });
  }
  
  console.log(removeDuplicates(["php", "php", "css", "css",
    "script", "script", "html", "html", "java"]));