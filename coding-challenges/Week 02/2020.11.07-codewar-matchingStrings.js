// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.
// If the string matches, return true else false.

// For example:
// solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string.
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string.
// solve("codewars","codewars") = true, because the strings already match.
// solve("a","b") = false
// solve("*", "codewars") = true

function solve(a,b){
  if (a.indexOf("*") < 0 && a.length !== b.length) {
    return false
  }
  let firstPartA = a.substring(0, a.indexOf("*"))
  let lastPartA = a.substring(a.indexOf("*") + 1)
  return (firstPartA === b.substring(0, firstPartA.length) &&
          lastPartA === b.substring(b.length - lastPartA.length) &&
          b.length >= a.length - 1)
}
