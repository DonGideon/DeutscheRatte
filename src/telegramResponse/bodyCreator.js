const {getRandomValue} = require('../tools/db/dbApi')

const initQuestions = (questionsData) => {
    questionsData['questions'] = []
    questionsData['rightOrWrong'] = []
    questionsData['currentQuestionIndex'] = 0

    for(let i=0 ; i<questionsData.numOfQuestions; i++) {
        questionsData.questions.push(getRandomValue())
        questionsData.rightOrWrong.push(false)
    }
}

const getCurrentQuestion = (questionsData) => {
    // [article, noun] => noun
    const currentQuestion = questionsData.questions[questionsData['currentQuestionIndex']][1]
    questionsData['currentQuestionIndex']++
    return currentQuestion
}

const getPreviosAnswer = (questionsData) => {
    // [article, noun] => 'article noun'
    return questionsData.questions[questionsData['currentQuestionIndex']-1].join(' ')
}

const checkCurrentQuestion = (questionsData, answer) => {
    const isRightAnswer = (questionsData.questions[questionsData['currentQuestionIndex']-1][0].toLowerCase() === answer.toLowerCase())
    if (isRightAnswer) {
        questionsData.rightOrWrong[questionsData['currentQuestionIndex']-1] = true
    }
    return isRightAnswer ? "✅😌✅" : "❌😐❌"
}

const getSummary = (questionsData) => {
    let summary = ''
    let countRights = 0
    for(let i=0 ; i<questionsData.numOfQuestions; i++) {
        summary += `${questionsData.questions[i].join(' ')} ${questionsData.rightOrWrong[i] ? '✅' : '❌'}\n`
        if (questionsData.rightOrWrong[i]) countRights++
    }
    const relativeEmoji = countRights/questionsData.numOfQuestions > 0.5 ? '🎉' : '🫠'
    summary += `${countRights}/${questionsData.numOfQuestions} ${relativeEmoji}`
    return summary
}

module.exports = {initQuestions, getCurrentQuestion, checkCurrentQuestion, getSummary, getPreviosAnswer}
