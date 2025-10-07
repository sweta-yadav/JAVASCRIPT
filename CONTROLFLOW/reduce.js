const myNums=[1,2,3,4]
const myTotal=myNums.reduce(function(accumulator,currentvalue){
    console.log(`acc:${accumulator},currvalue${currentvalue}`)
    return accumulator+currentvalue
},0)
console.log(myTotal)



const final_total=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemname:"javascript course",
        price:2999
    },
    {
        itemname:"python course",
        price:999
    },
    {
        itemname:"app dev course",
        price:1000
    },
    {
        itemname:"data science course",
        price:12999
    },
]
const total_price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total_price);