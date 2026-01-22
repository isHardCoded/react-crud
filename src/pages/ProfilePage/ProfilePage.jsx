import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { USER_SERVICE } from '../../services/UserService';
import s from './styles.module.css';

export const ProfilePage = () => {
  const [user, setUser] = useState({});

  let { userId } = useParams();

  const getUser = async () => {
    setUser(await USER_SERVICE.getById(userId));
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <>
      <div className={s.card}>
        <img className={s.avatar} src={user.avatar} alt="" />

        <div>
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
      </div>
    </>
  );
};
