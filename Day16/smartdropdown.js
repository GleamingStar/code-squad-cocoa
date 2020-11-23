const ul = document.querySelector("ul");
const list = document.querySelector('#list')
const topList = document.querySelector("#toplist");
const consoleBox = document.querySelector('#consoleBox');

const box = {};
let onOff = 'off';
let isDelayed = true;

setInterval(() => isDelayed = true, 500)

refreshList = () => {
    const template = []
    for(key in box) {
        template.push(key + ' : ' + box[key])
    }
    consoleBox.innerHTML = template.join('<br>');
}

const onEvent = () => {
    if (onOff === "on")
        list.style.display = "block";
}

const overEvent = (e) => {
    const text = e.target.innerHTML;
    if (isDelayed && text.length < 20) {
        if (box[text])
            box[text]++;
        else
            box[text] = 1
        refreshList()
        isDelayed = false;
    }
};

topList.addEventListener("mouseenter", () => onOff = "on");

ul.addEventListener("mouseleave", () => {
    onOff = 'off';
    list.style.display = "none";
});

topList.addEventListener("mouseover", () => setTimeout(onEvent, 1000));

list.addEventListener("mousemove", overEvent)
