import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { todosReducer } from "../../store/features/todos/todosSlice";
import Task from "./Todo";

describe("Given a Task component", () => {
  describe("When rendered with a todo task", () => {
    test("Then it should show the todo's name", () => {
      const todo = { id: 1, name: "Cook dinner", isDone: false };

      const store = configureStore({
        reducer: todosReducer,
      });

      render(
        <Provider store={store}>
          <Task todo={todo} />
        </Provider>
      );
      const todoName = screen.getByText(todo.name);

      expect(todoName).toBeInTheDocument();
    });
  });
});
