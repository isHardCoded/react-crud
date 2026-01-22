import { useState, useEffect } from 'react';
import { TasksList } from '../../components/TasksList/TasksList';
import { TASK_SERVICE } from '../../services/TaskService'

export const TasksPage = () => {
  const [tasks, setTasks] = useState([])
  
  const getTasks = async () => {
      setTasks(await TASK_SERVICE.getAll());
    };
  
    useEffect(() => {
      getTasks();
    }, []);

  return (
    <>
      <TasksList tasks={tasks} />
    </>
  );
};
