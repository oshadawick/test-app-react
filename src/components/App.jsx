import React from 'react';
import './App.css';
import Header from './Header';
import TextInput from './TextInput';
import TaskArea from './TasksArea';

function App() {
  return (
    <div>
      <Header />
      <TextInput />
      <TaskArea />
    </div>
  );
}

export default App;
