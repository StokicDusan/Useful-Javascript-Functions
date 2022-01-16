# Callback Functions 

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
