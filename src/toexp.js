/**
 * 2^n
 *
 * @param n - degree of 2
 * @returns {number} 2 * 2 * ... * 2
 */
function twoexp(n) {
  // let result = 1;
  // for (let i = 1; i <= n; ++i) {
  //   result *= 2;
  // }
  // return result;

  return Math.pow(2, n);
}

module.exports = twoexp;
