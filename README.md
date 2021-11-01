[![Contributors][contributors-shield]][contributors-url]
[![Commit-activity][commit-activity-shield]][commit-activity-url]
[![Issues][issues-shield]][issues-url]
[![Repo-size][repo-size-shield]][repo-size-url]
[![Forks][forks-shield]][forks-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Welcome to Useful-Javascript-Functions 

This is a collection of tips and references to functions and some chunks and pieces of useful Javascript functionalities that might come in handy to beginers for learning or working on Javascript projects.  

This collection can be used as a cheatsheet and will be expanded upon as I work on perfectiong my own knowledge in Javascript.

## How to use it

## Collection

### Reduce method
The reduce() method executes a reducer function for each value of an array. Returns a single value which is the function's accumulated result.  
In the example below, `people` is an array of objects which has a `salary` property with integer values.
```js
// 1st parameter ('total') - total of all calculations
// 2nd parameter ('current') - current iteration/value
const totalSalary = people.reduce((total, current) => {
        total += current.salary
        console.log(current.salary) // 100 500 230 350  350  350  220  100
        console.log(total)          // 105 605 835 1185 1535 1885 2105 2205
        return total                // we always return total !!!
    }, 5)                           // five is the inital (starting) value
console.log(totalSalary);           // 2205
```

## Provide Feedback

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