# Optional Chaining ?.

The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

```js
const people = [
    { name: 'boban', location: { street: '123 main street', timezone: { offset: '+7:00'} }, },
    { name: 'peter', location: { street: '123 Elm street', }, },
    { name: 'susan', location: { street: '123 Pear street', timezone: { offset: '+9:00'} }, },
]

people.forEach((item) => {
    //solution without optional chaining
    console.log(item.location && item.location.timezone && item.location.timezone.offset)

    //solution with optional chaining
    console.log(item?.location?.timezone?.offset || 'hello world');
})
```
Iterating over the list in the solution with optional chaining gives the same result as the one without except that it can give an answer for a non-existant property instead of *undefined*.  
The optional chaining solution is also shorter and simpler to implement.
