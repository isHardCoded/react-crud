import { useState, useEffect } from 'react';
import { TasksList } from '../../components/TasksList/TasksList';
import { TASK_SERVICE } from '../../services/TaskService'

import s from './styles.module.css'
import { TaskForm } from '../../components/TaskForm/TaskForm';

export const TasksPage = () => {
  const [tasks, setTasks] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  
  const getTasks = async () => {
      setTasks(await TASK_SERVICE.getAll());
    };
  
    useEffect(() => {
      getTasks();
    }, []);

  const addTask = async (task) => {
    const newTask = await TASK_SERVICE.create(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) => {
    await TASK_SERVICE.deleteById(id)
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className={s.actions}>
        <input className={s.search} type="text" placeholder='Search...' />
        <button className={s.add} onClick={() => setIsOpen(true)}>Add</button>
      </div>
      <TasksList tasks={tasks} deleteTask={deleteTask} />
      {isOpen && <TaskForm addTask={addTask} setIsOpen={setIsOpen} setTasks={setTasks} />}
    </>
  );
};
