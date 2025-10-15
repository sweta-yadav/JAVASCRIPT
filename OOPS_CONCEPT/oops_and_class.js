const user={
    Username:"sweta",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
       console.log(`Username: ${this.Username}`);
       console.log(this);  
    }
}
console.log(user.Username);
console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

//new keyword will make and give the new (it basically create new empty space)instance then the previous data cannot be change when we give another one
const userOne= new User("mamata",12,true)
const userTwo= new User("sus",13,false)
console.log(userOne)
console.log(userTwo)

console.log(userTwo.constructor); //reference of own user