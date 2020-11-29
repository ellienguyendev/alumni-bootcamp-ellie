// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

function factorial(n){
    if(n === 1){
        return String(n)
    } else{
        return String(n*factorial(n-1))
    }
  }