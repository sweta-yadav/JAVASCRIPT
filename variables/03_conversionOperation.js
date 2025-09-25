let score="33abc"
console.log(typeof score); //normal way
console.log(typeof (score)); //as a method role

let valueNInNumber=Number(score);
console.log(typeof valueNInNumber);
console.log(valueNInNumber);

//"33" => 33
// "33abc" =>NaN but the type of NaN is number only
// true => 1 , false =>0
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>true; 0=>false
// ""=>false
//"sweta"=>true



let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);