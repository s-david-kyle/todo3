import { Dispatch } from "react";
import { LoginAction } from "../reducers/loginReducer";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<LoginAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
