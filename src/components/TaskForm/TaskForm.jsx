import { useState } from 'react';
import s from './styles.module.css';

export const TaskForm = ({ addTask, setIsOpen }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    completed: false,
    userId: 'u001',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      title: data.title,
      description: data.description,
      completed: data.completed,
      userId: data.userId,
    });
    setIsOpen(false);
  };

  return (
    <div className={s.overlay}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter title"
          value={data.title}
          name="title"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter description"
          value={data.description}
          name="description"
          required
        />
        <div className={s.buttons}>
          <button onClick={() => setIsOpen(false)} className={s.cancel}>
            Cancel
          </button>
          <button type="submit" className={s.add}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
