// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
    var result = numbers.map((number, i) => numbers.filter((num,j) => i !== j).reduce((a,b) => a*b))

    return result
  }

  productArray([16,17,4,3,16,2])