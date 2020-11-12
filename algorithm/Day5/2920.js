
// 다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다. 
// 이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다.
// c는 1로, d는 2로, ..., C를 8로 바꾼다.

// 1부터 8까지 차례대로 연주한다면 ascending, 
// 8부터 1까지 차례대로 연주한다면 descending, 
// 둘 다 아니라면 mixed 이다.

// 연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 
// 아니면 mixed인지 판별하는 프로그램을 작성하시오.

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const string = "8 7 6 5 4 3 2 1"
const input = string.toString().split(' ');
function abcde() {
    let ascending = true;
    let descending = true;
    for (let i=0; i<input.length; i++) {
        if(input[i]>input[i+1])
            ascending = false;
        if(input[i]<input[i+1])
            descending = false;
    }
    if (ascending) {
        console.log('ascending');
    } else if (descending) {
        console.log('descending');
    } else {
        console.log('mixed')
    }
};
abcde(input);

