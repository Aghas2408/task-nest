import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface AppContextInterface {
  user: any;
  setUser: () => void;
}

const AuthContext = createContext<AppContextInterface | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
    }),
    // eslint-disable-next-line
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
