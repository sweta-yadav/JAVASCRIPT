const promiseone=new Promise(function(resolve,reject){
    //do an async task
    //DB calls ,cryptogrpahy,network
    setTimeout(function(){
    console.log('Async task is completed..')
    resolve();

},1000)
});
promiseone.then(function(){
    console.log('promise consumed...')
})


//we can do it in one part also

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2 is completed!")
    },1000);
    resolve();
}).then(function(){
    console.log("promise 2 consumed....")
})


//promise 3
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"sweta",email:"sweta@gmail.com"});
    },1000);   
})
promise4.then(function(user){
    console.log(user);
})



//promise_04

const promise04=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"thenik",email:"nil@gmail.com"})

        }
        else {
            reject('ERROR:something wen wrong!')
        }
    },1000)
})

promise04.then((user) => {
    console.log(user)
    return user.username
}).then((username)=>{
    connsole.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>
    console.log("The promise is either resolved or rejected!")
)


//promise five
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sus",password:"123"})

        }
        else {
            reject('ERROR:something went wrong!')
        }
    },1000)
})


// async function consumedPromisedFive(){
//     try{
//         const response= await promise5
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumedPromisedFive()


//another way of writing above function
fetch("https://api.github.com/users/octocat")
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);

})
.catch((error)=>console.log(error))


