module.exports = function reverse (n) {
  const reversedNum = n.toString();
  const stringNum = reversedNum.split('');
  const reversedArr = stringNum.reverse();
  const reversedString = reversedArr.join('');
  const result = parseInt(reversedString);
  return result;
}
