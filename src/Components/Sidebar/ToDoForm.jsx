import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import { v4 as uuidv4} from 'uuid';


const ToDoForm = ({ addTask }) => {

    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.title.trim() !== '') {
            addTask([{...task,...{id : uuidv4(), status : false, taskCreatedDate : new Date().getDate()}}]);
            setTask({ title: '', description: '', dueDate: '', priority: 'Medium' });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6">Add New Task</Typography>

            <TextField
                label="Title"
                name="title"
                value={task.title}
                onChange={handleChange}
                variant="outlined"
                required
            />

            <TextField
                label="Description"
                name="description"
                value={task.description}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={3}
            />

            <TextField
                label="Due Date"
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
            />

            <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    label="Priority"
                >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="secondary">
                Add Task
            </Button>
        </Box>
    );
};

export default ToDoForm;
