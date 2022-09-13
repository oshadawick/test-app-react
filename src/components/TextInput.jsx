import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

function TextInput({ change, submit }) {
  return (
    <div className='component-Text-Input'>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='add a plan to the list'
          onChange={change}
        />
      </form>
    </div>
  );
}

TextInput.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default TextInput;
