let my_Date=new Date()
console.log(my_Date.toString());
console.log(my_Date.toLocaleString());
console.log(my_Date.toDateString());
console.log(typeof my_Date);

let myCreateDate=new Date(2026,9,26)
console.log(myCreateDate.toDateString());


let new_date=new Date("09-26-2025")
console.log(new_date.toLocaleString());


let datee=(Math.floor(Date.now())/1000);// it will convert the milisecond date into normal date 
console.log(datee);
console.log(new_date.getMonth());


new_date.toLocaleString('default',{weekday: "long",})

