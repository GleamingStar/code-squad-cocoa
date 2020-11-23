const _ = {
    $: (selector, base = document) => base.querySelector(selector)
}

const ul = _.$("ul");
const list = _.$('#list');
const topList = _.$("#top_list");
const fruits = _.$('#fruits_box');

const SmartDropDown = function () {
    this.isOn = false;
    this.isDelayed = true;
    this.box = {};
    this.init();
}

SmartDropDown.prototype.init = function () {
    setInterval(() => this.isDelayed = true, 500)

    topList.addEventListener("mouseenter", () => this.isOn = true);

    ul.addEventListener("mouseleave", () => {
        this.isOn = false;
        list.style.display = "none";
    });

    topList.addEventListener("mouseover", () => setTimeout(this.onEvent.bind(this), 1000));

    list.addEventListener("mousemove", this.overEvent.bind(this));
}

SmartDropDown.prototype.refreshList = function () {
    const template = [];
    for (key in this.box)
        template.push(key + ' : ' + this.box[key]);
    fruits.innerHTML = template.join('<br>');
}

SmartDropDown.prototype.onEvent = function () {
    if (this.isOn)
        list.style.display = "block";
}

SmartDropDown.prototype.overEvent = function (e) {
    const text = e.target.innerHTML;
    if (this.isDelayed && text.length < 20) {
        if (this.box[text])
            this.box[text]++;
        else
            this.box[text] = 1;
        this.refreshList();
        this.isDelayed = false;
    }
}

new SmartDropDown();

