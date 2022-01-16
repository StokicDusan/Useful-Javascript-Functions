# Inner Height/Width
The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present. The value of innerHeight is taken from the height of the window's layout viewport.  
The read-only innerWidth property of the Window interface returns the interior width of the window in pixels, including the width of the vertical scroll bar, if present. The value of innerWidth is taken from the width of the window's layout viewport.  
The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. 
```js
console.log('height' , window.innerHeight); 
console.log('width' , window.innerWidth);

const btn = document.querySelector('#btn')
const box = document.querySelector('#box')

btn.addEventListener('click', ()=> {
    const dimensions = box.getBoundingClientRect()
    console.log(dimensions)
})
```
