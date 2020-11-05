
function AverageApp(arr) {
    this.arr = arr;

};
AverageApp.prototype.printAverage = function () {
    let newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
        newArr.push(Math.floor(this.getAverage(this.arr[i])));
    }
    console.log("학생들의 평균점수는 " + newArr.join('점, ') + "점입니다.");
};

AverageApp.prototype.getAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
};

AverageApp.prototype.getMax = function () {
    return this.arr.map(element => Math.max(...element));
};

AverageApp.prototype.printMax = function () {
    console.log("모든 학생의 최고점수의 평균점수는 " + this.getAverage(this.getMax()) + "점입니다.");
};

const grades = [[88, 76, 77], [33, 44, 44], [90, 100, 94], [30, 44, 98]];

const test = new AverageApp(grades);
test.printAverage();
test.printMax();