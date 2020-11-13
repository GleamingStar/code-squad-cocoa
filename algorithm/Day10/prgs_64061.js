function solution(board, moves) {
    var answer = 0;
    const stack = [];

    function pang(arr) {
        if (arr.length > 0)
            for (let i = 0; i < arr.length - 1; i++)
                if (arr[i] === arr[i + 1]) {
                    arr.splice(i, 2);
                    answer += 2;
                    return pang(arr)
                }
    }

    let depth = 0;

    for (let i = 0; i < moves.length; i++) {
        if(board[depth][moves[i]-1]===0) {
            depth ++;
            if(depth === board.length) {
                depth = 0;
                continue;
            }
            i --;
        } else {
            stack.push(board[depth][moves[i]-1]);
            (board[depth][moves[i]-1]) = 0;
            depth = 0;
        }
    }

    pang(stack);

    return answer;
}

let board1 = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
let moves1 = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board1, moves1))