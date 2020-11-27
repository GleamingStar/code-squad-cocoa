/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let newstr = s;
    let answer = 0;
    if(newstr.indexOf('IV') !== -1){
        newstr = newstr.replace('IV','')
        answer += 4;
    }
    if(newstr.indexOf('IX') !== -1){
        newstr = newstr.replace('IX','')
        answer += 9;
    }
    if(newstr.indexOf('XL') !== -1){
        newstr = newstr.replace('XL','')
        answer += 40;
    }
    if(newstr.indexOf('XC') !== -1){
        newstr = newstr.replace('XC','')
        answer += 90;
    }
    if(newstr.indexOf('CD') !== -1){
        newstr = newstr.replace('CD','')
        answer += 400;
    }
    if(newstr.indexOf('CM') !== -1){
        newstr = newstr.replace('CM','')
        answer += 900;
    }

    const arr = newstr.split("");
    for (let i of arr) {
        if (i === 'M')
            answer += 1000;
        if (i === 'D')
            answer += 500;
        if (i === 'C')
            answer += 100;
        if (i === 'L')
            answer += 50;
        if (i === 'X')
            answer += 10;
        if (i === 'V')
            answer += 5;
        if (i === 'I')
            answer += 1;
    };
    return answer
};
console.log(romanToInt('MCMXCIV'))
// let a = "abc"
// a = a.replace('a','b')
// console.log(a)