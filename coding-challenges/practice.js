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

const filter_list = l => l.filter(el => typeof el == 'number')

filter_list([1,2,'a','b'])