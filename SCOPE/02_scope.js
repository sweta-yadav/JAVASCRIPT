//function under function scope

function one(){
    const username="sweta"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website); this line will give error because website is not defined in this scope const is under thw upper scope only so
    two()

}
one()
//closure property we can use the outside variable i.e parent varible inside another function i.e child function can access it


if(true){
    const username="sweta"
    
    if(username==="sweta"){
        const website="  youtube"
        console.log(username+website)
    }
    //console.log(website);
}
//console.log(username)


// *************interesting********************************

function addone(num){
    return num + 1
}
addone(2)//in this function we can declare this even before declaration


//this is sometime called expression also
const addtwo=function (num){
    return num+2
}

addtwo(3) //this should be called here only not before declaration