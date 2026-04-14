//All primitive values (number,string,boolean,) always pass by value
function multiply(x,y){
    x=x+5;
    y=y+12;
    const mult=(x*y);
    return mult;
}
// function multiply(x,y){
//     const mult=(x*y);
//     return mult;
// }
const result=multiply(5,6);
console.log(result);

const a=5;
const b=8;
console.log("Before the function call:",a,b);
const result2=multiply(a,b);
console.log(result2);
console.log("After the function call:",a,b);

//non premitive values are passed by reference
const manik={name:'manik',balance:4000};
const roton={name:'roton',balance:50000};

console.log("before call",manik,roton);

function totalMoney(person1,person2){
    person1.balance=0;
    person2.balance=person2.balance/2;
    const total=person1.balance+person2.balance;
    return total;
}
const balance=totalMoney(manik,roton);
console.log("balance",balance);
console.log("After function call",manik, roton);