function factorial(n) {
    if (n>1) {
        return n*factorial(n-1);
        
    } else if (n === 1) {
        return 1;
    }
}
function calculate(n) {
    let arr = [];
    for (let i=1; i<=n; n++) {
        arr.push(factorial[i]);
    }
    console.log(arr);
}
console.log(factorial(4));
calculate(4);
