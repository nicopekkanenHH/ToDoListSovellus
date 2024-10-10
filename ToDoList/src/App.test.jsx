import TodoList from './ToDoList';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

test('add todo and clear todos', async () => {
  render(<TodoList />);

  
  const desc = screen.getByLabelText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const priority = screen.getByLabelText("Priority");
  fireEvent.change(priority, { target: { value: "High" } });
  const date = screen.getByLabelText("Select Date");
  fireEvent.change(date, { target: { value: "01/29/2023" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Go to coffee")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Clear"));
  expect(screen.queryByText("Go to coffee")).not.toBeInTheDocument();
});