// callback function is a function that we pass in as an argument
// and execute it later

function makeUppercase(value){
    console.log(value.toUpperCase())
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name,cb){
    const fullName = `${name} stokic`
    cb(fullName)
    //some more logic
    cb(fullName)
    cb(fullName)
}

handleName('dusan',makeUppercase); // we are not invoking but referencing makeUppercase function
handleName('dusan',reverseString); // we are not invoking but referencing reverseString function

handleName('susan',function(value){
    console.log(value)
})
handleName('susan', (value) => console.log(value))

// array methods, setTimeout, event listeners etc

const btn = document.querySelector("#btn")

btn.addEventListener('click',()=>{
    console.log('hello world')
})