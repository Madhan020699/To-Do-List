import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [deletedTasks, setDeletedTasks] = useState([]);

    console.log("tasks",tasks);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("to-do-list")) || [];
        const storedDeletedTasks = JSON.parse(localStorage.getItem("deleted-tasks")) || [];
        setTasks(storedTasks);
        setDeletedTasks(storedDeletedTasks);
    }, []);

    useEffect(() => {
        if (tasks.length || deletedTasks.length) { 
            localStorage.setItem("to-do-list", JSON.stringify(tasks));
            localStorage.setItem("deleted-tasks", JSON.stringify(deletedTasks));
        }
    }, [tasks, deletedTasks]);


    const addTask = (newCreatedTask) => {
        const updatedTask = sortTheTask([...tasks,...newCreatedTask]);
        setTasks(updatedTask);
        localStorage.setItem("to-do-list", JSON.stringify(updatedTask)); 
    };


    const deleteTask = (id) => {
        const taskToDelete = tasks.find((task) => task.id === id);
        if (taskToDelete) {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            const updatedDeletedTasks = [...deletedTasks, taskToDelete];

            setTasks(updatedTasks);
            setDeletedTasks(sortTheTask(updatedDeletedTasks));


            localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
            localStorage.setItem("deleted-tasks", JSON.stringify(updatedDeletedTasks));
        }
    };

    const restoreTask = (id) => {

        const taskToRestore = deletedTasks.find((task) => task.id === id);
        if (taskToRestore) {
            const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
            const updatedTasks = [...tasks, taskToRestore];

            setDeletedTasks(updatedDeletedTasks);
            setTasks(sortTheTask(updatedTasks));
            localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
            localStorage.setItem("deleted-tasks", JSON.stringify(updatedDeletedTasks));
        }

    };


    const toggleTaskStatus = (id) => {

        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: !task.status } : task
        );
        setTasks(sortTheTask(updatedTasks));
        localStorage.setItem("to-do-list", JSON.stringify(updatedTasks)); 

    };

    const sortTheTask = (updatedTasks) => {
        const priorityMap = {
            'high': 1,
            'medium': 2,
            'low': 3
        };
    
        return updatedTasks.sort((taskPrev, taskNext) => {
            if (taskPrev.status !== taskNext.status) {
                return taskPrev.status - taskNext.status;
            } else if (taskPrev.status === 0 && taskNext.status === 0) {
                return priorityMap[taskPrev.priority] - priorityMap[taskNext.priority];
            }
            return 0; 
        });          
    }
    
    

    return (
        <TaskContext.Provider value={{ tasks, deletedTasks, addTask, deleteTask, restoreTask, toggleTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};
