function getUser(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("got user!")
            resolve({id:1,name:"sweta"})

        },1000);

    });

}
function getPost(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("got post for",user.name);
            resolve(["post 1","post 2"]);
        },1000);
    });

}
function getComments(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("got comments for",post);
            resolve(["nice","great"]);

        },1000);
    });
}

//promise chain
// getUser()
// .then((user)=>getPost(user))
// .then((post)=>getComments(post[0]))
// .then((comments)=>console.log(comments))
// .catch((error)=>console.log(error));


//async and await 
async function showData() {
  try {
    const user = await getUser();
    const posts = await getPost(user);
    const comments = await getComments(posts[0]);
    console.log("Comments:", comments);
  } catch (error) {
    console.error(" Error:", error);
  }
}

showData();
