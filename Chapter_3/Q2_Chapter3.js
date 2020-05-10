  function isEven(number) {

//it will accept a number to check wheather even or not
//let current=2 check if balance number equal to 2 then even
    let current=2;

//Math.abs to convert number from negative to positive
    var number = Math.abs(number);

//condition 1 if number == 2 
    if (number == current) {
      return true;
    }
//condition 2 if 2 > number
     else if (current > number) {
      return false;
    } 
//condition 3 if not meet with condition 1 and 2
//let say if the number = 50; 
//it will go recursive function and will keep substract with -2 
//until it balance which is number wheather == 2 or current > number
      else {
      return isEven(number-2);
    }

  }

console.log(isEven(3));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??