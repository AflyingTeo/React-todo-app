import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => (
                    <Todo 
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text} 
                        id={todo.id} 
                        key={index.toString()}
                        todo={todo}>

                    </Todo>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
