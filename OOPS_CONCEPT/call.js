//it holds the reference of the vairable


function SetUsername(username){
    this.username=username
    console.log("called");
}


function createUser(username,email,password){
    SetUsername.call((this,username))
    this.email=email
    this.password=password

}
const profile=new createUser("nik","nik@gmail.com","123")
console.log(profile);