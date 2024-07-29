import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import loginReducer from "./state-management/reducers/loginReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
