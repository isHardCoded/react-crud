import { useState, useEffect } from 'react';
import s from './styles.module.css';
import { UserList } from '../../components/UserList/UserList';
import { USER_SERVICE } from '../../services/UserService';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setUsers(await USER_SERVICE.get());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
        <UserList users={users} />
    </>
  );
};
