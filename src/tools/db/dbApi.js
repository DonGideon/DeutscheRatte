const fs = require('fs')

const createDBTable = (articlesAndNouns) => {
    fs.writeFile('./src/tools/db/articlesAndNouns.json', JSON.stringify(articlesAndNouns), (err) => {
        if (err) throw err
        console.log('articlesAndNouns.json file ready')
    })
}

const getRandomValue = () => {
    fs.readFile('./src/tools/db/articlesAndNouns.json', (err, JsonArticlesAndNouns) => {
        if (err) throw err;
      
        const articlesAndNouns = JSON.parse(JsonArticlesAndNouns);
        return articlesAndNouns[Math.floor(Math.random() * months.length)]
      })
}

module.exports = {createDBTable, getRandomValue}
