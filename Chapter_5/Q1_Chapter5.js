let arrays = [[1, 2, 3], [4, 5], [6]];

//arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
//If initialValue is provided in the call to reduce(), 
//then accumulator will be equal to initialValue

//If no initialValue is provided, then accumulator will be equal to the first value
//currentValue will be equal to the second.
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
//how process work
([1, 2, 3],[4, 5])=> it will concat this two array (accumulator.concat(currentValue))
([1, 2, 3],[4, 5])=>  ([1, 2, 3 , 4 , 5])
([4, 5],[6])=>  ([1, 2, 3 , 4 , 5 , 6])
//arrays will be reduce in a Function Arrow Expression reducer

console.log(arrays.reduce(reducer))
