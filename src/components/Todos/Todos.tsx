import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = () => {
  const { getTodos } = useApi();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const todos = useAppSelector((state) => {
    return state.todos;
  });

  return (
    <>
      <ul className="todos">
        {todos.map((todo) => (
          <li className="todos__todo" key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
