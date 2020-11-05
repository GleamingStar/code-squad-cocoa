// Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.

const data = [1, 2, 3, 4, 5];

const initialValue = [];
var reducer = function (accumulator, value) {
    accumulator.push(value*2);
    return accumulator;
};
// console.log(data.reduce(reducer, initialValue));
// console.log(data.map(x => x*2));

var reducer2 = function(accumulator, value) {
    if (value % 2 !=0)
        accumulator.push(value);
    console.log(accumulator);
    return accumulator;
}

console.log(data.reduce(reducer2, initialValue));
console.log(data.filter(x => x % 2 !=0));



const myReduce = (arr, callback, initialValue) => {
    if (initialValue)
        return callback(arr);
}

// const result = myReduce(arr, (next,prev) => {...}, []);