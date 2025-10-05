//immediately invoked function expression
(function func(){
 //named iife
    console.log("hello");
})();

//those function which is immediately invoked after its declaration is called IIFE
//it is used to create a separate scope
//it is also used to avoid polluting the global scope
//it is also used to create a private variable
 
( (name) => {
    console.log(`db connected ${name}`);
}) ("sweta")

//{}->global EC
//global execution context
//function execution context->local EC
//eval execution context

let val1=10;
let val2=30;
function add_num(val1,val2){
    sum=val1+val2;
    return sum

}
let res1=add_num(val1,val2);
let res2=add_num(4,3);
