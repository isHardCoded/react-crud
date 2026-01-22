import { TaskCard } from '../TaskCard/TaskCard';

export const TasksList = ({ tasks }) => {
  return (
    <>
      {tasks.length !== 0 ? (
        <ul className={s.list}>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notFound}>Tasks not found</p>
      )}
    </>
  );
};
