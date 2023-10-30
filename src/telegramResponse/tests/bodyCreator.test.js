const { getCurrentQuestion, getPreviosAnswer, checkCurrentQuestion, getSummary } = require('../bodyCreator')

describe('getCurrentQuestion', () => {
    it('should return the correct current question', () => {
        const questionsData = {
            currentQuestionIndex: 0,
            questions: [['das', 'Wasser'], ['die', 'Katze']],
            rightOrWrong: [true, false],
            numOfQuestions: 2,
        }
        const question = getCurrentQuestion(questionsData)
        expect(question).toBe('Wasser')
        expect(questionsData.currentQuestionIndex).toBe(1)
    })
})

describe('getPreviosAnswer', () => {
    it('should return the correct previous answer', () => {
        const questionsData = {
            currentQuestionIndex: 1,
            questions: [['das', 'Wasser'], ['die', 'Katze']],
            rightOrWrong: [true, false],
            numOfQuestions: 2,
        }
        const answer = getPreviosAnswer(questionsData)
        expect(answer).toBe('das Wasser')
    })
})

describe('checkCurrentQuestion', () => {
    it('should return the happy emojis for the right answer', () => {
        const questionsData = {
            currentQuestionIndex: 1,
            questions: [['das', 'Wasser'], ['die', 'Katze']],
            rightOrWrong: [true, false],
            numOfQuestions: 2,
        }
        const result = checkCurrentQuestion(questionsData, 'das')
        expect(result).toBe('✅😌✅')
    })

    it('should return the sad emojis for the wrong answer', () => {
        const questionsData = {
            currentQuestionIndex: 1,
            questions: [['das', 'Wasser'], ['die', 'Katze']],
            rightOrWrong: [true, false],
            numOfQuestions: 2,
        }
        const answer = checkCurrentQuestion(questionsData, 'die')
        expect(answer).toBe('❌😐❌')
    })
})

describe('getSummary', () => {
    it('should return the correct summary', () => {
        const questionsData = {
            currentQuestionIndex: 3,
            questions: [['das', 'Wasser'], ['die', 'Katze']],
            rightOrWrong: [true, false],
            numOfQuestions: 2,
        }
        const summary = getSummary(questionsData)
        expect(summary).toContain('das Wasser ✅')
        expect(summary).toContain('die Katze ❌')
        expect(summary).toContain('1/2')
    })
})