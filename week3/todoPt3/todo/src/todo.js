
function Todo({todo, deleteTodo, complete}){
    return(
        <li className="todo stack-small">
        <div className="checkItem">
          
          <input id={"todo-" + todo.id} type="checkbox" checked = { todo.isComplete } onChange={() => complete(todo.id)} />
          
          <span style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
          
          <label className="todo-label" htmlFor={"todo-" + todo.id}> {todo.text} </label> </span>
          
          <button className="deletebtn" onClick={() => deleteTodo(todo.id)}>X</button>
        
        </div>
      </li>
    )
  }
  
  export default Todo;