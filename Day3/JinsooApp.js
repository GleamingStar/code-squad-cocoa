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
            if (answerArray.length === number*person)
                break;
                //애초에 추가할때 p당 n개만 추가하면안돼?
                //2진법이면 length< 16진법이면 
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
test.solution(2, 5, 3);
test.getMyTurn(2, 5, 3, 1);