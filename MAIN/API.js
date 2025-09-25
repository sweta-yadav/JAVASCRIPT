const URL="https://catfact.ninja/facts";
let promise=fetch(URL);
console.log(promise);


const getpara=document.querySelector(".fact");
const btn=document.querySelector("#btn");


const getFacts=async()=>{
    console.log("fetching facts...");
    let response=await fetch(URL);
    console.log(response); //JSON format

 let data= await response.json();
// console.log(data.data[0].fact);
getpara.innerText=data.data[0].fact;
};

btn.addEventListener("click",getFacts);
