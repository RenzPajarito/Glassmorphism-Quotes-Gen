// () => {
//     import quotes from './assets/quotes.js'
//     const quote = document.getElementById("quote")
//     const author = document.getElementById("author")
//     const categorySelect = document.getElementById("category")
//     const generateQuotes = document.getElementById("generateQuotes")

//     let getQuote = () => {
//         const selectedCategory = categorySelect.value
//         let filteredQuotes

//         if (selectedCategory === "all") {
//             filteredQuotes = quotes.data
//         } else {
//             filteredQuotes = quotes.data.filter(
//                 quote => quote.category === selectedCategory
//             )
//         }

//         if (filteredQuotes.length > 0) {
//             const randomIndex = Math.floor(Math.random() * filteredQuotes.length)
//             const randomQuote = filteredQuotes[randomIndex]

//             quote.innerHTML = `${randomQuote.quote}`
//             author.innerHTML = `- ${randomQuote.author}`
//         }
//     }
//     generateQuotes.addEventListener("click", getQuote)
// }
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const categorySelect = document.getElementById("category")
const generateQuotes = document.getElementById("generateQuotes")
const api = "https://renzpajarito.github.io/zc_quotes_api/zc_quotes_apiv1240811.json"

let getQuote = () => {
    try {
        fetch(api)
        .then(response => response.json())
        .then(data => {
            const selectedCategory = categorySelect.value
            let filteredQuotes

            if (selectedCategory === "all") {
                filteredQuotes = data.data
            } else {
                filteredQuotes = data.data.filter(
                    quote => quote.category === selectedCatergory
                )
            }

            if (filteredQuotes.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredQuotes.length)
                const randomQuote = filteredQuotes[randomIndex]
                
                quote.innerHTML = `${randomQuote.quote}`
                author.innerHTML = `- ${randomQuote.author}`
            } else {
                quote.innerHTML = "No quotes available for this category."
                author.innerHTML = "- ZernCodes"
            }
    })
    } catch (error) {
        console.log(error)
    }
}
generateQuotes.addEventListener("click", getQuote)