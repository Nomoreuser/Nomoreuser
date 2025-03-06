// Function to show sections (for navigation)
function showSection(sectionId) {
    alert(`Navigating to ${sectionId} section...`);
  }
  
  // Function to handle logout
  function logout() {
    alert("Logging out...");
    // Redirect to login page or perform logout logic
    window.location.href = "Exit";
  }
  
  // Function to add a new to-do item
  function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    if (todoInput.value.trim() !== "") {

      const newTodo = document.createElement("li");
      newTodo.id = "todo-item";

      newTodo.textContent = todoInput.value;

      todoList.prepend(newTodo);
      
      todoInput.value = ""; // Clear input
    } else {
      alert("Please enter a task!");
    }
  }