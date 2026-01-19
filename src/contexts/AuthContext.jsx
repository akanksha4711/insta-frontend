import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(undefined);
const BASE_URL = "http://127.0.0.1:8000";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function login(email, password) {
    try {
    } catch (err) {
      console.log(err.message);
    }
  }

  async function signup(newUser) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {}

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
