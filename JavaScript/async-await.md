# Async/Await

The keyword `async` before a function makes the function async and always return a promise. Await waits till promise is settled. Error is handled by a try/catch block.

```js
const users = [
    { id:1, name: 'john' },
    { id:2, name: 'susan' },
    { id:3, name: 'anna' },
    { id:4, name: 'eddy'},
]

const articles = [
    { userId: 1, articles: ['one','two','three'] },
    { userId: 2, articles: ['four','five'] },
    { userId: 3, articles: ['six','seven','eight','nine'] },
]

const getData1 = async () => {
    try {
        const user = await getUser('john')
        const articles = await getArticles(user.id)
        console.log(articles)       // [ 'one', 'two', 'three' ]
    } catch (error) {
        console.log(error)
    }
}

const getData2 = async () => {
    try {
        const user = await getUser('bob')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)          // No such user with name : bob
    }
}

const getData3 = async () => {
    try {
        const user = await getUser('eddy')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)          // wrong ID
    }
}

getData1()
getData2()
getData3()

function getUser(name){
    return new Promise((resolve,reject)=>{
        const user = users.find((item)=>item.name===name)
        if(user){
            return resolve(user)
        } else{
            reject(`No such user with name : ${name}`)
        }
    })
}

function getArticles(userId) {
    return new Promise((resolve,reject)=>{
        const userArtiles = articles.find((item)=>item.userId === userId)
        if(userArtiles){
            return resolve(userArtiles.articles)
        }else{
            reject(`wrong ID`)
        }
    })
}
```
In previous example async/await is used for a static array of objects. In practise, these object come from, from example, a quere on a database and this example is written with this in mind.

[Script for testing](/scripts/JavaScript/testAsyncAwait.js)