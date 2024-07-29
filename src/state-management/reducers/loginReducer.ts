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

export default loginReducer;
