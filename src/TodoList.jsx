import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
useEffect(()=>{
    axios.get('https://springboot-app-production-97cb.up.railway.app/todos')
    // axios.get('http://localhost:8080/todos')
    .then(response=>{
            setTodos(response.data)}).catch(error=>alert(error))
},[])
  const addTodo = (e) => {
  e.preventDefault();
  if (input.trim()) {
    const newTodo = {
      id: todos.length + 1,      // simple auto-increment
      title: input.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  }
};


  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Todo List</h2>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span>{todo.title}</span>
            <button onClick={() => removeTodo(idx)} style={{ background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
