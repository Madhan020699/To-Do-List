import React from 'react';
import { Box, List, Typography } from '@mui/material';
import { useTaskContext } from '../ContextProvider/TaskContextProvider';
import TaskItems from '../MiddleView/TaskItemsLayout';

export default function DeletedTasksView() {

    const { deletedTasks} = useTaskContext();

    return (
        <Box style={styles.container}>
            <Typography variant="h5" style={styles.heading}>
                Deleted Task
            </Typography>

            <Box style={styles.formSection}>
                <List>
                    {deletedTasks.length === 0 ?

                        <Typography sx={{ textAlign: 'center', color: 'gray', mt: 2 }}>
                            No tasks available 
                        </Typography>

                        :

                        deletedTasks.map((task) => (
                            <TaskItems task={task} listType={"delete"} />
                        ))}
                </List>
            </Box>
        </Box>



    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: '#f5f5f5'
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    formSection: {
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: "700px",
        overflowY: "auto" 
    },
    filterSection: {
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
    },
};

