import { useState } from 'react';
import s from './styles.module.css';

export function UserForm({ addUser, setIsOpen }) {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthDate: '',
    phone: '',
    avatar: '',
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
    addUser(data);
  };

  return (
    <div className={s.overlay}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter firstname"
          value={data.firstname}
          name="firstname"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter lastname"
          value={data.lastname}
          name="lastname"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter email"
          value={data.email}
          name="email"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter birth date"
          value={data.birthDate}
          name="birthDate"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter phone"
          value={data.phone}
          name="phone"
          required
        />
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          placeholder="Enter URL avatar"
          value={data.avatar}
          name="avatar"
          required
        />
        <div className={s.buttons}>
          <button
            type="button"
            className={s.cancelBtn}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className={s.addBtn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
