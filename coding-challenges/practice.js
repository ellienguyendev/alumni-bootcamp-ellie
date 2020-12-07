function getSum( a,b ){
   const allNumbers = []
    let low = a < b ? a : b
    let high = a > b ? a : b

   for(let i=low; i<= high; i++){
       allNumbers.push(i)
   }
   
   return allNumbers.reduce((acc,i) => acc+i)
}

getSum(2,1)

//**************************************/

const filter_list = l => l.filter(el => typeof el == 'number')

filter_list([1,2,'a','b'])

//**************************************/

// task: given an array of n integers
// arrange them in array to and from pendilum
// smallest element must come in center position
// higher then smallest goes to right
// next highest goes to the left 

// pos and negative integers 
// array can be empty

// [9,4,6,4,10,5] => [9,5,4,4,6,10]

//highest elements on the outside
//then going into the center until arranged

//Math.max()
//arr.push(right, left)
// next highest before last element 
// or after first element
// 2 separate arrays / then concatonate
// iterate original array -> alternate push to right or left 
// forEach or for loop // remove from array 
// sort by descending order 

const pendulum = arr => {
    arr.sort((a,b) => a-b)
    let min = arr.splice(0,1)
    let result = [...min]
    
    arr.forEach((el,i) => i % 2 === 0 ? result.push(el): result.unshift(el))
    return result
}

pendulum([ 10, 7, 3, 8 ]) // [8,3,7,10]


//**************************************/

// given arr of integers has negative and positve values 
// task : find num with no pos/neg value
// [1,-1,2,-2,3] = no matching negative value
//[6,-6,-1] ==> -1

// arr positive and negative values 
// all of numbers except ONE values has pos / neg counterpart 
// only one number that doesn't have a pair 
// returning only that one number 
// find method 
// find VALUE that DOESN'T HAVE pos / negative 
// if num * -1 is included in the arr 

const solve = arr => arr.find(el => !arr.includes(el * -1))

solve([1,-1,2,-2,3])

//**************************************/

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
// Every other number occurs twice.

function repeats(arr){
    let occurances = {}

    arr.forEach(el => occurances[el] ? occurances[el] += 1 : occurances[el] = 1)
    
    const entries = Object.entries(occurances)
    let sum = entries.filter(entry => entry[1] === 1)

    for(const [num,occ] of entries){
        if(occ === 1){
            sum += Number(num)
        }
    }
    return sum
  };

repeats([4,4,5,5,7,8])

//**************************************/

// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

const maxMultiple = (divisor,bound) => divisor * Math.floor(bound/divisor)
maxMultiple (37,200) 
//==> return (185)


//**************************************/

// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true

const validSpacing = s => s.includes('  ') || s[s.length-1] === ' ' || s[0] === ' ' ? false : true

validSpacing(' hello  world')

//**************************************/

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
// Given a number determine if it special number or not .

const specialNumber = n => String(n).split('').every(digit => '012345'.includes(digit)) ? 'Special!!' : 'NOT!!'

specialNumber(559)

//**************************************/

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// [4,8,6] 
// sort 
// difference between numbers - 1 
// add that to total

const minConsecutive = arr => {
    arr.sort((a,b) => a-b)
    let lastIndex = arr.length-1

    let total = 0
    arr.forEach((num,i) => i !== lastIndex ? total += arr[i+1] - num - 1 : total = total)
    return total
}

minConsecutive([4,10])

//**************************************/

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

const multiTable = n => {
    let result = ''
    for(let i = 1; i<=10 ; i++){
        result += `${i} * ${n} = ${n * i}\n`
    }

    return result
}

multiTable(5)

//**************************************/

// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

const replaceAll = (seq, find, replace) => Array.isArray(seq) ? seq.map(el => el === find ? replace : el) : seq.split(find).join(replace)

replaceAll([1,2,2],1,2)

//**************************************/

// var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
//     out = {
//       'user': {
//         'name': {
//           'firstname': 'Bob',
//           'lastname': 'Smith'
//         },
//         'favoritecolor': 'Light Blue'
//       }
//     };


const queryGenerator = str => {
    let out = {}
    const split = str.split('&').map(el => el.split('.'))
    let outer = split[0][0]
    let next = []
    let last = []

    for(let i = 0; i<split.length; i++){
        next.push(split[i].find((el,indx) => split[i][indx-1] === outer))
        if(split[i].length === 3){
            last.push(split[i][split[i].length-1])
        }
    }

    out = {
        `${outer}`: next
    }

    console.log(out);
}

queryGenerator('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue')
