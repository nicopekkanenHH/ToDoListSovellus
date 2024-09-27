
import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);


  const handleDescChange = (event) => {
    setTodo({ ...todo, description: event.target.value }); 
  };

  const handleDateChange = (event) => {
    setTodo({ ...todo, date: event.target.value }); 
  };

  const handlePriorityChange = (event) => {
    setTodo({ ...todo, priority: event.target.value });
  };

  const addTodo = () => {
    if (todo.description.trim() === "" || todo.date.trim() === "") {
        alert("Both description, date and priority are required!");
        return;
      }
   
      setTodos([...todos, todo]);
      
    setTodo({ description: "", date: "", priority: "" });
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

    return (
        <>
        <input
          placeholder="Description"
          onChange={handleDescChange}
          value={todo.description}
        />
        <input
          type="date"
          onChange={handleDateChange}
          value={todo.date}
        />
        <input
        placeholder="Priority"
        onChange={handlePriorityChange}
        value={todo.priority}
      />
        <button onClick={addTodo}>Add</button>
  
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </>
    );
  }
  
  export default TodoList;