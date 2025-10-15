// let myname="sweta         "
// let mygmail="sy@gmail.com"
// console.log(myname.trueLength);

let myheroes=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`power is ${this.spiderman}`); 
    }
}


    Object.prototype.sweta=function(){
        console.log("sweta is present in all objects..")
    }
 myheroes.sweta()
 //myheroes.heysweta()

 //inheritance


 const teacher={
    makevideoes:"true",
 }
 const user={
    name:"nikesh",
    gmail:"nik@gmail.com"

 }

 const teachingSupport={
    isAvailable:false
 }
 const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
 }

 teacher.__proto__=user


//modern syntax
Object.setPrototypeOf(teachingSupport,teacher)
 
let anotherUsername="nikandsus    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true lnght is : ${this.trim().length}`);
}
anotherUsername.trueLength();
"sweta".trueLength()
"iceTea".trueLength()


//this keyword is user to determine current execution context 

