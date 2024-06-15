import * as React from "react";

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [completed, setCompleted] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditClick = () => setEditing(!editing);
  const handleUpdateLabel = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  console.log("Editando: ", editing);
  console.log("Completo: ", todo.completed);
  return (
    <li>
      <label htmlFor={todo.id}>
        <div>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={handleCheckboxClick}
            />
            <span />
            {editing === true ? (
              <input
                type="text"
                value={todo.label}
                onChange={handleUpdateLabel}
              />
            ) : (
              <span>{todo.label}</span>
            )}
          </label>
          <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
          {!editing && <button onClick={handleDeleteClick}>Delete</button>}
        </div>
      </label>
    </li>
  );
}
