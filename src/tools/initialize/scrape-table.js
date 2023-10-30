const cheerio = require('cheerio')

async function scrapeTable() {
    const response = await fetch('https://en.evdealmanca.com/most-common-german-nouns-top-100/')

    if (!response.ok) {
        throw new Error(`Failed to scrape table: ${response.statusText}`)
    }

    const html = await response.text()

    const $ = cheerio.load(html)

    const table = $('table')

    const rows = table.find('tr')

    const articlesAndNouns = []

    for (const row of rows) {
        const secondColumn = $(row).find('td:nth-child(3)')

        const cleanArticleAndNoun = secondColumn.text().replace(/[^a-zA-ZÄÖÜäöüß\s]/g, '').trim() //remove all emojis and new lines 

        if (!!cleanArticleAndNoun) { // 'article noun'
            articlesAndNouns.push(cleanArticleAndNoun.split(' ')) // [[article, noun], // [article, noun]]
        }
    }

    return articlesAndNouns
}

module.exports = {scrapeTable}
