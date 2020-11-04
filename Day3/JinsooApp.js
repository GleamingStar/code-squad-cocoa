class Jinsoo{
    answerArray = [];
    constructor(base, number, person, turn) {
        this.base = base;
        this.number = number;
        this.person = person;
        this.turn = turn;
        this.convert();
    };
    convert() {
        for (let i=0; i<this.number*this.person; i++) {
            let newString = i.toString(this.base);
            for (let j=0; j<newString.length; j++)
                this.answerArray.push(newString.charAt(j));
        }
    };
    print() {
        console.log('결과 :\"'+this.answerArray.join('\", \"')+'\"');
    }
    getMyTurn(){
        let newArr = [];
        for(let i = 0; i<this.number*this.person; i++)
            if (i%this.person === this.turn-1)
                newArr.push(this.answerArray[i]);
        console.log('길동이 말할 수는 \"'+newArr.join('\", \"')+'\"');
    };
};

const game1 = new Jinsoo(2,8,3,1);
game1.print();
game1.getMyTurn();