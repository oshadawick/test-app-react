import React from 'react';
import PropTypes from 'prop-types';
import './TaskArea.css';
import TaskCard from './TaskCard';

function TaskArea({ list }) {
  const date = new Date();

  return (
    <div className='component-Task-Area'>
      <span className='date'>
        Today &gt;
        {date.getDate()}
      </span>
      <div className='task-list'>
        {list.map((note) => (
          <TaskCard text={note} />
        ))}
      </div>
    </div>
  );
}

TaskArea.propTypes = {
  list: PropTypes.any.isRequired,
};

export default TaskArea;
