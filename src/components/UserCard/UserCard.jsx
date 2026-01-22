import s from './styles.module.css';
import { useNavigate } from 'react-router';

export function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/profile/${user.id}`);
      }}
      className={s.card}
    >
      <img className={s.avatar} src={user.avatar} alt="" />

      <div className={s.content}>
        <p className={s.name}>
          {user.firstname} {user.lastname}
        </p>
        <p className={s.email}>{user.email}</p>
      </div>

      <div className={s.actions}>
        <div>
          <p className={s.birth}>{user.birthDate}</p>
          <p className={s.phone}>{user.phone}</p>
        </div>
      </div>
    </div>
  );
}
