import { useState } from "react";
import useApi from "../../hooks/useApi";

const Form = () => {
  const { createTodo } = useApi();

  const [todo, setTodo] = useState("");

  const handleChange = (event: any) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: any) => {
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
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={todo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
