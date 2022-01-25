// Promises examples
// resolving callback hell from testCallbackFunctionsHell.js
// coloring second and third referencting the first

// #frist - after 1s
// #second - in 4s after first
// #third - in 2s after second
// IN SEQUENCE !!!

const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    addColor(1000,'#first','red')
    .then(()=>addColor(4000,'#second','blue'))
    .then(()=>addColor(2000,'#third','green'))
    .catch((err)=>{console.log(err)})
})

function addColor(time,selector,color){
    const element = document.querySelector(selector)
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color
                resolve()
            },time)
        }else{
            reject(`there is no such element: "${selector}"`)
        }
    })
}

//passing functions between callbacks in example above

const btnData = document.querySelector('#btn')
btnData.addEventListener('click',()=>{
    addColorData(1000,'#first','red','hello world')
    .then((data)=>addColorData(4000,'#second','blue',data))
    .then((data)=>{
        console.log(data)
        addColorData(2000,'#third','green')
    })
    .catch((err)=>{console.log(err)})
})

function addColorData(time,selector,color,data){
    const element = document.querySelector(selector)
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color
                resolve(data)
            },time)
        }else{
            reject(`there is no such element: "${selector}"`)
        }
    })
}