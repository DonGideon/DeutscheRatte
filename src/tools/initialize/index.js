const {scrapeTable} = require('./scrape-table')
const {createDBTable} = require('../db/dbApi')

scrapeTable()
  .then((articlesAndNouns) => {createDBTable(articlesAndNouns)})
