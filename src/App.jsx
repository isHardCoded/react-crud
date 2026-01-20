import { useState, useEffect } from 'react';
import s from './App.module.css';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UserList/UserList';
import { USER_SERVICE } from './services/UserService';
import { Header } from './components/Header/Header';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getUsers = async () => {
    setUsers(await USER_SERVICE.get())
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function addUser(user) {
    const data = await USER_SERVICE.post(user)
    
    setUsers([data, ...users]);
    setIsOpen(false);
  }

  async function deleteUser(id) {
    await USER_SERVICE.delete(id)
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>
      <Header />
      <main>
        <h3 className={s.title}>Users</h3>
        <button className={s.addUserBtn} onClick={() => setIsOpen(true)}>
          Add user
        </button>
        {isOpen && <UserForm addUser={addUser} setIsOpen={setIsOpen} />}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
    </>
  );
};
