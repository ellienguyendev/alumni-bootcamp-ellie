// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

function solve(array1,array2){
    var result = array2.map(str2 => array1.filter(str1 => str1 === str2).length)
    return result
  }

  solve(array1, array2)