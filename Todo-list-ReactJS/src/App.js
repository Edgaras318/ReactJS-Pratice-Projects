import React, {useState} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {
  const [state, setState] = useState({
    todos : [
    {id: 1, content: 'buy some milk'},
    {id: 2, content: 'play mario kart'}
  ]
});

  const deleteTodo = id => {
    const todos = state.todos.filter(todo => {
      return todo.id !== id
    });
      setState({
        todos
    })
  }

  const addTodos = todo => {
    todo.id = Math.random();
    let todos = [...state.todos, todo];
    setState({
      todos
    })
  }
  return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
    <Todos todos={state.todos} deleteTodo={deleteTodo}/>
    <AddTodo addTodos={addTodos}/>
    </div>
  );
}


export default App;
