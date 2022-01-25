# Filter And Find method

The find() method returns the value of the first array element that passes a test (provided by a function) or undefined.  
The filter() method creates an array filled with all array elements that pass a test (provided by a function).  
```js
// filter
const youngPeople = people.filter((item) => {
    return item.age < 25
})
console.log(youngPeople)            // [ { name: 'name1', age: 21, position: 'position1' }, { name: 'name3', age: 23, position: 'position3' }, { name: 'name4', age: 19, position: 'position4' }, { name: 'name5', age: 19, position: 'position4' }, { name: 'name6', age: 22, position: 'position4' }, { name: 'name8', age: 19, position: 'position1' } ]  

const position2 = people.filter((item) => item.position === "position2")
console.log(position2);             // [ { name: 'name2', age: 31, position: 'position2' } ]
console.log(position2[0].name);     // name2

// filter - no match
const seniorPeopleFilter = people.filter((item) => {
    return item.age > 65
})
console.log(seniorPeopleFilter);    // []

// find
const name2 = people.find((item) => item.name === "name2")
console.log(name2);                 // { name: 'name2', age: 31, position: 'position2' }
console.log(name2.position)         // position2

// find - no match
const seniorPeopleFind = people.find((item) => {
    return item.age > 65
})
console.log(seniorPeopleFind);      // undefined

// find - multiple matches - first match
const position3 = people.find((item) => item.position === "position3")
console.log(position3);             // { name: 'name3', age: 23, position: 'position3' }
```

[Script for testing](/scripts/JavaScript/testFilterAndFind.js)