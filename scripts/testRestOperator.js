// Rest Operator...

// rest parameter with arrays
const fruit = ['orange', 'banana', 'banana', 'lemon', 'apple'];
const [first, ...restOfFruits] = fruit;
console.log(first)
console.log(restOfFruits);

const specificFruit = restOfFruits.find((item) => item === 'lemon');
console.log(specificFruit)

// rest parameter with objects
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
console.log(firstName)
console.log(restOfObject)

// rest parameter with functions
// we use rest when we declare the function,
// we use spread when we invoke the function.

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, current) => { return total += current }, 0) / scores.length;
    console.log(average)
}
const testScores = [20, 30, 123, 10];
getAverage(person.first, ...testScores)