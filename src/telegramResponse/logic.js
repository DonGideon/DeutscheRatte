const {getRandomValue} = require('../tools/db/dbApi')

const responseLogic = (requestBody) => {
    if (!questionsData.questions[0]) getQuestions()
    const requestData = JSON.parse(requestBody)
    const responseBody = {
        chat_id: requestData.message.chat.id,
        reply_markup: {
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
            ]]
        },
        text: getCurrentQuestion()
    }

    return responseBody
}


const questionsData = {
    numOfQuestions: 10,
    currentQuestionIndex: 0,
    rightAndWrong: [],
    questions: []
}

const getQuestions = () => {
    for(let i=0 ; i<questionsData.numOfQuestions; i++) {
        questionsData.questions.push(getRandomValue())
        questionsData['rightAndWrong'].push(false)
    }
}

module.exports = {responseLogic}