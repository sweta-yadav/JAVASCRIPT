//for of
const arr=[1,2,3,4,5];
for(const val of arr){
    console.log(val);
}
//map concept
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
console.log(map);

// it will give array of key value pair
// for(const country of map){
//     console.log(country); 
   
// }


for (const [key,value] of map)
{
    console.log(key,':-',value);//it will destructure the key value pair
}

/*const myobj={
    game1:'cricket',
    'game2':'football',
    'game3':'hockey'
}
for(const [key,value] of myobj){
    console.log(key,value);
}*/ //object cannot be iterated directly




