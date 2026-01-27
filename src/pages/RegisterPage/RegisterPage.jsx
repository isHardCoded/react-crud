import { useState } from 'react'
import { authService } from '../../services/AuthService'
import s from './styles.module.css'
import { useNavigate } from 'react-router'

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
      <h2>Register</h2>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 300,
          gap: 15,
        }}
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          value={data.username}
          name="username"
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={handleChange}
          value={data.email}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <input
          onChange={handleChange}
          value={data.password}
          name="password"
          type="password"
          placeholder="Enter password"
        />

        <button>Sign Up</button>
      </form>
    </>
  );
}