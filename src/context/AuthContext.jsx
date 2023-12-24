import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthentication] = useState(false);

  const loginAuth = () => {
    setIsAuthentication(true);
  };

  const logoutAuth = () => {
    setIsAuthentication(false);
  };
  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
