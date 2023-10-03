let score = "vikrant"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)//this format guarantees that the type of score is number
// console.log(typeof valueInNumber);

// console.log(valueInNumber);//NaN means 'Not a Number'
//"33" => 33
//"33abc" => NaN
//true => 1 false => 0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 => true; 0=> false
//"" => false
//"vikrant" => true
let someNumber = 33
let stringNumber = String(someNumber)
console.log( typeof stringNumber);