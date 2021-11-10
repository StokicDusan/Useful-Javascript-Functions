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
