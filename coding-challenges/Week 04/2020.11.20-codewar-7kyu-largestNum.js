function maxNumber(n){
  let arr = n.toString().split('').sort().reverse()
  return parseInt(arr.join(''))
}

maxNumber(7892)