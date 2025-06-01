import React from 'react';
import Task from './Task';

export default function TaskList({tasks, toggleTaskCompletion}) {
    return(
        <div>
            {tasks.map((task) => (
                <Task key={task.id} title={task.title} completed={task.completed} toggleTaskCompletion={() => toggleTaskCompletion(task.id)} />
            ))}
        </div>
    )
}

