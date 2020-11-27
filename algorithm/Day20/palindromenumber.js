var isPalindrome = function (x) {
    let answer1 = x.toString()
    let answer2 = answer1.split("").reverse().join("");
    if (answer1 === answer2)
        return true
    else
        return false
};
console.log(isPalindrome(-12321))