const {initQuestions, getCurrentQuestion, checkCurrentQuestion, getPreviosAnswer, getSummary} = require('./bodyCreator')

const questionsData = {
    numOfQuestions: 10,
    currentQuestionIndex: 0,
    rightOrWrong: [],
    questions: []
}

const keyboard = {
    keyboard: [[
        {
            text: 'Der',
        }
    ],
    [
        {
            text: 'Das',
        }
    ],
    [
        {
            text: 'Die',
        }
    ]],
    one_time_keyboard: true
}

const responseLogic = (requestBody) => {
    const requestData = JSON.parse(requestBody)
    const userText = requestData.message.text
    
    const responseBody = {
        chat_id: requestData.message.chat.id,
        text: ''
    }

    if (['Der', 'Das', 'Die'].includes(userText) && // answer
        questionsData.currentQuestionIndex != 0 && // not first round
        questionsData.currentQuestionIndex <= questionsData.numOfQuestions) { // not after last round
        responseBody.text = checkCurrentQuestion(questionsData, userText)
        responseBody.text += " "
        responseBody.text += getPreviosAnswer(questionsData)
        responseBody.text += "\n\n"
        if (questionsData.currentQuestionIndex < questionsData.numOfQuestions) { // move to next round
            responseBody.text += `nächstes Wort: *${getCurrentQuestion(questionsData)}*`
            responseBody.reply_markup = keyboard
        } else { //finish the game
            responseBody.text += "\n\n"
            responseBody.text += getSummary(questionsData)
            responseBody.text += "\n\n"
            responseBody.text += "start over? press 's'"
        }
    } else if (['start', 's'].includes(userText.toLowerCase())) { // new game
        initQuestions(questionsData)
        responseBody.text = `erstes Wort: *${getCurrentQuestion(questionsData)}*`
        responseBody.reply_markup = keyboard
    } else if (userText == '🐀') { // ❤️
        responseBody.text = "❤️"
    } else { // sugest to start the game
        responseBody.text = "Press 's' to start 🐀"
    }

    return responseBody
}


module.exports = {responseLogic}