const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myobj){
    //console.log(key);
    //console.log(myobj[key]);
    console.log(`${key} shotcut is for ${myobj[key]}`);
}
//we cannot use for in loop for map it is not 
const myarr=["sweta","nik","sus"]
for(const key in myarr){

    console.log(myarr[key]);
}