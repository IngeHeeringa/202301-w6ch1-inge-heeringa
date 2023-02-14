import { Button, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";
import "./Todo.css";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const { deleteTodo, toggleTodoIsDone } = useApi();

  return (
    <div className="todo">
      <div className="todo-name-wrapper">
        <Checkbox onClick={() => toggleTodoIsDone(todo)} />
        <span className="todo__name">{todo.name}</span>
      </div>
      <Button
        className="todo__delete-button"
        onClick={() => deleteTodo(todo.id)}
        variant="outlined"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};

export default Todo;
