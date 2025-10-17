// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);//its value cannot be changed 

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)

const user={
    username:"sweta",
    password:"123",
    isAvailable:true,


    orderfood:function(){
        console.log("ordered")
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"username"));

Object.defineProperty(user,'username',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user,"username"));

for (let [key,value] of Object.entries(user)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }

}

