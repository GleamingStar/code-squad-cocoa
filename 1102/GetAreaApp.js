const { get } = require("http");

var executionSequence = [];

function printExecutionSecuence() {
    var textArr = [];
    executionSequence.forEach(function(elements){
        textArr.push(elements);
    })
    console.log('계산수행순서 : '+textArr.join(', '))
}
function getArea(sort, arg1, arg2, arg3) {
    var result = 0;
    if(sort === 'circle') {
        result = this.getCircle(arg1, arg2);
    } else if (sort === 'rect') {
        result = this.getRectangle(arg1,arg2);
    } else if (sort === 'trapezoid') {
        result = this.getTrapezoid(arg1, arg2, arg3);
    } else {
        result = 'error';
    }
    executionSequence.push(sort+' = '+result);
    console.log(result);
};
getArea.prototype.getCircle = function(radius, radius2) {
    var sum = radius*radius*Math.PI;
    for(var i=radius+1; i<=radius2; i++) {
        sum += i*i*Math.PI;
    }
    return sum;
};
getArea.prototype.getRectangle = function(base, height) {
    return base*height;
};
getArea.prototype.getTrapezoid = function(base0, base1, height) {
    return base0*base1*height/2;
};

var test0 = new getArea('circle', 2);
var test1 = new getArea('circle', 1, 2);
var test2 = new getArea('rect', 2, 10);
var test3 = new getArea('trapezoid', 2, 4, 10);
var test4 = new getArea('a', 'b')
printExecutionSecuence();