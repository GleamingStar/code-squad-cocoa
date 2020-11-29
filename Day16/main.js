const _ = {
  $: (selector, base = document) => base.querySelector(selector),
};

const ul = _.$("ul");
const list = _.$("#list");
const topList = _.$("#top_list");
const fruits = _.$("#fruits_box");

const SmartDropDown = function () {
  this.timer;
  this.isDelayed = true;
  this.box = {};
  this.init();
};

SmartDropDown.prototype.init = function () {
  ul.addEventListener("mouseleave", () => {
    clearTimeout(this.timer);
    list.style.display = "none";
  });

  topList.addEventListener("mouseover", this.onEvent.bind(this));

  list.addEventListener("mousemove", this.overEvent.bind(this));
};

SmartDropDown.prototype.refreshList = function () {
  const template = [];
  for (let key in this.box) template.push(key + " : " + this.box[key]);
  fruits.innerHTML = template.join("<br>");
};

SmartDropDown.prototype.onEvent = function () {
  this.timer = setTimeout(() => {
    list.style.display = "block";
  }, 1000);
};

SmartDropDown.prototype.overEvent = function ({target}) {
  const text = target.innerHTML;
  if (this.isDelayed && target.tagName === "LI") {
    if (this.box[text]) this.box[text]++;
    else this.box[text] = 1;
    this.refreshList();
    this.isDelayed = false;
    setTimeout(() => (this.isDelayed = true), 500);
  }
};

new SmartDropDown();
