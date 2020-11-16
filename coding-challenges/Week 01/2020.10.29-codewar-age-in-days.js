// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.
// For example if today is 30 November 2015 then
// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is expected to be in the past.

function ageInDays(year, month, day){
  var today = new Date()
  var oneDay = 24 * 60 * 60 * 1000
  var birthday = new Date(year, month-1, day)

  var result = Math.floor(Math.abs((today - birthday) / oneDay))

  var display = result == 1 ? `${result} day` : `${result} days`

  return `You are ${display} old`
}
