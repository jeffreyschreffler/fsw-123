import { useState } from 'react';
import { todos as data } from './STORE';
import ToDoList from'./ToDoList';
import './App.css';

function App(){
  const [todos, setToDo] = useState(data);

  const completeTodo = id => {
    const tempTodo = [...todos];
    const index = tempTodo.findIndex(todos => todos.id === id);
    console.log(index)
    tempTodo[index].isComplete = !tempTodo[index].isComplete;
    setToDo(tempTodo);
  }
  const deleteTodo = id => {
    const tempTodo = [...todos];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    console.log(newTodos)
    setToDo(newTodos);
  }
  return(
    <div>
    < ToDoList todos = {todos} key={todos.id} deleteTodo={deleteTodo} complete={completeTodo}/>
    </div>
  )
}

export default App;