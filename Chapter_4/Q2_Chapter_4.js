function reverseArrayInPlace(arr) {
 
  var newArray = []; //declare new array to fill up the reverse array

//i=arr.length because we start from end of array because we want to reverse the array
//arr.length-1 because we start looping from 0 until end of array
//i-- because we want to decrement the size of an array from end until 0 (start of an array)
  for (var i = arr.length - 1; i >= 0; i--) {

//we use .push which is built in function array to add up the value in the array 
   newArray.push(arr[i]);
  }

//after finish looping all value that have been push will return as an array
  return newArray;
}



let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]