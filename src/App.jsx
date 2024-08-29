import React, { useState } from 'react';

import './App.css';
import TaskInput from './Compononet/TaskInput';
import TaskList from './Compononet/TaskList';
import FilterButtons from './Compononet/FilterButtons';
import Notification from './Compononet/Notification';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState('');

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
    setMessage('Task added successfully!');
  };

  const toggleTaskCompleted = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    if (!tasks[index].completed) {
      setMessage('Task completed successfully!');
    }
  };

  const editTask = (index, newName) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newName } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>TodoMatic</h1>
      <Notification message={message} clearMessage={() => setMessage('')} />
      <TaskInput addTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        toggleTaskCompleted={toggleTaskCompleted} 
        editTask={editTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;
