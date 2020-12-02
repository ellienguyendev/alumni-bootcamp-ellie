// You're saying good-bye your best friend , See you next happy year .
// Happy Year is the year with only distinct digits , (e.g) 2018
// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend

function nextHappyYear(year){
    let set = new Set
    for (let i = year + 1; i < (year + 1000); i++){
      let arr = i.toString().split('')
      set = new Set
      arr.forEach(element => set.add(element))
      if (set.size === 4){
        break
      }
    }
    let happyYear = Number([...set].join(''))
    return happyYear
  }

nextHappyYear(2012)