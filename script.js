// import {quotes} from './assets/quotes.js'

// const quote = document.getElementById("quote")
// const author = document.getElementById("author")
// const generateQuotes = document.getElementById("generateQuotes")

// let getQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length)
//     const randomQuote = quotes[randomIndex]

//     quote.innerHTML = `${randomQuote.quote}`
//     author.innerHTML = `- ${randomQuote.author}`
// }
// generateQuotes.addEventListener("click", getQuote)

const quote = document.getElementById("quote")
const author = document.getElementById("author")
const generateQuotes = document.getElementById("generateQuotes")
const api = "https://renzpajarito.github.io/zc_quotes_api/zc_quotes_api.json"

let getQuote = () => {
    try {
        fetch(api)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.data.length)
            const randomQuote = data.data[randomIndex]
            
            quote.innerHTML = `${randomQuote.quote}`
            author.innerHTML = `- ${randomQuote.author}`
    })
    } catch (error) {
        console.log(error)
    }
}
generateQuotes.addEventListener("click", getQuote)