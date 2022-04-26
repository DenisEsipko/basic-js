const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let temp = '';
  for (let i = 0; i < str.length;) {
    let nextChar = i + 1;
    let num = 1;
    while (str.charAt(i) === str.charAt(nextChar)) {
      nextChar++;
      num++;
    }
    if (num > 1) {
      temp += (num + str.charAt(i));
    } else temp += str.charAt(i);
    i = nextChar;
  }
  //  console.log(temp)
  return temp;
}

module.exports = {
  encodeLine
};
