// function add(a,b){
//     console.log(a,b);
// }

add(88,55,43,66); // 88 55


// special keyword arguments that helps me to get all the function without being considered as parameter
//here arguments is  array like object but not an array

// function add(a,b){
//     console.log(arguments);
// }

function add(a,b){
    console.log(arguments);
    const params=[...arguments];
    console.log(params);
}


//try to find out the pass by value and pass by reference of javascript in chatgpt and take note on paper