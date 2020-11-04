const tree = require('./json_tree.js')
//lisa su, kyle의 코드

let arr = [];

function findType(data) {
    for (let i in data) {
        if(data[i].type === "sk")
            arr.push(data[i].name);
        // console.log(data[i].childnode.length);
        if(data[i].childnode.length !==0)
            findType(data[i].childnode);
    }
}

findType(tree.data)
console.log(arr);