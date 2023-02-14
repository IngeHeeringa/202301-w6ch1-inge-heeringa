import { useState } from "react";
import useApi from "../../hooks/useApi";
import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { TextField } from "@mui/material";
import "./Form.css";

const Form = () => {
  const { createTodo } = useApi();

  const [todo, setTodo] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      name: todo,
      isDone: false,
    };

    createTodo(newTodo);
    setTodo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        className="form__input"
        onChange={handleChange}
        type="text"
        value={todo}
        id="outlined-basic"
        variant="outlined"
        placeholder="Introduce a task"
      />
      <Button
        className="form__button"
        type="submit"
        variant="contained"
        endIcon={<AddCircleOutlinedIcon />}
      >
        Add
      </Button>
    </form>
  );
};

export default Form;
