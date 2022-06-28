window.addEventListener("load", () => {
  const form = document.querySelector(".form-submit");
  const input = document.querySelector("#input");
  const value = document.querySelector("#input");
  const todos = document.querySelector(".todos");
  const todoinf_actions = document.querySelector(".todoinf_actions");
  const infotodos = document.querySelector(".infotodos");
  const clear_all = document.querySelector("#clear_all");
  // edit icon
  const editIcon = document.querySelector("#editIcon");
  let todos_count = 0;

  // add function
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered_value = value.value;
    let edit_btn_status = "edit";
    const element = document.createElement("div");
    element.classList.add("element");
    // first half
    const firstHalf = document.createElement("div");
    firstHalf.classList.add("first-half");
    const todo = document.createElement("input");
    todo.classList.add("todo-title");
    todo.value = entered_value;
    todo.setAttribute("readonly", "readonly");
    todo.classList.add("todo-title");
    firstHalf.appendChild(todo);
    element.appendChild(firstHalf);

    // second half
    const secondHalf = document.createElement("div");
    secondHalf.classList.add("second-half");

    // edit and delete
    const edit = document.createElement("div");
    const Delete = document.createElement("div");
    edit.classList.add("edit");
    Delete.classList.add("delete");
    edit.innerHTML = '<i class="fa-solid fa-pen-to-square" id="editIcon" ></i>';
    Delete.innerHTML = '<i class="fa-solid fa-trash" id="deleteIcon" ></i>';
    secondHalf.append(edit);
    secondHalf.append(Delete);

    //
    element.appendChild(secondHalf);
    if (entered_value) {
      todos.appendChild(element);
      todos_count++;
      input.value = "";
    } else {
      alert("enter a value");
    }
    // delete function
    Delete.addEventListener("click", () => {
      console.log("clicked");
      todos.removeChild(element);
      todos_count--;

      todos_count != 0
        ? (infotodos.textContent = `you have ${todos_count} pending todo`)
        : (todoinf_actions.style.display = "none");
    });

    // edit function
    edit.addEventListener("click", () => {
      // editIcon.setAttribute("class", "fa-solid fa-floppy-disk");
      if (
        edit.firstChild.getAttribute("class").toLowerCase() ===
        "fa-solid fa-pen-to-square"
      ) {
        todo.removeAttribute("readonly");
        todo.focus();
        edit.firstChild.setAttribute("class", "fa-solid fa-floppy-disk");
      } else {
        todo.setAttribute("readonly", "readonly");
        edit.firstChild.setAttribute("class", "fa-solid fa-pen-to-square");
      }
    });
    if (todos_count > 0) {
      console.log(todos_count);
      todoinf_actions.style.display = "flex";
      todoinf_actions.style.alignItems = "center";
      todoinf_actions.style.justifyContent = "space-between";
      todoinf_actions.style.marginTop = "10px";
      infotodos.textContent = `you have ${todos_count} pending tasks`;
    }
  });
  // clear all elements
  clear_all.addEventListener("click", () => {
    console.log(todos);
    while (todos.firstChild) {
      todos.removeChild(todos.lastChild);
      todos_count = 0;
      todoinf_actions.style.display = "none";
    }
  });
});
