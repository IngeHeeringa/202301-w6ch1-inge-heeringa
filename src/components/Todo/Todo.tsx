import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const { deleteTodo } = useApi();

  return (
    <>
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </>
  );
};

export default Todo;
