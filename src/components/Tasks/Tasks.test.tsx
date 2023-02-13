import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { TodosStructure } from "../../data/types";
import { store } from "../../store";
import { loadTodosActionCreator } from "../../store/features/todosSlice";
import Tasks from "./Tasks";

const todos: TodosStructure = [
  { id: 1, name: "go home", isDone: false },
  { id: 2, name: "pet cats", isDone: false },
];

const AllTheProviders = ({ children }: PropsWithChildren) => {
  store.dispatch(loadTodosActionCreator(todos));
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a Tasks component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of todo tasks", () => {
      const expectedTodosLength = [
        { id: 1, name: "", isDone: false },
        { id: 2, name: "", isDone: false },
      ].length;

      render(<Tasks />, { wrapper: AllTheProviders });
      const todos = screen.getAllByRole("listitem");

      expect(todos).toHaveLength(expectedTodosLength);
    });
  });
});
