function lifePathNumber(dateOfBirth) {
    let sumAll = dateOfBirth.split('-').join('').split('').map(num => parseInt(num)).reduce((a,b) => a+b)
    let lifenum = sumAll.toString().split('')
    
    while(lifenum.length > 1){
        lifenum = lifenum.map(num => parseInt(num)).reduce((a,b) => a+b).toString().split('')
    }

    return Number(lifenum)
  }

  lifePathNumber('1791-12-26')