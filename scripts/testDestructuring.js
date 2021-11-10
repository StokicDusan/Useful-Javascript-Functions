// Array Destructuring
const fruit = ['orange', 'banana', 'banana', 'lemon', 'apple'];

const friends = ['josh', 'peter', 'bob', 'anna', 'kelly', 'susan'];

const fruit1 = fruit[0];
const fruit2 = fruit[1];
const fruit3 = fruit[2];
console.log(fruit1, fruit2, fruit3);

let [firstName, secondName, , fourthName, , , seventhName] = friends;
console.log(firstName, secondName, fourthName, seventhName);


//swap variables
let a = 10;
let b = 20;
console.log(a, b);
// let temp = second;
// second = first;
// first = temp;
[b, a] = [a, b];
console.log(a, b);


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

// const firstName = person.first;
// const lastName = person.last;
// const brother = person.siblings.brother;

const last = "some_other_text";
const { first, last: Surname, siblings, occupation, siblings: { brother: sibling } } = person;
console.log(first, Surname, siblings, occupation, last, sibling);

function printPerson({ first, last, siblings: { brother } }) {
    console.log(first, last, brother)
}
printPerson(person)