
import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const handleDescChange = (event) => {
	setTodo({ ...todo, desc: event.target.value });
  };

  const handleDateChange = (event) => {
	setTodo({ ...todo, date: event.target.value });
  };

  const handlePriorityChange = (event) => {
	setTodo({ ...todo, priority: event.target.value });
  };

  const addTodo = () => {
	if (todo.desc.trim() === "" || todo.date.trim() === "" || todo.priority.trim() === "") {
	  alert("Description, date, and priority are required!");
	  return;
	}

	setTodos([...todos, todo]);
	setTodo({ desc: "", date: "", priority: "" });
  };

  const handleDelete = () => {
    const selectedNodes = gridRef.current.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const selectedData = selectedNodes[0].data;
      setTodos(todos.filter(todo => todo !== selectedData));
    } else {
      alert("Select a row first!");
    }
  };

  const [columnDefs] = useState([
	{ field: "desc", sortable: false, filter: true },
	{ field: "priority", filter: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' } },
	{ field: "date", filter: true }
  ]);

  return (
	<>
	  <input
		placeholder="Description"
		onChange={handleDescChange}
		value={todo.desc}
	  />
	  <input
		placeholder="Priority"
		onChange={handlePriorityChange}
		value={todo.priority}
	  />
	  <input
		type="date"
		onChange={handleDateChange}
		value={todo.date}
	  />
	  <button onClick={addTodo}>Add</button>
	  <button onClick={handleDelete}>Delete</button>
	  <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
		<AgGridReact
		  ref={gridRef}
		  onGridReady={params => gridRef.current = params.api}
      columnDefs={columnDefs}
		  rowData={todos}
		  rowSelection="single"
		/>
	  </div>
	</>
  );
}

export default TodoList;