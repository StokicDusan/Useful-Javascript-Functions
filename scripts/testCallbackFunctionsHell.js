// callback hell has these piramyd structures

// coloring second and third referencting the first

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')


const btn = document.querySelector('#btn')

// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         first.style.color="red"
//     },1000)
// })

// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         second.style.color="blue"
//     },3000)
// })

// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         third.style.color="green"
//     },2000)
// })

btn.addEventListener('click',()=>{
    setTimeout(()=>{
        first.style.color="red"
        setTimeout(()=>{
            second.style.color="blue"
            setTimeout(()=>{
                third.style.color="green"
            },2000)
        },3000)
    },5000)
})
