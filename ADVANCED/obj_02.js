//singelton object
const tinderUser=new Object()
console.log(tinderUser);


//non-singelton objects
const tinderUser2={}
console.log(tinderUser2);

tinderUser.Id="123",
tinderUser.name="nik"
tinderUser.isLoggedIn=false
console.log(tinderUser);


const regularUser={
    name:"nik",
    full_name:"yadav",
    email:"nik@gmail.com",
    fullname:{
        userfullname:{
        first_name:"sus",
        last_name:"yadav"
    }
    }
}
console.log(regularUser.fullname.userfullname.first_name);

//combining two objects

let obj1={
    1:"a",
    2:"b",
    3:'c'

}
let obj2={
    4:"d",
    5:"e",
    6:"f"
}

let obj3={obj1,obj2}// it will give object within object
console.log(obj3)

let obj4={...obj1,...obj2}
console.log(obj4);

//by using assign
const obj5=Object.assign({},obj1,obj2)
console.log(obj5)


const arr=[
    {
        id:"123",
        name:"sweta"

    },
    {
        id2:"456",
        name:"nikesh"
    },
    {
        id3:"789",
        name:"susmita"
    }
]

arr[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//firstly we put all the keys inside the array and then we can use loop or anything to loop over them
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));