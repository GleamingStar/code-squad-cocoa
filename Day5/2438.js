const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const N = parseInt(input[0]);

for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++)
        process.stdout.write('*');
    console.log();
}
