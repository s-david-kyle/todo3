import React, { Dispatch } from "react";
import { Task, TaskAction } from "../tasks/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
