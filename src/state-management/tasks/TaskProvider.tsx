import { ReactNode, useReducer } from "react";
import tasksReducer from "./tasksReducer";
import TasksContext from "./tasksContext";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
