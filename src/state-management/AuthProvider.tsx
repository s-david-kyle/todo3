import React, { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import AuthContext from "./contexts/authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
