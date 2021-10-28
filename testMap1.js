const people = [
    {name: 'name1', age: 20, position: 'position1'},
    {name: 'name2', age: 25, position: 'position2'},
    {name: 'name3', age: 23, position: 'position3'},
    {name: 'name4', age: 32, position: 'position4'},
    {name: 'name5', age: 31, position: 'position4'},
    {name: 'name6', age: 29, position: 'position4'},
    {name: 'name7', age: 23, position: 'position3'},
    {name: 'name8', age: 43, position: 'position1'},
];

//Usage examples------

const ages = people.map((item)=>{
    return item.age;
});
console.log(ages);


const ages2 = people.map((item)=> item.age);
console.log(ages2);


const getAges3 = (item) => item.age;
const ages3 = people.map(getAges3)
console.log(ages3);


const agesDouble = people.map((item)=>{
    return item.age * 2;
});
console.log(agesDouble)


const names = people.map((item)=> `<h2>${item.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('')

//Unique values ------

const positions = ['all', ...new Set(people.map((item) => item.position))];
console.log(positions)

const resultUnique = document.querySelector('.resultUnique');
resultUnique.innerHTML = positions.map((item)=>{
    return `<button>${item}</button>`;
}).join(' ');
