const _ = {
    createEl: function (tag, base = document) {
        return base.createElement(tag)
    },

    $: function (selector, base = document) {
        return base.querySelector(selector);
    }
}

class Model {

    addText(targetNode, input) {
        const textBox = _.createEl("div");
        textBox.classList.add('text')
        textBox.append(input);
        targetNode.append(textBox);
    }

    isEmpty(input) {
        return input.replace(/ /g, '').length === 0;
    }

    deleteEvent() {
        this.parentNode.remove();
    }

    deleteCheckedEvent() {
        const list = document.querySelectorAll('.toDo');
        list.forEach(element => {
            if (_.$('input', element).checked)
                element.remove();
        });

        const checkBox = _.$('#allCheck');
        checkBox.checked = false;
    }

    editBtnEvent({ target }) {
        const parent = target.parentNode;
        parent.lastChild.remove();
        this.addEditTable(parent);
        _.$('input', parent.lastChild).focus();
    }

    addEditTable(targetNode) {
        const inputText = _.createEl('input');
        inputText.setAttribute("placeholder", "Press enter to confirm");
        inputText.addEventListener("keypress", this.editTableEvent.bind(this));
        inputText.style = 'border-radius: 5px; border: 1px solid;';
        this.addText(targetNode, inputText);
    }

    editTableEvent({ target, keyCode }) {
        if (keyCode === 13 && !this.isEmpty(target.value)) {
            target.parentNode.append(target.value);
            target.remove();
        }
    }
}
class View {

    addBox(targetNode, type) {
        const checkbox = _.createEl("input");
        checkbox.setAttribute("type", type);
        targetNode.append(checkbox);
    }

    addButton(targetNode, eventHandler, content) {
        const button = _.createEl("button");
        button.innerHTML = content;
        button.addEventListener("click", eventHandler);
        targetNode.append(button);
    }

    checkAllEvent({ target }) {
        const checkBoxList = document.querySelectorAll('input');
        if (target.checked)
            checkBoxList.forEach(element => element.checked = true);
        else
            checkBoxList.forEach(element => element.checked = false);
    }

    alertOn({ style }) {
        style.display = 'inline';
    }

    alertOFF({ style }) {
        style.display = 'none';
    }
}
class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    input = _.$("#inputbox");
    addBtn = _.$("#addbtn");
    list = _.$("#list");
    alert = _.$("#alertbox")
    allCheck = _.$('#allCheck');
    delBtn = _.$('#delbtn');

    delBtnIcon = "<img src=\"trashbin.png\" width=\"100%\"></img>";
    editBtnIcon = "✎";

    init() {
        this.allCheck.addEventListener("change", this.view.checkAllEvent);
        this.delBtn.addEventListener("click", this.model.deleteCheckedEvent);
        this.addBtn.addEventListener("click", this.addToDo.bind(this));
        this.input.addEventListener("keypress", e => {
            if (e.keyCode === 13)
                this.addBtn.click();
        });
    }

    addToDo() {
        if (this.model.isEmpty(this.input.value))
            return this.view.alertOn(this.alert);
        this.view.alertOFF(this.alert);

        this.list.append(this.createToDo());

        this.input.value = '';
        this.input.focus();
    }

    createToDo() {
        const toDo = _.createEl("li");
        toDo.classList.add("toDo");

        this.view.addBox(toDo, "checkbox");

        this.view.addButton(toDo, this.model.deleteEvent, this.delBtnIcon);

        this.view.addButton(toDo, this.model.editBtnEvent.bind(this.model), this.editBtnIcon);

        this.model.addText(toDo, this.input.value);
        return toDo;
    }
}

const model = new Model();
const view = new View();
new Controller(model, view);