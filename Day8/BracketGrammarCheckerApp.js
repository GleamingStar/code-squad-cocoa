function BracketGrammarChecker(data) {
    this.data = data;
    this.stack = [];
    this.elementCount = 0;
};

BracketGrammarChecker.prototype.run = function () {
    if (!this.checkBracketCount())
        return console.log('닫는 괄호가 일치하지 않습니다.');
    if (!this.checkBracketOrder())
        return console.log('괄호 순서가 적절하지 않습니다.');
    this.pushData();
    this.printResult();
};

BracketGrammarChecker.prototype.pushData = function () {
    const newData = this.data.split(",");
    this.elementCount += newData.length;

    let arr = [];

    for (let i of newData) {
        if (i.includes('[')) {
            if (arr.length > 0)
                this.stack.push(arr);
            arr = [];
        }
        arr.push(parseInt(i.replace(/[^0-9]/g, ''), 10));
    }
    this.stack.push(arr);
};

BracketGrammarChecker.prototype.checkBracketOrder = function () {
    const filteredData = this.data.replace(/[^\[\]]/g, '').split('');
    const orderedData = filteredData.slice().sort();
    return filteredData.join('') === orderedData.join('');
};

BracketGrammarChecker.prototype.checkBracketCount = function () {
    let openBracket = 0;
    let closedBracket = 0;
    for (let i of this.data) {
        if (i === "[")
            openBracket++;
        if (i === "]")
            closedBracket++;
    };
    return openBracket === closedBracket;
};

BracketGrammarChecker.prototype.getStructure = function () {
    const structure = {
        type: "root",
        child: []
    };

    let targetChild = structure.child;
    let targetChildIndex = 0;
    for (let i of this.stack) {
        targetChild.push({
            type: "array",
            child: []
        });
        for (let j of i) {
            targetChild[targetChildIndex].child.push({
                type: typeof j,
                value: j,
                child: []
            });
        }
        targetChild = targetChild[targetChildIndex].child;
        targetChildIndex = i.length;
    }
    
    return structure;
};

BracketGrammarChecker.prototype.printResult = function () {
    console.log(`깊이 수준은 ${this.stack.length}이며, 총 ${this.elementCount}개의 원소가 포함되어 있습니다.`);
    console.log(JSON.stringify(this.getStructure(), null, '\t'));
};

const data0 = "[1,2,[3,4,[5,[6]]]]";
const data1 = "[1,2,[3,4,[5,[6]]";
const data2 = "[1,[2,[3,[4,5,6,7,8,[9,[10]]]]]]";
const data3 = "[1,[2,[3,]4[]]]";

const test0 = new BracketGrammarChecker(data0);
test0.run();
const test1 = new BracketGrammarChecker(data1);
test1.run();
const test2 = new BracketGrammarChecker(data2);
test2.run();
const test3 = new BracketGrammarChecker(data3);
test3.run();
