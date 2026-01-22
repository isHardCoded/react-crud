import s from './styles.module.css';

export const TaskCard = ({ task }) => {
  return (
    <div className={s.card}>
      <header className={s.header}>
        <span className={s.status}>Done</span>
        <img src="" alt="" />
      </header>

      <div className={s.content}>
        <h3 className={s.title}>{task.title}</h3>
        <p className={s.description}>{task.description}</p>
      </div>

      <div className={s.details}>
        <p>Author</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};
