
const getCurrentQuestion = () => {
    // [article, noun]
    return questionsData.questions[questionsData['currentQuestionIndex']][1]
}

const checkCurrentQuestion = (answer) => {
    const isRightAnswer = (questionsData.rightAndWrong[questionsData['currentQuestionIndex']][0] === answer)
    if (isRightAnswer) {
        questionsData.rightAndWrong[questionsData['currentQuestionIndex']] = true
    }
    questionsData['currentQuestionIndex']++
    return isRightAnswer
}

const getSummary = () => {
    for(let i=0 ; i<questionsData['numOfQuestions']; i++) {

    }

}
