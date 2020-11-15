// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(url){
    var result = url.includes('#') ? url.split('#') : url.split('?')
    return result[0]
  }

  removeUrlAnchor('www.codewars.com?pages')