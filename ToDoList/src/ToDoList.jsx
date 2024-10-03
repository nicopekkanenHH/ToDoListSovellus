
import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
	<Stack 
	 mt={2} 
	direction="row" 
	spacing={2}
	justifyContent="center" 
  alignItems="center"
  >
	  <TextField 
      label="Description" 
      onChange={e => setTodo({...todo, desc: e.target.value })} 
      value={todo.desc} />
    <TextField
      label="Priority" 
      onChange={e => setTodo({...todo, priority: e.target.value })} 
      value={todo.priority} /> 
    <TextField
      label="Date" 
      onChange={e => setTodo({...todo, date: e.target.value })} 
      value={todo.date} />
	  <Button variant="contained" color="success" onClick={addTodo}>Add</Button>
	  <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
	  </Stack>
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