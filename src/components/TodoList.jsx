import React from 'react';
import "../scss/TodoList.scss";

function TodoList(props) {
    const { todos, onTodoClick } = props;
    console.log(todos, onTodoClick);

    function renderTodo() {
        return todos.map((todo) => (
            <li key={todo.id} onClick={() => handleClick(todo)}>{todo.title}</li>
        ))
    }

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todolist">
            {renderTodo()}
        </ul>
    );
}

export default TodoList;