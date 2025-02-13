import { Box, List, Typography } from '@mui/material';
import { useTaskContext } from '../ContextProvider/TaskContextProvider';
import TaskItems from './TaskItemsLayout';


export default function MiddleView() {

    const { tasks} = useTaskContext();

    return (
        <Box>
            <List style={{ height: "800px" , overflowY: "auto" }}>

                {tasks.length === 0 ?

                    <Typography sx={{ textAlign: 'center', color: 'gray', mt: 2 }}>
                        No tasks available
                    </Typography>

                    :

                    tasks.map((task) => (
                        <TaskItems task={task} listType={"taskView"} />
                    ))}
            </List>
        </Box>
    );
}
