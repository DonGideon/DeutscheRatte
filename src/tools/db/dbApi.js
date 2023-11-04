const fs = require('fs')
const path = require('path')

const createDBTable = (articlesAndNouns) => {
    fs.writeFile('./src/tools/db/articlesAndNouns.json', JSON.stringify(articlesAndNouns), (err) => {
        if (err) throw err
        console.log('articlesAndNouns.json file ready')
    })
}

const getRandomValue = () => {
    const filePath = path.join(__dirname, 'articlesAndNouns.json')
    const articlesAndNounsData = require(filePath)
    return articlesAndNounsData[Math.floor(Math.random() * articlesAndNounsData.length)]
}

module.exports = {createDBTable, getRandomValue}
