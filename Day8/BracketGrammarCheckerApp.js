
//////////어떻게 하면 stack 자료구조를 활용할 수 있을까
//////////3. (선택) 배열 분석 정보를 출력한다. 구현필요

class BracketGrammarChecker {
    stack = [];
    elementCount = 0;

    run(data) {
        if (!this.checkBracket(data))
            return console.log('닫는 괄호가 일치하지 않습니다.');
        this.pushData(data);
        this.printResult();
    };

    pushData(data) {
        const newData = data.replace(/,/g, '');
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

    checkBracket(data) {
        let openBracket = 0;
        let closedBracket = 0;
        for (let i of data) {
            if (i === "[")
                openBracket++;
            if (i === "]")
                closedBracket++;
        };
        return openBracket === closedBracket;
    };

    printResult() {
        return console.log(`깊이 수준은 ${this.stack.length}이며, 총 ${this.elementCount}개의 원소가 포함되어 있습니다.`);
    }

};

const test = new BracketGrammarChecker();

const data = "[1,2,[3,4,[5,[6]]]]";
const data1 = "[1,2,[3,4,[5,[6]]";
const data2 = "[1[2[3[45678[9[10]]]]]]";
test.run(data);
test.run(data1);
test.run(data2);