import { useCallback } from "react";
import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  loadTodosActionCreator,
  toggleTodoIsDoneActionCreator,
} from "../store/features/todos/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { TodosStructure, TodoStructure } from "../data/types";

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

  const createTodo = useCallback(
    async (todo: TodoStructure) => {
      await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(createTodoActionCreator(todo));
    },
    [dispatch]
  );

  const toggleTodoIsDone = useCallback(
    async (todo: TodoStructure) => {
      await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "PATCH",
        body: JSON.stringify({
          isDone: !todo.isDone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(toggleTodoIsDoneActionCreator(todo));
    },
    [dispatch]
  );

  return { getTodos, deleteTodo, createTodo, toggleTodoIsDone };
};

export default useApi;
