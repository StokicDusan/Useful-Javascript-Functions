// Fetch API Errors
// Only throws an error if cannot resolve.
// Error Response is still a response

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

