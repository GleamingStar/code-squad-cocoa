function solution(n) {
    const answers = [];
    if (n === 0)
        return 0;
    for (let i = 1; i <= n; i++)
        if (n % i === 0)
            answers.push(i)
    const answer = answers.reduce((acc, cur) => acc + cur)
    return answer;
}
console.log(solution(12))