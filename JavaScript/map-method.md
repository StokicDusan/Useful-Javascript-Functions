# Map method

The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order.
```js
const ages = people.map((item)=>{
    return item.age;
});
console.log(ages);                  // [ 20, 25, 23, 32, 31, 29, 23, 43 ]

//example with referencing the mapping function
const getAges2 = (item) => item.age;
const ages2 = people.map(getAges2)
console.log(ages2);                 // [ 20, 25, 23, 32, 31, 29, 23, 43 ]
```
Looking for Unique values with map:

```js
const allPositions = people.map((item)=> item.position);
console.log(allPositions))          // [ 'position1', 'position2', 'position3', 'position4', 'position4', 'position4', 'position3', 'position1' ]
const uniquePositions = [...new Set(people.map((item) => item.position))];
console.log(uniquePositions)        // [ 'position1', 'position2', 'position3', 'position4' ]
```
