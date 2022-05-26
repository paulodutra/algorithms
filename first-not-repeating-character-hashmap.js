/**
 * https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC/description
 * Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
 * Example
 * For s = "abacabad", the output should be solution(s) = 'c'.
 * There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
 * For s = "abacabaabacaba", the output should be
 * solution(s) = '_'.
 * There are no characters in this string that do not repeat.
 * Input/Output [execution time limit] 4 seconds (js)
 * [input] string s
 * A string that contains only lowercase English letters.
 * Guaranteed constraints:
 * 1 ≤ s.length ≤ 105.
 * [output] char
 * The first non-repeating character in s, or '_' if there are no characters that do not repeat.
 */
function firstNotRepeatingCharacter(characters){
    const charCount = new Map();
    for(let i in characters) {
      let character = characters[i];
      if(!charCount.get(character)){
        charCount.set(character, 1);
      }else{
        charCount.set(character, charCount.get(character) + 1); 
      }
    }
    for(let i in characters) {
        let character = characters[i];
        if(charCount.get(character) === 1) return character;
      
    }
    return '_';
}
const characters = 'bcccccccb';
console.log(firstNotRepeatingCharacter(characters));