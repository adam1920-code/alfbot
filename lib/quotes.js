const axios = require('axios')

const quotes = () => {
    return new Promise((resolve, reject) => {
        var url = `https://jagokata.com/kata-bijak/acak.html`
        axios.get(url)
            .then(res => {
                const { author, quotes } = res.data
                resolve({ author, quotes })
             })
    })
}

module.exports = quotes
