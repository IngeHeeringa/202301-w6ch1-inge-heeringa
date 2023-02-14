import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { todosReducer } from "../../store/features/todos/todosSlice";
import Todo from "./Todo";

const store = configureStore({
  reducer: todosReducer,
});
const todo = { id: 1, name: "Cook dinner", isDone: false };

const AllTheProviders = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

describe("Given a Task component", () => {
  describe("When rendered with todo task 'Cook dinner'", () => {
    test("Then it should show the todo's name 'Cook dinner'", () => {
      const expectedName = "Cook dinner";

      render(
        <Provider store={store}>
          <Todo todo={todo} />
        </Provider>
      );
      const todoName = screen.getByText(expectedName);

      expect(todoName).toBeInTheDocument();
    });

    test("Then it should show a 'Delete' button", () => {
      const buttonText = "Delete";

      render(<Todo todo={todo} />, { wrapper: AllTheProviders });
      const deleteButton = screen.getByRole("button", { name: buttonText });

      expect(deleteButton).toBeInTheDocument();
    });

    test("Then it should show a checkbox to toggle the isDone state of the todo", () => {
      render(<Todo todo={todo} />, { wrapper: AllTheProviders });
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
    });
  });
});
