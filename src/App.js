import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State hooks
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //UseEffect hooks
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //Save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
  return (
    <div className="App">
      <header>
        <h1>TO DO APP</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      >
      </Form>
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
        setTodos={setTodos}>
      </TodoList>
    </div>
  );
}

export default App;
