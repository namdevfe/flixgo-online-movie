import { AUTH_TYPE } from "@/constants/general";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [isShowAuthForm, setIsShowAuthForm] = useState(AUTH_TYPE.LOGIN);
  const handleShowAuthForm = (authType) => {
    setIsShowAuthForm(authType);
  };

  return (
    <AuthContext.Provider value={{ isShowAuthForm, handleShowAuthForm }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
