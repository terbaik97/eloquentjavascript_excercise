
//looping a number 1 until 100
for ( var num = 1; num < 101; num ++ ) {
  
  // if the number is divisible by both 3 and 5, then print FizzBuzz
  if ( num % 15 ==0  ) 
  	console.log( "FizzBuzz");
  
  // if the number is divisible by 3, then print Fizz
  else if (num % 3 == 0)
    console.log( "Fizz");
  
  // if the number is divisible by 5, then print Buzz
  else if (num % 5 == 0)
    console.log( "Buzz");
  
  // otherwise just print the number
  else
    console.log( num );
} 
