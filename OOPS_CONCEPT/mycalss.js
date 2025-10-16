
// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changename(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const custom=new user("sweta","sw@gmail.com","123")
// console.log(custom.encryptPassword());
// console.log(custom.changename());




//behind the scene of the  class
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;   
}
User.prototype.encryptPassword=function(){
    return  `${this.password}abc`
}
User.prototype.changename=function(){
    return `${this.username.toUpperCase()}`
}
const custom2=new User("custom2","thecum2gmail.com","123")
console.log(custom2.changename())
console.log(custom2.encryptPassword())
