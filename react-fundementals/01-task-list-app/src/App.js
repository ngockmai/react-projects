import React, {useState} from 'react';
import './App.css';
import TaskList from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([{id:1, title: 'Learn React', completed: true},
    {id:2, title: 'Build a project', completed: false},
    {id:3, title: 'Learn Redux', completed: false},
    {id:4, title: 'Learn GraphQL', completed: false},
    {id:5, title: 'Learn Node.js', completed: false},
    {id:6, title: 'Learn MongoDB', completed: false},
    {id:7, title: 'Learn Express', completed: false},
    {id:8, title: 'Learn React Native', completed: false},])
  
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }
  return (
    <div className="App">
      <h1>Task List App</h1>
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion}/>
    </div>
  )
}