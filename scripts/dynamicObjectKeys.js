//dynamically change keys in the object using square bracket notation

// dot notation
const person = {
    name: 'steve',
};
console.log(person.name);                   // steve
person.age = 24;
console.log(person);                        // { name: 'steve', age: 24 }

// square bracket notation

const items = {
    'featured-items': ['item1', 'item2']
};

console.log(items["featured-items"]);       // [ 'item1', 'item2' ]
console.log(person["name"]);                // steve

let appState = "loading";
const keyName = "computer";

const app1 = {
    [appState]: true
}

appState = "error";

const app2 = {
    [appState]: true
}

console.log(app1, app2);                    // { loading: true } { error: true }

app1[keyName] = "apple";

console.log(app1, app2);                    // { loading: true, computer: 'apple' } { error: true }

//example where this is useful

const state = {
    loading: true,
    name: '',
    job: ''
}

function updateState(key, value) {
    state[key] = value
}

console.log(state);                         // { loading: true, computer: 'apple' } { error: true }
updateState("name", "dusan");
console.log(state);                         // { loading: true, name: 'dusan', job: '' }
updateState("job", "engineer");
console.log(state);                         // { loading: true, name: 'dusan', job: 'engineer' }
updateState("product", "");
console.log(state);                         // { loading: true, name: 'dusan', job: 'engineer', product: '' }
updateState("product", "vegan food truck");
console.log(state);                         // { loading: true, name: 'dusan', job: 'engineer', product: 'vegan food truck' }