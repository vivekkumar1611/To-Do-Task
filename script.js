
    function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

  
