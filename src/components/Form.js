import React from 'react';
import './Form.css';

const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" />
            <button onClick={submitHandler} className="todo-button" type="submit">ADD</button>
            <div className="select">
                <select onChange={statusHandler} className="filter-todos" name="todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;