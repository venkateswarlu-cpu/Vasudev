import { useState } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./FilterControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./todo.css";

  

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false,
      priority: "normal"
    }]);
    setText("");
  };

  const filtered = todos.filter(todo =>
    filter === "all" ? true :
    filter === "active" ? !todo.completed :
    todo.completed
  );

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">Todo App</h2>

      <input value={text} onChange={e => setText(e.target.value)}
        className="border p-2 mr-2"/>
      <button onClick={addTodo} className="bg-blue-500 text-white px-3">Add</button>

      <FilterControls setFilter={setFilter} />

      {filtered.map(todo =>
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
      )}
    </div>
  );
}
