const coding=["js","java","python","c++","ruby"];
coding.forEach(function(val){
    console.log(val);
})

//another way
// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

coding.forEach(printme);


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
        },
    {
        languageName:"java",
        languageFileName:"java"
        },
    {
        languageName:"python",
        languageFileName:"py"
        },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);

})



const Thecoding=["js","java","python","c++","ruby"];
const value=Thecoding.forEach((item)=>{
    //console.log(item)
    return item;
})
console.log(value);

const myarr=[1,2,3,4,5,6,7,8,9,10]

//by using filter
// const newarr=myarr.filter((num)=>{
//     return num>4
// }) //this is easy 


//another way
const newnum=[]
myarr.forEach((num)=>{
    if(num>4){
        newnum.push(num)
    }
})

console.log(newnum);



