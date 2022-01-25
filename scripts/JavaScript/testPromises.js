// Promises
// Promises avoid callback hell
// In Javascript Promise is an object that returns a value which we hope to receive in future


// async await
// consume/use promises

// States of a Promise: Pending, Rejected, FulFilled

const value = 2
const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random() * 3)
    if(random === value){
        resolve('hello world')
    }else{
        reject('there was an error')
    }
})

console.log(promise)
promise.then((data)=>console.log(data)).catch((err)=>console.log(err));

