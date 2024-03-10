import { useState } from 'react';
import { nanoid } from "nanoid";
import { Task } from '../../components/Task';

export const useTaskManager = () => {
 const [tasks, setTasks] = useState<Task[]>([]);
 const [searchKeyword, setSearchKeyword] = useState<string>("");

 const addTask = (title: string) => {
    if (title.length < 1) {
      return;
    }

    const newTask: Task = {
      id: nanoid(),
      title,
    };
    setTasks((prev) => [...prev, newTask]);
 };

 const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
 };

 const updateTask = (id: string, updatedTask: Task) => {
    setTasks((prev) => prev.map((task) => task.id === id ? updatedTask : task));
 };

 const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
 );

 return {
    tasks: filteredTasks,
    addTask,
    deleteTask,
    updateTask,
    searchKeyword,
    setSearchKeyword,
 };
};