// Given an array of integers , Find the maximum product obtained from 
// multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    var max = array[0] < 0 ? array[0] : 0
    for(let i=0; i < array.length-1; i++){
        var product = array[i] * array[i+1]
        if( product > max){
          max = product
        }
      }
      return max
    }
  
    adjacentElementsProduct([-23, 4, -5999, 99, -27, -329, -2, 7, -921])