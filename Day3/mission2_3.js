const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

function getAverage(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        let sum = 0;
        for(let j=0; j<arr[i].length; j++)
            sum += arr[i][j];
        newArr.push(Math.floor(sum/arr[i].length));
    }
    console.log("학생들의 평균점수는 "+newArr.join('점, ')+"점입니다.");

    let maxArr = arr.map(function(element) {
        return Math.max.apply(null, element);
    });

    let maxsum = 0;
    for(let i = 0; i<maxArr.length; i++)
        maxsum += maxArr[i];
    console.log("모든 학생의 최고점수의 평균점수는 "+maxsum/maxArr.length+"점입니다.")
}

getAverage(grades);