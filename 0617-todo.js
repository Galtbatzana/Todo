///////////////////////////////////////////////////////
// 
// const tasks = [
//     {name: "My todo list #1", status: "todo"},
//     {name: "wash dishes", status: "todo"},
//     {name: "watch football", status: "done"} 
// ];

const tasksString = localStorage.getItem("Tasks");
const tasks = JSON.parse(tasksString) || [];
//////////////////////////////////////////////////////////
function addTask() {
    const newTask = document.getElementById("input").value;

    if (newTask === "") {
        alert("Enter task in the input");
        return;
    } 
    tasks.unshift({name: newTask, status: "todo"});
    document.getElementById("input").value = "";
    render(); 
}

////////////////////////////////////////////////////////
function render() {
    let tasksHtml = "";

for (let i = 0; i < tasks.length; i++) {
    
    const oneTask = `
        <div class="body-row">
            
            <input class="body-check-box" type="checkbox" onclick="changeStatus(${i});" ${tasks[i].status === "done" ? "checked" : ""} />
            ${tasks[i].status === "done" ? `<s>${tasks[i].name}</s>` : tasks[i].name}
            
            <div id="cart-content"></div>
            <button class="btn-edit" onclick="editTask(${i});">edit</button>
            <button class="btn-delete" onclick="delText(${i});">del</button>
          </div>
    `;
    tasksHtml = tasksHtml + oneTask;  
}
document.getElementById("tasks").innerHTML = tasksHtml;

let doneCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "done") {
            doneCount++;
        }
    }
    document.getElementById("statistics").innerText = `${doneCount}/${tasks.length}`;
    
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}
render();

/////////////////////////////////////////////////////////
function delText(position) {
   if(confirm("Are you sure?")) {
    tasks.splice(position, 1);
    render();
   }
}

///////////////////////////////////////////////////////
function addOnEnter(event) {
    if (event.key === "Enter") {
        addTask();
    }
}  

////////////////////////////////////////////////////////
function editTask(position) {
   const oldValue = tasks[position].name;
   const newValue = prompt("EditTask", oldValue);
   if (newValue !== null) {
        tasks[position].name = newValue;
    }
    render();
}

//////////////////////////////////////////////////////////
function changeStatus(position) {
    if (tasks[position].status === "done") {
        tasks[position].status = "todo";
    } else {
        tasks[position].status = "done";
    }
   render();
}

