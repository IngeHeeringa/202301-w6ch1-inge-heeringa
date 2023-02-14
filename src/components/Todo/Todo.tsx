import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo: { id, name } }: TodoProps): JSX.Element => {
  const { deleteTodo } = useApi();

  return (
    <>
      <span className="todo__name">{name}</span>
      <button className="todo__delete-button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </>
  );
};

export default Todo;
