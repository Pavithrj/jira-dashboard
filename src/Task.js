import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css';

function Task({ task, index }) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="task-card"
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    );
}

export default Task;