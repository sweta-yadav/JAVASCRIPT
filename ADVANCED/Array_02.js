const marvel_heroes=["Ironman","Spiderman","Thor","Hulk"]
const dc_heroes=["Batman","Superman","Flash","Wonder"]

//push and concat are same
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[4][1]);

marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);


//spread operator


const all_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_heroes);

const another_arr=[1,[2,3,4,],5,[6,7,8]]
const real_another_arr=another_arr.flat(Infinity)//it will convert the nested array into single array
console.log(real_another_arr);


//interesting
console.log(Array.isArray("javascript")); //it will check whether the given variable is array or not
console.log(Array.from("javascript"));//it will convert the string into array with each character as element
console.log(Array.from({name:"javascript"}));   //it will convert the object into array with key as index and value as value




