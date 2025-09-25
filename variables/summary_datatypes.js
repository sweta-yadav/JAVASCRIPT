 // primitive data types
 // 7 types: string, number, bigint, boolean, undefined, symbol, null


 const score=100;
 const scorecvalue=100.3;


//symbol always gives the unique value
 const id=Symbol('123')
 const anotherId=Symbol('123')

 console.log(id === anotherId)

 const bigNumber=345678921;


 //reference (Non primitive)
 //array,objects,functions
 //non primitve all return objects 

 const arr=["sweta" ,"nik","sus"];

 let myobj={
    name:"sweta",
    age:20,
 }


 //function
const myfunction= function(){
    console.log("hello world")
}
console.log(typeof myfunction);//it will return function only it is called object function




// MEMMORY CONCEPTS


//Stack(primitive), Heap(Non-primitive)


let myvariable="learning javascript"
let anothername= myvariable;


anothername="i am learning javascript";
console.log(anothername);
console.log(myvariable);



let userOne={
    email:"user@gmail.com",
    upi:"user@123",
}


let userTwo=userOne;
console.log(userTwo)
userTwo.email="sweta@google.com"
console.log(userOne.email);
console.log(userTwo.email);

