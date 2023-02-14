import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";
import "./Todo.css";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo: { id, name } }: TodoProps): JSX.Element => {
  const { deleteTodo } = useApi();

  return (
    <div className="todo">
      <span className="todo__name">{name}</span>
      <Button
        className="todo__delete-button"
        onClick={() => deleteTodo(id)}
        variant="outlined"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};

export default Todo;
