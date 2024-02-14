import React from "react";

const TodoList = ({todos, handleComplete}) => {

    return (
        <div>
            <h3>Child Component</h3>
            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <li key={index}>{todo.title} {!todo.isComplete && <button onClick={() => handleComplete(todo.id)}>Complete</button>}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;

