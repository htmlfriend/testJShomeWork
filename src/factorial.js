function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
let sum = factorial(1);

console.log(factorial(2), sum, typeof sum);
module.exports = factorial;
