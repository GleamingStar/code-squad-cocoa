/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let y = x.toString()
    let isNegative = false;
    if (y[0] === '-') {
        isNegative = true;
        y = y.replace('-', '');
    }
    let answer = y.split("").reverse().join("");
    if (isNegative)
        answer = '-' + answer
    let Intanswer = parseInt(answer);
    if (Intanswer > Math.pow(2, 31) - 1 || Intanswer < -Math.pow(2, 31))
        return 0;
    return Intanswer;
};
let x = 1534236469;
console.log(Math.pow(2,31))
console.log(reverse(x))