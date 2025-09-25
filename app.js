function addTask() {
    var input = document.getElementById("Input");
    var task = input.value.trim();
    console.log(task);

    if (task === "") {
        alert("Please Enter a Task");
        return;
    }


    var listItem = document.createElement("li");
    //  listItem.textContent = task;     
    var list = document.createTextNode(task);
    listItem.appendChild(list);
    console.log(listItem);


    var todoListData = document.getElementById("todo-list");
    todoListData.appendChild(listItem);
    input.value = "";




    // delete button
    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    listItem.appendChild(deleteBtn);
    deleteBtn.setAttribute("class", "deleteBtn");


    deleteBtn.onclick = function () {
        todoListData.removeChild(listItem);
    }





    // edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    listItem.appendChild(editBtn);
    editBtn.setAttribute("class", "editBtn");

    editBtn.addEventListener("click", function () {
        var newText = prompt("Edit your task:", list.textContent);
        if (newText !== null && newText.trim() !== "") {
            list.textContent = newText;  
        }
    });



 
}

document.getElementById("Input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addTask();
    }
});
