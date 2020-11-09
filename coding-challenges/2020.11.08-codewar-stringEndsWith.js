// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  var lenToDelete = str.length - ending.length
  var arr = str.split('')
  arr.splice(0, lenToDelete)

  return arr.join('') === ending ? true : false
}
