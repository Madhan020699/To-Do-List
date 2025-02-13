import { ListItem, IconButton, ListItemText, Chip, Checkbox } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskContext } from '../ContextProvider/TaskContextProvider';

// Priority Color Logic
const getPriorityColor = (priority) => {
    switch (priority) {
        case 'High':
            return 'error';    // Red
        case 'Medium':
            return 'warning';  // Orange
        case 'Low':
            return 'success';  // Green
        default:
            return 'default';
    }
};

export default function TaskItems({ task, listType}) {

    const {deleteTask, toggleTaskStatus, restoreTask } = useTaskContext();

    return (
        <ListItem
            key={task.id}
            sx={{ 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                mb: 1, 
                p: 1.5,
                width : '100%' 
            }}
            secondaryAction={
                listType === 'delete' ? (
                    <IconButton edge="end" onClick={() => restoreTask(task.id)}>
                        <RestoreIcon />
                    </IconButton>

                ) : (

                    <IconButton edge="end" onClick={() => deleteTask(task.id)}>
                        <DeleteIcon />
                    </IconButton>
                )
            }
        >
            {/* Show checkbox if not in 'delete' mode */}
            {listType !== 'delete' && (
                <Checkbox
                    checked={task.status}
                    disabled={task.status}
                    onChange={() => toggleTaskStatus(task.id)}
                />
            )}

            <ListItemText
                primary={task.title}
                secondary={
                    <>
                        <div>{task.description || "No description provided"}</div>
                        <div>Due Date: {task.dueDate}</div>
                        <Chip 
                            label={task.priority} 
                            color={getPriorityColor(task.priority)} 
                            size="small" 
                            sx={{ mt: 0.5 }} 
                        />
                    </>
                }
            />
        </ListItem>
    );
}
