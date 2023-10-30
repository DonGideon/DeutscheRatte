const {runServer} = require('./server/localServer')
const {responseLogic} = require('./telegramResponse/logic')

runServer(responseLogic)
