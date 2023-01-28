import './App.css';
import { TodoList } from './TodoList/TodoList';
import { TodoStore } from './TodoList/TodoStore'

function App() {
  return (
    <div className="App">
        <TodoList todoStore={TodoStore}/>
    </div>
  );
}

export default App;
