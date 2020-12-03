class baseballModel {
  constructor() {
    this.createAnswer();
  }
  answer = [];

  createAnswer() {
    for (let i = 0; i < 3; i++) {
      let id = Math.floor(Math.random() * 9) + 1;
      if (this.answer.indexOf(id) === -1) {
        this.answer.push(id);
      } else {
        i--;
      }
    }
  }

  endGame(input) {
    if (this.getStrikeCount(input, this.answer) === 3) {
      return true;
    } else {
      return false;
    }
  }

  showResult(input) {
    console.log("입력값은 " + input.join(", "));

    console.log(this.getResult(input));

    if (this.endGame(input)) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  getResult(input) {
    const strikeCount = this.getStrikeCount(input, this.answer);
    const ballCount = this.getBallCount(input, this.answer);
    let result = "";

    if (strikeCount === 0 && ballCount === 0) result += "낫싱";
    if (strikeCount > 0) result += strikeCount + " 스트라이크 ";
    if (ballCount > 0) result += ballCount + " 볼";

    return result;
  }
}

baseballModel.prototype.getStrikeCount = function (input, answer) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] === input[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
};

baseballModel.prototype.getBallCount = function (input, answer) {
  let ballCount = 0;
  for (let i = 0; i < 3; i++) {
    if (answer.indexOf(input[i]) !== -1 && answer[i] != input[i]) {
      ballCount++;
    }
  }
  return ballCount;
};

const game1 = new baseballModel();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.split(" ").map((element) => parseInt(element, 10));
  game1.showResult(input);
  if (game1.endGame(input)) rl.close();
}).on("close", function () {
  process.exit();
});
