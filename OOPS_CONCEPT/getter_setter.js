
//class based getter and setter
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    get password(){ //it alays return smth
        return this._password.toUpperCase();
    }
    set email(value){
         this._email=value;
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}

const sweta=new User("sweta@gmail.com",'abc')
console.log(sweta.password);