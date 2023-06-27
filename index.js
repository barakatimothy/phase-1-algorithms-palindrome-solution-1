function reverse(word){
  // const wordArray = word.split('')
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord  
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  word === reversedWord
}
/* 
  reverse input string 
  if the input is same as reversed input 
  return true
  else  
  return false
*/
/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("b"))

  console.log("Expecting: true");
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Zig"));
}

module.exports = isPalindrome;
