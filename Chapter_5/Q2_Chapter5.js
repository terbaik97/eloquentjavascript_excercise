function loop(value, test, update, body){

//value = 3 , so i =3
//test(i) is n => n > 0(3)
//i =n => n - 1(3)

// function n (n) {
// return  n - 1;
// }
//n(3);

//test(i) is like an arrow function and actually first time new code write like this test(i)
//I think if we inteprate it , it just like an above
//body(i) is console.log(i) it will print a number

for(let i = value; test(i); i = update(i)) {
    body(i);
}    

}

loop(3, n => n > 0, n => n - 1, console.log);