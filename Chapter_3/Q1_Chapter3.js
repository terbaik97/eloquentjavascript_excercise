function min(number_1, number_2) {  
//number_1 as parameter one 
//number_2 as parameter two
//It will compare both parameter if number_1 small compare to number_2 then it will return number_1
//I am using ternary operator which if statement is true then it will return number_1 else return number_2
  return ((number_1 < number_2) ? number_1 : number_2);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10