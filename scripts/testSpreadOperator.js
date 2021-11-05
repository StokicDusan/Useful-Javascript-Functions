// Spread Operator...

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const fruit = ['orange', 'banana', 'banana', 'lemon', 'apple'];
const friend = ['josh', 'peter', 'bob', 'anna', 'kelly'];
const bestFriend = 'john';

const friends = [...fruit, bestFriend, ...friend];
console.log(friends)

//references -- both changed! 
// const newFriends = friends;
// newFriends[0] = 'susan';
// console.log(newFriends)
// console.log(friends)

const newFriends = [...friends];
newFriends[0] = 'susan';
console.log(newFriends)
console.log(friends)

// Objects

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