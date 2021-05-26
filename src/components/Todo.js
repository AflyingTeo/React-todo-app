import React from 'react';
import './Todo.css';

const Todo = ({ text, todo, todos,　setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completedHandler = () => {
        setTodos(
            todos.map((item) => {
                if(todo.id === item.id){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
    
                return item;
            })
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completedHandler} className="button-check">Completed</button>
            <button onClick={deleteHandler} className="button-trash">Trash</button>
        </div>
    );
}

export default Todo;