import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Forms/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import CountdownTimer from "./components/Timer/CountdownTimer";
import SearchList from "./components/Search/SearchList";

export default function App() {
  return (
    <div className="space-y-4 p-4">
      <TodoApp/>
      <UserForm/>
      <MultiProgressBar/>
      <CountdownTimer/>
      <SearchList/>
    </div>
  );
}
