const score=400
console.log(score);


const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber=123.1234
console.log(otherNumber.toPrecision(4));

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));



//MATHS CONCEPTS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(2,3,7,9));
console.log(Math.max(8,2,3,10));


//random it gives the value between 0 and 1 only 
console.log(Math.random());
console.log((Math.random()*10)+1);//to avoid the 0 value
console.log(Math.floor(Math.random()*10)+1); // floor(it give only one value) value will give 0 by roundoff so +1 is added 

const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);



















