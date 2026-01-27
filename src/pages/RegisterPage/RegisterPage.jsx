import { useState } from 'react'
import { authService } from '../../services/AuthService'
import s from './styles.module.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

export const RegisterPage = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await authService.register(data)
    navigate('/login')
  }
  
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <h2 className={s.title}>Create new account</h2>
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
          value={data.email}
          name="email"
          type="email"
          placeholder="Enter email"
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
        <Link to={'/login'} className={s.link}>
          Have an account?
        </Link>
      </form>
    </>
  );
}