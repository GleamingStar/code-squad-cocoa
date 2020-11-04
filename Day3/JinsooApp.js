class Jinsoo{
    constructor() {

    };

    solution(base, number, person) {
        this.print(this.convert(base, number, person));
    };
    
    getMyTurn(base, number, person, turn){
        console.log('길동이 말해야 할 수는 ')
        this.print(this.filter(base, number, person, turn));
    };
    
    convert(base, number, person) {
        let answerArray = [];
        for (let i=0; i<number*person; i++) {
            let newString = i.toString(base);
            for (let j=0; j<newString.length; j++)
                answerArray.push(newString.charAt(j));
        }
        return answerArray;
    };
    
    filter(base, number, person, turn) {
        let newArr = [];
        for(let i = 0; i<number*person; i++)
            if (i%person === turn-1)
                newArr.push(this.convert(base, number, person)[i]);
        return newArr;
    };
    
    print(array) {
        console.log('\"'+array.join('\", \"')+'\"');
    }

};

const test = new Jinsoo();
test.solution(16, 10, 4);
test.getMyTurn(2, 5, 3, 1);