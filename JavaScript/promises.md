# Promises

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

[Script for testing](/scripts/JavaScript/testPromises.js)

[Script for testing with examples](/scripts/JavaScript/testPromisesExample.js)