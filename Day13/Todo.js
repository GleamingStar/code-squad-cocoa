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

    deleteAllEvent(e) {
        //checkbox 의존성 낮추는 방법 모색
        const target = document.querySelectorAll('.toDo');
        const checkBox = document.querySelector('#allCheck');
        target.forEach(element => {
            if (element.querySelector('input').checked)
                element.remove()
        });
        checkBox.checked = false;
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
        deleteButton.classList.add('delBtn')
        deleteButton.innerHTML = "<img src=\"trashbin.png\" width=\"100%\"></img>";
        deleteButton.addEventListener("click", event);
        target.append(deleteButton);
    }

    checkAllEvent(e) {
        const checkBoxList = document.querySelectorAll('input')
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
    allDelete = document.querySelector('#delbtn')

    init() {
        this.allCheck.addEventListener("change", this.view.checkAllEvent)
        this.allDelete.addEventListener("click", this.model.deleteAllEvent)
        this.addbtn.addEventListener("click", this.addToDo.bind(this));
        this.input.addEventListener("keypress", e => {
            if (e.keyCode === 13) {
                this.addbtn.click();
            }
        });
    }

    addToDo() {
        if (this.model.isEmpty(this.input.value))
            return alert("입력칸이 비어있습니다!");

        const toDo = document.createElement("div");
        toDo.classList.add("toDo");

        this.view.addCheckBox(toDo);

        this.view.addDeleteButton(toDo, this.model.deleteEvent);

        this.model.addText(toDo, this.input.value);
        this.input.value = '';
        this.input.focus();

        this.list.append(toDo);
    }
}

const model = new Model();
const view = new View();
const test = new Controller(model, view);
test.init();