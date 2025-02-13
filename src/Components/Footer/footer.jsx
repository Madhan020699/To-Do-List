import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./footer.css";

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#7b1fa2" }}>
                <List>
                    <ListItem>
                        <ListItemText primary="© 2025 To-Do List App. All Rights Reserved." sx={{ color: '#fff', textAlign: 'center' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Developed for Spritle Software" sx={{ color: '#fff', textAlign: 'center' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Powered by Madhan Kumar B " sx={{ color: '#fff', textAlign: 'center' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Designed for Productivity" sx={{ color: '#fff', textAlign: 'center' }} />
                    </ListItem>
                </List>
            </AppBar>
        </Box>
    );
}
