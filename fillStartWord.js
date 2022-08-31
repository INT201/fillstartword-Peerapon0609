const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(startWord!==word){
    return startWord+word
  }
  if(startWord===word){
    return word
  }
  else if(word===null){
    return undefined
  }
  else if(word===undefined){
    return undefined
  }
}
module.exports = fillStartWord
