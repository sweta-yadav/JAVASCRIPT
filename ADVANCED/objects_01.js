// singleton
//object 


//object literals

 const mysym=Symbol("key1")




const obj1={
    name:"sweta",
    "last_name":"yadav",
    [mysym]:"keyvalue1",
    age:20,
    email:"swetaydv@gmail.com",
    isLoggedIn:false,
    LastLoggedIn:["monday","tuesday"]
}
//ways of accesing objects
console.log(obj1.email);
console.log(obj1["email"]);
console.log(obj1.last_name);
console.log(obj1[mysym]);


obj1.email="swetaydv2060@gmail.com"
console.log(obj1);
// Object.freeze(obj1);   //the value wont change after the freeze
obj1.email="sweta@gmail.com";
console.log(obj1);



//
obj1.greeting=function(){
    console.log("hello js user");
}
console.log(obj1.greeting());


obj1.greeting2=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(obj1.greeting2());