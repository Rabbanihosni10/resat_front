//Type coersion ( type convert  )

console.log(2==2);
console.log(2=="2");

console.log(true==1);

// if one value is string; another is number : converts into string --> number then compare

//if one value is boolean ; another is number : convert the boolean to number
//true = 1 , false = 0
console.log(true==1);
console.log(true=='1');
console.log(false==0);     
console.log(false=='0');


// 1=='1'--> 1==1

console.log(null==undefined);

console.log(NaN==NaN);

console.log([]=='');

console.log([4]==4);
console.log([3]=='3')
console.log([4].toString());

console.log({}=={});
console.log({}==[]);

// as reference address are same and value same
const p=[3,4,5,6];
const q=p;
console.log(p==q);
