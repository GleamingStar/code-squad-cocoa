// Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.

////////////////////////////////////////////////////
// const data = [1, 2, 3, 4, 5];

// const initialValue = [];
// var reducer = function (accumulator, value) {
//     accumulator.push(value * 2);
//     return accumulator;
// };
// console.log(data.reduce(reducer, initialValue));
// console.log(data.map(x => x*2));

// var reducer2 = function (accumulator, value) {
//     if (value % 2 != 0)
//         accumulator.push(value);
//     console.log(accumulator);
//     return accumulator;
// }

// // console.log(data.reduce(reducer2, initialValue));
// // console.log(data.filter(x => x % 2 !=0));

// let total = [1, 2, 3, 4, 5].reduce(
//     (acc, curr) => acc + curr,
//     0
// );
// console.log(total)
////////////////////////////////

const myReduce = (arr, callback, initialValue) => {
    //arr를 arr.myReduce로 하려면? let arr=this;했는데 안먹힘!
    let accumulator;
    let currentValue;
    let i;
    if (!initialValue) {
        initialValue = 0;
        accumulator = arr[0];
        currentValue = arr[1];
        i = 1
    } else if (initialValue) {
        accumulator = initialValue;
        currentValue = arr[0];
        i = 0;
    }
    //너 currentValue 어따쓰려고? 이게 i인가? i는 currentindex아냐? 지금처럼쓰는거맞나?
    for (i; i < arr.length; i++)
        accumulator = callback(accumulator, arr[i]);
    return accumulator;
}
const arr = [0,1,2,3,4];

const result1 = myReduce(arr, (next,prev) => next+prev);
console.log(result1);

const reducer = function (accumulator, value) {
    accumulator.push(value * 2);
    return accumulator;
};

const result2 = myReduce(arr, reducer, []);
console.log(result2)
