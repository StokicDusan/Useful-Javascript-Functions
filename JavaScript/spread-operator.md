# Spread Operator

The Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. The spread operator is often used in combination with destructuring.  
Spread operator with Arrays.
```js
const dusan = 'dusan';
const letters = [...dusan];
console.log(letters);               // [ 'd', 'u', 's', 'a', 'n' ]

const fruit = ['orange', 'banana', 'banana', 'lemon'];
const friend = ['josh', 'peter','kelly'];
const bestFriend = 'john';

const combineArray = [...fruit, bestFriend, ...friend];
console.log(combineArray)           // [ 'orange', 'banana', 'banana', 'lemon', 'john', 'josh', 'peter', 'kelly' ]
```
Copy array into a new one using spread operator.
```js
const newCombineArray = [...combineArray];
newCombineArray[0] = 'susan';
console.log(newCombineArray)        // [ 'susan', 'banana', 'banana', 'lemon', 'john', 'josh', 'peter', 'kelly' ]
console.log(combineArray)           // [ 'orange', 'banana', 'banana', 'lemon', 'john', 'josh', 'peter', 'kelly' ]

// with references -- both changed! 
const newCombineArrayRef = combineArray;
newCombineArrayRef[0] = 'susan';
console.log(newCombineArrayRef)     // [ 'susan', 'banana', 'banana', 'lemon', 'john', 'josh', 'peter', 'kelly' ]
console.log(combineArray)           // [ 'susan', 'banana', 'banana', 'lemon', 'john', 'josh', 'peter', 'kelly' ]
```
Spread operator with Objects
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

//adding one new property and changing an existing one
const newPerson = {...person, country: 'Iceland', job: 'Footballer' }
console.log(person)                 // { first: 'Aron', last: 'Gunnarsson', city: 'Akureyri', job: 'Football player', siblings: { brother: 'Arnor Thor' } }
console.log(newPerson)              // { first: 'Aron', last: 'Gunnarsson', city: 'Akureyri', job: 'Footballer', siblings: { brother: 'Arnor Thor' }, country: 'Iceland' }
```
