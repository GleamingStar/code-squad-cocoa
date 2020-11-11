class BracketGrammarChecker {
    stack = [];
    
    elementCount = 0;

    constructor(data) {
        this.data = data
    };

    run() {
        if (!this.checkBracketCount())
            return console.log('닫는 괄호가 일치하지 않습니다.');
        if (!this.checkBracketOrder())
            return console.log('괄호 순서가 적절하지 않습니다.');
        this.pushData();
        this.printResult();
        this.printStructure();
    };

    pushData() {
        const newData = this.data.split(",")
        let arr = [];
        this.elementCount += newData.length;
        for (let i of newData) {
            if (i.includes('[')) {
                if (arr.length > 0)
                    this.stack.push(arr);
                arr = [];
            }
            arr.push(parseInt(i.replace(/[^0-9]/g, ''), 10));
            if (i.includes(']'))
                this.stack.push(arr);
        }
    };

    checkBracketOrder() {
        const filteredData = this.data.replace(/[^\[\]]/g, '').split('');
        const orderedData = filteredData.slice().sort();
        return filteredData.join('') === orderedData.join('');
    };

    checkBracketCount() {
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

    printStructure() {
        console.log(`{\n` + `  "type" : "root",\n` + `  "child : [`);
        for (let i = 0; i < this.stack.length; i++) {
            console.log(`{\n` + `  "type" : "array",\n` + `  "child" : [ `)
            for (let j = 0; j < this.stack[i].length; j++)
                console.log(`{\n` + `  "type": "${typeof this.stack[i][j]}",\n` + `  "value" : "${this.stack[i][j]}",\n` + `  "child" : []\n` + `},`);
        }
        for (let i = 0; i < this.stack.length + 1; i++)
            console.log(`]\n` + `}`);
    };

    printResult() {
        return console.log(`깊이 수준은 ${this.stack.length}이며, 총 ${this.elementCount}개의 원소가 포함되어 있습니다.`);
    };
};

const data0 = "[1,2,[3,4,[5,[6]]]]";
const data1 = "[1,2,[3,4,[5,[6]]";
const data2 = "[1,[2,[3,[4,5,6,7,8,[9,[10]]]]]]";
const data3 = "[1,[2,[3,]4[]]]"

const test0 = new BracketGrammarChecker(data0);
test0.run()
// const test1 = new BracketGrammarChecker(data1);
// test1.run()
const test2 = new BracketGrammarChecker(data2);
test2.run()
const test3 = new BracketGrammarChecker(data3);
test3.run()
