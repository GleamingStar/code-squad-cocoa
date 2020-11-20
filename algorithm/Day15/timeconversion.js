'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const arr = s.split('');
    if (arr[8] === 'P') {
        if (arr[0] !== '1' || arr[1] !== '2') {
            arr[0] = parseInt(arr[0]) + 1;
            arr[1] = parseInt(arr[1]) + 2;
        }
    } else if (arr[8] === 'A') {
        if (arr[0] === '1' && s[1] === '2') {
            arr[0] = '0';
            arr[1] = '0';
        }
    }
    if (arr.join('') === '12:00:00PM') {
        arr[0] = 2;
        arr[1] = 4;
    }
    return arr.splice(0, 8).join('');
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
