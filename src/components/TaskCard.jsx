import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

function TaskCard({ text }) {
  return (
    <div className='component-Task-Card'>
      <span>{text}</span>
    </div>
  );
}

TaskCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TaskCard;
