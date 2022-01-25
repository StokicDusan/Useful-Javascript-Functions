// Get Element Helper

// const heading = document.querySelector('.heading')
// const listItems = document.querySelectorAll('.itemList')

const getElement = (selector,isList) => {
    const el = isList?[...document.querySelectorAll(selector)]:document.querySelector(selector);
    if(!isList && el) return el;
    if(isList && !el.length < 1) return el;
    throw new Error(`double check selector : ${selector}`)
} 
// now we are trowing an error instead of having the undefined

console.log(getElement('.heading'))
console.log(getElement('.itemList',true))