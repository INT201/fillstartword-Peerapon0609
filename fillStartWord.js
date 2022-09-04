const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word===null || word===undefined){
    return undefined
  }
  else if(startWord!=word){
    return startWord+word
  }
  else if(word.includes(startWord)){
    return word
  }
}
module.exports = fillStartWord
