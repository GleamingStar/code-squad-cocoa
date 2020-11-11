class BracketGrammarChecker {
    stack = [];
    elementCount = 0;
    constructor(data) {
        this.data = data
    }

    run() {
        if (!this.checkBracket())
            return console.log('닫는 괄호가 일치하지 않습니다.');
        this.pushData();
        this.printResult();
        this.printStructure();
    };

    pushData() {
        const newData = this.data.replace(/,/g, '');
        let counts = 0;
        for (let i in newData) {
            counts++;
            if (newData[i] === '[' || newData[i] === ']') {
                if (counts > 1)
                    this.stack.push(newData.slice(i - counts + 1, i));
                this.elementCount += counts - 1;
                counts = 0;
            }
        }
    };

    checkBracket() {
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
        console.log(this.stack)
        return console.log(`깊이 수준은 ${this.stack.length}이며, 총 ${this.elementCount}개의 원소가 포함되어 있습니다.`);
    };
};
const data = "[1,2,[3,4,[5,[6]]]]";
const data1 = "[1,2,[3,4,[5,[6]]";
const data2 = "[1,[2,[3,[4,5,6,[7,[8]]]]]]";

const test = new BracketGrammarChecker(data);
test.run()
const test2 = new BracketGrammarChecker(data2)
test2.run()
