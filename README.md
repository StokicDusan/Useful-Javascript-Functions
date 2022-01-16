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
 - [Function Rest Parameter ...](JavaScript/rest-parameter.md)
 - [Spread Operator](JavaScript/spread-operator.md)
 - [Array from()](JavaScript/array-dot-from.md)
 - [Optional Chaining ?.](JavaScript/optional-chaining.md)
 - [Promises](JavaScript/promises.md
 - [Async/Await](JavaScript/async-await.md)
 - [Fetch API](JavaScript/fetch-api.md)

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
