function solution(arr, divisor) {
    var answer =  arr.filter(element => element % divisor === 0);
    if (answer.length === 0)
        answer = [-1];
    return answer.sort((a, b) => a - b);
}

console.log(solution([5, 7, 9, 10], 5))