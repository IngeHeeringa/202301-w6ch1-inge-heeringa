import { configureStore } from "@reduxjs/toolkit";
import { TodosStructure } from "../data/types";
import todosSlice, {
  loadTodosActionCreator,
} from "../store/features/todosSlice";

describe("Given a function useApi", () => {
  describe("When loadTodosActionCreator is dispatched with payload 'todos'", () => {
    test("Then the current state should be equal to that payload", () => {
      const store = configureStore({
        reducer: todosSlice.reducer,
      });
      const todos: TodosStructure = [
        { id: 1, name: "go home", isDone: false },
        { id: 2, name: "pet cats", isDone: false },
      ];

      store.dispatch(loadTodosActionCreator(todos));

      expect(store.getState()).toStrictEqual(todos);
    });
  });
});
