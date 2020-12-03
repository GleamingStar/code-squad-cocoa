const _ = {
  $: (selector, base = document) => base.querySelector(selector),
};

class BaseballModel {
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
    for (let i = 0; i < 3; i++) 
      if (answer[i] === input[i]) 
        strikeCount++;

    return strikeCount;
  }

  getBallCount(input, answer) {
    let ballCount = 0;
    for (let i = 0; i < 3; i++)
      if (answer.indexOf(input[i]) !== -1 && answer[i] != input[i]) 
        ballCount++;

    return ballCount;
  }
}

class BaseballView {
  text = _.$("#output_text");
  record = _.$("#record_box");

  count = {
    ball: _.$("#ballcount"),
    ballOff: _.$("#ballcount_off"),
    strike: _.$("#strikecount"),
    strikeOff: _.$("#strikecount_off")
  };

  scoreboard = {
    playerScore: _.$("#player_score").querySelectorAll("td"),
    computerScore: _.$("#computer_score").querySelectorAll("td")
  };

  score = {
    inning: 0,
    totalBall: 0,
    totalStrike: 0
  };

  render({ input, ball, strike, answer }) {
    if (input.length !== 3)
      return this.text.innerHTML = `3자리의 수를 입력해주세요! <br />&nbsp <br />&nbsp `
    this.renderText(input, ball, strike);
    this.renderCount(ball, strike);
    this.renderRecord(input, ball, strike);
    this.renderScoreboard(ball, strike);
    if (strike === 3) 
      this.endGame();
    else if (this.score.inning === 9) 
      this.gameOver(answer);
  }

  renderText(input, ball, strike) {
    this.text.innerHTML = `입력값은 ${input.join(", ")} <br /> ${ball} 볼 ${strike} 스트라이크 <br />&nbsp`;
  }

  renderCount(ball, strike) {
    this.count.ball.innerHTML = " ●".repeat(ball);
    this.count.ballOff.innerHTML = " ●".repeat(3 - ball);
    this.count.strike.innerHTML = " ●".repeat(strike);
    this.count.strikeOff.innerHTML = " ●".repeat(3 - strike);
  }

  renderRecord(input, ball, strike) {
    this.record.innerHTML += ` ${input.join(" ")} - ${ball} B ${strike} S <br />`;
  }

  renderScoreboard(ball, strike) {
    this.score.inning++;
    this.score.totalBall += ball;
    this.score.totalStrike += strike;
    const playerScore = this.scoreboard.playerScore;
    const computerScore = this.scoreboard.computerScore;

    playerScore[11].innerHTML = this.score.totalBall;
    playerScore[12].innerHTML = this.score.totalStrike;

    playerScore[this.score.inning].innerHTML = strike === 3 ? 1 : 0;
    if(this.score.inning < 9 && strike !== 3)
    computerScore[this.score.inning+1].innerHTML = 0;
  }

  endGame() {
    this.scoreboard.playerScore[10].innerHTML = 1;
    this.text.innerHTML += `3개의 숫자를 모두 맞히셨습니다. 게임종료!`;
    this.addResetBtn();
  }

  gameOver(answer) {
    this.text.innerHTML += `정답은 ${answer.join(', ')}입니다.`
    this.addResetBtn();
  }

  addResetBtn() {
    _.$("#input_box").innerHTML = `<button id="restart_btn">다시 시작</button>`;
    _.$("#restart_btn").addEventListener("click", () => window.location.reload());
  }
}

class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  inputBtn = _.$("#input_btn");
  inputText = _.$("#input_text");

  init() {
    this.inputBtn.addEventListener("click", () => {
      const input = this.inputText.value.replace(/[^0-9]/g, "").substr(0, 3).split("").map((element) => parseInt(element, 10));
      this.inputText.value = "";
      this.view.render(this.model.getResult(input));
      this.inputText.focus();
    });

    this.inputText.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) 
        this.inputBtn.click();
    });
  }
}

new BaseballController(new BaseballModel(), new BaseballView()).init();
