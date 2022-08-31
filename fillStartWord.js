const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  switch (startWord,word) {
    case startWord===word:
      return
      break;
    case startWord!==word:
      return startWord+word
      break;
    case word===null:
      return undefined
      break;
    case startWord===undefined:
      return undefined
      break;
  
    default:
      break;
  }
}
module.exports = fillStartWord
