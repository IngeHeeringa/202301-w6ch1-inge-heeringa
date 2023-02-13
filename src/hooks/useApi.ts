import { useCallback } from "react";
import { loadTodosActionCreator } from "../store/features/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { TodosStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getTodos = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_API_URL!);

    const todos = (await response.json()) as TodosStructure;

    dispatch(loadTodosActionCreator(todos));
  }, [dispatch]);

  return { getTodos };
};

export default useApi;
