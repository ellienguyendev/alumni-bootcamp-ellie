// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
  var arr = s.split(' ');
  return arr.filter((el, i) => !(el === arr[i + 1])).join(' ');
}
