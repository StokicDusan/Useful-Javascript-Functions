// Reduce with objects

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

let totalPeopleSalary = people.reduce((total, current) => {
    total.totalPeople += 1
    total.totalSalary += current.salary
    return total
}, {
    totalPeople: 0,
    totalSalary: 0,
})
console.log(totalPeopleSalary)


// same thing but a little destructured
let { totalPeopleAge, totalSalary } = people.reduce((total, current) => {
    const { age, salary } = current;

    total.totalPeopleAge += age;
    total.totalSalary += salary;
    return total
}, {
    totalPeopleAge: 0,
    totalSalary: 0,
})
console.log(totalPeopleAge, totalSalary)

//round up numbers
let numb1 = 500.6600001
console.log(numb1)
numb1 = numb1.toFixed(3)
console.log(numb1)
numb1 = parseFloat(numb1)
console.log(numb1)
numb1 = numb1.toFixed(1)
console.log(numb1)


//repo languages
const url = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

const fetchRepos = async() => {
    const response = await fetch(url);
    const data = await response.json()
    const newData = data.reduce((total, current) => {

        const { language, fork } = current;

        // if (language && !fork) {
        //     if (total[language]) {
        //         total[language] = total[language] + 1
        //     } else {
        //         total[language] = 1
        //     }
        // }

        if (language && !fork) {
            total[language] = total[language] + 1 || 1
        }

        return total
    }, {})
    console.log(newData)
}
fetchRepos()