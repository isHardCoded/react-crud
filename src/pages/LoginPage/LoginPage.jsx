import { useState } from 'react'
import { authService } from '../../services/AuthService'
import s from './styles.module.css'

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
      <h2>Login</h2>

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
          value={data.password}
          name="password"
          type="password"
          placeholder="Enter password"
        />

        <button>Sign In</button>
      </form>
    </>
  );
}