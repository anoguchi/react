import * as React from 'react';

function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 1000),
    label,
    completed: false
  }
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = React.useState('');

  const handUpdateLabel = (e) => setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label)
    handleAddTodo(todo)
    setLabel('')
  }

  return (
    <li>
      <input placeholder='Add a new todo' type="text" value={label} onChange={handUpdateLabel} />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>Add Todo</button>
    </li>
  )
}