let myStatement = "I am Paul Momoh, often called Dumeh"

function readSentence(str){
 let charMap = {
     a : "a",
     b : "b",
     c : "c",
     d : "d",
     e : "e"
 }
 let noOfWords = 0;
 let wordsLength = str.length
 let vowelCount=0
 for(let i=0;i<str.length;i++){
     if(str[i] in charMap){ 
        vowelCount++ 
     }
     if(str[i] ===" " || str[i]==="."){
         noOfWords++
     }
 }
 
return{wordsLength,noOfWords,vowelCount}
}
readSentence(myStatement)

/*  
      for(let i=0;i<str.length;i++){ 
          if( charMap[str[i]]){
             vowelCount++ 
          }
         
*/