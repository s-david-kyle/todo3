import { useContext } from "react";
import TasksContext from "./tasksContext";

const useTask = () => useContext(TasksContext);

export default useTask;
