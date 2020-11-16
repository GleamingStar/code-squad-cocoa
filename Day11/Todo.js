class Model {
    input = document.querySelector("#input");
    add = document.querySelector("#add");
    list = document.querySelector("#list");

    init() {
        this.add.addEventListener("click", this.addToDo.bind(this));
        this.input.addEventListener("keypress", e => {
            if (e.keyCode === 13) {
            //   e.preventDefault();
              this.add.click();
            }
        });
    };

    addToDo() {
        if (this.isEmpty())
            return alert("입력칸이 비어있습니다!");
        const todo = document.createElement("div");
        todo.classList.add("todo")

        this.addCheckBox(todo);

        ////뭔데 자동으로 입력값 앞에 있는 공백들은 자동삭제될까
        todo.append(this.input.value);
        this.input.value = '';

        this.addDeleteButton(todo);   

        this.list.append(todo);
    };
    isEmpty() {
        return this.input.value.replace(/ /g,'').length === 0;
    };

    addCheckBox(target) {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("click", this.checkEvent);
        target.append(checkbox);
    };

    addDeleteButton(target) {
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Del"
        deleteButton.addEventListener("click", this.deleteEvent)
        target.append(deleteButton);
    };

    checkEvent() {
        const target = this.parentNode;
        if (target.classList.contains('checked'))
            target.classList.remove("checked")
        else
            target.classList.add("checked")
    };

    deleteEvent() {
        const target = this.parentNode;
        target.remove();
    };
}
class View {

}
const test = new Model();
test.init()