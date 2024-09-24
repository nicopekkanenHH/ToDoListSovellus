function TodoTable({ todos, deleteTodo }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem, index) => (
            <tr key={index}>
              <td>{todoItem.description}</td>
              <td>{todoItem.date}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default TodoTable;