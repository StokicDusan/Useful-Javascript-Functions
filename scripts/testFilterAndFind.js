// differences between filter and find in js
// filter returns a new array based on condition. (can manipulate sizes)
// find returns first single instance (object) or undefined

const people = [
    { name: 'name1', age: 21, position: 'position1' },
    { name: 'name2', age: 31, position: 'position2' },
    { name: 'name3', age: 23, position: 'position3' },
    { name: 'name4', age: 19, position: 'position4' },
    { name: 'name5', age: 19, position: 'position4' },
    { name: 'name6', age: 22, position: 'position4' },
    { name: 'name7', age: 31, position: 'position3' },
    { name: 'name8', age: 19, position: 'position1' },
];

// filter
const youngPeople = people.filter((item) => {
    return item.age < 25
})
console.log(youngPeople)

const position2 = people.filter((item) => item.position === "position2")
console.log(position2);
console.log(position2[0].name);

// no match
const seniorPeopleFilter = people.filter((item) => {
    return item.age > 65
})
console.log(seniorPeopleFilter);

// find
const name2 = people.find((item) => item.name === "name2")
console.log(name2);
console.log(name2.position)

// no match
const seniorPeopleFind = people.find((item) => {
    return item.age > 65
})
console.log(seniorPeopleFind);

// multiple matches - first match
const position3 = people.find((item) => item.position === "position3")
console.log(position3);