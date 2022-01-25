// Spread Operator...

// Spread operator with Arrays
const dusan = 'dusan';
const letters = [...dusan];
console.log(letters);

const fruit = ['orange', 'banana', 'banana', 'lemon'];
const friend = ['josh', 'peter','kelly'];
const bestFriend = 'john';

const combineArray = [...fruit, bestFriend, ...friend];
console.log(combineArray)

// copy array into a new one using spread operator
const newCombineArray = [...combineArray];
newCombineArray[0] = 'susan';
console.log(newCombineArray)
console.log(combineArray)

// with references -- both changed! 
const newCombineArrayRef = combineArray;
newCombineArrayRef[0] = 'susan';
console.log(newCombineArrayRef)
console.log(combineArray)

// Spread operator with Objects

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

console.log(person)
console.log(newPerson)