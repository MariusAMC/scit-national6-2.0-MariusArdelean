console.log("To-do app homework Marius Ardelean");
console.log("unfortunately, this homework is made with a lot of help, i couldn't do it only by myself.")

const toDoListDiv = document.querySelector(".list"); 

fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            id:"mardelean",
            todo:[]
        })
    }).then(getData);

function handleFetchResponse(response) { 
    return response.json();
}
function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mardelean")
    .then(handleFetchResponse)
    .then(renderList)
    .catch(()=>{});
}

document.getElementById("new-task-button").addEventListener("click",newTask);

function newTask(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mardelean")
    .then(handleFetchResponse)
    .then(updateList)
    .then(updateServer)
}

function updateList(response){
    let payload = response;
    const input = document.getElementById("todo-input");
    if(input.value){
        let newToDo = {
            checked:false,
            item: input.value
            }
        payload.todo.push(newToDo);
        input.value="";
    } else {
        window.alert("Type new Task");
        }
    return payload;
}

function updateServer(newPayload) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/mardelean', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newPayload)
    }).then(getData);
}

function renderList(response){
    toDoListDiv.innerHTML="";
    for (element of response.todo) {
        renderTask(element,response.todo.indexOf(element));
    } 
}

function renderTask(element,index){

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-division");
    toDoDiv.setAttribute("id",index);

    const toDoCheckBox = document.createElement("input");
    toDoCheckBox.setAttribute("type","checkbox");

    toDoCheckBox.classList.add("to-do-checkbox");
    
    toDoCheckBox.addEventListener("change",changeStatus);

    const toDoName = document.createElement("h3");
    toDoName.classList.add("to-do-name");

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("delete-button");
    toDoDelete.addEventListener("click",deleteTask);
    const toDoDeleteImg = document.createElement("img");
    toDoDeleteImg.setAttribute("src","trash.svg");
    toDoDelete.appendChild(toDoDeleteImg);

    toDoName.innerText = element.item;
    toDoCheckBox.checked = element.checked;
    toDoCheckBox.name = element.item;

    toDoDiv.appendChild(toDoCheckBox);
    toDoDiv.appendChild(toDoName);
    toDoDiv.appendChild(toDoDelete);
    toDoListDiv.prepend(toDoDiv);
}

function changeStatus(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mardelean")
    .then(handleFetchResponse)
    .then(updateTask)
}

function updateTask(response){
    let payload = response;
    let box = document.querySelectorAll(":checked");
    for (const element of payload.todo) {
        element.checked = false;
    }
    for (const element of box) {
        payload.todo[element.parentNode.id].checked = true;
    }
    updateServer(payload);
}

function deleteTask(){
    this.parentNode.remove();
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mardelean")
    .then(handleFetchResponse)
    .then(removeTask)
}

function removeTask(response){
    let payload = response;
    let newPayloadArray =[];
    let remainingTasksList = document.querySelectorAll(".to-do-division");
    for (const element of remainingTasksList) {
        newPayloadArray.push(payload.todo[element.id]);
        }
    payload.todo = newPayloadArray.reverse();
    updateServer(payload);
}