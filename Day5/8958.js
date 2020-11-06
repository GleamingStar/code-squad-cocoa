// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. 
// O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가
// 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 
// 점수를 구하는 프로그램을 작성하시오.
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 검증 중에 input[0]값 보다 정답을 더 준 케이스가 있었나보다
// 아니 테스트케이스마다 출력하라고 했지 주어진 숫자만큼만 출력하라고 안했잖아!!!
const input = ['5', 'OOXXOXXOOO', "OOXXOOXXOO", 'OXOXOXOXOXOXOX', "OOOOOOOOOO" , "OOOOXOOOOXOOOOX"]
for (let i = 1; i <= input[0]; i++) {
    let counts = 0;
    let combo = 1;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            counts += combo;
            combo++;
        } else if (input[i][j] === 'X') {
            combo = 1;
        }
    }
    console.log(counts);
}