import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/AuthService";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  const register = async (user) => {
    setLoading(true)

    try {
      await authService.register(user)
      return { success: true }
    } catch(error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const login = async (user) => {
    setLoading(true)

    try {
      const data = await authService.login(user)
      setToken(data.token)
      setUser(data.user.username)
      return { success: true }
    } catch(error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  return <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)