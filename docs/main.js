const _ = {
  $: (selector, base = document) => base.querySelector(selector),
};

class BaseballModel {
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

  getResult(input) {
    const result = {
      input: input,
      strike: this.getStrikeCount(input, this.answer),
      ball: this.getBallCount(input, this.answer),
    };

    // if (strikeCount === 0 && ballCount === 0) result += "낫싱";
    // if (strikeCount > 0) result += strikeCount + " 스트라이크 ";
    // if (ballCount > 0) result += ballCount + " 볼";

    return result;
  }

  getStrikeCount(input, answer) {
    let strikeCount = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === input[i]) {
        strikeCount++;
      }
    }
    return strikeCount;
  }

  getBallCount(input, answer) {
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (answer.indexOf(input[i]) !== -1 && answer[i] != input[i]) {
        ballCount++;
      }
    }
    return ballCount;
  }
}

class BaseballView {
  text = _.$("#output_text");

  count = {
    ball: _.$("#ballcount"),
    ballOff: _.$("#ballcount_off"),
    strike: _.$("#strikecount"),
    strikeOff: _.$("#strikecount_off"),
  };

  inning = 0;

  render(input, strike, ball) {
    this.renderText(input, strike, ball);
    this.renderCount(strike, ball);
    this.renderScoreboard(strike);
  }

  renderText(input, strike, ball) {
    const template = `입력값은 ${input.join(
      ", "
    )} <br /> ${ball} 볼 ${strike} 스트라이크 <br />&nbsp`;
    this.text.innerHTML = template;
    if(strike === 3)
    this.text.innerHTML += `3개의 숫자를 모두 맞히셨습니다. 게임종료!`
  }

  renderCount(strike, ball) {
    this.count.ball.innerHTML = " ●".repeat(ball);
    this.count.ballOff.innerHTML = " ●".repeat(3 - ball);
    this.count.strike.innerHTML = " ●".repeat(strike);
    this.count.strikeOff.innerHTML = " ●".repeat(3 - strike);
  }

  renderScoreboard(strike, ball) {

  }

  showResult({ input, strike, ball }) {
    this.render(input, strike, ball);

    console.log("입력값은 " + input.join(", "));

    console.log(ball + " 볼 " + strike + " 스트라이크");

    if (strike === 3) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}
//렌더 {
// outputbox에 result 던져주기
// result 값에 정보만 받아서
// 2. 총 스트라이크와 볼 counts 올려서 전광판 렌더링 renderBillBoard
// 3. you 점수 0점 올리고 settimeout 0.5초후 com도 0 renderScoreBoard
// 3.5 3이 비동기인데 4,5는 어떻게 처리할까
// 4. 게임끝났으면 폭죽터트리고 inputbox.innerHTML = <button>다시시작</button> btn.addEvent(click 새로고침) 다시시작 버튼 올리기 renderGameOver
// 5. count가 9일땐 폭죽없이 정답표시와 함께 다시시작버튼 올리기?
// }

//컨트롤러 클래스

//아니면 렌더전에서 끊는것도 방법. 카운트를 증가시키지 않기위해
//length가 0이거나 부족한 경우만 체크하면 충분해 보인다
//renderErrorMessage?

class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    _.$("#input_btn").addEventListener("click", () => {
      const input = _.$("#input_text")
        .value.replace(/[^0-9]/g, "")
        .substr(0, 3)
        .split("")
        .map((element) => parseInt(element, 10));
      this.view.showResult(this.model.getResult(input));
    });
  }
}
new BaseballController(new BaseballModel(), new BaseballView()).init();
