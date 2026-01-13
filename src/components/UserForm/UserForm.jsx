import { useState } from 'react';
import s from './styles.module.css';

export function UserForm({ addUser, setIsOpen }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({
      firstname,
      lastname: lastname,
      email: email,
      birthDate: birthDate,
      phone: phone,
      avatar: avatar,
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setBirthDate('');
    setPhone('');
    setAvatar('');
  };

  return (
    <div className={s.overlay}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter firstname"
          value={firstname}
          required
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter lastname"
          value={lastname}
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter email"
          value={email}
          required
        />
        <input
          onChange={(e) => setBirthDate(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter birth date"
          value={birthDate}
          required
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter phone"
          value={phone}
          required
        />
        <input
          onChange={(e) => setAvatar(e.target.value)}
          className={s.input}
          type="text"
          placeholder="Enter URL avatar"
          value={avatar}
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
