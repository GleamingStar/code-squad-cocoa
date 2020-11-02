function FigureApp() {
    this.executionSequence = [];
};

FigureApp.prototype.getArea = function(sort, arg1, arg2, arg3) {
    if(sort === 'circle') {
        this.getCircle(arg1, arg2);
    } else if (sort === 'rect') {
        this.getRectangle(arg1,arg2);
    } else if (sort === 'trapezoid') {
        this.getTrapezoid(arg1, arg2, arg3);
    }
};

FigureApp.prototype.getCircle = function(radius, radius2) {
    var sum = radius*radius*Math.PI;
    for(var i=radius+1; i<=radius2; i++) {
        sum += i*i*Math.PI;
    }
    this.addRecord('circle', sum);
};

FigureApp.prototype.getRectangle = function(base, height) {
    this.addRecord('rectangle', base*height);
};

FigureApp.prototype.getTrapezoid = function(base0, base1, height) {
    this.addRecord('trapezoid', base0*base1*height/2);
};

FigureApp.prototype.addRecord = function(sort, result) {
    this.executionSequence.push(sort+' = '+result);
    console.log(sort+' : '+result);
};

FigureApp.prototype.printExecutionSecuence = function() {
    var textArr = [];
    this.executionSequence.forEach(function(elements){
        textArr.push(elements);
    })
    console.log('계산수행순서 : '+textArr.join(', '))
};

let test = new FigureApp();

test.getArea('circle', 4);
test.getCircle(3, 4);
test.getArea('rect', 2, 3);
test.getArea('trapezoid', 4, 7, 10);
test.printExecutionSecuence();