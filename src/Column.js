import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './Column.css';

function Column({ column, tasks, index }) {
    return (
        <div className="column-cards">
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}className="task-card"
                        style={{
                            background: 'lightgrey',
                            padding: 8,
                            width: 250,
                            minHeight: 500,
                        }}
                    >
                        {tasks.map((task, taskIndex) => (
                            <Task key={task.id} task={task} index={taskIndex} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default Column;