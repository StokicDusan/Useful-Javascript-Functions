[![Contributors][contributors-shield]][contributors-url]
[![Commit-activity][commit-activity-shield]][commit-activity-url]
[![Issues][issues-shield]][issues-url]
[![Repo-size][repo-size-shield]][repo-size-url]
[![Forks][forks-shield]][forks-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Welcome to Useful-Javascript-Functions 
This is a collection of tips and references to functions and some chunks and pieces of useful Javascript functionalities that might come in handy to beginers for learning or working on Javascript projects.  

This collection can be used as a cheatsheet and will be expanded upon as I work on perfectiong my own knowledge in Javascript.

## Collection
Below are brief explanations and examples of methods and functionalities.  
Table of contents:  
- [Welcome to Useful-Javascript-Functions](#welcome-to-useful-javascript-functions)
  - [Collection](#collection)
  - [How to use it](#how-to-use-it)
    - [JavaScript Callback Functions](#javascript-callback-functions)
    - [Reduce method](#reduce-method)
    - [Map method](#map-method)
    - [Filter And Find method](#filter-and-find-method)
    - [Destructuring Objects and Arrays](#destructuring-objects-and-arrays)
    - [Function Rest Parameter ...](#function-rest-parameter-)
    - [Spread Operator](#spread-operator)
    - [Array from()](#array-from)
    - [Optional Chaining ?.](#optional-chaining-)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
    - [Fetch API](#fetch-api)
      - [Errors](#errors)
- [Provide Feedback](#provide-feedback)

## How to use it
Examples can be run from the scripts directory. Cloning and running a live server on this repository, you can test all the scripts on `index.html` which is setup for all the examples in the directory.  
Be sure to change the source script for the script you wish to test.
```html
    <script src="scripts/testGetElementHelper.js"></script>
```

### JavaScript Callback Functions
Callback function is a function that we pass in as an argument and execute it later.

```js
function makeUppercase(value){
    console.log(value.toUpperCase())                    // DUSAN STOKIC, DUSAN STOKIC, DUSAN STOKIC
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))     // cikots nasud, cikots nasud, cikots nasud
}

function handleName(name,cb){
    const fullName = `${name} stokic`
    cb(fullName)
    //some more logic
    cb(fullName)
    cb(fullName)
}

handleName('dusan',makeUppercase);  // we are not invoking but referencing makeUppercase function
handleName('dusan',reverseString);  // we are not invoking but referencing reverseString function
```
Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a website to load).  

### Reduce method
The reduce() method executes a reducer function for each value of an array. Returns a single value which is the function's accumulated result.  
In the example below, `people` is an array of objects which has `salary` and `age` properties with integer values.
```js
// 1st parameter ('total') - total of all calculations
// 2nd parameter ('current') - current iteration/value
const totalPeopleSalary = people.reduce((total, current) => {
        total += current.salary
        console.log(current.salary) // 100 500 230 350  350  350  220  100
        console.log(total)          // 105 605 835 1185 1535 1885 2105 2205
        return total                // we always return total !!!
    }, 5)                           // five is the inital (starting) value
console.log(totalPeopleSalary);     // 2205
```
We can pass an object as initial value as well.
```js
let totalPeopleSalary = people.reduce((total, current) => {
    total.totalPeople += 1
    total.totalSalary += current.salary
    return total
}, {
    totalPeople: 0,
    totalSalary: 0,
})
console.log(totalPeopleSalary)      // { totalPeople: 8, totalSalary: 2200 }
```
We can restructure the function above like:
```js
let { totalPeopleAge, totalSalary } = people.reduce((total, current) => {
    const { age, salary } = current;
    total.totalPeopleAge += age;
    total.totalSalary += salary;
    return total
}, {
    totalPeopleAge: 0,
    totalSalary: 0,
})
console.log(totalPeopleAge, totalSalary) // 185 2200
```

### Map method
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

### Filter And Find method
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

### Destructuring Objects and Arrays

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

### Function Rest Parameter ...
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

### Spread Operator
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

### Array from()
from() returns an Array from any object with a length property or an iterable object.  
from() turns array-like into array - string, nodeList, Set.

```js
const dusan = 'dusan';

console.log(Array.from(dusan));     // [ 'd', 'u', 's', 'a', 'n' ]

const text = document.querySelectorAll(".text");
console.log(text);                  // NodeList(3) [ h2#first.text, h2#second.text, h2#third.text ]

const newText = Array.from(text)
console.log(newText);               // Array(3) [ h2#first.text, h2#second.text, h2#third.text ]

const personText = Array.from(text).find((item) => item.textContent === 'person')
console.log(personText);            // <h2 id="second" class="text">



const items = Array.from({ length: 12 }, (_, index) => {
    return index
})
const itemsPerPage = 5;
const pages = Math.ceil(items.length / itemsPerPage);
const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems
})

console.log(items);                 // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(pages);                 // 3
console.log(newItems);              // [ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ], [ 10, 11 ] ]
```

### Optional Chaining ?.
The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

```js
const people = [
    { name: 'boban', location: { street: '123 main street', timezone: { offset: '+7:00'} }, },
    { name: 'peter', location: { street: '123 Elm street', }, },
    { name: 'susan', location: { street: '123 Pear street', timezone: { offset: '+9:00'} }, },
]

people.forEach((item) => {
    //solution without optional chaining
    console.log(item.location && item.location.timezone && item.location.timezone.offset)

    //solution with optional chaining
    console.log(item?.location?.timezone?.offset || 'hello world');
})
```
Iterating over the list in the solution with optional chaining gives the same result as the one without except that it can give an answer for a non-existant property instead of *undefined*.  
The optional chaining solution is also shorter and simpler to implement.

### Promises

A JavaScript Promise object contains both the producing code and calls to the consuming code. When the executing code obtains the result, it should call one of the two callbacks, Success or Error.  
A JavaScript Promise object can be: Pending, Fulfilled, Rejected.

```js
const value = 2
const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random() * 3)
    if(random === value){
        resolve('hello world')
    }else{
        reject('there was an error')
    }
})

console.log(promise)                // Promise {}
promise.then((data)=>console.log(data)).catch((err)=>console.log(err));
```

### Async/Await
The keyword `async` before a function makes the function async and always return a promise. Await waits till promise is settled. Error is handled by a try/catch block.

```js
const users = [
    { id:1, name: 'john' },
    { id:2, name: 'susan' },
    { id:3, name: 'anna' },
    { id:4, name: 'eddy'},
]

const articles = [
    { userId: 1, articles: ['one','two','three'] },
    { userId: 2, articles: ['four','five'] },
    { userId: 3, articles: ['six','seven','eight','nine'] },
]

const getData1 = async () => {
    try {
        const user = await getUser('john')
        const articles = await getArticles(user.id)
        console.log(articles)       // [ 'one', 'two', 'three' ]
    } catch (error) {
        console.log(error)
    }
}

const getData2 = async () => {
    try {
        const user = await getUser('bob')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)          // No such user with name : bob
    }
}

const getData3 = async () => {
    try {
        const user = await getUser('eddy')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)          // wrong ID
    }
}

getData1()
getData2()
getData3()

function getUser(name){
    return new Promise((resolve,reject)=>{
        const user = users.find((item)=>item.name===name)
        if(user){
            return resolve(user)
        } else{
            reject(`No such user with name : ${name}`)
        }
    })
}

function getArticles(userId) {
    return new Promise((resolve,reject)=>{
        const userArtiles = articles.find((item)=>item.userId === userId)
        if(userArtiles){
            return resolve(userArtiles.articles)
        }else{
            reject(`wrong ID`)
        }
    })
}
```
In previous example async/await is used for a static array of objects. In practise, these object come from, from example, a quere on a database and this example is written with this in mind.

### Fetch API
The Fetch API interface allows web browser to make HTTP (Ajax) requests to web servers. By default it's a GET requests, supports other methods as well.  
Fetch returns a promise.

```js
const url = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

// previously we had to use the folowing:
fetch(url)
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
console.log(fetch(url))

// with async/await, instead of .then()-ing we can use:
const getRepos = async (urlLink) => {
    try {
        const repo = await fetch(urlLink)
        const data = await repo.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
getRepos(url)
```
#### Errors
Fetch only throws an error if cannot resolve. Error Response is still a response.
```js
const urlGit = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

const getRepos = async () => {
    try {
        const repo = await fetch(urlGit)
        if(!repo.ok){
            const msg = `There was na error "${repo.status} ${repo.statusText}"`
            throw new Error(msg)
        }
        const data = await repo.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const btn = document.querySelector('#btn')
btn.addEventListener('click',getRepos)
```

# Provide Feedback

If you encounter any bugs or have suggestions, please file an issue in the
[Issues][issues-url]
section of the project.

[contributors-shield]: https://img.shields.io/github/contributors/StokicDusan/Useful-Javascript-Functions
[contributors-url]: https://github.com/StokicDusan/Useful-Javascript-Functions/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/StokicDusan/Useful-Javascript-Functions?style=social
[forks-url]: https://github.com/StokicDusan/Useful-Javascript-Functions/network/members
[issues-shield]: https://img.shields.io/github/issues/StokicDusan/Useful-Javascript-Functions
[issues-url]: https://github.com/StokicDusan/Useful-Javascript-Functions/issues
[commit-activity-shield]: https://img.shields.io/github/last-commit/StokicDusan/Useful-Javascript-Functions
[commit-activity-url]: https://github.com/StokicDusan/Useful-Javascript-Functions/graphs/commit-activity
[repo-size-shield]: https://img.shields.io/github/repo-size/StokicDusan/Useful-Javascript-Functions
[repo-size-url]: https://img.shields.io/github/repo-size/StokicDusan/Useful-Javascript-Functions
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=plastice&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/stokicdusan
