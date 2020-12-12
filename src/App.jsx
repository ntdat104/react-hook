import React, { useState } from 'react';
// import ColorBox from "./components/ColorBox";
import TodoList from './components/TodoList';

import "./App.scss";

const todos = [
  { id: 1, title: "Do homework !!!" },
  { id: 2, title: "Play soccer !!!" },
  { id: 3, title: "Study react-hook !!!" }
]

const handleTodoClick = (todo) => {
  console.log(todo);
}

function App() {
  const [todoList] = useState(todos);
  return (
    <div>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;