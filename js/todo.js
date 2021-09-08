const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDO (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo (newtodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.id = newtodo.id;
    span.innerText = newtodo.text;
    toDoList.appendChild(li);
    li.appendChild(button);
    button.addEventListener("click", deleteToDO);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newtodo = toDoInput.value;
    const newToDoObj = {
        text: newtodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    toDoInput.value = "";
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedTodos = JSON.parse(saveToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}