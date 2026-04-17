// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//     //   .then(json => console.log(json))


// const result = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(result);

 


//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));

//
// const result= fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(result);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=>console.log(response));
// .then((response)=>response.json());

// .then((response)=>
//         console.log(response.json())
// );


// .then((response)=>response.json())
// .then((data)=>console.log(data));

// .then((response)=>respmse.json())
// fetch('https://jsonplaceholder.typicode.com/todos/1')

const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>console.log(data));
};