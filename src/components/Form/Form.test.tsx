import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { todosReducer } from "../../store/features/todos/todosSlice";
import Form from "./Form";

const store = configureStore({
  reducer: todosReducer,
});

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a todo name", () => {
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );
      const inputField = screen.getByRole("textbox");

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an 'Add' button to submit the form", () => {
      const buttonText = "Add";

      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );
      const addButton = screen.getByRole("button", { name: buttonText });

      expect(addButton).toBeInTheDocument();
    });
  });
});
