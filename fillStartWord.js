const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(startWord!==word){
    return startWord+word
  }
  else if(startWord===word){
    return word
  }
  else if(startWord===word){
    return word
  }
}
module.exports = fillStartWord
