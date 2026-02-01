export default function TodoItem({ todo, todos, setTodos }) {
  const toggle = () => {
    setTodos(todos.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="flex gap-2 mt-2">
      <input type="checkbox" checked={todo.completed} onChange={toggle}/>
      <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
    </div>
  );
}
