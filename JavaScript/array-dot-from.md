# Array from()

from() returns an Array from any object with a length property or an iterable object.  
from() turns array-like into array - string, nodeList, Set.

```js
const dusan = 'dusan';

console.log(Array.from(dusan));     // [ 'd', 'u', 's', 'a', 'n' ]

const text = document.querySelectorAll(".text");
console.log(text);                  // NodeList(3) [ h2#first.text, h2#second.text, h2#third.text ]

const newText = Array.from(text)
console.log(newText);               // Array(3) [ h2#first.text, h2#second.text, h2#third.text ]

const personText = Array.from(text).find((item) => item.textContent === 'person')
console.log(personText);            // <h2 id="second" class="text">



const items = Array.from({ length: 12 }, (_, index) => {
    return index
})
const itemsPerPage = 5;
const pages = Math.ceil(items.length / itemsPerPage);
const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems
})

console.log(items);                 // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(pages);                 // 3
console.log(newItems);              // [ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ], [ 10, 11 ] ]
```