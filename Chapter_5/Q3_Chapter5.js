

function every2(arr, func) {


//arr is an array of number
//func is a function with parameter n => n < 10
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

//element is a number inside an array will be check using condition func
//!func(element) we use this ! symbol because some method return at least one condition means that if it find true then it will not check others
//example [2, 4, 16] true return true so it will not check other which is 4 and 16
//so we need to reverse a value of boolean

    return !arr.some( element => !func(element));
}


//every([1,2,3], n => n < 3)
console.log(every2([2, 4, 9], n => n < 10));

console.log(every2([1, 3, 5], n => n < 10));
// → 
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true