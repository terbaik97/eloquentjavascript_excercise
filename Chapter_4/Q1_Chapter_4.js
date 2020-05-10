//function will accept two or three parameter
//function will accept even we send two parameter
//rangeNumber set default as 1 if function just accept two parameter
//if function accept three parameter then rangeNumber will follow which value that send

 

function range(startNumber,endNumber,rangeNumber=1) {

//initialize empty array to fill up the number

 let numberInRange = [];

//if startNumber small than endNumber

  if(startNumber<endNumber)
  {
//counter = startNumber means looping start from startNumber until endNumber
//startNumber+=rangeNumber mean startNumber will add-up with the range that user want 
//let say 1 until 10 and the range 3, the number will increment by 3 
//1 , 4 , 7 , 10

   for(var counter = startNumber ; startNumber <= endNumber ; startNumber+=rangeNumber)
   {    

//javascript function array will add every number into the numberInRange which is an empty array

    numberInRange.push(startNumber);  
 }   
   //after finish all looping then it will return that array which contain the number that have set with the range
    return numberInRange;
  }

//if startNumber large than endNumber
  else
  {
//counter = startNumber means looping start from startNumber until endNumber
//startNumber-=rangeNumber mean startNumber will substract with the range that user want 
//let say 10 until 1 and the range -1, the number will decrement by -1 
//9,8,7,...

     for(var counter = startNumber ; startNumber >= endNumber ; startNumber-=rangeNumber)
   {      numberInRange.push(startNumber);   }    
    return numberInRange;
  }

}

//reducer function that will accept 2 parameter
//accumulator will be equal to the first value in the array, 
//currentValue will be equal to the second.
//let say [1, 2, 3, 4, 5]
//accumulator =1 / currentValue=2
//(1 , 2)=>( 1 + 2)
//(3 , 3)=>( 3 + 3)
//(6 , 4)=>( 6 + 4)
//(10 , 5)=>( 10 + 5)
//=> will return total value that have been add up
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(range(1, 10));

//
console.log(range(1, 10).reduce(reducer));
