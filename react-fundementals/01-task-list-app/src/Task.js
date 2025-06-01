import React from 'react';

export default function Task({title, completed, toggleTaskCompletion}) {
    return(
        <div style={{
            margin: '10px', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '5px',
            backgroundColor: completed ? '#d4edda' : '#f8d7da',
            }}>
            <h3>{title}</h3>
            <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={toggleTaskCompletion}>Toggle Completion</button>
        </div>
    )
}