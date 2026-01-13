import { UserCard } from '../UserCard/UserCard';
import s from './styles.module.css';

export function UserList({ users, deleteUser }) {
  return (
    <>
      {users.length !== 0 ? (
        <ul className={s.list}>
          {users.map((user) => (
            <li>
              <UserCard user={user} deleteUser={deleteUser} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notFound}>Users not found</p>
      )}
    </>
  );
}
