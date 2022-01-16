// Fetch API - Browser API for HTTP (Ajax) Requests
// Default - GET requests, supports other methods as well
// Returns promise

const url = 'https://api.github.com/users/StokicDusan/repos?per_page=100'

// previously we had to use the folowing:
fetch(url)
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
console.log(fetch(url))

// with async/await
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