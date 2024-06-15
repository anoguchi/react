import * as React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";


function TodoList() {
  const [todos, setTodo] = React.useState([
    { id: 1, label: "Buy milk", completed: false },
    { id: 2, label: "Buy chocolate", completed: false },
    { id: 3, label: "Buy coffe", completed: false }
  ]);

  const handleUpdateTodo = (updateTodo) => {
    const newTodos = todos.map((todo) => 
      todo.id === updateTodo.id ? updateTodo : todo
    )
    setTodo(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  }

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo]
    setTodo(newTodos)
  }

  return (
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList;
