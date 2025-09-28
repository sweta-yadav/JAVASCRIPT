// function hello(){
//     console.log("hello i am learning js!")
// }
// hello()



 function addTwoNumber(number1,number2){
    // let result =number1+number2;
    // return result
    return number1+number2
 }
 const result = addTwoNumber(3,"3");
 console.log(result);



 function loginUserMessage(username="sweta"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in..`
 }

 console.log(loginUserMessage("mamata"));

//if we put val1 and val2 then only the others two are printed inside the array
 function calculateCartPrice(val1,val2,...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400,500,2000))

 const user={
    username:"nik",
    price:"200"
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
//we can direct pass it also
handleObject({
    username:"nik",
    price:200
})



const new_arr=[200,400,600,100]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(new_arr))