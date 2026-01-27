import { useState } from 'react'
import { authService } from '../../services/AuthService'
import s from './styles.module.css'
import { Link } from 'react-router'

export const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await authService.login(data);
    console.log(response)
  }
  
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
              <h2 className={s.title}>Welcome back!</h2>
              <input
                className={s.input}
                onChange={handleChange}
                value={data.username}
                name="username"
                type="text"
                placeholder="Enter username"
                required
              />
              <input
                className={s.input}
                onChange={handleChange}
                value={data.password}
                name="password"
                type="password"
                placeholder="Enter password"
                required
              />
      
              <button className={s.button}>Sign Up</button>
              <Link to={'/register'} className={s.link}>
                Create account
              </Link>
            </form>
    </>
  );
}