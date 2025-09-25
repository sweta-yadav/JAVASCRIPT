const name="sweta"
const lastname="yadav"
// console.log(name + lastname + "Value");

console.log(`my name is ${name} and my lastname is ${lastname}`)

const first_name=new String("javascript");
console.log(first_name);
console.log(first_name[0]); // we can also see this from the console
console.log(first_name.__proto__);// it will return the object


console.log(first_name.toUpperCase());
console.log(first_name.charAt(2));
console.log(first_name.indexOf('t'));


//we cannot give negative value to substring like slice
const string_1=first_name.substring(0,4);
console.log(string_1);

//it will accept positive and negative value as well
const string_2=first_name.slice(-8,4);
console.log(string_2);


//trim only works for whitespace and line terminators
const new_string="  java  "
console.log(new_string);
console.log(new_string.trim());


//replace
const second_string="javascript";
console.log(second_string.replace("java","type"));


//convert to array by using split function //we need seperator and limit
const third_string=" hello i am learning javascript"
console.log(third_string.split(" ")); 
















