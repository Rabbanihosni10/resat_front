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

const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>console.log(data));
};

const loadPosts = () =>{
    const url= "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    //promise to give me responses from fetch
    .then((res)=>res.json())
    //promise to give me json data
    // .then((json)=>displayPost(json));
    .then((json)=>{
        console.log(json)
        displayPost(json) 
        });
    // .then()
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res=>res.json())
    // .then((data)=>console.log(data));
}

const displayPost=(posts)=>{
    // console.log(posts);
    posts.forEach(post=>{
        console.log(post);
    })
}
const lordPrint=()=>{

}