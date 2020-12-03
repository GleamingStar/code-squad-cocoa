export default class BaseballModel {
  constructor() {
    this.createAnswer();
    console.log(this.answer);
  }
  answer = [];

  createAnswer() {
    for (let i = 0; i < 3; i++) {
      let id = Math.floor(Math.random() * 9) + 1;
      this.answer.indexOf(id) === -1 ? this.answer.push(id) : i--;
    }
  }

  getResult(input) {
    return {
      input: input,
      strike: this.getStrikeCount(input, this.answer),
      ball: this.getBallCount(input, this.answer),
      answer: this.answer
    };
  }

  getStrikeCount(input, answer) {
    let strikeCount = 0;
    for (let i in answer)
      if (answer[i] === input[i])
        strikeCount++;

    return strikeCount;
  }

  getBallCount(input, answer) {
    let ballCount = 0;
    for (let i in answer)
      if (answer.indexOf(input[i]) !== -1 && answer[i] != input[i])
        ballCount++;

    return ballCount;
  }
}
