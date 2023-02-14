import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { todosReducer } from "../../store/features/todos/todosSlice";
import Task from "./Todo";

const store = configureStore({
  reducer: todosReducer,
});
const todo = { id: 1, name: "Cook dinner", isDone: false };

describe("Given a Task component", () => {
  describe("When rendered with a todo task", () => {
    test("Then it should show the todo's name", () => {
      render(
        <Provider store={store}>
          <Task todo={todo} />
        </Provider>
      );
      const todoName = screen.getByText(todo.name);

      expect(todoName).toBeInTheDocument();
    });

    test("Then it should show a 'Delete' button", () => {
      const buttonText = "Delete";

      render(
        <Provider store={store}>
          <Task todo={todo} />
        </Provider>
      );
      const deleteButton = screen.getByRole("button", { name: buttonText });

      expect(deleteButton).toBeInTheDocument();
    });

    test("Then it should show a checkbox to toggle the isDone state of the todo", () => {
      render(
        <Provider store={store}>
          <Task todo={todo} />
        </Provider>
      );
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
    });
  });
});
