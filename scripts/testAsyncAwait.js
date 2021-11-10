// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const users = [
    { id:1, name: 'john' },
    { id:2, name: 'susan' },
    { id:3, name: 'anna' },
    { id:4, name: 'eddy'}
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
        console.log(articles)
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
        console.log(error)
    }
}

const getData3 = async () => {
    try {
        const user = await getUser('eddy')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)
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