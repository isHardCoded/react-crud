import { useState, useEffect } from 'react';
import { USER_SERVICE } from '../../services/UserService';

import s from './styles.module.css';

export const TaskCard = ({ task, deleteTask }) => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const id = task.userId;
    setUser(await USER_SERVICE.getById(id));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={s.card}>
      <header className={s.header}>
        <span className={task.completed ? s.done : s.inProgress}>
          {task.completed ? 'Done' : 'In Progress'}
        </span>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <img src="icons/more.svg" alt="" />
        </button>
      </header>

      <div className={s.content}>
        <h3 className={s.title}>{task.title}</h3>
        <p className={s.description}>{task.description}</p>
      </div>

      <div className={s.details}>
        <p>Author</p>
        <img className={s.avatar} src={user.avatar} alt="" />
      </div>
    </div>
  );
};
