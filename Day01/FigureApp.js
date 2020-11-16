function FigureApp() {
    this.executionSequence = [];
};

FigureApp.prototype.getArea = function() {
    let sort = arguments[0];
    if(sort === 'circle') {
        this.getCircle(arguments[1], arguments[2]);
    } else if (sort === 'rect') {
        this.getRectangle(arguments[1],arguments[2]);
    } else if (sort === 'trapezoid') {
        this.getTrapezoid(arguments[1], arguments[2], arguments[3]);
    }
};

FigureApp.prototype.getCircle = function(radius, maxRadius = radius) {
    let sum = 0;
    for(let i=radius; i<=maxRadius; i++) {
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
    this.executionSequence.push(`${sort} = ${result}`);
    console.log(`${sort} : ${result}`);
};

FigureApp.prototype.printExecutionSecuence = function() {
    let textArr = [];
    this.executionSequence.forEach(function(elements){
        textArr.push(elements);
    })
    console.log('계산수행순서 : '+textArr.join(', '))
};

const test = new FigureApp();

test.getArea('circle', 4);
test.getCircle(3, 4);
test.getArea('rect', 2, 3);
test.getArea('trapezoid', 4, 7, 10);
test.printExecutionSecuence();