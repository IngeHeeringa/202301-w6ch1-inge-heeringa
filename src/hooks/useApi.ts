import { useCallback } from "react";
import { loadTodosActionCreator } from "../store/features/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { TodosStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getTodos = useCallback(async () => {
    const response = await fetch(
      "https://two02301-w6ch1-todos-api-inge-heeringa.onrender.com/todos"
    );

    const todos = (await response.json()) as TodosStructure;

    dispatch(loadTodosActionCreator(todos));
  }, [dispatch]);

  return { getTodos };
};

export default useApi;
