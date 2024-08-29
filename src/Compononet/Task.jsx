import React, { useState } from 'react';

const Task = ({ task, index, toggleTaskCompleted, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTaskCompleted(index)} 
      />
      {isEditing ? (
        <input 
          type="text" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
      ) : (
        <span>{task.name}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default Task;
