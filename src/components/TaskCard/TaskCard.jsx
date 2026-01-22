import { useState, useEffect } from 'react';
import { USER_SERVICE } from '../../services/UserService';

import s from './styles.module.css';
import { useNavigate } from 'react-router';



export const TaskCard = ({ task }) => {
  const [user, setUser] = useState({});
  const [assigneesUsers, setAssigneesUsers] = useState([]);

  const navigate = useNavigate();

  const { assignees } = task

  const getUser = async () => {
    const id = task.userId;
    setUser(await USER_SERVICE.getById(id));
  };

  const getAssignees = async () => {
    const usersData = await Promise.all(
      assignees.map((assignee) => USER_SERVICE.getById(assignee.userId))
    );
    setAssigneesUsers(usersData);
  };

  useEffect(() => {
    getUser();
    getAssignees();
  }, []);

  return (
    <div
      onClick={() => {
        navigate(`/task/${task.id}`);
      }}
      className={s.card}
    >
      <header className={s.header}>
        <span className={task.completed ? s.done : s.inProgress}>
          {task.completed ? 'Done' : 'In Progress'}
        </span>
        <button className={s.tooltipBtn}>
          <img src="icons/more.svg" alt="" />
        </button>
      </header>

      <div className={s.content}>
        <h3 className={s.title}>{task.title}</h3>
        <p className={s.description}>{task.description}</p>
      </div>

      <div className={s.details}>
        <div className={s.author}>
          <p>Author</p>
          <img className={s.avatar} src={user.avatar} alt="" />
        </div>

        <div className={s.assignees}>
          <p>Assignees</p>
          <div className={s.avatarsList}>
            {assigneesUsers.map((assigneeUser) => (
              <img
                key={assigneeUser.id}
                className={`${s.avatar} ${s.assignee}`}
                src={assigneeUser.avatar}
                alt={`${assigneeUser.firstname} ${assigneeUser.lastname}`}
                title={`${assigneeUser.firstname} ${assigneeUser.lastname}`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
