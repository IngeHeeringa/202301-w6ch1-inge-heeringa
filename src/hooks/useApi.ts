import { useCallback } from "react";
import {
  deleteTodoActionCreator,
  loadTodosActionCreator,
} from "../store/features/todos/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { TodosStructure } from "../data/types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getTodos = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);

    const todos = (await response.json()) as TodosStructure;

    dispatch(loadTodosActionCreator(todos));
  }, [dispatch]);

  const deleteTodo = useCallback(
    async (id: number) => {
      await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: "DELETE",
      });

      dispatch(deleteTodoActionCreator(id));
    },
    [dispatch]
  );

  return { getTodos, deleteTodo };
};

export default useApi;
