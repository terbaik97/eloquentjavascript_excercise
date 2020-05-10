var deepEqual = function (x, y) {

//check condition if  x and y is same or not
  if (x === y) {
    return true;
  }

//check condition type of x and y is a an object and not empty
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {

//Object.keys will count length of key in object x and y 
//if not same then return false
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

//looping a key in x 
//let say x is  {here: {is: "an", other: "3"}, object: 2}
//so prop will take here
    for (var prop in x) {


//hasOwnProperty hasOwnProperty() method returns a boolean indicating whether the 
//object has the specified property
//check if key in y  has in prop
      if (y.hasOwnProperty(prop))
      {  
//x[prop] will take key and value of object
//x[{is: "an", other: "3"}]
//y[1]
//then it will loop again into deepEqual if x[prop] and y[prop] have value

        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}

var obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", other: "2"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
// → true