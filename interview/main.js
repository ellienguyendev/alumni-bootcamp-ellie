// mock with Leon 12.4.2020

//given arr of ints as strings and numbers
// return sum as if all number 
// arr with mixed int and string 
// return sum of elements 

//[4, '1','2'] => 7 
// ['2',3,'5'] => 10

const sumIntStrings = arr => {
    return arr.reduce((acc,i) => acc + Number(i),0)
}

console.log(sumIntStrings(['2',3,'5']))