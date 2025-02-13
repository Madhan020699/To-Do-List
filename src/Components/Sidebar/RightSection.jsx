import { useTaskContext } from "../ContextProvider/TaskContextProvider";
import ToDoForm from "./ToDoForm";
import { Box, Typography } from '@mui/material';

export default function RightSection() {
    const { addTask } = useTaskContext();

    return (
        <Box style={styles.container}>
            <Typography variant="h5" style={styles.heading}>
                Create Task
            </Typography>

            <Box style={styles.formSection}>
                <ToDoForm addTask={addTask} />
            </Box>

            {/* <Box style={styles.filterSection}>
            </Box> */}
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
