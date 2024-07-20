import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const apiClient = new APIClient<Todo>("/todos");

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
  });
};

export default useTodos;
