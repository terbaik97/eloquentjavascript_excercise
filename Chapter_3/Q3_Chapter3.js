var countBs = function(str) {

//search for "B" for a global /g means global:
//return as a length
    return str.match(/B/g).length;
};


//another way 
var countChar2 = function(str, character) {

//declare count=0 because we want to loop from start of string until end

    var count = 0;

//it will loop from 0 until str.length 

//i++ increment by 1

    for (var i = 0; i < str.length; i++) {

//if the srt[i] which is string equal to character then it will count up

        if (str[i] === character)

//count++ to count up if it found same character

            count++;
    }

//return all the count that have been calculate

    return count;
};

//tests
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
console.log(countChar2('kakkekekkkkkkkekrlak', 'k'));

