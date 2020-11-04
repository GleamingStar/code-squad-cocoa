class Jinsoo{
    answerArray = [];
    constructor(base, number, person, turn) {
        this.base = base;
        this.number = number;
        this.person = person;
        this.turn = turn;
        this.convert();
    }
    //solution(base,number,person)을 구현필요
    convert() {
        for (let i=0; i<this.number*this.person; i++) {
            this.answerArray.push(i.toString(this.base));
        }
    }
    print() {
        let resultString = '';
        let answerString = '';
        this.answerArray.forEach(function(elements){
            resultString += elements;
        })
        for (let i = 0; i < resultString.length; i++)
            answerString += '\"' + resultString.charAt(i) + '\", ';
        console.log(answerString.slice(0, -2));
    }
    getMyTurn(){
        let newArr = [];
        for(let i = 0; i<this.number*this.person; i++)
            if (i%this.person === this.turn-1)
                newArr.push(this.answerArray[i]);
        console.log('길동이 말할 수는 \"'+newArr.join('\", \"')+'\"');
    }
};

const game1 = new Jinsoo(16,20,2,1);
game1.print();
game1.getMyTurn();