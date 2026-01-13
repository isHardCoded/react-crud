import { useState, useEffect } from 'react';
import s from './App.module.css';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UserList/UserList';

const BASE_URL = 'http://localhost:3000/users';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getUsers() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function addUser(user) {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setUsers([data, ...users]);
    setIsOpen(false);
  }

  async function deleteUser(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>
      <h3 className={s.title}>Users</h3>
      <button className={s.addUserBtn} onClick={() => setIsOpen(true)}>
        Add user
      </button>
      {isOpen && <UserForm addUser={addUser} setIsOpen={setIsOpen} />}
      <UserList users={users} deleteUser={deleteUser} />
    </>
  );
};
