document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM Loaded')
});

document.getElementById("submit-btn").addEventListener("click", submit);

function submit(e){
  const task = document.getElementById("new-task-description").value;
  if(task.length > 0){
    var divNode = document.createElement("div");
    divNode.setAttribute("id", task);  

    var node = document.createElement("ul");                  // Create a <ul> node          
    var textnode = document.createTextNode(task);             // Create a text node
    node.appendChild(textnode);                              // Append the text to <ul>
    divNode.appendChild(node);

    var deleteBtn = document.createElement("input");
    deleteBtn.setAttribute('type', "button");
    deleteBtn.setAttribute('id', task);
    deleteBtn.setAttribute('value', "Delete");
    deleteBtn.addEventListener("click", deleteListItem);

    divNode.appendChild(deleteBtn);

    document.getElementById("tasks").appendChild(divNode);     // Append <li> to <ul> with id="task"

    document.getElementById("new-task-description").value = '';
  }
  e.preventDefault();
}

function deleteListItem(e){
  e.preventDefault();
  const item = document.getElementById(e.target.id);
  document.getElementById("tasks").removeChild(item);
}