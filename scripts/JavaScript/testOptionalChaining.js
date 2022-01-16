    // Optional Chaining
// iterating over the list and look at property offset

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