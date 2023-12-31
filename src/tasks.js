const tasks = {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
    'task-4': { id: 'task-4', content: 'Task 4' },
    'task-5': { id: 'task-5', content: 'Task 5' },
};

const columns = {
    'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
        id: 'column-2',
        title: 'In Progress',
        taskIds: ['task-3'],
    },
    'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: ['task-4', 'task-5'],
    },
};

const initialData = {
    tasks,
    columns,
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;