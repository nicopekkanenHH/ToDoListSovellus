
import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);


  const handleDescChange = (event) => {
    setTodo({ ...todo, description: event.target.value }); 
  };

  const handleDateChange = (event) => {
    setTodo({ ...todo, date: event.target.value }); 
  };

  const addTodo = () => {
    if (todo.description.trim() === "" || todo.date.trim() === "") {
        alert("Both description and date are required!");
        return;
      }
   
      setTodos([...todos, todo]);
      
    setTodo({ description: "", date: "" });
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
        <button onClick={addTodo}>Add</button>
  
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </>
    );
  }
  
  export default TodoList;