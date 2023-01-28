import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { TodoStoreImpl } from './TodoStore';

interface TodoListProps {
    todoStore: TodoStoreImpl
}

export const TodoList: React.FC<TodoListProps> = observer(({todoStore}) => {
   const [value, setValue] = useState<string>(''); 
   const status = todoStore.status;

   return <div>
             <input
              value={value}
              type="text"
              onChange= {e => setValue(e.target.value)}
             />
             <button className="submit" onClick={() => {todoStore.addTodo(value); setValue('');}}>Submit</button>
           
             <h1>Todo List</h1>
             <h2>completed: {status.completed}</h2>
             <h2>remaining: {status.remaining}</h2>
             <ul>
                 {
                   todoStore.todos.map((todo) =>
                           <li key={todo.id} onClick={() => todoStore.toggleTodo(todo.id)}>
                             {todo.completed ? <span className='done'>Yes</span> : <span>No</span>} {todo.title}
                          </li>)
                 }
             </ul>
       </div>
});

