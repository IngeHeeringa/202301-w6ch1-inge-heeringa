import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When rendered with a todo task", () => {
    test("Then it should show the todo's name", () => {
      const todo = { id: 1, name: "Cook dinner", isDone: false };

      render(<Task todo={todo} />);
      const todoName = screen.getByText(todo.name);

      expect(todoName).toBeInTheDocument();
    });
  });
});
