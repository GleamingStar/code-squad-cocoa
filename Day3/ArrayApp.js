function factorial(n) {
    let arr = [];
    if (n>1) {
        arr.unshift(n*n-1);
        console.log(arr);
        return factorial(n-1);
        
    } else if (n === 1) {
        arr.unshift(1);
        console.log(arr);
    }
}
factorial(3);
