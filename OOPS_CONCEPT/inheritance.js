class User{
    constructor(username){
        this.username=username;
    }


    logMe(){
        console.log(`username is ${this.username}`)

    }

}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.password=password;
        this.email=email;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}` );
    }

}

const nik=new teacher("nik","nik@gmail.com","123")
nik.addCourse()


const sus=new User("sus")
sus.logMe();
//sus.addCourse(); it donot have accesess to teacher class causer we created sus from user class
nik.logMe();//but nik have access to logme clss as it extends the user class

console.log(nik===sus)
console.log(nik instanceof User)
