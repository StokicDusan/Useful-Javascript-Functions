# Destructuring Objects and Arrays

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
// Array Destructuring
const fruit = ['orange', 'banana', 'banana', 'lemon', 'apple'];

const friends = ['josh', 'peter', 'bob', 'anna', 'kelly', 'susan'];

let [firstName, secondName, , fourthName, , , seventhName] = friends; 
console.log(firstName, secondName, fourthName, seventhName); // josh peter anna undefined
// we avoid items we don't want from the array by adding one , 
// seventhName is undefined because we are out of bounds of the array
```
Array destructuring can be used to swap variables
```js
//swap variables
let a = 10;
let b = 20;
console.log(a, b);  // 10 20
[b, a] = [a, b];
console.log(a, b);  // 20 10
```
Object Destructuring
```js
// Object Destructuring
const person = {
    first: 'Aron',
    last: 'Gunnarsson',
    city: 'Akureyri',
    job: 'Football player',
    siblings: {
        brother: 'Arnor Thor',
    },
};

const last = "some_other_text";
const { first, last: Surname, siblings, occupation, siblings: { brother: sibling } } = person;
console.log(first, Surname, siblings, occupation, last, sibling); // Aron Gunnarsson { brother: 'Arnor Thor' } undefined some_other_text Arnor Thor

function printPerson({ first, last, siblings: { brother } }) {
    console.log(first, last, brother)                             // Aron Gunnarsson Arnor Thor
}
printPerson(person)
```

[Script for testing](/scripts/JavaScript/testDestructuring.js)