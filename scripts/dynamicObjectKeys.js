//dynamically change keys in the object using square bracket notation


// dot notation
const person = {
    name: 'john',
};
console.log(person.name);
person.age = 24;
console.log(person);

// square bracket notation

const items = {
    'featured-items': ['item1', 'item2']
};

console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
const keyName = "computer";

const app1 = {
    [appState]: true
}

appState = "error";

const app2 = {
    [appState]: true
}

console.log(app1, app2);

app1[keyName] = "apple";

console.log(app1, app2);


//example where this is useful

const state = {
    loading: true,
    name: '',
    job: ''
}

function updateState(key, value) {
    state[key] = value
}

console.log(state);
updateState("name", "dusan");
console.log(state);
updateState("job", "engineer");
console.log(state);
updateState("product", "");
console.log(state);
updateState("product", "vegan food truck");
console.log(state);