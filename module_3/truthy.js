let data;
data=0;
data=""; // its falsy
data=" "; // it should be falsy but it has a space in the string so now its not a empty string so its truthy now
data='0';
data=false;
data=true;
data=[];
console.log("Value of data:", data);

if(data){
    console.log("Value of data is Truthy");
}
else{
    console.log(data,"Value of data is falsy");
}
// if i need to capture falsy value to go inside if block
// use  logical not

if(!data){
    console.log("Inside if with a falsy value!");   
}

// capture all positive value
//double not !!

//capture any value to boolean (true false)
if(!data === true){
    console.log("Only True when inside the double not")
}

