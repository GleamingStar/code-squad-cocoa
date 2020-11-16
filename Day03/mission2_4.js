
const o = require('./o.js');

let arr = [];
for (let obj in o.data) {
    for (let key in o.data[obj]) {
        if (typeof o.data[obj][key] === 'number')
            arr.push(key);
    }
}
console.log(arr);
