import React from 'react';
import { Box } from '@mui/material';
import TaskListView from './TaskSection';
import DeletedTasksView from '../Sidebar/DeleteSection';
import RightSection from '../Sidebar/RightSection';

export default function ContentBody() {
    return (
        <Box display="flex" height="100vh">
            <Box flex={1} bgcolor="#f9f9f9" p={2}>
                <RightSection />
            </Box>
            <Box flex={2} p={2}>
                <TaskListView />
            </Box>
            <Box flex={1} bgcolor="#f9f9f9" p={2}>
                <DeletedTasksView />
            </Box>
        </Box>
    );
}
