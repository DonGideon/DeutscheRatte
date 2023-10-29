const http = require('http')

const sendResponse = (requestBody, responseLogic) => {
    const responseBody = responseLogic(requestBody)
    fetch("https://api.telegram.org/botTOKEN/sendMessage", {
        method: "POST",
        body: JSON.stringify({
            ...responseBody,
            parse_mode: 'markdown'
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
}

const runServer = (responseLogic) => {
    http.createServer(function (request, res) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        let body = ''
        request.on('data', function(data) {
        body += data
        })
        request.on('end', function() {
        console.log('Body: ' + body)
        sendResponse(body, responseLogic)
        })
        res.end()
    }).listen(8080)
}

module.exports = {runServer}
