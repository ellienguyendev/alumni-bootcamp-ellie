// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size

function minSum(arr) {
    arr.sort((a,b) => a-b)
    
    let smallNums = arr.splice(0,arr.length/2)
    arr.reverse()
    
    let result = smallNums.map((num, i) => num*arr[i])
    return result.reduce((a,b) => a+b)
  }

minSum([9,2,8,7,5,4,0,6])