console.log("Explore API!");
const person={
    name:'Selim',
    fruit: 'dalim',
    dish: 'halim',
    friends:['roton','manik','sajib']
}
console.log(person);

//what is json?
//JS object with notation and stringfy
//json.stringify(person);


const personJSON=JSON.stringify(person);;
console.log(personJSON,typeof personJSON);

//json.parse() to convert json string to js object
const parseJSON=JSON.parse(personJSON);
console.log(parseJSON,typeof parseJSON);
