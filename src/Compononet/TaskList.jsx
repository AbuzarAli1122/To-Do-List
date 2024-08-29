import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTaskCompleted, editTask, deleteTask }) => {
  return (
    <div className="task-list">
      <h2>{tasks.length} tasks remaining</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            index={index} 
            toggleTaskCompleted={toggleTaskCompleted} 
            editTask={editTask} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
