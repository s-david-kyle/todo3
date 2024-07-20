import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";
import { Todo } from "./useTodos";

interface addTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const apiClient = new APIClient<Todo>("/todos");

  return useMutation<Todo, Error, Todo, addTodoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
