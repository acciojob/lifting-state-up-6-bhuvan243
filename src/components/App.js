
// import React, {useState} from "react";
// import './../styles/App.css';
// import TodoList from "./TodoList";



// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       title : "Learn React",
//       id : "learn",
//       isComplete : false
//     },
//     {
//       title : "Build a React app",
//       id : "build",
//       isComplete : false
//     },
//     {
//       title : "Deploy the React app",
//       id : "deploy",
//       isComplete : false
//     }
//   ])
//   function handleComplete(todoItemId){
//     const updatedTodos = todos.map(
//       (todo) => (todo.id === todoItemId) ? {...todo, isComplete: true} : todo
//     )
//     setTodos(updatedTodos);
//   }
//     return (
//         <>
//             <h1>Parent Component</h1>
//             <TodoList todos={todos} handleComplete={handleComplete}/>
//         </>
//     )
// }

// export default App

import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initial state of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false }
   
  ]);

  // Function to mark a todo as completed
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;