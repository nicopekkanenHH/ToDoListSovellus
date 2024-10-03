import { useState } from 'react'

import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from "./ToDoList";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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

<Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Home" />
        <Tab label="Todolist" />
      </Tabs>

      {selectedTab === 0 && (
        <Box mt={3}>
          <Typography variant="h4" align="center">
            Welcome to the Todo App!
          </Typography>
          <Typography variant="body1" mt={2} align="center">
            This is the home page where you can manage your tasks efficiently.
          </Typography>
        </Box>
      )}
      
      {selectedTab === 1 && (
        <Box mt={3}>
          <TodoList />
        </Box>
      )}
    </Container>
  );
}

export default App
