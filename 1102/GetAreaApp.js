const { get } = require("http");

function getArea(sort, arg1, arg2, arg3) {
    var sequenceArray = [];

    if(sort === 'circle') {
        return this.getCircle(arg1, arg2);
    }
    if(sort === 'rect') {
        return arg1*arg2;
    }
    if(sort === 'trapezoid') {
        return (arg1+arg2)*arg3/2;
    }

} 
getArea.prototype.getCircle = function(radius, radius2) {
    var sum = radius*radius*Math.PI;
    for(var i=radius+1; i<radius2; i++) {
        sum += i*i*Math.PI;
    }
    return sum;
}

getArea.prototype.printExecutionSequence = function() {

}
console.log(getArea('circle', 2, 4));
console.log(getArea('rect', 2, 4));