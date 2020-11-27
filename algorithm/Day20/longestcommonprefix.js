/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0)
        return ""
    let answer = strs[0]
    for (let str of strs)
        for (let i = 0; i < answer.length; i++)
            if (answer[i] != str[i])
                answer = answer.slice(0, i)
    return answer
};

// console.log(strs[1][3] + strs[0][3])


// for (let str1 of strs)
//     for (let str2 of strs) {
//         for (let i = 0; i < str1.length || i < str2.length; i++)

//     }