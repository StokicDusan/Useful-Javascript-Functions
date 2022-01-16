[![Commit-activity][commit-activity-shield]][commit-activity-url]
[![Issues][issues-shield]][issues-url]
[![Repo-size][repo-size-shield]][repo-size-url]
[![Forks][forks-shield]][forks-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Welcome to Useful-Javascript-Functions 
This is a collection of tips and some small chunks and pieces of useful Javascript functionalities that I learn day to day across a variety of websites. This might come in handy to beginners for learning or working on Javascript projects.

This collection can be used as a reminder and will be expanded upon as I work on perfectiong my own knowledge in Javascript.

## Categories
Below are liks to 
Table of contents:  
- [Welcome to Useful-Javascript-Functions](#welcome-to-useful-javascript-functions)
  - [Categories](#categories)
  - [How to use it](#how-to-use-it)
  - [JavaScript](#javascript)
    - [Function Rest Parameter ...](#function-rest-parameter-)
    - [Spread Operator](#spread-operator)
    - [Array from()](#array-from)
    - [Optional Chaining ?.](#optional-chaining-)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
    - [Fetch API](#fetch-api)
      - [Errors](#errors)
    - [Timestamp](#timestamp)
- [Provide Feedback](#provide-feedback)

## How to use it
Examples can be run from the scripts directory. Cloning and running a live server on this repository, you can test all the scripts on `index.html` which is setup for all the examples in the directory.  
Be sure to change the source script for the script you wish to test.
```html
    <script src="scripts/testGetElementHelper.js"></script>
```
---
## JavaScript 
 - [JavaScript Callback Functions](JavaScript/callback-functions.md)
 - [Inner Height/Width](JavaScript/inner-height-width.md)
 - [Get Element Helper](JavaScript/get-element-helper.md)
 - [Reduce Method](JavaScript/reduce-method.md)
 - [Map Method](JavaScript/map-method.md)
 - [Filter and Find Method](JavaScript/filter-find-method.md)
 - [Destructuring Objects and Arrays](JavaScript/destructuring-objects-arrays.md)

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

---
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

---
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

---
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

---
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

---
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

---
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

---
### Timestamp
The Date object is used to work with dates and times. Date objects are created with new Date(). getTime() returns the number of milliseconds since January 1, 1970.
```js
// Timestamps

console.log(new Date());
console.log(Date.now())
console.log(new Date().getTime())
console.log(new Date().valueOf())

setTimeout(()=>{
    console.log(Date.now());
},1000)

// silly example

let people = [];
people = [...people, {id:Date.now(), name:'peter'}];

setTimeout( () => {
    people = [...people, {id:Date.now(), name:'john'}];
    console.log(people)
},1000)

// create/get dates

console.log(new Date(1614689018032))
const now = Date.now()
const futureDate = new Date(now+3600000)
console.log(Date())
console.log(futureDate)

// Diference between dates

const firstDate = new Date();
const secondDate = new Date(2021,10,21); // 21. Nov 2021.

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();
const timeDifference = secondValue - firstValue

console.log(timeDifference)
const days = timeDifference /(1000*60*60*24)
console.log(days)
```

# Provide Feedback
If you encounter any bugs or have suggestions, please file an issue in the
[Issues][issues-url]
section of the project.

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
