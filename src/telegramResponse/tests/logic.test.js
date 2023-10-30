
const {responseLogic} = require('../logic')
  
describe('responseLogic Function', () => {
    const mockedRequestBody = JSON.stringify({
        message: {
            text: 'textValueToReplace',
            chat: { id: 123 },
        },
    })

    it('should handle "🐀" input', () => {
        const requestBody = mockedRequestBody.replace('textValueToReplace', '🐀')
        const result = responseLogic(requestBody)
        expect(result.text).toMatch('❤️')
    })

    it('should suggest starting the game', () => {
        const requestBody = mockedRequestBody.replace('textValueToReplace', 'RandomText')
        const result = responseLogic(requestBody)
        expect(result.text).toMatch('Press \'s\' to start 🐀')
    })
})
  