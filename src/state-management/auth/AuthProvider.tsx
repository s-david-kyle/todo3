import React, { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Action {
  type: "LOGIN" | "LOGOUT";
}

interface LiginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type LoginAction = LiginAction | LogoutAction;

const loginReducer = (state: string, action: LoginAction): string => {
  if (action.type === "LOGIN") {
    return action.userName;
  }
  if (action.type === "LOGOUT") {
    return "";
  }
  return state;
};

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
