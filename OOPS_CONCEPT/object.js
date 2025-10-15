function multipleBy5(num){
    return num*5
}

multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.prototype);
console.log(multipleBy5.prototype);

function username(username,score){
    this.username=username;
    this.score=score;
}

username.prototype.increment=function(){
    this.score++;
}

username.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}
const realuser=new username("realuser",25)
const fakeuser=username("fakeuser",80)



realuser.printme()
console.log('thenik',20)
