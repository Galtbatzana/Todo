

function addTask() {
    const input = document.getElementById("input");
    console.log(input.value);
    // constent.innerHTML = content.innerHTML + "<div>" + input.value + "</div>";   
}
addTask();



function editText() {
    todoText = "";
    const todoText = document.getElementById("title");
    
}

function delText() {
    emptyText = "";
    const todoText = document.getElementById("title");
    console.log(todoText.innerText);
    const emptyText = todoText;
   
}

function addText() {
    const titleText = document.getElementById("title");
    titleText.innerText = input.value;
    console.log(titleText.innerText);
}
