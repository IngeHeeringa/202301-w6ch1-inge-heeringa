import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure } from "../../../data/types";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodosStructure,
  reducers: {
    loadTodos: (
      state: TodosStructure,
      action: PayloadAction<TodosStructure>
    ) => [...action.payload],
    deleteTodo: (state: TodosStructure, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  loadTodos: loadTodosActionCreator,
  deleteTodo: deleteTodoActionCreator,
} = todosSlice.actions;
