// Reduce

// 1st parameter ('total') - total of all calculations
// 2nd parameter ('current') - current iteration/value

const people = [
    { name: 'name1', age: 21, position: 'position1', salary: 100 },
    { name: 'name2', age: 31, position: 'position2', salary: 500 },
    { name: 'name3', age: 23, position: 'position3', salary: 230 },
    { name: 'name4', age: 19, position: 'position4', salary: 350 },
    { name: 'name5', age: 19, position: 'position4', salary: 350 },
    { name: 'name6', age: 22, position: 'position4', salary: 350 },
    { name: 'name7', age: 31, position: 'position3', salary: 220 },
    { name: 'name8', age: 19, position: 'position1', salary: 100 },
];

const dailyTotal = people.reduce((total, current) => {
        total += current.salary
        console.log(current.salary)
        console.log(total)
        return total
    }, 0) // zero is the inital (starting) value
console.log(dailyTotal);