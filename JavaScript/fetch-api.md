# Fetch API

The Fetch API interface allows web browser to make HTTP (Ajax) requests to web servers. By default it's a GET requests, supports other methods as well.  
Fetch returns a promise.

```js
const url = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

// previously we had to use the folowing:
fetch(url)
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
console.log(fetch(url))

// with async/await, instead of .then()-ing we can use:
const getRepos = async (urlLink) => {
    try {
        const repo = await fetch(urlLink)
        const data = await repo.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
getRepos(url)
```

## Errors
Fetch only throws an error if cannot resolve. Error Response is still a response.
```js
const urlGit = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

const getRepos = async () => {
    try {
        const repo = await fetch(urlGit)
        if(!repo.ok){
            const msg = `There was na error "${repo.status} ${repo.statusText}"`
            throw new Error(msg)
        }
        const data = await repo.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const btn = document.querySelector('#btn')
btn.addEventListener('click',getRepos)
```
