// 1. Selectores
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// 2. Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// 3. Funciones

function addTodo(event) {
    // Evitar que el formulario recargue la página (comportamiento por defecto)
    event.preventDefault();

    // Validar que no esté vacío
    if (todoInput.value === "") return;

    // --- CREACIÓN DEL HTML DINÁMICO ---
    
    // a) Crear el DIV principal de la tarea
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // b) Crear el LI con el texto
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); // Metemos el li dentro del div

    // c) Crear botón de COMPLETADO (Check)
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // d) Crear botón de ELIMINAR (Trash)
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // e) AGREGAR TODO A LA LISTA REAL (UL)
    todoList.appendChild(todoDiv);

    // f) Limpiar el input
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target; // ¿Qué elemento fue clickeado?

    // SI CLICKEAMOS EL BOTÓN DE BORRAR
    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement; // Seleccionamos el padre (el div .todo)
        
        // Animación antes de borrar
        todo.classList.add("fall");
        
        // Esperamos a que termine la animación para eliminarlo del HTML
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    // SI CLICKEAMOS EL BOTÓN DE COMPLETAR
    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}