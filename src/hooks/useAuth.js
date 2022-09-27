import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();
//const [isLoggedIn, setisLoggedIn] = useState(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const logIn = () => {
    setUser(true);
  };
  const logOut = () => {
    setUser(false);
  };

  const navigate = useNavigate();
  console.log(user)
  const login = async (data) => {
    setUser(data);
    navigate("/mydesk", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
