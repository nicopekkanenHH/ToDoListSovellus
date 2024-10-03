import { useState } from 'react'

import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from "./ToDoList";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>  
        </Toolbar>
      </AppBar>
    <TodoList />
    </Container>
  );
}

export default App
