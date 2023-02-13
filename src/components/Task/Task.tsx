import { TodoStructure } from "../../data/types";

interface TaskProps {
  todo: TodoStructure;
}

const Task = ({ todo }: TaskProps): JSX.Element => {
  return (
    <>
      <span>{todo.name}</span>
    </>
  );
};

export default Task;
