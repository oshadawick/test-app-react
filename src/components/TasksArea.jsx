import React from 'react';
import './TaskArea.css';
import TaskCard from './TaskCard';

function TaskArea() {
  return (
    <div className='component-Task-Area'>
      <span className='date'>Today &gt; 21 june</span>
      <div className='task-list'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default TaskArea;
