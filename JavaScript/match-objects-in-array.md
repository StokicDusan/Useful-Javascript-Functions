# Match Objects in array

If you need to "left join" objects in an array based on one (or more) property, you can use the method below.  
In the example below, a new array of objects in made on the `position` property and the values in `salary` property are added up for that position.

```js
const people = [{
    name: 'name1',
    age: 21,
    location: {
        country: 'country1',
        city: 'city1',
        street: 'street1'
    },
    position: 'position1',
    salary: 100
},
{
    name: 'name2',
    age: 31,
    location: {
        country: 'country1',
        city: 'city1',
        street: 'street2'
    },
    position: 'position2',
    salary: 500
},
{
    name: 'name3',
    age: 23,
    location: {
        country: 'country2',
        city: 'city2',
        street: 'street3'
    },
    position: 'position3',
    salary: 230
},
{
    name: 'name4',
    age: 19,
    location: {
        country: 'country1',
        city: 'city3',
        street: 'street4'
    },
    position: 'position4',
    salary: 350
},
{
    name: 'name5',
    age: 19,
    location: {
        country: 'country1',
        city: 'city1',
        street: 'street4'
    },
    position: 'position4',
    salary: 350
},
{
    name: 'name6',
    age: 22,
    location: {
        country: 'country3',
        city: 'city4',
        street: 'street5'
    },
    position: 'position4',
    salary: 350
},
{
    name: 'name7',
    age: 31,
    location: {
        country: 'country4',
        city: 'city5',
        street: 'street6'
    },
    position: 'position3',
    salary: 220
},
{
    name: 'name8',
    age: 19,
    location: {
        country: 'country2',
        city: 'city2',
        street: 'street7'
    },
    position: 'position1',
    salary: 100
},
];

const result = Object.values(people.reduce((total, current) => {
    const [position] = current.position.split(' ');
    total[position] = { 
      position,
      salary: total[position] ? total[position].salary + current.salary : current.salary,
    };
    console.log(total[position]);
    // { position: 'position1', salary: 100 } 
    // { position: 'position2', salary: 500 } 
    // { position: 'position3', salary: 230 } 
    // { position: 'position4', salary: 350 } 
    // { position: 'position4', salary: 700 } 
    // { position: 'position4', salary: 1050 } 
    // { position: 'position3', salary: 450 } 
    // { position: 'position1', salary: 200 }
    return total;
  }, {}));
  
  console.log(result);      // [ { position: 'position1', salary: 200 },
                            //   { position: 'position2', salary: 500 },
                            //   { position: 'position3', salary: 450 },
                            //   { position: 'position4', salary: 1050 } ]
```
[Script for testing](/scripts/JavaScript/testMatchObjectArray.js)