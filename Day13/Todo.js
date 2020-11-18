class Model {

    addText(target, input) {
        const textBox = document.createElement("div");
        textBox.append(input);
        target.append(textBox);
    }

    isEmpty(input) {
        return input.replace(/ /g, '').length === 0;
    }

    deleteEvent() {
        const target = this.parentNode;
        target.remove();
    }

    deleteCheckedEvent() {
        const target = document.querySelectorAll('.toDo');
        target.forEach(element => {
            if (element.querySelector('input').checked)
                element.remove();
        });

        const checkBox = document.querySelector('#allCheck');
        checkBox.checked = false;
    }

    editBtnEvent({target}) {
        target.parentNode.lastChild.remove();
        target.parentNode.append(this.addEditBox());
        target.parentNode.lastChild.querySelector('input').focus();
    }

    addEditBox() {
        const newText = document.createElement('div');
        const inputText = document.createElement('input');
        inputText.setAttribute("placeholder", "Press enter after typing");
        inputText.addEventListener("keypress", this.editBoxEvent.bind(this));
        inputText.style = 'border-radius: 5px; border: 1px solid lightslategray;';
        newText.append(inputText);
        return newText;
    }

    editBoxEvent(event) {
        if (event.keyCode === 13 && !this.isEmpty(event.target.value)) {
            event.target.parentNode.append(event.target.value);
            event.target.remove();
        }
    }
}
class View {

    addCheckBox(target) {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        target.append(checkbox);
    }

    addDeleteButton(target, event) {
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<img src=\"trashbin.png\" width=\"100%\"></img>";
        deleteButton.addEventListener("click", event);
        target.append(deleteButton);
    }

    addEditButton(target, event) {
        const editButton = document.createElement("button");
        editButton.innerHTML = "✎";
        editButton.addEventListener("click", event);
        target.append(editButton);
    }

    checkAllEvent(e) {
        const checkBoxList = document.querySelectorAll('input');
        if (e.target.checked)
            checkBoxList.forEach(element => element.checked = true);
        else
            checkBoxList.forEach(element => element.checked = false);
    }
}
class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    input = document.querySelector("#input");
    addbtn = document.querySelector("#addbtn");
    list = document.querySelector("#list");
    allCheck = document.querySelector('#allCheck');
    delBtn = document.querySelector('#delbtn');

    init() {
        this.allCheck.addEventListener("change", this.view.checkAllEvent)
        this.delBtn.addEventListener("click", this.model.deleteCheckedEvent)
        this.addbtn.addEventListener("click", this.addToDo.bind(this));
        this.input.addEventListener("keypress", e => {
            if (e.keyCode === 13)
                this.addbtn.click();
        });
    }

    addToDo() {
        if (this.model.isEmpty(this.input.value))
            return alert("입력칸이 비어있습니다!");

        this.list.append(this.createToDo());

        this.input.value = '';
        this.input.focus();
    }

    createToDo() {
        const toDo = document.createElement("div");
        toDo.classList.add("toDo");

        this.view.addCheckBox(toDo);

        this.view.addDeleteButton(toDo, this.model.deleteEvent);

        this.view.addEditButton(toDo, this.model.editBtnEvent.bind(this.model))

        this.model.addText(toDo, this.input.value);
        return toDo;
    }
}

const model = new Model();
const view = new View();
const test = new Controller(model, view);
test.init();