import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
//import todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
//import { useState } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
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
