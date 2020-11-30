// not finished for test cases with 0 in front of possible combinations

// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.


function nextSmaller(n) {
    var arr = String(n).split('')
    var combinations = permutations(arr)
    var sorted = combinations.map(combo => Number(combo.join(''))).sort((a,b) => b-a)
    var unique = new Set
    sorted.forEach(el => unique.add(el))
    var final = Array(...unique)
    var indexOfN = final.indexOf(n)
    
    if(indexOfN === final.length -1){
        return -1
    } else if(final[indexOfN+1] < n){
        return final[indexOfN+1]
    }
  }

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

  nextSmaller(1027)
