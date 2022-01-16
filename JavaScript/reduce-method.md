# Reduce method

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