import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure, TodoStructure } from "../../data/types";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodosStructure,
  reducers: {
    loadTodos: (
      state: TodosStructure,
      action: PayloadAction<TodosStructure>
    ) => [...action.payload],
    deleteTask: (state: TodosStructure, action: PayloadAction<TodoStructure>) =>
      state.filter((todo) => todo.id !== action.payload.id),
  },
});

export default todosSlice;
export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
