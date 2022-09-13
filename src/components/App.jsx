import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TextInput from './TextInput';
import TaskArea from './TasksArea';

function App() {
  const [note, setNote] = useState([]);
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = note.concat([text]);
    setNote(arr);
  };

  return (
    <div>
      <Header />
      <TextInput change={handleChange} submit={handleSubmit} />
      <TaskArea list={note} />
    </div>
  );
}

export default App;
