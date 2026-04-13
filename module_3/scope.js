// if (true){
//     const data=58;
//     console.log("inside the if blocade",data);
// }   
// // console.log(data);

// for(const num of [1,2,3,4,5]){

// }


//function or local scope 
function doMath(a,b){
    console.log(a,b);
    const sum =a+b;
    const total=sum+10;
}
console.log(a,b);

//global scope
const name="Tom Hanks";
if(true){
    const ss=55;
    console.log("inside the call of a block is",data,name);
    function doubleIt(x){
        return x*2;
    }
    console.log("Calling Doubleit ",doubleIt(457));
}
