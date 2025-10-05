//this is used to refer the current context

const user={
    username:"sweta",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);
//in browser we have window object

function chai(){
    let username="sweta"
    console.log(this.username);
}
chai()


//arrow function

const msg=() =>{
    let username="sweta"
    console.log(this);
}
msg()



//ex:2

//explict return type
const addthree = (num1,num2) => { //if we use curly braces then we have to write return statement otherwise not
    return num1 + num2
}
console.log(addthree(3,2))

//implicit return type arrow function
const func=(a,b) => a+b
console.log(func(3,5))


//for running any object we have to wrap it inisde the parenthesis

const func2=(c,d) => ({username:"sweta"})
console.log(func2(8,8))

