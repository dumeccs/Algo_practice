let myStatement = "I am Paul Momoh, often called Dumeh"

function countSentence(sentence){
    let output = {
    sentenceLength: 0,
    noOfWords: 0,
    vowelCount: 0,
    }

  output.sentenceLength = sentence.length

  for(let i = 0; i < sentence.length; i++){
    if (sentence[i] == ' ' || sentence[i] == '.'){
    output.noOfWords += 1
}
  }

  let newSentence = Array.from(sentence.toLowerCase())
  output.vowelCount = newSentence.filter(letter => 'aeiou'.includes(letter)).length
  return output

  }
  console.log(countSentence(sentence))