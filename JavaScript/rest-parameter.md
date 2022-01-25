# Function Rest Parameter ...

The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

```js
// rest parameter with arrays
const fruit = ['orange', 'banana', 'banana', 'lemon', 'apple'];
const [first, ...restOfFruits] = fruit;
console.log(first)                  // orange
console.log(restOfFruits);          // [ 'banana', 'banana', 'lemon', 'apple' ]

const specificFruit = restOfFruits.find((item) => item === 'lemon');
console.log(specificFruit)          // lemon
```
Using rest parameter with objects
```js
const person = {
    first: 'Aron',
    last: 'Gunnarsson',
    city: 'Akureyri',
    job: 'Football player',
    siblings: {
        brother: 'Arnor Thor',
    },
};
const { first: firstName, ...restOfObject } = person;
console.log(firstName)              // Aron
console.log(restOfObject)           // { last: 'Gunnarsson', city: 'Akureyri', job: 'Football player', siblings: { brother: 'Arnor Thor' } }
```
Using rest parameter with functions
```js
// we use rest when we declare the function,
// we use spread when we invoke the function.

const getAverage = (name, ...scores) => {
    console.log(name);              // Aron
    console.log(scores);            // [ 20, 30, 123, 10 ]
    const average = scores.reduce((total, current) => { return total += current }, 0) / scores.length;
    console.log(average)            // 45.75
}
const testScores = [20, 30, 123, 10];
getAverage(person.first, ...testScores)
```

[Script for testing](/scripts/JavaScript/testRestOperator.js)