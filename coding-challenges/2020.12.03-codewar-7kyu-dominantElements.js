// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

function solve(arr){
    let result = []
    arr.forEach((num,i) => {
      let copy = arr.slice(i)
      let max = Math.max(...copy)
      if (max === num && !result.includes(num)){
        result.push(num)
      }
    })
    return result
  };

solve([ 92,52,93,31,89,87,77,105])

const solve = arr => {
  return result = arr.filter((num,i) => arr.slice(i+1).every(x =>  num > x))

}

console.log(solve([10,4,3,2,1,9]))