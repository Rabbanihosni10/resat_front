// function counter(){
//     let count=0;
//     const nums=[];
//     const people={};
//     function innerFunc(){
//         console.log("Inside the inner function someone called me?");
//     }
//     // return count;
//     return innerFunc;
// }
// const output=counter();
// // console.log(output); 
// console.log(output()); 


function counter(){
    let count=10;
    return function(){
        count+=1;
        console.log('inside the inner function',count);;
    }
}
const innerFunc=counter();
innerFunc(); // here count is - 11
innerFunc(); // here count is - 12
innerFunc(); // here count is - 13


console.log("--------------------------")

const innerFunc1=counter();
innerFunc1(); // here count is - 11
innerFunc1(); // here count is - 12
innerFunc1(); // here count is - 13

console.log("--------------------------");


// what is clousure in js explain with example? ---- find out in chatgpt and make note

