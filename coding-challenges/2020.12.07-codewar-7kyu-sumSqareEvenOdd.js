// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

const sumSquareEvenRootOdd = ns => {
   let res = ns.reduce((acc,i) => i % 2 === 0 ? acc + Math.pow(i,2) : acc + Math.sqrt(i),0).toFixed(2)
   return Number(res)
  };

  sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])