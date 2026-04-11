//undefined
// not defined

let money;
console.log(money);

function total(a,b){
    console.log("Value of perameters: ",a,b);
}
function total2(a,b){
    console.log("Value of perameters: ",a,b);
    if(a===undefined || b===undefined){
        return;
    }
    if(a && b){
        const sum=a+b;
        return sum;
    }
}
// total();

// total(7);
const result = total(5,6);

// if something is not returned in function then it show result in undefined

console.log("Value of fundtion called is:", result);

const result2=total2(5);
console.log("Value of fundtion called is:", result2);

const phone= {brand: "smsu", price: 12500};
console.log(phone.color);
/**
 * As the color is not mentioned in the object, so here the console result will be undefined
 */

const banks=['Sonali','Rupali','Jomuna'];
// console.log(banks[0]);
// console.log(banks[1]);
// console.log(banks[2]);
// console.log(banks[3]); // as it is not present in the banks array

delete banks[1];
console.log(banks[1]);  // As the data is deleted and it is now not present in the array

console.log("Typeof undefined:",typeof undefined); // it is a data type in js

console.log("Typeof null:", typeof null); // it is an object in js 