import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Task from "../Task/Task";

const Tasks = () => {
  const { getTodos } = useApi();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const todos = useAppSelector((state) => {
    return state.todos;
  });

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
