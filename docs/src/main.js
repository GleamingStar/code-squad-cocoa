import BaseballModel from "./model.js"
import BaseballView from "./view.js"

const _ = {
  $: (selector, base = document) => base.querySelector(selector),
};

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
