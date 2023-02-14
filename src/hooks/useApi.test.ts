import { configureStore } from "@reduxjs/toolkit";
import { TodosStructure } from "../data/types";
import {
  loadTodosActionCreator,
  todosReducer,
} from "../store/features/todos/todosSlice";

describe("Given a function useApi", () => {
  describe("When loadTodosActionCreator is dispatched with payload 'todos'", () => {
    test("Then the current state should be equal to that payload", () => {
      const store = configureStore({
        reducer: todosReducer,
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
