import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import todo from "./Todo"
//import { useState } from 'react';


function App() {
  const [todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
  }
  
  
  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add todo</button>
    <button>Clear completed</button>
    <div> 0 todos remaining</div>

      </>
  )

}

export default App;
