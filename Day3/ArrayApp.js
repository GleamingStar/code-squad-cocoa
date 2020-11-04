//팩토리얼 구현 함수
function factorial(n) {
    if (n>1) {
        return n*factorial(n-1);
        
    } else if (n === 1) {
        return 1;
    }
}
//과제 실행 함수
function calculate(n) {
    let arr = [];
    for (let i=1; i<=n; i++) {
        arr.push(factorial(i));
    }
    console.log(arr);
}
console.log(factorial(4));
calculate(4);

////////////////////////////////////////////

function filterId(arr) {
    const reg = RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);
    
    // let filteredArray = arr.filter(function(id) {
    //     return !reg.test(id);
    // });

    // let filteredArray2 = [];

    // filteredArray.forEach(function(id) {
    //     filteredArray2.push(id.replace(/[0-9]/g, ""));
    // });

    // console.log(filteredArray2);

    let filteredArray = [];

    arr.filter(function(id) {
        return !reg.test(id);
    }).forEach(function(id) {
        filteredArray.push(id.replace(/[0-9]/g, ""));
    });

    console.log(filteredArray);
}
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"]

filterId(peoples);


/////////////////////////////////////////////
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

///////////////////////////////////////



