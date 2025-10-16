class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username:${this.username}}`)
    }
    static createId(){
        return '123'
    }
}
const cosumer=new User("sweta")
console.log(cosumer.createId());


class Teacher extends User{
    constructor(username,email){
        this.email=email;
        super(username);
    }
}

const moto=new Teacher("phone","phone@gmail.com")
console.log()