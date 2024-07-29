import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";

const useTask = () => useContext(TasksContext);

export default useTask;
