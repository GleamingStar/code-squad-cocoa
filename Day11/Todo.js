class Model {

    isEmpty(input) {
        return input.replace(/ /g, '').length === 0;
    }

    checkEvent() {
        const target = this.parentNode;
        if (target.classList.contains('checked'))
            target.classList.remove("checked");
        else
            target.classList.add("checked");
    }

    deleteEvent() {
        const target = this.parentNode;
        target.remove();
    }
}
class View {

    createToDo(input) {
        const toDo = document.createElement("div");
        toDo.classList.add("toDo");
        toDo.append(input);
        return toDo;
    }

    addCheckBox(target, event) {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("change", event);
        target.append(checkbox);
    }

    addDeleteButton(target, event) {
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<img src=\"trashbin.png\" width=\"100%\"></img>";
        deleteButton.addEventListener("click", event);
        target.append(deleteButton);
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

    init() {
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

        const toDo = this.view.createToDo(this.input.value);
        this.input.value = '';
        this.input.focus();

        this.view.addCheckBox(toDo, this.model.checkEvent);

        this.view.addDeleteButton(toDo, this.model.deleteEvent);

        this.list.append(toDo);
    }
}

const model = new Model();
const view = new View();
const test = new Controller(model, view);
test.init();