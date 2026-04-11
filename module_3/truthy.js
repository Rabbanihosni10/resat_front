let data;
data=0;
data=""; // its falsy
data=" "; // it should be falsy but it has a space in the string so now its not a empty string so its truthy now
data='0';
data=false;
console.log("Value of data:", data);

if(data){
    console.log("Value of data is Truthy");
}
else{
    console.log(data,"Value of data is falsy");
}