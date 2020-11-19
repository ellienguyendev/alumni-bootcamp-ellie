// Description:
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    var validCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                          'q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
    var arr = string.toLowerCase().split('')
    var valid = true
    
    while(valid){
      for(char in arr){
        if(!validCharacters.includes(arr[char])){
          valid = false
        }
      }
      break
    }
    
    return string.length == 0 ? false : valid
  }