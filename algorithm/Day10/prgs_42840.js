function solution(answers) {
    var answer = [];
    let p1 = new Array(answers.length);
    let p2 = new Array(answers.length);
    let p3 = new Array(answers.length);
    let p1Score = 0;
    let p2Score = 0;
    let p3Score = 0;

    for (let i = 0; i < p1.length; i++)
        p1[i] = i % 5 + 1;
    for (let i = 0; i < p2.length; i++)
        if (i % 2 === 0)
            p2[i] = 2
        else if (i % 8 === 1)
            p2[i] = 1
        else if (i % 8 === 3)
            p2[i] = 3
        else if (i % 8 === 5)
            p2[i] = 4
        else if (i % 8 === 7)
            p2[i] = 5
    for (let i = 0; i < p3.length; i++) {
        if (i % 10 < 2)
            p3[i] = 3
        else if (i % 10 < 4)
            p3[i] = 1
        else if (i % 10 < 6)
            p3[i] = 2
        else if (i % 10 < 8)
            p3[i] = 4
        else if (i % 10 < 10)
            p3[i] = 5
    }
    for (let i = 0; i < answers.length; i++) {
        if (p1[i] === answers[i])
            p1Score++;
        if (p2[i] === answers[i])
            p2Score++;
        if (p3[i] === answers[i])
            p3Score++;
    }
    const maxScore = Math.max(p1Score, p2Score, p3Score)
    if (maxScore === p1Score)
        answer.push(1);
    if (maxScore === p2Score)
        answer.push(2);
    if (maxScore === p3Score)
        answer.push(3);
    return answer.sort();
}
console.log(solution([1, 3, 2, 4, 2]))
// let p1 = new Array(15).map((cur, index) => index % 5 + 1)
// let p11 = [,,,10,,,]
// console.log(p11.map((cur, index) => index % 5 + 1))

//emptyitems면 map이 실행이 안된다! 